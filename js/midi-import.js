// MIDI file importer + Sheet Music OMR (via Claude Vision).
//
// parseMidiFile(file)        — parse a .mid binary
// parseSheetMusic(file, key) — send a PDF/image to Claude Vision, get notes back

const TONEJS_MIDI = "https://esm.sh/@tonejs/midi";
const NOTE_NAMES  = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

let _Midi = null;
async function getMidi() {
  if (_Midi) return _Midi;
  const mod = await import(/* @vite-ignore */ TONEJS_MIDI);
  _Midi = mod.Midi ?? mod.default?.Midi ?? mod.default;
  return _Midi;
}

/**
 * Parse a File object (.mid/.midi) and return a level descriptor ready to
 * pass to Game.load().
 *
 * Returned level shape:
 *   { id, title, bpm, lives, lookahead, events: [{ beat, midis, name }] }
 *
 * `ev.midis` is a raw MIDI number array — game.js detects this and skips
 * the chord-quality builder.
 */
export async function parseMidiFile(file) {
  const Midi   = await getMidi();
  const buf    = await file.arrayBuffer();
  const parsed = new Midi(new Uint8Array(buf));

  const bpm   = parsed.header?.tempos?.[0]?.bpm ?? 120;
  const title = (parsed.name && parsed.name.trim())
    || file.name.replace(/\.[^.]+$/, "").replace(/[_-]/g, " ");

  // Collect notes from all tracks, converting seconds → beats
  const secPerBeat = 60 / bpm;
  const allNotes   = [];
  for (const track of parsed.tracks) {
    for (const n of track.notes) {
      if (n.velocity < 0.04 || n.duration < 0.025) continue; // skip ghost/ornament
      allNotes.push({ midi: n.midi, tBeats: n.time / secPerBeat, vel: n.velocity });
    }
  }

  if (!allNotes.length) throw new Error("Aucune note trouvée dans ce fichier MIDI.");

  allNotes.sort((a, b) => a.tBeats - b.tBeats);

  // Group notes within 0.07 beats of each other → one chord event
  const WINDOW = 0.07;
  const groups = [];
  for (const n of allNotes) {
    const last = groups[groups.length - 1];
    if (last && Math.abs(n.tBeats - last.beat) <= WINDOW) {
      last.midis.push(n.midi);
    } else {
      groups.push({ beat: n.tBeats, midis: [n.midi] });
    }
  }

  // De-duplicate midis within a group, keep pitch range manageable
  for (const g of groups) {
    g.midis = [...new Set(g.midis)];
    // Limit extreme range: collapse notes beyond ±24 semitones from median
    if (g.midis.length > 6) {
      const med = g.midis[Math.floor(g.midis.length / 2)];
      g.midis = g.midis.filter(m => Math.abs(m - med) <= 24);
    }
  }

  // Normalise beat offsets to start at 0
  const t0 = groups[0].beat;
  const events = groups.map(g => ({
    beat : Math.round((g.beat - t0) * 1000) / 1000,
    midis: g.midis,
    name : g.midis.map(m => NOTE_NAMES[m % 12]).join("·"),
  }));

  // Estimate difficulty from note density and chord size
  const avgChordSize = events.reduce((s, e) => s + e.midis.length, 0) / events.length;
  const lives = avgChordSize > 3 ? 8 : 5;

  return {
    id        : `midi-${Date.now()}`,
    title,
    bpm,
    lives,
    lookahead : 4200,
    events,
    _isMidi   : true,
    _noteCount: allNotes.length,
    _chordCount: events.length,
  };
}

// ---------------------------------------------------------------------------
// Sheet music OMR via Claude Vision
// Accepts PDF, PNG, JPG, WEBP — returns the same level shape as parseMidiFile.
// ---------------------------------------------------------------------------

const CLAUDE_API  = "https://api.anthropic.com/v1/messages";
const CLAUDE_MODEL= "claude-opus-4-8";  // best vision model for sheet music

