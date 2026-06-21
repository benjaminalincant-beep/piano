// Music theory helpers: note names, MIDI numbers, chord construction.
// MIDI convention: C4 = 60 (middle C).

export const PITCH_CLASS = {
  C: 0, "C#": 1, Db: 1, D: 2, "D#": 3, Eb: 3, E: 4, F: 5,
  "F#": 6, Gb: 6, G: 7, "G#": 8, Ab: 8, A: 9, "A#": 10, Bb: 10, B: 11,
  // enharmonic spellings sometimes produced by the curriculum
  "B#": 0, "E#": 5, Cb: 11, Fb: 4,
};

const SHARP_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

// Chord/scale qualities as semitone intervals from the root.
// Symbols use musical glyphs; "note" is a single tone (for scale exercises).
export const QUALITIES = {
  note: { intervals: [0], symbol: "" },

  // triads
  maj: { intervals: [0, 4, 7], symbol: "" },
  min: { intervals: [0, 3, 7], symbol: "m" },
  dim: { intervals: [0, 3, 6], symbol: "°" },
  aug: { intervals: [0, 4, 8], symbol: "+" },
  sus2: { intervals: [0, 2, 7], symbol: "sus2" },
  sus4: { intervals: [0, 5, 7], symbol: "sus4" },

  // sixths
  6: { intervals: [0, 4, 7, 9], symbol: "6" },
  m6: { intervals: [0, 3, 7, 9], symbol: "m6" },
  69: { intervals: [0, 4, 9, 14], symbol: "6/9" },

  // sevenths (the four families + relatives)
  maj7: { intervals: [0, 4, 7, 11], symbol: "maj7" },
  m7: { intervals: [0, 3, 7, 10], symbol: "m7" },
  7: { intervals: [0, 4, 7, 10], symbol: "7" },
  m7b5: { intervals: [0, 3, 6, 10], symbol: "m7♭5" },
  dim7: { intervals: [0, 3, 6, 9], symbol: "°7" },
  mMaj7: { intervals: [0, 3, 7, 11], symbol: "m(maj7)" },
  "7sus4": { intervals: [0, 5, 7, 10], symbol: "7sus4" },

  // ninths and extensions
  maj9: { intervals: [0, 4, 7, 11, 14], symbol: "maj9" },
  m9: { intervals: [0, 3, 7, 10, 14], symbol: "m9" },
  9: { intervals: [0, 4, 7, 10, 14], symbol: "9" },
  add9: { intervals: [0, 4, 7, 14], symbol: "add9" },
  m11: { intervals: [0, 3, 10, 14, 17], symbol: "m11" },
  13: { intervals: [0, 4, 10, 14, 21], symbol: "13" },
  "9sus4": { intervals: [0, 5, 10, 14], symbol: "9sus4" },

  // altered dominants
  "7b9": { intervals: [0, 4, 10, 13], symbol: "7♭9" },
  "7#9": { intervals: [0, 4, 10, 15], symbol: "7♯9" },
  "7#11": { intervals: [0, 4, 10, 14, 18], symbol: "7♯11" },
  "7b13": { intervals: [0, 4, 10, 20], symbol: "7♭13" },
  "7#5": { intervals: [0, 4, 8, 10], symbol: "7♯5" },
  "7alt": { intervals: [0, 4, 10, 15, 20], symbol: "7alt" },

  // shell voicings (root, 3rd, 7th)
  "shell-maj7": { intervals: [0, 4, 11], symbol: "maj7" },
  "shell-m7": { intervals: [0, 3, 10], symbol: "m7" },
  "shell-7": { intervals: [0, 4, 10], symbol: "7" },

  // rootless A voicings (left-hand comping)
  "rootless-m9": { intervals: [3, 7, 10, 14], symbol: "m9" },
  "rootless-13": { intervals: [10, 14, 16, 21], symbol: "13" },
  "rootless-maj9": { intervals: [4, 7, 11, 14], symbol: "maj9" },
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
  return SHARP_NAMES[midi % 12] + (Math.floor(midi / 12) - 1);
}

// Is this MIDI note a black key?
export function isBlackKey(midi) {
  return [1, 3, 6, 8, 10].includes(midi % 12);
}

export function midiToFreq(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}
