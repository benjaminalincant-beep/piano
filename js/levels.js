// Curriculum: worlds -> levels. Each level is a sequence of timed chord events.
// The engine expands `chord:[root, quality, octave?]` into MIDI notes and turns
// `beat` into milliseconds using the level's bpm. Tempos are deliberately gentle
// so you can read the upcoming chord and place your hands before it lands.

export const WORLDS = [
  {
    id: 1,
    name: "Chord shapes",
    blurb: "Learn the three core jazz chord colors: major 7, minor 7, dominant 7.",
    levels: [
      {
        id: "w1l1",
        name: "Major 7 shapes",
        blurb: "Bright and warm. Play each maj7 chord as it lands.",
        key: "C", bpm: 54, lives: 5,
        events: [
          { beat: 0, chord: ["C", "maj7"] },
          { beat: 4, chord: ["F", "maj7"] },
          { beat: 8, chord: ["G", "maj7"] },
          { beat: 12, chord: ["C", "maj7"] },
        ],
      },
      {
        id: "w1l2",
        name: "Minor 7 shapes",
        blurb: "Mellow and smooth — the most common chord in jazz.",
        key: "C", bpm: 54, lives: 5,
        events: [
          { beat: 0, chord: ["D", "m7"] },
          { beat: 4, chord: ["A", "m7"] },
          { beat: 8, chord: ["E", "m7"] },
          { beat: 12, chord: ["D", "m7"] },
        ],
      },
      {
        id: "w1l3",
        name: "Dominant 7 shapes",
        blurb: "Tense, wanting to resolve — the engine of jazz harmony.",
        key: "C", bpm: 58, lives: 5,
        events: [
          { beat: 0, chord: ["G", "7"] },
          { beat: 4, chord: ["C", "7"] },
          { beat: 8, chord: ["D", "7"] },
          { beat: 12, chord: ["G", "7"] },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "The ii–V–I",
    blurb: "The most important progression in jazz, stitched from your three chords.",
    levels: [
      {
        id: "w2l1",
        name: "ii–V–I in C",
        blurb: "Dm7 → G7 → Cmaj7. The sound of coming home.",
        key: "C", bpm: 60, lives: 4,
        events: [
          { beat: 0, chord: ["D", "m7"] },
          { beat: 2, chord: ["G", "7"] },
          { beat: 4, chord: ["C", "maj7"] },
          { beat: 8, chord: ["D", "m7"] },
          { beat: 10, chord: ["G", "7"] },
          { beat: 12, chord: ["C", "maj7"] },
        ],
      },
      {
        id: "w2l2",
        name: "ii–V–I in F",
        blurb: "Gm7 → C7 → Fmaj7. Same shape, new key.",
        key: "F", bpm: 60, lives: 4,
        events: [
          { beat: 0, chord: ["G", "m7"] },
          { beat: 2, chord: ["C", "7"] },
          { beat: 4, chord: ["F", "maj7"] },
          { beat: 8, chord: ["G", "m7"] },
          { beat: 10, chord: ["C", "7"] },
          { beat: 12, chord: ["F", "maj7"] },
        ],
      },
      {
        id: "w2l3",
        name: "Shell voicings",
        blurb: "Just root, 3rd and 7th — the lean pro sound.",
        key: "C", bpm: 62, lives: 4,
        events: [
          { beat: 0, chord: ["D", "shell-m7"] },
          { beat: 2, chord: ["G", "shell-7"] },
          { beat: 4, chord: ["C", "shell-maj7"] },
          { beat: 8, chord: ["A", "shell-m7"] },
          { beat: 10, chord: ["D", "shell-7"] },
          { beat: 12, chord: ["G", "shell-maj7"] },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Real changes",
    blurb: "Put it together: the loops and cadences that real jazz tunes are built from.",
    levels: [
      {
        id: "w3l1",
        name: "The turnaround",
        blurb: "Cmaj7 → A7 → Dm7 → G7. The loop that ends a million tunes.",
        key: "C", bpm: 62, lives: 4,
        events: [
          { beat: 0, chord: ["C", "maj7"] },
          { beat: 2, chord: ["A", "7"] },
          { beat: 4, chord: ["D", "m7"] },
          { beat: 6, chord: ["G", "7"] },
          { beat: 8, chord: ["C", "maj7"] },
          { beat: 10, chord: ["A", "7"] },
          { beat: 12, chord: ["D", "m7"] },
          { beat: 14, chord: ["G", "7"] },
        ],
      },
      {
        id: "w3l2",
        name: "Minor ii–V–i",
        blurb: "Dm7♭5 → G7 → Cm7. The dark, cinematic cadence.",
        key: "Cm", bpm: 60, lives: 4,
        events: [
          { beat: 0, chord: ["D", "m7b5"] },
          { beat: 2, chord: ["G", "7"] },
          { beat: 4, chord: ["C", "m7"] },
          { beat: 8, chord: ["D", "m7b5"] },
          { beat: 10, chord: ["G", "7"] },
          { beat: 12, chord: ["C", "m7"] },
        ],
      },
      {
        id: "w3l3",
        name: "Jazz blues in C",
        blurb: "The first eight bars of a blues in C — your first real tune.",
        key: "C", bpm: 64, lives: 4,
        events: [
          { beat: 0, chord: ["C", "7"] },
          { beat: 2, chord: ["F", "7"] },
          { beat: 4, chord: ["C", "7"] },
          { beat: 6, chord: ["C", "7"] },
          { beat: 8, chord: ["F", "7"] },
          { beat: 10, chord: ["F", "7"] },
          { beat: 12, chord: ["C", "7"] },
          { beat: 14, chord: ["A", "7"] },
        ],
      },
    ],
  },
];

// Flat lookup of every level by id, plus its world reference.
export const LEVELS = {};
for (const world of WORLDS) {
  for (const level of world.levels) {
    LEVELS[level.id] = { ...level, worldId: world.id, worldName: world.name };
  }
}
