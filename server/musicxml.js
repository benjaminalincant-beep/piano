import { XMLParser } from "fast-xml-parser";

const STEPS = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
const parser = new XMLParser({
  preserveOrder: true,
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  parseTagValue: true,
  trimValues: true,
  processEntities: false,
});

const number = (value, fallback = 0) => Number.isFinite(Number(value)) ? Number(value) : fallback;
const nodes = (tree, name) => (Array.isArray(tree) ? tree : []).filter((node) => node?.[name]).map((node) => node[name]);
const node = (tree, name) => nodes(tree, name)[0];
const has = (tree, name) => nodes(tree, name).length > 0;
const text = (tree, name, fallback = undefined) => {
  const content = node(tree, name);
  const value = content?.find((entry) => Object.hasOwn(entry, "#text"))?.["#text"];
  return value ?? fallback;
};
const attr = (entry, name, fallback = undefined) => entry?.[":@"]?.[`@_${name}`] ?? fallback;

function pitchToMidi(noteTree) {
  const pitch = node(noteTree, "pitch");
  const step = String(text(pitch, "step", "")).toUpperCase();
  const octave = number(text(pitch, "octave"), NaN);
  const alter = number(text(pitch, "alter"), 0);
  if (!(step in STEPS) || !Number.isFinite(octave)) return null;
  const midi = 12 * (octave + 1) + STEPS[step] + alter;
  return midi >= 0 && midi <= 127 ? midi : null;
}

function tempoFromDirection(directionTree) {
  for (const soundEntry of (directionTree || []).filter((entry) => entry.sound)) {
    const tempo = number(attr(soundEntry, "tempo"), 0);
    if (tempo > 0) return tempo;
  }
  const directionType = node(directionTree, "direction-type");
  const metronome = node(directionType, "metronome");
  return number(text(metronome, "per-minute"), 0);
}

function analyze(groups, stats) {
  const warnings = [];
  if (!stats.hasTime) warnings.push({ code: "missing-time", message: "Mesure non détectée : 4/4 appliqué.", severity: "warning" });
  if (!stats.hasClef) warnings.push({ code: "missing-clef", message: "Clé non détectée dans la partition.", severity: "warning" });
  if (stats.invalidPitches) warnings.push({ code: "invalid-pitch", message: `${stats.invalidPitches} hauteur(s) ignorée(s).`, severity: "error" });
  if (stats.parts > 2) warnings.push({ code: "many-parts", message: `${stats.parts} parties détectées : vérifie l’instrument à jouer.`, severity: "warning" });
  if (groups.some((group) => group.midis.length > 10)) warnings.push({ code: "dense-chord", message: "Accord de plus de 10 notes détecté.", severity: "warning" });
  if (groups.length < 4) warnings.push({ code: "too-few-notes", message: "Très peu de notes détectées.", severity: "error" });
  if (stats.tempoSource === "fallback") warnings.push({ code: "missing-tempo", message: "Tempo non détecté : 90 BPM appliqué.", severity: "warning" });

  const errorCount = warnings.filter((warning) => warning.severity === "error").length;
  const warningCount = warnings.length - errorCount;
  const confidence = Math.max(0, Math.min(1, 0.98 - errorCount * 0.28 - warningCount * 0.06));
  return {
    confidence,
    needsReview: confidence < 0.86 || errorCount > 0,
    warnings,
    stats: { ...stats, events: groups.length },
  };
}

export function musicXmlToLevel(xml, name = "Partition importée") {
  if (typeof xml !== "string" || xml.length > 25 * 1024 * 1024) {
    throw new Error("Le fichier MusicXML est vide ou trop volumineux.");
  }
  const document = parser.parse(xml);
  const scoreTree = node(document, "score-partwise");
  if (!scoreTree) throw new Error("Le fichier MusicXML ne contient pas de score-partwise.");

  const partTrees = nodes(scoreTree, "part");
  const groupsByBeat = new Map();
  const voices = new Set();
  const stats = {
    parts: partTrees.length, measures: 0, notes: 0, rests: 0, voices: 0,
    invalidPitches: 0, hasTime: false, hasClef: false, tempoSource: "fallback",
  };
  let tempo = 90;

  for (const partTree of partTrees) {
    let divisions = 1;
    let measureStart = 0;
    const measureTrees = nodes(partTree, "measure");
    stats.measures = Math.max(stats.measures, measureTrees.length);

    for (const measureTree of measureTrees) {
      let cursor = measureStart;
      let previousOnset = cursor;
      let furthest = cursor;

      for (const entry of measureTree) {
        if (entry.attributes) {
          divisions = Math.max(1, number(text(entry.attributes, "divisions"), divisions));
          stats.hasTime ||= has(entry.attributes, "time");
          stats.hasClef ||= has(entry.attributes, "clef");
          continue;
        }
        if (entry.direction && stats.tempoSource === "fallback") {
          const detectedTempo = tempoFromDirection(entry.direction);
          if (detectedTempo > 0) {
            tempo = detectedTempo;
            stats.tempoSource = "score";
          }
          continue;
        }
        if (entry.backup) {
          cursor = Math.max(measureStart, cursor - number(text(entry.backup, "duration"), 0) / divisions);
          continue;
        }
        if (entry.forward) {
          cursor += number(text(entry.forward, "duration"), 0) / divisions;
          furthest = Math.max(furthest, cursor);
          continue;
        }
        if (!entry.note) continue;

        const noteTree = entry.note;
        const duration = Math.max(0, number(text(noteTree, "duration"), 0) / divisions);
        const isChord = has(noteTree, "chord");
        const onset = isChord ? previousOnset : cursor;
        if (!isChord) previousOnset = onset;
        const voice = text(noteTree, "voice");
        if (voice != null) voices.add(String(voice));

        if (has(noteTree, "rest")) {
          stats.rests += 1;
        } else if (!has(noteTree, "grace")) {
          const midi = pitchToMidi(noteTree);
          if (midi == null) stats.invalidPitches += 1;
          else {
            const key = onset.toFixed(6);
            const group = groupsByBeat.get(key) || { beat: onset, duration: 0, midis: [] };
            group.duration = Math.max(group.duration, duration || 0.25);
            if (!group.midis.includes(midi)) group.midis.push(midi);
            groupsByBeat.set(key, group);
            stats.notes += 1;
          }
        }
        if (!isChord) cursor += duration;
        furthest = Math.max(furthest, onset + duration, cursor);
      }
      measureStart = furthest;
    }
  }

  const events = [...groupsByBeat.values()]
    .sort((a, b) => a.beat - b.beat)
    .map((event) => ({ ...event, midis: event.midis.sort((a, b) => a - b) }));
  if (!events.length) throw new Error("Aucune note exploitable n’a été trouvée.");

  const firstBeat = events[0].beat;
  for (const event of events) event.beat = Number((event.beat - firstBeat).toFixed(6));
  stats.voices = voices.size;
  const report = analyze(events, stats);
  return {
    level: {
      name,
      bpm: Math.min(240, Math.max(30, Math.round(tempo))),
      lives: 5,
      lookahead: 3000,
      events,
    },
    report,
  };
}