const OMR_PROMPT = `Tu es un expert en lecture de partitions musicales.
Analyse cette partition et extrait toutes les notes dans l'ordre de lecture.

Réponds UNIQUEMENT avec un objet JSON valide (pas de markdown, pas de texte autour), avec cette structure exacte :
{
  "title": "<titre du morceau si visible, sinon 'Partition'>",
  "bpm": <tempo en BPM, 120 si non indiqué>,
  "events": [
    { "beat": <position en temps, commencer à 0, incrémenter par durée>, "midis": [<numéros MIDI>], "name": "<nom accord/note>" },
    ...
  ]
}

Règles :
- Les numéros MIDI : C4=60, D4=62, E4=64, F4=65, G4=67, A4=69, B4=71. Octave suivante +12.
- "beat" est la position temporelle cumulée. Une noire = 1 beat, blanche = 2, croche = 0.5, ronde = 4.
- Pour un accord, mets toutes les notes simultanées dans le même "midis".
- Pour une mélodie, chaque note est un event séparé.
- Inclus la main droite ET la main gauche si présentes.
- Maximum 200 events (prends les premiers si la partition est longue).`;

export async function parseSheetMusic(file, apiKey) {
  const mediaType = file.type || guessMediaType(file.name);
  if (!mediaType) throw new Error("Format non supporté. Utilise PDF, PNG ou JPG.");

  // Read file as base64
  const base64 = await fileToBase64(file);

  // Build message content — PDF uses "document" type, images use "image"
  const isPdf = mediaType === "application/pdf";
  const contentBlock = isPdf
    ? { type: "document", source: { type: "base64", media_type: "application/pdf", data: base64 } }
    : { type: "image",    source: { type: "base64", media_type: mediaType, data: base64 } };

  const res = await fetch(CLAUDE_API, {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: CLAUDE_MODEL,
      max_tokens: 4096,
      messages: [{
        role: "user",
        content: [contentBlock, { type: "text", text: OMR_PROMPT }],
      }],
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || `Erreur API ${res.status}`);
  }

  const data = await res.json();
  const raw  = data.content?.[0]?.text ?? "";

  // Extract JSON from the response (Claude sometimes adds a tiny preamble)
  const jsonStr = raw.match(/\{[\s\S]*\}/)?.[0];
  if (!jsonStr) throw new Error("Claude n'a pas retourné de JSON valide.");

  let parsed;
  try { parsed = JSON.parse(jsonStr); }
  catch (e) { throw new Error("Impossible de lire la réponse de Claude : " + e.message); }

  if (!parsed.events?.length) throw new Error("Aucune note extraite de la partition.");

  // Ensure midis arrays and normalise beats
  const events = parsed.events.map(ev => ({
    beat : Number(ev.beat) || 0,
    midis: (ev.midis || []).map(Number).filter(m => m >= 21 && m <= 108),
    name : ev.name || (ev.midis || []).map(m => NOTE_NAMES[m % 12]).join("·"),
  })).filter(ev => ev.midis.length > 0);

  if (!events.length) throw new Error("Aucune note MIDI valide trouvée.");

  const avgChord = events.reduce((s, e) => s + e.midis.length, 0) / events.length;

  return {
    id         : `omr-${Date.now()}`,
    title      : parsed.title || file.name.replace(/\.[^.]+$/, ""),
    bpm        : Number(parsed.bpm) || 120,
    lives      : avgChord > 3 ? 8 : 5,
    lookahead  : 4200,
    events,
    _isMidi    : true,
    _chordCount: events.length,
    _noteCount : events.reduce((s, e) => s + e.midis.length, 0),
    _omr       : true,
  };
}

function guessMediaType(name) {
  const ext = name.split(".").pop().toLowerCase();
  return { pdf: "application/pdf", png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", webp: "image/webp" }[ext] || null;
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload  = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
