// Music theory helpers: note names, MIDI numbers, chord construction.
// MIDI convention: C4 = 60 (middle C).

export const PITCH_CLASS = {
  C: 0, "C#": 1, Db: 1, D: 2, "D#": 3, Eb: 3, E: 4, F: 5,
  "F#": 6, Gb: 6, G: 7, "G#": 8, Ab: 8, A: 9, "A#": 10, Bb: 10, B: 11,
};

const SHARP_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

// Chord qualities as semitone intervals from the root.
export const QUALITIES = {
  maj7: { intervals: [0, 4, 7, 11], symbol: "maj7" },
  m7: { intervals: [0, 3, 7, 10], symbol: "m7" },
  7: { intervals: [0, 4, 7, 10], symbol: "7" },
  m7b5: { intervals: [0, 3, 6, 10], symbol: "m7♭5" },
  dim7: { intervals: [0, 3, 6, 9], symbol: "°7" },
  maj: { intervals: [0, 4, 7], symbol: "" },
  min: { intervals: [0, 3, 7], symbol: "m" },
  // Jazz "shell" voicing: root, 3rd, 7th — the harmonic skeleton.
  "shell-maj7": { intervals: [0, 4, 11], symbol: "maj7" },
  "shell-m7": { intervals: [0, 3, 10], symbol: "m7" },
  "shell-7": { intervals: [0, 4, 10], symbol: "7" },
};

// Build the MIDI note numbers for a chord at a given octave (root octave).
export function chord(root, quality, octave = 4) {
  const pc = PITCH_CLASS[root];
  if (pc === undefined) throw new Error(`Unknown root: ${root}`);
  const q = QUALITIES[quality];
  if (!q) throw new Error(`Unknown quality: ${quality}`);
  const base = 12 * (octave + 1) + pc;
  return q.intervals.map((i) => base + i);
}

// Human-readable chord symbol, e.g. "Dm7", "G7", "Cmaj7".
export function chordSymbol(root, quality) {
  const q = QUALITIES[quality];
  return root + (q ? q.symbol : quality);
}

// MIDI number -> note name with octave, e.g. 60 -> "C4".
export function noteName(midi) {
  const name = SHARP_NAMES[midi % 12];
  const octave = Math.floor(midi / 12) - 1;
  return name + octave;
}

// Is this MIDI note a black key?
export function isBlackKey(midi) {
  return [1, 3, 6, 8, 10].includes(midi % 12);
}

export function midiToFreq(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}
