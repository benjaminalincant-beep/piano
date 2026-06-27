// MIDI file importer — parses a .mid file dropped by the user and converts it
// into the game's level format so it can be played in Survival mode.
// Uses @tonejs/midi from esm.sh (no install needed).

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
