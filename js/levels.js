// Curriculum: worlds -> levels. Each level is a sequence of timed chord events.
// The game engine expands `chord:[root, quality, octave?]` into MIDI notes and
// converts `beat` into milliseconds using the level's bpm.

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
        key: "C",
        bpm: 60,
        lives: 5,
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
        blurb: "Mellow and smooth. The most common jazz chord.",
        key: "C",
        bpm: 60,
        lives: 5,
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
        blurb: "Tense, wants to resolve. The engine of jazz harmony.",
        key: "C",
        bpm: 64,
        lives: 5,
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
        blurb: "Dm7 → G7 → Cmaj7. The sound of home.",
        key: "C",
        bpm: 72,
        lives: 4,
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
        key: "F",
        bpm: 72,
        lives: 4,
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
        blurb: "Just root, 3rd and 7th — the lean pro sound for both hands.",
        key: "C",
        bpm: 76,
        lives: 4,
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
];

// Flat lookup of every level by id, plus its world reference.
export const LEVELS = {};
for (const world of WORLDS) {
  for (const level of world.levels) {
    LEVELS[level.id] = { ...level, worldId: world.id, worldName: world.name };
  }
}
