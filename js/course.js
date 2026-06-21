// Auto-generated jazz piano curriculum: units -> lessons -> practice levels.
// Each lesson has theory + a playable falling-note practice level.
export const UNITS = [
  {
    "id": "u1",
    "num": 1,
    "name": "Foundations",
    "blurb": "Get oriented: the keyboard, the major scale, chord tones and steady time.",
    "lessons": [
      {
        "id": "u1l1",
        "title": "The keyboard & octaves",
        "goal": "Find C anywhere on the piano and play your first five notes C D E F G.",
        "theory": [
          "Look at the keyboard and you'll see the black keys come in groups of two and three, and that pattern repeats all the way up and down. The white key just to the left of every group of two black keys is a C. Once you can spot that two-black-key group, you can find C anywhere, instantly.",
          "The same twelve notes repeat over and over, and each repeat is called an octave. To tell them apart we give each one a number. The C nearest the middle of the piano is C4, also called middle C. The C an octave up is C5, the one down is C3. Higher numbers mean higher pitch.",
          "We name the white keys with the first seven letters of the alphabet: C D E F G A B, then back to C. That's it. Everything in jazz, no matter how fancy, is built from these same note names, so learning to find them fast is the first real skill."
        ],
        "keyPoints": [
          "Two black keys together — the white key on their left is C.",
          "Middle C is C4; octave numbers rise as pitch rises.",
          "White keys spell C D E F G A B, then repeat."
        ],
        "example": {
          "label": "Middle C, then up to G",
          "chords": [
            {
              "root": "C",
              "quality": "note",
              "octave": 4
            },
            {
              "root": "E",
              "quality": "note",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "note",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 56,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 5
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "D",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 16,
              "chord": {
                "root": "E",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 20,
              "chord": {
                "root": "F",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 24,
              "chord": {
                "root": "G",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 28,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u1l2",
        "title": "The C major scale",
        "goal": "Play the C major scale up to the next C and back down, all on white keys.",
        "theory": [
          "Start on C4 and play every white key in a row until you reach C5: C D E F G A B C. That's the C major scale. It uses no black keys at all, which is why C major is the friendliest key to start in. This scale is home base — almost everything you'll learn grows out of it.",
          "A scale is really a pattern of distances. From one key to the very next key, counting black keys too, is a half step; two half steps make a whole step. The major scale follows the exact pattern whole, whole, half, whole, whole, whole, half. Those two half steps fall between E–F and B–C, the two spots where there's no black key between the white keys.",
          "Don't just play it — listen to it. That do-re-mi-fa-sol-la-ti-do sound is already wired into your ear. When you can hear the scale climbing and feel where the half steps land, you've got the foundation every melody and chord is built on."
        ],
        "keyPoints": [
          "C major is all white keys: C D E F G A B C.",
          "Major scale pattern: whole-whole-half-whole-whole-whole-half.",
          "The half steps live at E–F and B–C."
        ],
        "example": {
          "label": "First four steps of the scale",
          "chords": [
            {
              "root": "C",
              "quality": "note",
              "octave": 4
            },
            {
              "root": "D",
              "quality": "note",
              "octave": 4
            },
            {
              "root": "E",
              "quality": "note",
              "octave": 4
            },
            {
              "root": "F",
              "quality": "note",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 60,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "D",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "E",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "F",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "G",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "A",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "B",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 5
              }
            },
            {
              "beat": 16,
              "chord": {
                "root": "B",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 18,
              "chord": {
                "root": "A",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 20,
              "chord": {
                "root": "G",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 22,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u1l3",
        "title": "A scale in a new key (G major)",
        "goal": "Play the G major scale and meet its single sharp, F#.",
        "theory": [
          "Now move home base up to G. Play the major scale starting on G: G A B C D E F# G. It feels almost the same as C major, with one difference — instead of plain F, you play F#, the black key just to the right of F. That single sharp is what makes it G major rather than something else.",
          "Why F#? Because the major scale pattern never changes: whole, whole, half, whole, whole, whole, half. To keep that exact spacing starting from G, the seventh note has to be raised a half step. The pattern is the boss; the sharp is just what's required to obey it. That's the whole idea of keys — the same shape slid to a new starting note.",
          "This is huge: learn one scale shape and you've secretly learned all twelve. Each key just needs its own set of sharps or flats to keep the pattern intact, and G major's calling card is exactly one sharp, F#."
        ],
        "keyPoints": [
          "G major: G A B C D E F# G — same pattern, new home.",
          "F# is the one black key; it's the raised 7th note.",
          "Keys are one scale shape moved to a different starting note."
        ],
        "example": {
          "label": "Climbing to the F# and home",
          "chords": [
            {
              "root": "E",
              "quality": "note",
              "octave": 4
            },
            {
              "root": "F#",
              "quality": "note",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "note",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 60,
          "lives": 5,
          "key": "G",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "G",
                "quality": "note",
                "octave": 3
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "A",
                "quality": "note",
                "octave": 3
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "B",
                "quality": "note",
                "octave": 3
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "D",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "E",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "F#",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "G",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 16,
              "chord": {
                "root": "F#",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 18,
              "chord": {
                "root": "E",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 20,
              "chord": {
                "root": "D",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 22,
              "chord": {
                "root": "G",
                "quality": "note",
                "octave": 3
              }
            }
          ]
        }
      },
      {
        "id": "u1l4",
        "title": "Chord tones (arpeggios)",
        "goal": "Spell three chords one note at a time by stacking thirds: C E G, F A C, G B D.",
        "theory": [
          "A chord is just several notes sounding together — but where do they come from? You build one by stacking thirds: start on a note, skip the next letter, land on the one after, then skip again. From C you skip D and land on E, skip F and land on G, giving C E G. Play them one at a time, climbing and back down, and you're playing an arpeggio — a chord spelled out in single notes.",
          "Do the same from F (skip G, skip A): F A C. And from G (skip A, skip B): G B D. Each one is a triad, the three-note core of a chord. Hearing the notes one by one trains your ear and your hand to know what's inside the chord before you ever grab it whole.",
          "These three — the C, F and G chords — are the home, away and tension chords of C major. Get comfortable arpeggiating them and you're already hearing the skeleton of countless songs. Later we'll stack one more third on top to reach the rich 7th chords jazz lives on."
        ],
        "keyPoints": [
          "Stack thirds: skip a letter each time (C-E-G).",
          "An arpeggio is a chord played one note at a time.",
          "C, F and G triads are the backbone of the key."
        ],
        "example": {
          "label": "The C triad, arpeggiated",
          "chords": [
            {
              "root": "C",
              "quality": "note",
              "octave": 4
            },
            {
              "root": "E",
              "quality": "note",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "note",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 58,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "E",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "G",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "E",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "F",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "A",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 5
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "A",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 16,
              "chord": {
                "root": "G",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 18,
              "chord": {
                "root": "B",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 20,
              "chord": {
                "root": "D",
                "quality": "note",
                "octave": 5
              }
            },
            {
              "beat": 22,
              "chord": {
                "root": "G",
                "quality": "note",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u1l5",
        "title": "Playing in time",
        "goal": "Keep a steady pulse with a simple C-major motif in even quarter notes.",
        "theory": [
          "In jazz, time is everything. The notes can be simple, but if your pulse is steady and confident, it already sounds like music. This lesson keeps the notes easy on purpose — one note per beat, a tidy quarter-note groove — so you can pour all your attention into landing each note exactly on the beat.",
          "Feel the count: one, two, three, four, one, two, three, four. Try tapping your foot or counting out loud while you play. The goal isn't speed, it's evenness — every note arriving right on time, none rushed, none dragging. A metronome or the game's pulse is your best friend here.",
          "The motif moves through notes you already know from C major, so your ears are free to focus on the feel rather than hunting for keys. Lock in with the beat, breathe, and let the steady pulse carry you. This sense of time is the floor everything else in jazz stands on."
        ],
        "keyPoints": [
          "Steady time beats fancy notes — pulse first.",
          "Count 1-2-3-4 and place each note right on the beat.",
          "Aim for evenness, not speed; don't rush or drag."
        ],
        "example": {
          "label": "A four-beat motif",
          "chords": [
            {
              "root": "C",
              "quality": "note",
              "octave": 4
            },
            {
              "root": "E",
              "quality": "note",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "note",
              "octave": 4
            },
            {
              "root": "E",
              "quality": "note",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 64,
          "lives": 4,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 1,
              "chord": {
                "root": "E",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "G",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 3,
              "chord": {
                "root": "E",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 5,
              "chord": {
                "root": "D",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "E",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 7,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "G",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 9,
              "chord": {
                "root": "E",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "D",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 11,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 4
              }
            }
          ]
        }
      }
    ]
  },
  {
    "id": "u2",
    "num": 2,
    "name": "Triads",
    "blurb": "Three-note chords: major, minor, diminished, augmented, sus, and the seven chords of the key.",
    "lessons": [
      {
        "id": "u2l1",
        "title": "Major triads",
        "goal": "Build and play major triads (C, F, G) and hear their bright, stable sound.",
        "theory": [
          "A triad is the simplest full chord in music: just three notes. A major triad is built by stacking the 1st, 3rd, and 5th notes of the major scale. In C that's C-E-G. Those numbers are why players say a triad is built '1-3-5'.",
          "The distances between the notes give a major chord its bright, open, happy sound. From the root up to the 3rd is a 'major third' (four half-steps), and from the 3rd up to the 5th is a 'minor third' (three half-steps). That order, big gap then small gap, is the signature of every major triad.",
          "Major triads are your home base. C, F, and G major are the three main chords in the key of C, so getting these under your fingers unlocks a huge amount of music right away. Play them as solid blocks, all three notes sounding at once."
        ],
        "keyPoints": [
          "Major triad = 1st, 3rd, and 5th of the major scale (1-3-5).",
          "Interval order is a major third on the bottom, a minor third on top.",
          "Bright, stable, 'happy' sound, the harmonic home base.",
          "C, F, and G are the three big major chords in the key of C."
        ],
        "example": {
          "label": "C, F, G major triads",
          "chords": [
            {
              "root": "C",
              "quality": "maj",
              "octave": 4
            },
            {
              "root": "F",
              "quality": "maj",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "maj",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 56,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "maj",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "F",
                "quality": "maj",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "G",
                "quality": "maj",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "C",
                "quality": "maj",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "F",
                "quality": "maj",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "C",
                "quality": "maj",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "G",
                "quality": "maj",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "C",
                "quality": "maj",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u2l2",
        "title": "Minor triads",
        "goal": "Build and play minor triads (Dm, Em, Am) and hear how a lowered 3rd darkens the chord.",
        "theory": [
          "A minor triad is built almost exactly like a major triad, 1st, 3rd, and 5th, but the 3rd is lowered by one half-step. In D that turns D-F#-A (major) into D-F-A (minor). That single note moving down one half-step is the whole difference between bright and dark.",
          "The intervals flip compared to a major chord. Now the bottom gap is the smaller minor third (three half-steps) and the top gap is the major third (four half-steps). Small gap then big gap is the fingerprint of every minor triad.",
          "Minor chords carry the moody, introspective color of jazz. Dm, Em, and Am are the minor chords inside the key of C, so practicing these alongside your major triads gives you both the light and the shadow of one key. Play each as a solid block and really listen for that darker middle note."
        ],
        "keyPoints": [
          "Minor triad = major triad with the 3rd lowered a half-step.",
          "Interval order flips: minor third on the bottom, major third on top.",
          "Darker, sadder, more reflective sound.",
          "Dm, Em, and Am are the minor chords in the key of C."
        ],
        "example": {
          "label": "Dm, Em, Am minor triads",
          "chords": [
            {
              "root": "D",
              "quality": "min",
              "octave": 4
            },
            {
              "root": "E",
              "quality": "min",
              "octave": 4
            },
            {
              "root": "A",
              "quality": "min",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 56,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "D",
                "quality": "min",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "E",
                "quality": "min",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "A",
                "quality": "min",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "D",
                "quality": "min",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "E",
                "quality": "min",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "A",
                "quality": "min",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "E",
                "quality": "min",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "D",
                "quality": "min",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u2l3",
        "title": "Diminished & augmented",
        "goal": "Hear the two unstable triads, diminished (tense, shrinking) and augmented (dreamy, stretching), and feel them resolve home.",
        "theory": [
          "Major and minor triads feel settled. The other two triads do not, and that tension is exactly what makes them useful. A diminished triad stacks two minor thirds: 1, lowered 3rd, lowered 5th. B-D-F is the diminished chord living inside the key of C. It sounds pinched and anxious, like it's collapsing inward and begging to resolve.",
          "An augmented triad does the opposite. It stacks two major thirds: 1, 3rd, raised 5th. C-E-G# is C augmented. Because every gap is the same size, it sounds suspended and direction-less, dreamy, eerie, and floating. Neither of these chords wants to sit still; they are motion chords.",
          "In jazz you'll meet these as passing colors and as tension before a resolution. You don't have to love them on their own, just learn the squeeze of a diminished chord and the stretch of an augmented one. In this level each one lands on a stable major chord so you can hear exactly how it steers home."
        ],
        "keyPoints": [
          "Diminished = two stacked minor thirds (1, b3, b5): tense, shrinking.",
          "Augmented = two stacked major thirds (1, 3, #5): dreamy, stretching.",
          "Both are unstable 'motion' chords that want to resolve.",
          "Listen for the squeeze (dim) versus the float (aug)."
        ],
        "example": {
          "label": "B dim vs. C aug",
          "chords": [
            {
              "root": "B",
              "quality": "dim",
              "octave": 3
            },
            {
              "root": "C",
              "quality": "aug",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 56,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "B",
                "quality": "dim",
                "octave": 3
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "C",
                "quality": "maj",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "C",
                "quality": "aug",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "F",
                "quality": "maj",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "B",
                "quality": "dim",
                "octave": 3
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "C",
                "quality": "maj",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "C",
                "quality": "aug",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "F",
                "quality": "maj",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u2l4",
        "title": "Sus chords",
        "goal": "Play suspended chords (sus2 and sus4) and feel their open, unresolved color slide into the major triad.",
        "theory": [
          "A suspended chord 'suspends' the 3rd, the note that decides whether a chord is major or minor, and replaces it with a neighbor. In a sus2 you swap the 3rd for the 2nd (C-D-G); in a sus4 you swap it for the 4th (C-F-G). With no 3rd, the chord refuses to commit to happy or sad.",
          "That missing 3rd is the whole point. Sus chords sound open, airy, and gently unresolved, like a question waiting for an answer. A sus4 in particular loves to lean back into its plain major chord. Play Csus4 then C major and you'll hear the 4th 'fall' into the 3rd and settle.",
          "A fun detail: sus2 and sus4 contain the same three notes from different roots, so the same shape does double duty. In jazz and modern pop, sus chords work both as a resolution device and as a stable color of their own. Notice how just one finger moves to slide between sus2, the major triad, and sus4. That tiny motion is a sound you'll reach for constantly."
        ],
        "keyPoints": [
          "Sus chords replace the 3rd with the 2nd (sus2) or the 4th (sus4).",
          "No 3rd means neither major nor minor, open and ambiguous.",
          "sus4 loves to resolve down into the plain major triad.",
          "One note moves to slide between sus2, major, and sus4."
        ],
        "example": {
          "label": "Csus2, Csus4, C resolve",
          "chords": [
            {
              "root": "C",
              "quality": "sus2",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "sus4",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "maj",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 56,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "sus2",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "C",
                "quality": "maj",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "C",
                "quality": "sus4",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "C",
                "quality": "maj",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "G",
                "quality": "sus2",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "G",
                "quality": "maj",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "G",
                "quality": "sus4",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "G",
                "quality": "maj",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u2l5",
        "title": "The chords of C major",
        "goal": "Play all seven diatonic triads of C major in order and learn the I ii iii IV V vi vii pattern.",
        "theory": [
          "If you build a triad on every note of the C major scale using only the white keys, you get the seven chords of the key: C, Dm, Em, F, G, Am, and Bdim. These are 'diatonic' chords, they all belong to the same family, which is why they sound good together.",
          "Musicians label them with Roman numerals so the pattern works in any key: I ii iii IV V vi vii. Capitals mark the major chords (I, IV, V), lowercase marks the minor chords (ii, iii, vi), and the little circle marks the lone diminished chord (vii). The quality order is major, minor, minor, major, major, minor, diminished, and it is identical in every major key.",
          "This single row of chords is the engine room of Western and jazz harmony. The I is home, the V pulls you back to it, the ii sets up the V, and vi is the gentle relative-minor detour. Once these seven shapes are under your fingers and you can name them by numeral, you can read and play through most songs in the key, and transpose them anywhere."
        ],
        "keyPoints": [
          "Diatonic triads of C: C, Dm, Em, F, G, Am, Bdim.",
          "Numerals: I ii iii IV V vi vii, caps = major, lowercase = minor, circle = diminished.",
          "The quality pattern (maj-min-min-maj-maj-min-dim) is the same in every major key.",
          "I is home, V pulls home, ii sets up V, vi is the relative-minor color."
        ],
        "example": {
          "label": "I - IV - V - I in C",
          "chords": [
            {
              "root": "C",
              "quality": "maj",
              "octave": 4
            },
            {
              "root": "F",
              "quality": "maj",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "maj",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "maj",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 58,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "maj",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "D",
                "quality": "min",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "E",
                "quality": "min",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "F",
                "quality": "maj",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "G",
                "quality": "maj",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "A",
                "quality": "min",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "B",
                "quality": "dim",
                "octave": 3
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "C",
                "quality": "maj",
                "octave": 4
              }
            }
          ]
        }
      }
    ]
  },
  {
    "id": "u3",
    "num": 3,
    "name": "Seventh chords",
    "blurb": "The four jazz chord families that everything is built from.",
    "lessons": [
      {
        "id": "u3l1",
        "title": "Major 7",
        "goal": "Build and hear the lush, resolved sound of major 7th chords.",
        "theory": [
          "A major 7 chord stacks a major triad with one more major third on top, giving you root, major third, perfect fifth, and major seventh. In C that's C E G B. The top note sits just a half step below the root an octave up, and that gentle friction is what gives maj7 its glowing, slightly bittersweet shimmer.",
          "In jazz the major 7 is the sound of home. It's the chord you land on at the end of a phrase when everything feels settled and complete. Where a plain major triad can sound a little blunt or pop-like, adding the seventh makes it sound finished and sophisticated.",
          "Functionally it's most often the I chord (the tonic) and the IV chord of a major key. When you see Cmaj7 in a tune, think rest, arrival, resolution. Listen for how stable it feels next to the restless chords we'll meet later that itch to move."
        ],
        "keyPoints": [
          "Major 7 = major triad + a major 7th (root, 3, 5, 7).",
          "The 7th sits a half step below the octave, creating the lush shimmer.",
          "It's the sound of arrival: usually the I or IV chord.",
          "Resolved and at rest, never tense."
        ],
        "example": {
          "label": "Three lush major 7ths",
          "chords": [
            {
              "root": "C",
              "quality": "maj7",
              "octave": 4
            },
            {
              "root": "F",
              "quality": "maj7",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "maj7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 60,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "F",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "G",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "F",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "G",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "F",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u3l2",
        "title": "Minor 7",
        "goal": "Build and hear the smooth, mellow minor 7th chord, the workhorse of jazz.",
        "theory": [
          "A minor 7 chord is a minor triad with a minor seventh on top: root, flat third, perfect fifth, flat seventh. In D that's D F A C. The flat third gives it the soft, shadowy minor color, while the flat seventh keeps it relaxed rather than tense.",
          "If the major 7 is the sound of arrival, the minor 7 is the sound of motion that still feels easy. It shows up everywhere in jazz, which is why players call it the workhorse chord. Most often it's the ii chord that kicks off the famous ii-V-I progression you'll meet soon.",
          "Notice how mellow and open it sounds compared to a plain minor triad. The added seventh softens the sadness into something warm and conversational. Dm7, Am7, and Em7 are all over the standards repertoire, so getting these under your fingers pays off fast."
        ],
        "keyPoints": [
          "Minor 7 = minor triad + a minor 7th (root, b3, 5, b7).",
          "Soft and mellow, not tense, despite the minor third.",
          "The most common chord in jazz, often the ii chord.",
          "The launch pad for the ii-V-I progression."
        ],
        "example": {
          "label": "Three mellow minor 7ths",
          "chords": [
            {
              "root": "D",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "A",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "E",
              "quality": "m7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 60,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "A",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "E",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "A",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "E",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "A",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u3l3",
        "title": "Dominant 7",
        "goal": "Build and hear the tense dominant 7th chord that drives jazz forward.",
        "theory": [
          "A dominant 7 chord is a major triad with a flat seventh on top: root, major third, perfect fifth, flat seventh. In G that's G B D F. It mixes a bright major third with a darker flat seventh, and those two notes sit a tritone apart, the most restless interval in music.",
          "That tritone is the engine of jazz. It makes the dominant 7 sound unstable, like it's leaning forward and wanting to fall somewhere. Most of the time it resolves down a fifth: G7 pulls strongly toward C. This is the V chord, the V in ii-V-I.",
          "Get used to the feeling of tension and release. Play G7 and you can almost hear it asking a question; play Cmaj7 after it and you hear the answer. Dominant 7 chords are also the home of the blues, so this restless sound is the heartbeat of the whole tradition."
        ],
        "keyPoints": [
          "Dominant 7 = major triad + a flat 7th (root, 3, 5, b7).",
          "The 3rd and b7th form a tense tritone, the engine of jazz.",
          "It wants to resolve, usually down a fifth (G7 to C).",
          "This is the V chord and the sound of the blues."
        ],
        "example": {
          "label": "Tension that wants to resolve",
          "chords": [
            {
              "root": "G",
              "quality": "7",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "maj7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 62,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "D",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "C",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "F",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "D",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "C",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u3l4",
        "title": "Half-diminished (m7b5)",
        "goal": "Build and hear the m7b5 chord, the gateway into minor-key jazz.",
        "theory": [
          "A half-diminished chord, written m7b5, is a minor 7 chord with its fifth flattened: root, flat third, flat fifth, flat seventh. In B that's B D F A. Lowering the fifth adds a hollow, unsettled color on top of the minor flavor, so it sounds darker and more questioning than a plain minor 7.",
          "Its main job is to be the ii chord in a minor key. Just as Dm7 opens a ii-V-I in C major, Bm7b5 opens a ii-V-i in A minor (Bm7b5, E7, Am). Whenever a tune turns toward a minor key, the half-diminished chord is usually the first sign.",
          "The name half-diminished tells you it sits halfway between a minor 7 and a fully diminished 7 chord: it borrows the flat fifth of a diminished chord but keeps the softer flat seventh. Learn to hear that flat five and you'll start spotting minor-key turns by ear."
        ],
        "keyPoints": [
          "m7b5 = minor 7 with a flattened 5th (root, b3, b5, b7).",
          "Darker and more unsettled than a plain minor 7.",
          "It's the ii chord in a minor key, starting the minor ii-V-i.",
          "Halfway between minor 7 and fully diminished."
        ],
        "example": {
          "label": "The minor-key ii chord",
          "chords": [
            {
              "root": "B",
              "quality": "m7b5",
              "octave": 4
            },
            {
              "root": "E",
              "quality": "7",
              "octave": 4
            },
            {
              "root": "A",
              "quality": "min",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 58,
          "lives": 4,
          "key": "Am",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "B",
                "quality": "m7b5",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "E",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "A",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "B",
                "quality": "m7b5",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "E",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "A",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "B",
                "quality": "m7b5",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "E",
                "quality": "7",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u3l5",
        "title": "Diminished 7",
        "goal": "Build and hear the symmetrical diminished 7th chord and use it as a passing chord.",
        "theory": [
          "A diminished 7 chord stacks minor thirds all the way up: root, flat third, flat fifth, and a double-flat seventh, which sounds the same as the sixth. In C# that's C# E G A (the A is spelled B-double-flat in strict theory, but it sounds like A). Every interval inside the chord is a minor third, which makes it perfectly symmetrical.",
          "Because it's symmetrical, a diminished 7 has no single root pulling on your ear. It sounds tense and floating, like it could go almost anywhere. Jazz players love it as a passing chord: a quick stepping stone that slides between two more stable chords, often connecting them by half step.",
          "That symmetry has a neat side effect: there are really only three different diminished 7 chords in all of music. Move any one up a minor third and you land on the same four notes again. So C#dim7, Edim7, Gdim7, and Bbdim7 are all the same chord, just starting from a different note. Use it for color and motion, not for resting."
        ],
        "keyPoints": [
          "Diminished 7 = a stack of minor thirds (root, b3, b5, bb7).",
          "Perfectly symmetrical, so it has no strong root.",
          "Tense and floating, ideal as a passing chord between others.",
          "Only three unique dim7 chords exist in total."
        ],
        "example": {
          "label": "A passing diminished chord",
          "chords": [
            {
              "root": "C",
              "quality": "maj7",
              "octave": 4
            },
            {
              "root": "C#",
              "quality": "dim7",
              "octave": 4
            },
            {
              "root": "D",
              "quality": "m7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 56,
          "lives": 4,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "C#",
                "quality": "dim7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "D#",
                "quality": "dim7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "E",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "F",
                "quality": "dim7",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "C#",
                "quality": "dim7",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u3l6",
        "title": "The four families together",
        "goal": "Hear maj7, m7, 7, and m7b5 side by side and tell them apart.",
        "theory": [
          "You now know the four core seventh-chord families: major 7 (lush and resolved), minor 7 (mellow and smooth), dominant 7 (tense and driving), and half-diminished m7b5 (dark and unsettled). Almost every chord in jazz is one of these four, or a richer extension built on top of one.",
          "The secret to telling them apart is the third and the seventh. A major third with a major seventh gives you maj7. A minor third with a flat seventh gives you m7. A major third with a flat seventh gives you the restless dominant 7. And a minor third with a flat fifth (plus the flat seventh) gives you m7b5. Train your ear on those notes and you can name any seventh chord.",
          "This level mixes all four so you can feel the contrast directly. Notice how the dominant chords pull forward, the major 7 feels like a soft landing, the minor 7 sits comfortably in between, and the m7b5 darkens the room. Recognizing these colors by ear is the single most useful skill in jazz harmony."
        ],
        "keyPoints": [
          "Four families: maj7, m7, 7, m7b5.",
          "Identify them by the 3rd and the 7th of the chord.",
          "maj7 rests, 7 drives, m7 sits easy, m7b5 darkens.",
          "Nearly all jazz harmony is built from these four."
        ],
        "example": {
          "label": "All four colors in a row",
          "chords": [
            {
              "root": "C",
              "quality": "maj7",
              "octave": 4
            },
            {
              "root": "D",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "7",
              "octave": 4
            },
            {
              "root": "B",
              "quality": "m7b5",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 60,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "B",
                "quality": "m7b5",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "F",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "A",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "D",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "E",
                "quality": "m7b5",
                "octave": 4
              }
            }
          ]
        }
      }
    ]
  },
  {
    "id": "u4",
    "num": 4,
    "name": "The ii–V–I",
    "blurb": "The 2-5-1: the most important progression in all of jazz.",
    "lessons": [
      {
        "id": "u4l1",
        "title": "What is a ii–V–I?",
        "goal": "Meet the ii–V–I: hear how three chords built on the 2nd, 5th and 1st degrees create tension and release.",
        "theory": [
          "Almost every jazz tune leans on one little three-chord move: the ii–V–I. The roman numerals just count scale degrees. In C major the 2nd degree is D, the 5th is G, and the 1st is C, so the progression is Dm7, G7, Cmaj7. That is it. Once your ear knows this shape you will start hearing it everywhere.",
          "The magic is the story it tells. Dm7 sets off, leaning away from home. G7 is the dominant chord, full of tension, practically begging to resolve. Cmaj7 is the arrival, the relaxed home base. Tension, then release. That arc is what makes the ii–V–I feel like a complete musical sentence.",
          "Notice the qualities: the ii is a minor 7th, the V is a dominant 7th, and the I is a major 7th. That m7 / 7 / maj7 pattern is the fingerprint of a major-key ii–V–I. Learn it once and you can transpose it into any key."
        ],
        "keyPoints": [
          "ii–V–I = chords on the 2nd, 5th and 1st degrees of the key.",
          "In C major that is Dm7, G7, Cmaj7.",
          "The qualities go minor7, dominant7, major7.",
          "It is the sound of tension resolving home."
        ],
        "example": {
          "label": "Dm7 – G7 – Cmaj7 in C",
          "chords": [
            {
              "root": "D",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "7",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "maj7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 56,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u4l2",
        "title": "ii–V–I in C",
        "goal": "Lock the C major ii–V–I into your hands by looping Dm7 – G7 – Cmaj7 until it feels automatic.",
        "theory": [
          "Now we drill the most common ii–V–I of all: Dm7, G7, Cmaj7 in C major. Looping it is the point. Jazz players practise ii–V–Is the way runners practise laps, because this progression is the raw material of hundreds of standards.",
          "Listen for the voice leading hiding inside it. The note C lives in both Dm7 and Cmaj7, and the F in Dm7 slides down a half step to E, the bright major third of Cmaj7. Inside G7 the notes B and F sit a tritone apart, and they resolve by squeezing together: B rises a half step to C while F falls a half step to E. Those tiny half-step moves are why the resolution feels so satisfying.",
          "Keep the qualities crisp: m7, then 7, then maj7. Do not let the maj7 collapse into a plain triad; that maj7 colour is the gentle, dreamy landing that defines the home chord."
        ],
        "keyPoints": [
          "Dm7 – G7 – Cmaj7 is the ur-progression of jazz.",
          "Loop it until the shape is muscle memory.",
          "G7's tritone (B and F) resolves inward to C and E.",
          "Keep the maj7 colour on the I chord."
        ],
        "example": {
          "label": "C ii–V–I, twice around",
          "chords": [
            {
              "root": "D",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "7",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "maj7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 60,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 16,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u4l3",
        "title": "ii–V–I in F and G",
        "goal": "Take the same ii–V–I shape into two new keys: F major and G major.",
        "theory": [
          "The ii–V–I is a template, not a fixed set of notes. Move it to F major and the 2nd, 5th and 1st degrees give you Gm7, C7, Fmaj7. Move it to G major and you get Am7, D7, Gmaj7. Same m7 / 7 / maj7 pattern, same tension-and-release story, brand new home key.",
          "Practising the move across keys is how the progression really sinks in. Your ear learns the relationship between the chords rather than memorising one set of finger positions. Soon you will be able to drop a ii–V–I into any key on demand, which is exactly what improvising over standards asks of you.",
          "As you play, keep feeling that pull from the V to the I. In F it is C7 leaning into Fmaj7; in G it is D7 leaning into Gmaj7. The dominant chord is always the chord of maximum tension, and the I is always the release."
        ],
        "keyPoints": [
          "F major ii–V–I: Gm7 – C7 – Fmaj7.",
          "G major ii–V–I: Am7 – D7 – Gmaj7.",
          "The shape never changes, only the key.",
          "Transposing builds real ear and finger fluency."
        ],
        "example": {
          "label": "ii–V–I in F, then in G",
          "chords": [
            {
              "root": "G",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "7",
              "octave": 4
            },
            {
              "root": "F",
              "quality": "maj7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 58,
          "lives": 5,
          "key": "F",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "G",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "C",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "F",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "G",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "C",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "F",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "A",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "D",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 16,
              "chord": {
                "root": "G",
                "quality": "maj7",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u4l4",
        "title": "Minor ii–V–i",
        "goal": "Explore the darker minor ii–V–i: Dm7b5 – G7b9 – Cm7, the moody cousin of the major cadence.",
        "theory": [
          "Major keys are not the whole story. When a tune is in a minor key, the ii–V–i changes colour. The ii becomes a half-diminished chord, written m7b5, the V usually gets a flattened 9th for extra bite (G7b9), and the i lands on a minor chord. In C minor that is Dm7b5, G7b9, Cm7.",
          "The m7b5 chord, also called half-diminished, has a flat 5th that makes it sound unsettled and shadowy right from the start. Then the 7b9 dominant piles on even more tension with its grinding flat 9th. By the time you reach the minor i, the resolution feels hard-won and dramatic rather than sunny.",
          "This is the cadence behind countless minor-key ballads and noir-flavoured jazz. Same skeleton as the major ii–V–I, but every chord is darkened a shade. Train your ear to hear the difference between the bright major version and this brooding minor one."
        ],
        "keyPoints": [
          "Minor ii–V–i: ii is m7b5, V is often 7b9, i is m7.",
          "In C minor: Dm7b5 – G7b9 – Cm7.",
          "The flat 5 and flat 9 add darkness and tension.",
          "It is the sound of the moody minor-key cadence."
        ],
        "example": {
          "label": "Minor ii–V–i in C minor",
          "chords": [
            {
              "root": "D",
              "quality": "m7b5",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "7b9",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "m7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 56,
          "lives": 4,
          "key": "Cm",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "D",
                "quality": "m7b5",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "G",
                "quality": "7b9",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "C",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "D",
                "quality": "m7b5",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "G",
                "quality": "7b9",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "C",
                "quality": "m7",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u4l5",
        "title": "Around the keys (Bb, Eb)",
        "goal": "Keep transposing the ii–V–I into two flat keys, Bb and Eb, staying low in octave 3-4 to keep the chords in range.",
        "theory": [
          "Bb and Eb are the home turf of jazz, since horns love flat keys. The ii–V–I works exactly the same here. In Bb major the 2nd, 5th and 1st degrees give Cm7, F7, Bbmaj7. In Eb major they give Fm7, Bb7, Ebmaj7. Same trusty m7 / 7 / maj7 shape.",
          "Because these roots sit lower in the keyboard's range, we voice them down in octave 3 to 4 so the notes stay comfortably in the middle of the keyboard instead of floating too high. Keeping a sensible register is part of good voicing: you want the chords to sound full and warm, not thin and squeaky.",
          "By now the pattern should feel familiar no matter where it starts. That is the whole goal of going around the keys, so that ii–V–I becomes a reflex you can summon in any of the twelve keys a tune might throw at you."
        ],
        "keyPoints": [
          "Bb major ii–V–I: Cm7 – F7 – Bbmaj7.",
          "Eb major ii–V–I: Fm7 – Bb7 – Ebmaj7.",
          "Flat keys are everywhere in jazz, so get comfortable.",
          "Voice low (octave 3-4) to keep chords in a warm register."
        ],
        "example": {
          "label": "ii–V–I in Bb, then in Eb",
          "chords": [
            {
              "root": "C",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "F",
              "quality": "7",
              "octave": 3
            },
            {
              "root": "Bb",
              "quality": "maj7",
              "octave": 3
            }
          ]
        },
        "practice": {
          "bpm": 56,
          "lives": 4,
          "key": "Bb",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "F",
                "quality": "7",
                "octave": 3
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "Bb",
                "quality": "maj7",
                "octave": 3
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "C",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "F",
                "quality": "7",
                "octave": 3
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "Bb",
                "quality": "maj7",
                "octave": 3
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "F",
                "quality": "m7",
                "octave": 3
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "Bb",
                "quality": "7",
                "octave": 3
              }
            },
            {
              "beat": 16,
              "chord": {
                "root": "Eb",
                "quality": "maj7",
                "octave": 3
              }
            }
          ]
        }
      },
      {
        "id": "u4l6",
        "title": "The tritone sub",
        "goal": "Learn the tritone substitution: swap the V chord for a bII7 to get a slinky chromatic ii–V–I.",
        "theory": [
          "Here is the first real reharmonisation trick of the course. In a C major ii–V–I, the V chord is G7. The tritone substitution replaces it with the dominant chord a tritone away, Db7. So Dm7 – G7 – Cmaj7 becomes Dm7 – Db7 – Cmaj7. It still resolves home, but with a cooler, more chromatic feel.",
          "Why does it work? G7 and Db7 share the same tritone, the interval between their 3rd and 7th. In G7 that pair is B and F; in Db7 it is F and Cb, which is the very same two pitches spelled differently. That shared tension is what actually pulls toward C, so either chord can do the resolving job. The bonus is the bass line: instead of jumping G to C, you slide down by half steps, D, Db, C, a smooth chromatic descent that sounds wonderfully slick.",
          "Tritone subs are everywhere in bebop and ballads. Once your ear accepts that the V can be swapped for a bII7, a whole world of reharmonisation opens up. Hear the chromatic bass walk down and you will recognise this move in countless tunes."
        ],
        "keyPoints": [
          "Tritone sub: replace the V7 with the dom7 a tritone away (bII7).",
          "In C: G7 becomes Db7, giving Dm7 – Db7 – Cmaj7.",
          "Both chords share the same tritone, so both resolve to I.",
          "It creates a smooth chromatic bass line: D – Db – C."
        ],
        "example": {
          "label": "Tritone sub in C: Dm7 – Db7 – Cmaj7",
          "chords": [
            {
              "root": "D",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "Db",
              "quality": "7",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "maj7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 58,
          "lives": 4,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "Db",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "Db",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "Db",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 16,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            }
          ]
        }
      }
    ]
  },
  {
    "id": "u5",
    "num": 5,
    "name": "Shell voicings",
    "blurb": "Strip chords to root, 3rd and 7th — the lean, pro left-hand sound.",
    "lessons": [
      {
        "id": "u5l1",
        "title": "What is a shell?",
        "goal": "Learn the shell voicing: just root, 3rd and 7th — the bare bones that define any chord.",
        "theory": [
          "A shell voicing keeps only three notes: the root, the 3rd and the 7th. You drop the 5th entirely. It sounds counterintuitive at first, but the 5th is the most disposable note in a chord — it adds almost no color, and as the strongest overtone above the root it is already faintly implied the moment you play the root.",
          "The two notes that truly matter are the 3rd and the 7th. The 3rd tells your ear whether the chord is major or minor. The 7th tells it whether you have a major 7th, a dominant 7th, or a minor 7th. Together these two notes are called the guide tones, and they carry the entire identity of the chord.",
          "Because shells are so lean, they are the classic left-hand sound for solo and trio jazz piano. Your left hand states the harmony cleanly down low while your right hand stays free to play melody or solo on top. Try each shell here: C major 7th, D minor 7th, and G dominant 7th."
        ],
        "keyPoints": [
          "A shell = root + 3rd + 7th. Drop the 5th.",
          "The 3rd and 7th (the guide tones) define the chord's quality.",
          "Shells are the lean, classic left-hand jazz sound.",
          "Less is more — three notes say everything."
        ],
        "example": {
          "label": "Three shells: Cmaj7, Dm7, G7",
          "chords": [
            {
              "root": "C",
              "quality": "shell-maj7",
              "octave": 4
            },
            {
              "root": "D",
              "quality": "shell-m7",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "shell-7",
              "octave": 3
            }
          ]
        },
        "practice": {
          "bpm": 56,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "shell-maj7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "D",
                "quality": "shell-m7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "G",
                "quality": "shell-7",
                "octave": 3
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "C",
                "quality": "shell-maj7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "D",
                "quality": "shell-m7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "G",
                "quality": "shell-7",
                "octave": 3
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "C",
                "quality": "shell-maj7",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "C",
                "quality": "shell-maj7",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u5l2",
        "title": "Shell ii-V-I in C",
        "goal": "Play the most important progression in jazz — ii-V-I — using nothing but shell voicings.",
        "theory": [
          "The ii-V-I is the backbone of jazz harmony. In C major it is Dm7, then G7, then Cmaj7. The numbers refer to scale degrees: D is the 2nd note of the C scale (minor), G is the 5th (dominant), and C is home (major). Almost every standard is built from chains of these.",
          "Shell voicings make ii-V-I easy because the guide tones barely move. From Dm7 to G7, the C slides down a half step to B while the F holds as a common tone. From G7 to Cmaj7, the B now holds while the F resolves down to E. That smooth, lazy stepwise motion is called voice leading, and it is what makes a progression sound connected rather than blocky.",
          "Loop it until your hand knows the shape without thinking. Dm7 to G7 to Cmaj7 should feel like one gesture, not three separate grabs. This is the single most valuable muscle-memory pattern you can build as a jazz pianist."
        ],
        "keyPoints": [
          "ii-V-I in C = Dm7, G7, Cmaj7.",
          "Guide tones move by half steps or hold — that's voice leading.",
          "This progression is the backbone of countless standards.",
          "Loop it until the shape is automatic."
        ],
        "example": {
          "label": "ii-V-I in C with shells",
          "chords": [
            {
              "root": "D",
              "quality": "shell-m7",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "shell-7",
              "octave": 3
            },
            {
              "root": "C",
              "quality": "shell-maj7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 58,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "D",
                "quality": "shell-m7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "G",
                "quality": "shell-7",
                "octave": 3
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "C",
                "quality": "shell-maj7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "C",
                "quality": "shell-maj7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "D",
                "quality": "shell-m7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "G",
                "quality": "shell-7",
                "octave": 3
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "C",
                "quality": "shell-maj7",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "C",
                "quality": "shell-maj7",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u5l3",
        "title": "Shell ii-V-I in F",
        "goal": "Take the shell ii-V-I to a new key, F major, keeping the voicings low and warm.",
        "theory": [
          "Now move the same idea to F major. The ii-V-I in F is Gm7, then C7, then Fmaj7. Notice the pattern is identical to C major — minor 7th, dominant 7th, major 7th — just starting from a different root. Once you hear the shape, you can transplant it anywhere.",
          "F is a flat key, so the guide tones include a flat: Gm7 has Bb and F, C7 has E and Bb, and Fmaj7 has E and A. Watch the voice leading again — the F in Gm7 holds into C7 as a common tone, and the Bb slides down to A as you land on Fmaj7. Don't worry about naming every note in the moment; trust the shape and let your ear confirm the familiar pull toward home.",
          "These voicings sit in octaves 3 and 4 to keep them low and warm, which is exactly where a left hand lives in real playing. Keeping shells out of the middle register leaves room for a melody or a right-hand solo on top without the sound turning muddy."
        ],
        "keyPoints": [
          "ii-V-I in F = Gm7, C7, Fmaj7.",
          "Same minor-dominant-major shape, new starting root.",
          "Flat keys just mean a few flats in the guide tones.",
          "Octaves 3-4 keep the left hand low and uncluttered."
        ],
        "example": {
          "label": "ii-V-I in F with shells",
          "chords": [
            {
              "root": "G",
              "quality": "shell-m7",
              "octave": 3
            },
            {
              "root": "C",
              "quality": "shell-7",
              "octave": 4
            },
            {
              "root": "F",
              "quality": "shell-maj7",
              "octave": 3
            }
          ]
        },
        "practice": {
          "bpm": 58,
          "lives": 5,
          "key": "F",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "G",
                "quality": "shell-m7",
                "octave": 3
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "C",
                "quality": "shell-7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "F",
                "quality": "shell-maj7",
                "octave": 3
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "F",
                "quality": "shell-maj7",
                "octave": 3
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "G",
                "quality": "shell-m7",
                "octave": 3
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "C",
                "quality": "shell-7",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "F",
                "quality": "shell-maj7",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "F",
                "quality": "shell-maj7",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u5l4",
        "title": "Shells around keys",
        "goal": "Chain shell ii-V-I progressions through two keys — C then Bb — to build real-world flexibility.",
        "theory": [
          "Real tunes don't stay in one key. They modulate, cycling through ii-V-Is in different keys all the time. Here you will play a full ii-V-I in C, then immediately shift to a full ii-V-I in Bb. Practising these back to back teaches your hands to relocate quickly.",
          "In C the progression is Dm7, G7, Cmaj7. In Bb it is Cm7, F7, Bbmaj7. Watch a neat connection: the root C that ends the first key returns as the root of Cm7 that starts the second. Spotting links like this between keys is how pros navigate a chart smoothly instead of jumping around in a panic.",
          "Focus on keeping the motion even and the voicings low. The goal isn't speed — it's confidence moving the same reliable shell shape to any root you're handed. Master this and you can comp through most jazz standards with just your left hand."
        ],
        "keyPoints": [
          "Tunes move through many keys — chain your ii-V-Is.",
          "C: Dm7-G7-Cmaj7, then Bb: Cm7-F7-Bbmaj7.",
          "Look for shared notes that link one key to the next.",
          "Even motion and low voicings beat raw speed."
        ],
        "example": {
          "label": "ii-V-I in C, then in Bb",
          "chords": [
            {
              "root": "D",
              "quality": "shell-m7",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "shell-7",
              "octave": 3
            },
            {
              "root": "C",
              "quality": "shell-maj7",
              "octave": 4
            },
            {
              "root": "Bb",
              "quality": "shell-maj7",
              "octave": 3
            }
          ]
        },
        "practice": {
          "bpm": 60,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "D",
                "quality": "shell-m7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "G",
                "quality": "shell-7",
                "octave": 3
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "C",
                "quality": "shell-maj7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "C",
                "quality": "shell-maj7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "C",
                "quality": "shell-m7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "F",
                "quality": "shell-7",
                "octave": 3
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "Bb",
                "quality": "shell-maj7",
                "octave": 3
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "Bb",
                "quality": "shell-maj7",
                "octave": 3
              }
            }
          ]
        }
      }
    ]
  },
  {
    "id": "u6",
    "num": 6,
    "name": "Rootless voicings",
    "blurb": "Drop the root and comp like the pros — rich four-note colors that leave the bass to a bassist.",
    "lessons": [
      {
        "id": "u6l1",
        "title": "Rootless A voicings",
        "goal": "Learn the three core rootless A voicings — m9, 13, and maj9 — and hear how dropping the root frees your hand to play pure color.",
        "theory": [
          "Until now you have been playing the root inside your chords. But in a real band there is a bassist whose whole job is the root. When you double it, you crowd the low end and tie up a finger for no reward. Rootless voicings solve this: you leave the root to the bass and spend your hand on the notes that actually give the chord its flavor.",
          "Each of these is a four-note voicing. For a minor chord you play 3-5-7-9, a lush m9 sound. For a major chord it is 3-5-7-9 again, glowing as a maj9. The dominant 'A' voicing is a little different: it drops the 5th and reaches up for the 13th, giving 3-7-9-13. In every case the 3rd and 7th carry the chord's identity, while the 9th, 13th and the rest add the jazz shimmer on top.",
          "These voicings live in the middle of the keyboard, roughly the octave just below middle C up to a few notes above it. That register is where comping sits best — high enough to ring clearly, low enough to stay out of a soloist's way. Imagine a bass note an octave or more below each one and you will hear the whole chord even though your hand never touches the root."
        ],
        "keyPoints": [
          "The bass owns the root, so your hand voices the color tones.",
          "3rd and 7th = identity; 9th and 13th = jazz shimmer.",
          "Minor and major use 3-5-7-9; the dominant A voicing is 3-7-9-13.",
          "These voicings sit in the middle register, perfect for comping."
        ],
        "example": {
          "label": "Three rootless colors: Dm9, G13, Cmaj9",
          "chords": [
            {
              "root": "D",
              "quality": "rootless-m9",
              "octave": 3
            },
            {
              "root": "G",
              "quality": "rootless-13",
              "octave": 3
            },
            {
              "root": "C",
              "quality": "rootless-maj9",
              "octave": 3
            }
          ]
        },
        "practice": {
          "bpm": 56,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "D",
                "quality": "rootless-m9",
                "octave": 3
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "D",
                "quality": "rootless-m9",
                "octave": 3
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "G",
                "quality": "rootless-13",
                "octave": 3
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "G",
                "quality": "rootless-13",
                "octave": 3
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "C",
                "quality": "rootless-maj9",
                "octave": 3
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "C",
                "quality": "rootless-maj9",
                "octave": 3
              }
            }
          ]
        }
      },
      {
        "id": "u6l2",
        "title": "Rootless ii–V–I in C",
        "goal": "Chain the three rootless voicings into a smooth ii–V–I in C and loop it so the voice-leading sinks into your hands.",
        "theory": [
          "Now string the three colors together into the most important progression in jazz: ii–V–I. In C that is Dm9 to G13 to Cmaj9. The magic of rootless voicings is how little your hand moves between them — most notes stay put or slide a half step, and that economy of motion is exactly what makes professional comping sound so connected and effortless.",
          "Watch the shared tones. Dm9 is D-F-A-C-E; three of those notes — F, A and E — live on inside G13, where they act as its 7th, 9th and 13th, so most of your hand simply holds while one note shifts. Moving from G13 to Cmaj9, the B and E carry over: in Cmaj9 they become the 7th and the 3rd, the two notes that define the chord. The voices that do change move by just a step, so the whole progression feels like one shape gently rippling rather than three separate grabs at the keyboard.",
          "Looping a ii–V–I is the single best way to build comping reflexes. Keep your hand low and relaxed, let the common tones stay where they are, and trust that an imaginary bassist is laying down D, then G, then C underneath you."
        ],
        "keyPoints": [
          "Dm9 → G13 → Cmaj9 is the rootless ii–V–I in C.",
          "Dm9 and G13 share three tones; G13 and Cmaj9 share two.",
          "Common tones stay put; the rest move by a half or whole step.",
          "Loop it until the shape changes feel automatic."
        ],
        "example": {
          "label": "Rootless ii–V–I in C, looped once",
          "chords": [
            {
              "root": "D",
              "quality": "rootless-m9",
              "octave": 3
            },
            {
              "root": "G",
              "quality": "rootless-13",
              "octave": 3
            },
            {
              "root": "C",
              "quality": "rootless-maj9",
              "octave": 3
            }
          ]
        },
        "practice": {
          "bpm": 60,
          "lives": 4,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "D",
                "quality": "rootless-m9",
                "octave": 3
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "G",
                "quality": "rootless-13",
                "octave": 3
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "C",
                "quality": "rootless-maj9",
                "octave": 3
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "C",
                "quality": "rootless-maj9",
                "octave": 3
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "D",
                "quality": "rootless-m9",
                "octave": 3
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "G",
                "quality": "rootless-13",
                "octave": 3
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "C",
                "quality": "rootless-maj9",
                "octave": 3
              }
            }
          ]
        }
      },
      {
        "id": "u6l3",
        "title": "Rootless ii–V–I in F",
        "goal": "Transpose the rootless ii–V–I to F so the shapes become a movable skill, not three memorized hand positions.",
        "theory": [
          "A voicing you can only play in one key is a party trick; a voicing you can move anywhere is a tool. Here is the same rootless ii–V–I in F: Gm9 to C13 to Fmaj9. The intervals inside your hand are identical to the C version — only where you place them on the keyboard changes.",
          "F is the next key clockwise on the circle of fifths from C, a friendly first transposition. As you play, feel that the SHAPES are the same as before; your hand is making the same gestures, just shifted to a new spot. That recognition is the goal — once you feel the shape rather than the note names, every key becomes available to you.",
          "The same connected voice-leading applies: Gm9 and C13 share three tones, and C13 and Fmaj9 share two, so once again the progression flows with only tiny movements. Practicing a familiar pattern in a new key is how jazz pianists eventually come to play in all twelve."
        ],
        "keyPoints": [
          "Gm9 → C13 → Fmaj9 is the rootless ii–V–I in F.",
          "Same hand shapes as C — just moved to a new spot.",
          "Feel the shape, not the note names, and every key opens up.",
          "F is the gentle first step around the circle of fifths."
        ],
        "example": {
          "label": "Rootless ii–V–I in F: Gm9, C13, Fmaj9",
          "chords": [
            {
              "root": "G",
              "quality": "rootless-m9",
              "octave": 3
            },
            {
              "root": "C",
              "quality": "rootless-13",
              "octave": 3
            },
            {
              "root": "F",
              "quality": "rootless-maj9",
              "octave": 3
            }
          ]
        },
        "practice": {
          "bpm": 60,
          "lives": 4,
          "key": "F",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "G",
                "quality": "rootless-m9",
                "octave": 3
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "C",
                "quality": "rootless-13",
                "octave": 3
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "F",
                "quality": "rootless-maj9",
                "octave": 3
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "F",
                "quality": "rootless-maj9",
                "octave": 3
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "G",
                "quality": "rootless-m9",
                "octave": 3
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "C",
                "quality": "rootless-13",
                "octave": 3
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "F",
                "quality": "rootless-maj9",
                "octave": 3
              }
            }
          ]
        }
      },
      {
        "id": "u6l4",
        "title": "Comping groove",
        "goal": "Take the rootless ii–V–I and place it with a syncopation-friendly groove, the way you would actually comp behind a soloist.",
        "theory": [
          "Knowing the voicings is half the job; placing them in time is the other half. Comping means landing your chords with a feel that supports the music rather than marching in lockstep. Here you take the rootless ii–V–I in C and let the chords breathe — some on the beat, some pushed slightly, with space left open between them.",
          "Notice the chords do not all sit squarely on even beats. A voicing that arrives a beat early or hangs across a bar line creates the gentle push-and-pull that makes comping feel alive. The silences matter as much as the chords: leaving air gives a soloist room and gives your groove its bounce.",
          "Keep the voicings exactly as you learned them and pour all your attention into WHEN you play. Stay loose, let the rhythm carry you, and imagine you are comping behind a horn player who will thank you for every bit of space you leave."
        ],
        "keyPoints": [
          "Voicings are learned — now it is all about rhythmic placement.",
          "Push some chords off the beat for a living, breathing groove.",
          "Space is part of the music: leave room for the soloist.",
          "Same Dm9 → G13 → Cmaj9, just comped with feel."
        ],
        "example": {
          "label": "Comped ii–V–I with a little push",
          "chords": [
            {
              "root": "D",
              "quality": "rootless-m9",
              "octave": 3
            },
            {
              "root": "G",
              "quality": "rootless-13",
              "octave": 3
            },
            {
              "root": "C",
              "quality": "rootless-maj9",
              "octave": 3
            }
          ]
        },
        "practice": {
          "bpm": 64,
          "lives": 4,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "D",
                "quality": "rootless-m9",
                "octave": 3
              }
            },
            {
              "beat": 3,
              "chord": {
                "root": "G",
                "quality": "rootless-13",
                "octave": 3
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "C",
                "quality": "rootless-maj9",
                "octave": 3
              }
            },
            {
              "beat": 7,
              "chord": {
                "root": "C",
                "quality": "rootless-maj9",
                "octave": 3
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "D",
                "quality": "rootless-m9",
                "octave": 3
              }
            },
            {
              "beat": 11,
              "chord": {
                "root": "G",
                "quality": "rootless-13",
                "octave": 3
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "C",
                "quality": "rootless-maj9",
                "octave": 3
              }
            },
            {
              "beat": 15,
              "chord": {
                "root": "C",
                "quality": "rootless-maj9",
                "octave": 3
              }
            }
          ]
        }
      }
    ]
  },
  {
    "id": "u7",
    "num": 7,
    "name": "Extensions & color",
    "blurb": "9ths, 11ths, 13ths, 6ths and altered dominants — the spice of jazz.",
    "lessons": [
      {
        "id": "u7l1",
        "title": "The 9th",
        "goal": "Add the 9th to maj7, m7 and 7 chords to give them warmth and color.",
        "theory": [
          "So far your chords have topped out at the 7th. The 9th is the very next note you reach if you keep stacking thirds past the 7th — and it's the same note as the 2nd of the scale, just an octave higher. Adding it doesn't change the chord's job: a Cmaj9 still feels like home, a Dm9 is still the ii chord. It just makes the sound richer and more grown-up.",
          "Each chord family gets its own flavor of 9. On a major 7 chord the 9 sounds open and dreamy (maj9). On a minor 7 it sounds smooth and modern — Dm9 is one of the most beautiful sounds in jazz. On a dominant 7 the 9 adds a little shine on top of the tension (G9), and it's a favorite in blues and funk.",
          "The 9 sits a whole step above the root but an octave up, so your ear hears it as sweetness rather than clash — it's too far from the root to fight with it. That distance is the whole trick: extensions live up high, where they color the chord without muddying it."
        ],
        "keyPoints": [
          "The 9th = the 2nd of the scale, played an octave higher.",
          "It adds color without changing the chord's function.",
          "maj9 = dreamy, m9 = smooth, 9 = shiny tension.",
          "Extensions live up high so they color, not clash."
        ],
        "example": {
          "label": "Cmaj7 grows into Cmaj9",
          "chords": [
            {
              "root": "C",
              "quality": "maj7",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "maj9",
              "octave": 4
            },
            {
              "root": "D",
              "quality": "m9",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "9",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 58,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "maj9",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "D",
                "quality": "m9",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "G",
                "quality": "9",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "C",
                "quality": "maj9",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "D",
                "quality": "m9",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "G",
                "quality": "9",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "C",
                "quality": "maj9",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u7l2",
        "title": "The 11th & sus colors",
        "goal": "Use the 11th over minor chords and sus colors over dominants for an open, floating sound.",
        "theory": [
          "Keep stacking thirds past the 9th and you reach the 11th — the same note as the 4th of the scale, lifted an octave up. Over a minor chord the 11 is gorgeous: Dm11 stacks the root, a smooth 7th, the 9th and the 11th into a tall, airy column. It's the modal sound of a lot of 1970s jazz and neo-soul.",
          "The 11 is tricky over major and dominant chords, though, because a natural 4th clashes hard with the major 3rd sitting just below it. The classic fix is to suspend: drop the 3rd and let the 4th take its place. That's where sus chords come from. A 9sus4 — like G9sus4 — has no 3rd at all, so the 4th rings free and the chord sounds wide open, hanging, unresolved in a pleasant way.",
          "Players love sus dominants because they delay the bite of a normal V chord. G9sus4 floats for a moment, then you can let it fall into a plain G9 or straight to C, the suspension resolving down to the 3rd. It's tension you can taste, then release."
        ],
        "keyPoints": [
          "The 11th = the 4th of the scale, stacked an octave up.",
          "Minor chords love the 11; major and dominant chords clash with it.",
          "Sus chords drop the 3rd so the 4th can ring without clashing.",
          "9sus4 floats, then resolves down into the plain dominant."
        ],
        "example": {
          "label": "Floating Dm11 to G9sus4",
          "chords": [
            {
              "root": "D",
              "quality": "m11",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "9sus4",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "9",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "maj9",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 58,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "D",
                "quality": "m11",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "G",
                "quality": "9sus4",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "C",
                "quality": "maj9",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "D",
                "quality": "m11",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "G",
                "quality": "9sus4",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "G",
                "quality": "9",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "C",
                "quality": "maj9",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u7l3",
        "title": "The 13th",
        "goal": "Reach the 13th to play the full, lush dominant color used in real comping.",
        "theory": [
          "The 13th is the tallest common extension — the same note as the 6th of the scale, lifted an octave up. On a dominant 7 chord it's the crown jewel: a G13 stacks the gritty 7th, the bright 9th, and the singing 13th all above the chord. It's the sound of big-band brass and a great pianist's right hand.",
          "You won't usually play every note from root to 13th — that would be a wall of sound. In practice you pick the notes that matter most: the 3rd and 7th, which define that it's a dominant, plus the 9 and 13 on top for color. The 13 is a major sixth above the root, so it adds richness without the sourness of a sharp tension.",
          "The 13 is your default 'pretty' dominant. When a tune just says G7 and you want it to glow rather than bite, voice it as a G13. Save the altered tensions you'll meet next lesson for when you want a stronger pull home."
        ],
        "keyPoints": [
          "The 13th = the 6th of the scale, stacked up top.",
          "It's the lush, full dominant color — think big-band brass.",
          "Keep the 3rd and 7th, add 9 and 13 on top; skip the rest.",
          "Use 13 as your default 'pretty' dominant sound."
        ],
        "example": {
          "label": "G13 resolving to Cmaj9",
          "chords": [
            {
              "root": "D",
              "quality": "m9",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "13",
              "octave": 3
            },
            {
              "root": "C",
              "quality": "maj9",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 60,
          "lives": 4,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "D",
                "quality": "m9",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "G",
                "quality": "13",
                "octave": 3
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "C",
                "quality": "maj9",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "C",
                "quality": "13",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "F",
                "quality": "maj9",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "D",
                "quality": "m9",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "G",
                "quality": "13",
                "octave": 3
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "C",
                "quality": "maj9",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u7l4",
        "title": "Sixth chords (6 and 6/9)",
        "goal": "Use 6, m6 and 6/9 chords for a softer, older, settled tonic sound.",
        "theory": [
          "Before the maj7 became the default 'home' chord, jazz and pop often ended on a 6th chord — root, 3rd, 5th, and a 6th instead of a 7th. A C6 sounds settled and final in a way a Cmaj7 doesn't, because it has no leading-tone 7th itching to move up to the root. It's the warm, old-fashioned sound of standards and early-jazz endings.",
          "The minor 6 (m6) is its moody cousin. Cm6 makes a lovely, stable minor tonic — much calmer than a minor 7 chord, which always sounds like it wants to keep going. And the 6/9 chord adds the 9th on top of the 6th for a glassy, open finish: C6/9 is a favorite last chord precisely because it sounds complete and shimmering at once.",
          "Reach for a 6 or 6/9 when you want a tune to truly land — final bars, a tag ending, the resting point after all the tension. It says 'we have arrived' more gently than a maj7."
        ],
        "keyPoints": [
          "A 6 chord replaces the 7th with the 6th — settled, no pull.",
          "m6 is a calm, stable minor home (calmer than m7).",
          "6/9 adds the 9 for a glassy, complete ending.",
          "Use them on final bars when you want the tune to land."
        ],
        "example": {
          "label": "Landing on C6/9",
          "chords": [
            {
              "root": "C",
              "quality": "6",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "69",
              "octave": 4
            },
            {
              "root": "F",
              "quality": "6",
              "octave": 4
            },
            {
              "root": "F",
              "quality": "m6",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 58,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "6",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "C",
                "quality": "69",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "F",
                "quality": "6",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "F",
                "quality": "m6",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "C",
                "quality": "69",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "F",
                "quality": "m6",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "C",
                "quality": "69",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u7l5",
        "title": "Altered dominants",
        "goal": "Add altered tensions to V chords for a stronger pull home, especially into a minor I.",
        "theory": [
          "A plain dominant 7 already wants to resolve. Bend its upper tensions out of tune on purpose — flat or sharp the 9th, raise the 11th, lower the 13th — and that wanting becomes urgent. These altered dominants are loaded springs: the more tension you pack into the V chord, the harder it slingshots into the I.",
          "Each alteration has a personality. The 7b9 is dark and dramatic (it hides a diminished 7th chord inside it). The 7#9 is the gritty 'Hendrix chord,' bluesy and biting. The 7#11 is bright and floating, a Lydian-dominant shimmer. And 7alt is the kitchen-sink option: a dominant with as many altered tensions as you can fit, maximum tension for maximum release.",
          "Altered dominants shine hardest right before a minor I chord — the dark tensions match the dark destination, so a G7alt falling into Cm sounds inevitable. But they spice up any V: try a 7b9 instead of a plain 7 in your next ii–V–I and feel the pull get stronger."
        ],
        "keyPoints": [
          "Altering the V's tensions makes it pull home harder.",
          "7b9 = dark, 7#9 = gritty, 7#11 = bright, 7alt = maximum tension.",
          "They sound most natural resolving into a minor I.",
          "Swap a plain 7 for an altered one to strengthen any cadence."
        ],
        "example": {
          "label": "G7b9 slingshots into Cm",
          "chords": [
            {
              "root": "D",
              "quality": "m7b5",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "7b9",
              "octave": 3
            },
            {
              "root": "C",
              "quality": "m6",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 60,
          "lives": 4,
          "key": "Cm",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "D",
                "quality": "m7b5",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "G",
                "quality": "7b9",
                "octave": 3
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "C",
                "quality": "m6",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "G",
                "quality": "7#9",
                "octave": 3
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "C",
                "quality": "m6",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "D",
                "quality": "m7b5",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "G",
                "quality": "7alt",
                "octave": 3
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "C",
                "quality": "m6",
                "octave": 4
              }
            }
          ]
        }
      }
    ]
  },
  {
    "id": "u8",
    "num": 8,
    "name": "Turnarounds & progressions",
    "blurb": "The loops and motion that string tunes together.",
    "lessons": [
      {
        "id": "u8l1",
        "title": "The I–VI–ii–V turnaround",
        "goal": "Loop the most common four-chord turnaround in C — Cmaj7 – A7 – Dm7 – G7 — and feel how it spins you back to the top.",
        "theory": [
          "A turnaround is a short loop of chords, usually two or four bars, that sits at the end of a section and pushes you back to the beginning so a tune can repeat. The I–VI–ii–V is the workhorse: in C that is Cmaj7, then A7, then Dm7, then G7, landing back on Cmaj7.",
          "The surprise is the A7. Strictly in the key of C the chord on the sixth degree is A minor, but jazz almost always turns it into A7 instead. That makes it a secondary dominant: A7 is the V chord of Dm7, so it borrows pull from outside the key just to aim hard at the next chord. The note C# inside A7 is a leading tone that yanks the ear toward D.",
          "So the loop is really two little resolutions chained together. A7 pulls to Dm7, then Dm7–G7 is the ii–V that pulls home to C. Each chord wants the next one, which is exactly why the loop feels like it is always leaning forward and never quite resting."
        ],
        "keyPoints": [
          "I–VI–ii–V is the most common turnaround: Cmaj7 A7 Dm7 G7.",
          "The VI chord is made dominant (A7, not Am7) to become a secondary dominant.",
          "A7 is the V of Dm7 — it borrows pull to aim at the next chord.",
          "Each chord leans into the next, so the loop never sits still."
        ],
        "example": {
          "label": "I–VI–ii–V turnaround in C",
          "chords": [
            {
              "root": "C",
              "quality": "maj7",
              "octave": 4
            },
            {
              "root": "A",
              "quality": "7",
              "octave": 4
            },
            {
              "root": "D",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 60,
          "lives": 4,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "A",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "A",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u8l2",
        "title": "iii–VI–ii–V",
        "goal": "Play the smoother turnaround Em7 – A7 – Dm7 – G7 resolving to Cmaj7, and hear why starting on iii feels gentler.",
        "theory": [
          "The iii–VI–ii–V is a close cousin of the I–VI–ii–V, but it swaps the opening Cmaj7 for Em7. In C that gives Em7, A7, Dm7, G7, finally landing on Cmaj7. It is a turnaround that flows rather than announces.",
          "Why does Em7 feel smoother than Cmaj7 here? Em7 is built from E, G, B, D — and three of those notes, E, G and B, also live inside Cmaj7. So Em7 is almost a Cmaj7 in disguise, just shifted up so you are sitting on the brighter, lighter upper part of the home chord. Starting there means you slide into the loop instead of restating home and then leaving it.",
          "From Em7 the motion is pure ii–V chains: A7 still pulls to Dm7 as a secondary dominant, and Dm7–G7 still pulls to C. Notice the roots — E, A, D, G — each a fourth apart, walking smoothly down through the circle. That stepwise root motion is what gives this turnaround its silky, connected feel before it finally resolves to Cmaj7."
        ],
        "keyPoints": [
          "iii–VI–ii–V replaces the home Cmaj7 with Em7 for a smoother launch.",
          "Em7 shares E, G and B with Cmaj7 — it is home in disguise.",
          "Roots E–A–D–G move in fourths, walking around the circle.",
          "It still resolves to Cmaj7 via the ii–V Dm7–G7."
        ],
        "example": {
          "label": "iii–VI–ii–V into Cmaj7",
          "chords": [
            {
              "root": "E",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "A",
              "quality": "7",
              "octave": 4
            },
            {
              "root": "D",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 60,
          "lives": 4,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "E",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "A",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "E",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "A",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u8l3",
        "title": "Around the circle of fifths",
        "goal": "Chain ii–V and dominant motion through roots that fall in fifths, hearing each chord hand off to the next.",
        "theory": [
          "The circle of fifths is jazz's gravity. When a root drops a fifth — which is the same thing as rising a fourth — the next chord sounds like a natural landing. String a few of those moves together and you get a chain where every chord resolves into the one after it, like a row of dominoes.",
          "This level walks that chain: Em7, A7, Dm7, G7, Cmaj7, then keeps falling with C7, F7, Bbmaj7. The first half is ii–V motion (Em7–A7, then Dm7–G7) and the second half is straight dominant motion (C7–F7 before settling on Bb), but the engine is identical — the roots descend E, A, D, G, C, F, Bb, each a fifth below the last.",
          "Practising this trains your hands to anticipate. Because every root move is the same interval, your fingers learn to drop a fifth (or hop up a fourth) to the next chord before it even lands. Once the pattern is in your hands you can drop into the middle of almost any tune, because real changes are mostly little circle-of-fifths chains stitched together."
        ],
        "keyPoints": [
          "A root falling a fifth (= rising a fourth) is the strongest resolution in jazz.",
          "Chain those moves and every chord resolves into the next.",
          "ii–V pairs and plain dominants both ride the same circle motion.",
          "Learn the pattern once and you can read most real changes."
        ],
        "example": {
          "label": "Circle-of-fifths chain",
          "chords": [
            {
              "root": "D",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "7",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "maj7",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 62,
          "lives": 4,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "E",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "A",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "C",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "F",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "Bb",
                "quality": "maj7",
                "octave": 3
              }
            }
          ]
        }
      },
      {
        "id": "u8l4",
        "title": "Rhythm changes (A section)",
        "goal": "Play the opening bars of rhythm changes in Bb — Bbmaj7 G7 Cm7 F7 Dm7 G7 Cm7 F7 — the I–VI–ii–V engine running twice.",
        "theory": [
          "Rhythm changes is the chord progression from Gershwin's I Got Rhythm, and after the blues it is the most-played set of changes in jazz. Hundreds of bebop tunes were written over it precisely because its A section is built from turnarounds you already know.",
          "Look at the roots in Bb: Bbmaj7, G7, Cm7, F7, then Dm7, G7, Cm7, F7. That is the I–VI–ii–V turnaround twice in a row, with the second pass starting on Dm7 — the iii chord — for a little variety. So the whole A section is just the engine from the last few lessons, set spinning at speed.",
          "Because the chords move quickly — two per bar — keep your voicings low and lean, around octave 3 to 4, and let your hands fall the short distance from one shape to the next rather than jumping. Lock this pattern in and you have the harmonic floor under an enormous slice of the bebop repertoire."
        ],
        "keyPoints": [
          "Rhythm changes is the second most-played progression in jazz after the blues.",
          "Its A section is the I–VI–ii–V turnaround engine, run twice.",
          "The second pass starts on Dm7 (iii) for variety.",
          "Keep voicings low (octave 3–4) and move in small steps at this pace."
        ],
        "example": {
          "label": "Rhythm changes A in Bb",
          "chords": [
            {
              "root": "Bb",
              "quality": "maj7",
              "octave": 3
            },
            {
              "root": "G",
              "quality": "7",
              "octave": 3
            },
            {
              "root": "C",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "F",
              "quality": "7",
              "octave": 3
            }
          ]
        },
        "practice": {
          "bpm": 64,
          "lives": 4,
          "key": "Bb",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "Bb",
                "quality": "maj7",
                "octave": 3
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 3
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "C",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "F",
                "quality": "7",
                "octave": 3
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 3
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "C",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "F",
                "quality": "7",
                "octave": 3
              }
            }
          ]
        }
      },
      {
        "id": "u8l5",
        "title": "The backdoor ii–V",
        "goal": "Hear the borrowed resolution: Fm7 – Bb7 sliding up into Cmaj7, the backdoor that sneaks home without the usual G7.",
        "theory": [
          "The normal way home in C is the front door: Dm7–G7–Cmaj7, where G7 sits a fifth above C and pulls down onto it. The backdoor takes a different route. Instead of G7 you use Bb7 — the bVII dominant — usually set up by its own ii chord, Fm7. So the move is Fm7, Bb7, then Cmaj7.",
          "These chords are borrowed from C minor, not C major: Fm7 and Bb7 belong to the parallel minor key. That borrowing is what gives the backdoor its warm, slightly wistful glow — for a moment the music leans into the shadow of minor before stepping out into the bright major home chord.",
          "The reason it resolves so satisfyingly is the bass: Bb sits just one whole step below C, so Bb7 rises gently up into Cmaj7 rather than dropping a fifth onto it. It is a side entrance instead of the front door, and once your ear knows the sound you will hear it everywhere — it is a favourite ending and a favourite surprise in standards."
        ],
        "keyPoints": [
          "The backdoor ii–V is Fm7–Bb7 resolving up to Cmaj7.",
          "Bb7 is the bVII dominant — borrowed from the parallel minor.",
          "The root Bb rises a whole step into C, a gentler pull than G7.",
          "It gives a warm, wistful resolution loved for endings and surprises."
        ],
        "example": {
          "label": "Backdoor ii–V to Cmaj7",
          "chords": [
            {
              "root": "F",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "Bb",
              "quality": "7",
              "octave": 3
            },
            {
              "root": "C",
              "quality": "maj7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 60,
          "lives": 4,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "F",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "Bb",
                "quality": "7",
                "octave": 3
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "F",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "Bb",
                "quality": "7",
                "octave": 3
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            }
          ]
        }
      }
    ]
  },
  {
    "id": "u9",
    "num": 9,
    "name": "The blues",
    "blurb": "The 12-bar form and its jazzed-up cousins.",
    "lessons": [
      {
        "id": "u9l1",
        "title": "The 12-bar form",
        "goal": "Play a basic blues in C using dominant 7 chords over the classic 12-bar I-IV-V form.",
        "theory": [
          "The blues is built on twelve bars that repeat. In C, the three chords are C7 (the I), F7 (the IV) and G7 (the V). What makes the blues so distinctive is that all three chords are dominant 7ths, even the home chord. In most styles only the V chord is a dominant 7th, but the blues colors everything with that bluesy flat-7 sound.",
          "The standard map is four bars of I, two bars of IV, two bars of I, then one bar of V, one bar of IV, and two bars of I, with a final V to send you back around. Memorize that shape and you can play a blues in any key for the rest of your life.",
          "Notice the blues lives in a happy contradiction: the chords are major-ish dominants, but blues melodies lean on flatted thirds and sevenths. That tension between bright chords and dark melody notes is the whole flavor of the music."
        ],
        "keyPoints": [
          "Blues = 12 repeating bars of I, IV and V.",
          "Every chord is a dominant 7th, even the home chord.",
          "The form: I-I-I-I, IV-IV-I-I, V-IV-I-I.",
          "Bright chords, bluesy melody notes — that's the magic."
        ],
        "example": {
          "label": "I-IV-V in C blues",
          "chords": [
            {
              "root": "C",
              "quality": "7",
              "octave": 4
            },
            {
              "root": "F",
              "quality": "7",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 60,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "C",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "F",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "F",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "C",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "C",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "F",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 16,
              "chord": {
                "root": "C",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 18,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u9l2",
        "title": "Jazz blues in C",
        "goal": "Upgrade the plain blues by threading ii-V motion through the 12-bar form.",
        "theory": [
          "Jazz musicians love the blues but they can't resist filling its open spaces with movement. The most common upgrade is to drop in ii-V progressions — little two-chord pulls that lead your ear toward a target. Instead of sitting on one chord for two bars, you keep things flowing.",
          "Two classic moves appear here. In bar 6 the F7 slides up to F#dim7, a passing chord that smoothly walks the bass back up to C. And the last four bars become a ii-V chain: Em7-A7 (a ii-V aiming at D) leading into Dm7-G7 (the ii-V of C), the strongest possible way to set up the turnaround.",
          "Compare this to the basic blues from the last lesson. Same 12-bar skeleton, same home key, but now nearly every bar leans toward the next. That forward pull is what gives jazz blues its sophisticated, restless energy."
        ],
        "keyPoints": [
          "ii-V pairs add motion to the static blues.",
          "F#dim7 in bar 6 is a smooth passing chord back to I.",
          "The turnaround Dm7-G7 is the ii-V of C.",
          "Same 12-bar shape, far richer harmony."
        ],
        "example": {
          "label": "ii-V turnaround",
          "chords": [
            {
              "root": "D",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "7",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "maj7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 58,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "F",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "C",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "F",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "F",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "F#",
                "quality": "dim7",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "C",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "E",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 16,
              "chord": {
                "root": "A",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 18,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 20,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u9l3",
        "title": "Quick IV & turnaround",
        "goal": "Learn the quick-IV opening and cap the blues with a I-VI-ii-V turnaround.",
        "theory": [
          "A tiny tweak gives the blues instant jazz credibility: the quick IV. Instead of staying on the I chord for all of bars 1 through 4, you jump to the IV chord in bar 2 and come right back. So the opening becomes C7-F7-C7-C7. That early flash of the IV chord wakes the ear up and is heard in countless jazz and blues standards.",
          "The other essential move is the turnaround — the chords that close the form and launch you back to the top. The most useful one is I-VI-ii-V: in C that's C7-A7-Dm7-G7. Each chord falls a fifth to the next, creating a satisfying downhill tumble that lands perfectly back on the I.",
          "Notice the A7 is a dominant, not the diatonic Am7. Making that VI chord dominant gives it a stronger pull toward Dm7. This is a 'secondary dominant', and turning chords into dominants to sharpen their pull is one of the deepest habits in all of jazz."
        ],
        "keyPoints": [
          "Quick IV: hit F7 in bar 2, back to C7 — C7-F7-C7-C7.",
          "Turnaround I-VI-ii-V = C7-A7-Dm7-G7.",
          "A7 (not Am7) is a secondary dominant pulling to Dm7.",
          "Turnarounds recycle the form back to the top."
        ],
        "example": {
          "label": "I-VI-ii-V turnaround",
          "chords": [
            {
              "root": "C",
              "quality": "7",
              "octave": 4
            },
            {
              "root": "A",
              "quality": "7",
              "octave": 4
            },
            {
              "root": "D",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 60,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "F",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "C",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "C",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "C",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "A",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 16,
              "chord": {
                "root": "C",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 18,
              "chord": {
                "root": "A",
                "quality": "7",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u9l4",
        "title": "Minor blues",
        "goal": "Feel the darker color of a minor blues built on minor 7th chords.",
        "theory": [
          "Swap the dominant 7ths for minor 7ths and the whole mood changes. The minor blues keeps the same 12-bar bones but the i and iv become minor seventh chords — Cm7 and Fm7. The result is moodier, smokier, more introspective. Think of classics like 'Mr. P.C.' or 'Equinox'.",
          "The form is mostly minor, but the V chord stays dominant, and it usually gets an extra spice: a flat-9. The G7b9 leading back to Cm7 has a tense, dramatic bite that pulls hard toward the minor home chord. That single altered note is what makes the cadence sound so cinematic.",
          "Why a dominant V into a minor i? Because the dominant chord contains the leading tone — the note a half step below the root — and that note craves resolution whether home is major or minor. The b9 just deepens the drama. Minor keys almost always borrow that bright dominant V to come home."
        ],
        "keyPoints": [
          "Minor blues uses m7 chords: Cm7 (i) and Fm7 (iv).",
          "Same 12-bar form, much darker mood.",
          "The V stays dominant — often G7b9 for extra tension.",
          "The b9 pulls dramatically back to the minor home chord."
        ],
        "example": {
          "label": "Minor i-iv-V",
          "chords": [
            {
              "root": "C",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "F",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "7b9",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "m7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 56,
          "lives": 4,
          "key": "Cm",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "C",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "F",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "F",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "C",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "C",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "F",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "F",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 16,
              "chord": {
                "root": "C",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 18,
              "chord": {
                "root": "G",
                "quality": "7b9",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u9l5",
        "title": "A taste of bird blues",
        "goal": "Taste the dense ii-V harmony of a bebop 'bird' blues.",
        "theory": [
          "Charlie Parker — 'Bird' — reimagined the blues by packing it with extra ii-V progressions, so many that the chords change almost every bar. The most famous example is 'Blues for Alice'. Instead of sitting on one dominant chord, the harmony tumbles downward through a chain of related two-chord pulls.",
          "A signature move is starting on Cmaj7 rather than C7, then immediately descending: Bm7b5-E7 is a minor ii-V aiming at A, Am7-D7 is a ii-V aiming at G, and Dm7-G7 is the home ii-V back to C. Each pair starts a step lower than the last, creating that signature 'falling staircase' bebop sound.",
          "This is advanced territory, so play it slowly and just let your ear soak in the color. You don't need to analyze every chord yet — feel how each ii-V leans into the next, and notice how much busier and brighter this is than the plain three-chord blues you started with."
        ],
        "keyPoints": [
          "Bird blues stuffs the form with extra ii-Vs.",
          "It often starts on Cmaj7, not C7.",
          "Chains of ii-Vs descend like a falling staircase.",
          "Play it slow and just absorb the color."
        ],
        "example": {
          "label": "Descending ii-Vs",
          "chords": [
            {
              "root": "C",
              "quality": "maj7",
              "octave": 4
            },
            {
              "root": "B",
              "quality": "m7b5",
              "octave": 4
            },
            {
              "root": "E",
              "quality": "7",
              "octave": 4
            },
            {
              "root": "A",
              "quality": "m7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 54,
          "lives": 4,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "B",
                "quality": "m7b5",
                "octave": 3
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "E",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "A",
                "quality": "m7",
                "octave": 3
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "D",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            }
          ]
        }
      }
    ]
  },
  {
    "id": "u10",
    "num": 10,
    "name": "Modes & improvising",
    "blurb": "The scales you solo with over each chord.",
    "lessons": [
      {
        "id": "u10l1",
        "title": "Modes overview",
        "goal": "Learn the C major scale as the parent of all seven modes.",
        "theory": [
          "Here is the big secret of modes: they are all the same seven notes. The C major scale (C D E F G A B) contains every mode you will ever play in this key. What changes is where you start and which note feels like home. Start on C and you get Ionian. Start on D and you get Dorian. Start on G and you get Mixolydian. Same ingredients, different recipe.",
          "Because the notes never change, learning modes is not about memorizing seven separate scales. It is about hearing how each starting point colors the music. The note you treat as the center pulls the other notes into a new pattern of bright and dark, tense and relaxed.",
          "For now, just play the C major scale up and feel it resolve back to C. This is your reference point. Every mode in this unit is this exact scale viewed from a different chair at the table."
        ],
        "keyPoints": [
          "All seven modes share the same notes; only the starting point changes.",
          "The C major scale is the parent scale for this whole unit.",
          "The note you treat as home is what gives a mode its color."
        ],
        "example": {
          "label": "C major scale, the parent",
          "chords": [
            {
              "root": "C",
              "quality": "note",
              "octave": 4
            },
            {
              "root": "E",
              "quality": "note",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "note",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "note",
              "octave": 5
            }
          ]
        },
        "practice": {
          "bpm": 60,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "D",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "E",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "F",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "G",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "A",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "B",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 5
              }
            }
          ]
        }
      },
      {
        "id": "u10l2",
        "title": "Dorian over ii",
        "goal": "Play D Dorian, the go-to scale for minor 7 (ii) chords.",
        "theory": [
          "D Dorian uses the same seven notes as C major, but now D is home: D E F G A B C D. Because it starts on D, the scale spells out a minor sound with a flat third (F) and flat seventh (C). That makes it the natural fit for a minor 7 chord, especially the ii chord in a key.",
          "What makes Dorian special among minor scales is its natural sixth, the B. Most minor sounds use a flat sixth, which is dark and a little sad. Dorian's raised sixth brightens things up, giving it a cool, open, jazzy quality that improvisers love over ii chords.",
          "When you see Dm7 in a tune in C major, reach for D Dorian. The notes already belong to the key, so your line will sound smooth and inside while still outlining that minor color."
        ],
        "keyPoints": [
          "D Dorian is C major's notes starting from D.",
          "It is the first-choice scale over minor 7 (ii) chords.",
          "The natural sixth is what makes Dorian brighter than other minor scales."
        ],
        "example": {
          "label": "D Dorian over Dm7",
          "chords": [
            {
              "root": "D",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "D",
              "quality": "note",
              "octave": 4
            },
            {
              "root": "F",
              "quality": "note",
              "octave": 4
            },
            {
              "root": "B",
              "quality": "note",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 60,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "D",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "E",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "F",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "G",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "A",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "B",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 5
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "D",
                "quality": "note",
                "octave": 5
              }
            }
          ]
        }
      },
      {
        "id": "u10l3",
        "title": "Mixolydian over V",
        "goal": "Play G Mixolydian, the scale for dominant 7 (V) chords.",
        "theory": [
          "G Mixolydian is the C major scale starting on G: G A B C D E F G. The key feature is the flat seventh, the F natural. A major scale on G would have an F sharp, but Mixolydian lowers it. That flat seventh is exactly what turns a plain major chord into a dominant 7 chord.",
          "This is why Mixolydian is the home scale for V chords. In the key of C, the G7 is the dominant that wants to pull back to C. Playing G Mixolydian over it gives you a bright, bluesy, slightly unresolved sound that begs for resolution.",
          "Notice that Mixolydian is just a major scale with one note flattened. If you already know your major scale, you only have to lower the seventh by a half step to unlock the dominant sound. That one note is the whole trick."
        ],
        "keyPoints": [
          "G Mixolydian is C major's notes starting from G.",
          "Its flat seventh (F natural) creates the dominant 7 sound.",
          "Mixolydian is a major scale with a lowered seventh."
        ],
        "example": {
          "label": "G Mixolydian over G7",
          "chords": [
            {
              "root": "G",
              "quality": "7",
              "octave": 3
            },
            {
              "root": "G",
              "quality": "note",
              "octave": 4
            },
            {
              "root": "B",
              "quality": "note",
              "octave": 4
            },
            {
              "root": "F",
              "quality": "note",
              "octave": 5
            }
          ]
        },
        "practice": {
          "bpm": 60,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "G",
                "quality": "note",
                "octave": 3
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "A",
                "quality": "note",
                "octave": 3
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "B",
                "quality": "note",
                "octave": 3
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "D",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "E",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "F",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "G",
                "quality": "note",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u10l4",
        "title": "Ionian & Lydian over I",
        "goal": "Compare C Ionian and C Lydian to hear the bright #11 sound over maj7.",
        "theory": [
          "Ionian is just the plain major scale: C D E F G A B. It is the default sound over a major 7 chord, warm and resolved. But there is a slightly more colorful option that jazz players reach for over the I chord: Lydian.",
          "C Lydian is C D E F# G A B. The only difference from the major scale is one raised note, the F becomes F sharp. That single note is the famous sharp eleven (#11), and it gives the major sound a floating, shimmering, dreamy quality. It removes the slightly clunky tension that a natural fourth creates against a major chord.",
          "Play them back to back and listen. Ionian is the home-sweet-home version. Lydian is the same chord lit up with a touch of magic. Both work over Cmaj7, so let your ear choose the mood you want."
        ],
        "keyPoints": [
          "Ionian is the plain major scale, the default over maj7.",
          "Lydian raises the fourth to #11 for a brighter, floating color.",
          "One note (F to F#) is the entire difference between them."
        ],
        "example": {
          "label": "Ionian then Lydian over Cmaj7",
          "chords": [
            {
              "root": "F",
              "quality": "note",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "maj7",
              "octave": 4
            },
            {
              "root": "F#",
              "quality": "note",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "maj7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 58,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "D",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "E",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "F",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "D",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "E",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "F#",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 16,
              "chord": {
                "root": "G",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 18,
              "chord": {
                "root": "A",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 20,
              "chord": {
                "root": "B",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 22,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 5
              }
            }
          ]
        }
      },
      {
        "id": "u10l5",
        "title": "Soloing over a ii–V–I",
        "goal": "Switch scales as the chords change across a ii-V-I in C.",
        "theory": [
          "Now we put it all together. A ii-V-I in C is Dm7, then G7, then Cmaj7. The beautiful part is that all three chords live inside the C major scale, so you could solo on those seven notes the whole time. But thinking in modes helps you target the right colors as each chord goes by.",
          "Over Dm7, think D Dorian. Over G7, think G Mixolydian. Over Cmaj7, think C Ionian. They are the same notes, but starting your lines from the chord's root keeps your phrasing locked to the harmony and makes each chord change feel intentional.",
          "Practice this run as three connected ideas: a D Dorian phrase, a G Mixolydian phrase, then landing softly into C major. Switching your mental home note as the chords move is the core skill of jazz soloing over a ii-V-I."
        ],
        "keyPoints": [
          "ii-V-I in C is Dm7, G7, Cmaj7.",
          "Use Dorian over ii, Mixolydian over V, Ionian over I.",
          "All three modes share the C major notes; the target note changes."
        ],
        "example": {
          "label": "ii-V-I in C",
          "chords": [
            {
              "root": "D",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "7",
              "octave": 3
            },
            {
              "root": "C",
              "quality": "maj7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 60,
          "lives": 4,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "D",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "F",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "A",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 5
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "G",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "B",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "F",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "D",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 16,
              "chord": {
                "root": "E",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 18,
              "chord": {
                "root": "G",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 20,
              "chord": {
                "root": "B",
                "quality": "note",
                "octave": 4
              }
            },
            {
              "beat": 22,
              "chord": {
                "root": "C",
                "quality": "note",
                "octave": 5
              }
            }
          ]
        }
      }
    ]
  },
  {
    "id": "u11",
    "num": 11,
    "name": "Standards",
    "blurb": "Put it all together on real tune changes (chords only). These are the same shapes you've been building all along, now arranged into the actual progressions of jazz standards. No melody, no improv yet: just walk the harmony of real songs and feel how ii-V-I motion, minor keys, and chromatic colors live inside the tunes people call on the bandstand.",
    "lessons": [
      {
        "id": "u11l1",
        "title": "Autumn Leaves (A)",
        "goal": "Play the A-section changes of Autumn Leaves and hear a major ii-V-I flow straight into its relative minor ii-V-i.",
        "theory": [
          "Autumn Leaves is the tune almost everyone learns first, and for good reason: its A section is two ii-V-I cells back to back. The opening is a textbook major ii-V-I in Bb (Cm7 to F7 to Bbmaj7, with Ebmaj7 as a soft landing), and what follows is the relative minor ii-V-i in G minor (Am7b5 to D7 to Gm7).",
          "Notice that Bb major and G minor are relatives: they share the same key signature of two flats. That is the magic of this tune. You barely move your hands, yet the music slides from bright major into wistful minor, because both halves are drawing on the same pool of notes.",
          "The one genuinely new shape here is the half-diminished, Am7b5, the ii chord of a minor key. Hear how dark it sounds next to the plain m7 chords. That flat fifth is the door into the minor world, and D7 is the dominant that pushes you through it onto Gm7.",
          "Keep everything in octave 3 to 4 so the seventh chords sit warm and full rather than thin and high. Let each chord ring for its full two beats and listen to the roots walking down through the changes."
        ],
        "keyPoints": [
          "The A section is a major ii-V-I in Bb, then a minor ii-V-i in G minor.",
          "Bb major and G minor are relatives: same key signature, different mood.",
          "m7b5 (half-diminished) is the ii chord of a minor key.",
          "Stay in octave 3-4 to keep the seventh chords warm."
        ],
        "example": {
          "label": "Major ii-V-I, then minor ii",
          "chords": [
            {
              "root": "C",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "F",
              "quality": "7",
              "octave": 4
            },
            {
              "root": "Bb",
              "quality": "maj7",
              "octave": 4
            },
            {
              "root": "A",
              "quality": "m7b5",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 60,
          "lives": 5,
          "key": "Bb",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "F",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "Bb",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "Eb",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "A",
                "quality": "m7b5",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "D",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "G",
                "quality": "m7",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u11l2",
        "title": "Blue Bossa",
        "goal": "Play the opening phrase of Blue Bossa and feel a minor ii-V-i settle home in C minor.",
        "theory": [
          "Blue Bossa, written by Kenny Dorham, is the friendliest way into a minor key. The first phrase parks on the i chord (Cm7), drifts to the iv (Fm7), then runs the minor ii-V-i: Dm7b5 to G7 back to Cm7. That ii-V-i is the engine of nearly every minor tune.",
          "Compare it to the major ii-V-i you already know. In major, the ii is a plain m7. In minor, the ii becomes m7b5 (half-diminished) and the V is a dominant 7 carrying extra tension from the minor scale. The pull onto the minor i is even stronger and more dramatic than the major resolution.",
          "Fm7 here is the iv chord, a gentle subdominant color drawn straight from the C minor sound. It widens the harmony before the ii-V tightens everything back toward home.",
          "It is a bossa, so imagine a relaxed Latin sway underneath. Keep the chords in octave 3 to 4, let them breathe over two beats each, and feel the calm tension-and-release of returning to Cm7."
        ],
        "keyPoints": [
          "Dm7b5 to G7 to Cm7 is the minor ii-V-i, the core of the tune.",
          "In minor, the ii chord is m7b5, not a plain m7.",
          "Fm7 is the iv chord, a soft subdominant color.",
          "Feel the relaxed bossa sway as you land back on Cm7."
        ],
        "example": {
          "label": "Minor ii-V-i home",
          "chords": [
            {
              "root": "D",
              "quality": "m7b5",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "7",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "m7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 58,
          "lives": 5,
          "key": "Cm",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "F",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "D",
                "quality": "m7b5",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "C",
                "quality": "m7",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u11l3",
        "title": "Fly Me to the Moon (changes)",
        "goal": "Walk the descending circle-of-fifths changes of Fly Me to the Moon and hear the roots step down a fifth at a time.",
        "theory": [
          "Fly Me to the Moon is built on the most satisfying motion in all of harmony: the circle of fifths. For most of the loop each chord's root drops a fifth (the same as rising a fourth): Am7 to Dm7 to G7 to Cmaj7 to Fmaj7. The bass line tumbles downhill and it sounds inevitable.",
          "Right in the middle sits a familiar friend, the ii-V-I in C major (Dm7 to G7 to Cmaj7). The tune keeps the same fifths-motion flowing on either side of it, so the whole progression feels like one long graceful fall rather than separate chords.",
          "The last three chords, Bm7b5 to E7 to Am7, are a minor ii-V-i landing on A minor, the relative minor of C. Here the roots move B down to E (a fifth) and E down to A (a fifth); the single bigger step is Fmaj7 into Bm7b5, which slips the tune over into that closing minor cadence. So one tune teaches you both flavors of ii-V in a single loop: major in the middle, minor at the end.",
          "Let each chord ring for two beats and follow the roots: A, D, G, C, F, B, E, A. That tumble through fifths is a pattern you will hear in hundreds of standards once you can feel it here."
        ],
        "keyPoints": [
          "The tune mostly moves around the circle of fifths, roots dropping a fifth at a time.",
          "Dm7-G7-Cmaj7 is a major ii-V-I sitting in the middle.",
          "Bm7b5-E7-Am7 is a minor ii-V-i landing on the relative minor.",
          "Follow the roots: A D G C F B E A."
        ],
        "example": {
          "label": "ii-V-I around the circle",
          "chords": [
            {
              "root": "D",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "7",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "maj7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 64,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "A",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "F",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "B",
                "quality": "m7b5",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "E",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "A",
                "quality": "m7",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u11l4",
        "title": "Take the A Train (A)",
        "goal": "Play the A-section of Take the A Train and hear the bright II7 (#11) color that makes this tune instantly recognizable.",
        "theory": [
          "Take the A Train, Billy Strayhorn's anthem for the Ellington band, opens by sitting happily on the I chord (Cmaj7) for two full bars. Then comes its signature move: instead of a normal ii chord, it leaps to D7, a major dominant built on the second degree. This is the II7, and it gives the tune its sunny, slightly cheeky lift.",
          "That D7 wants a #11 (the note G#) painted on top. The raised eleventh is what gives A Train its shimmering, lifted-up quality; without it the chord sounds ordinary, with it the chord glows. We voice it here as D7#11 so you can hear that exact color.",
          "After the II7 has its moment, the harmony behaves: D7 relaxes into Dm7, the normal ii, then G7 is the V, and you resolve back to Cmaj7. So that surprising D7 turns out to be a colorful detour on the way to a plain ii-V-I in C.",
          "Listen for the contrast: the bright, unexpected II7 against the smooth, familiar ii-V-I that follows. That push and release is the whole charm of the A section. Keep it in octave 3 to 4 and let the D7#11 ring long enough to enjoy it."
        ],
        "keyPoints": [
          "A Train opens on Cmaj7, then jumps to a bright II7 (D7).",
          "The #11 (G#) on the D7 is the chord's signature glowing color.",
          "D7 then settles to Dm7-G7-Cmaj7, an ordinary ii-V-I.",
          "Enjoy the contrast: surprising II7, then smooth resolution."
        ],
        "example": {
          "label": "The II7 #11 color",
          "chords": [
            {
              "root": "C",
              "quality": "maj7",
              "octave": 4
            },
            {
              "root": "D",
              "quality": "7#11",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "maj7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 62,
          "lives": 5,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "D",
                "quality": "7#11",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "D",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            }
          ]
        }
      },
      {
        "id": "u11l5",
        "title": "A ii-V-I medley",
        "goal": "Run major ii-V-Is through three keys in a row (C, F, then Bb) as a graduation lap around everything you have learned.",
        "theory": [
          "This is your victory lap. A ii-V-I is the single most common phrase in jazz, and being able to play it in any key is what lets you sit in on any tune. Here you string three together: C major, then F major, then Bb major, moving the same shape down through the keys.",
          "Watch the pattern repeat. In C it is Dm7 to G7 to Cmaj7. In F it is Gm7 to C7 to Fmaj7. In Bb it is Cm7 to F7 to Bbmaj7. Same three roles every time, the ii, the V, and the I, just transposed. Once your ears recognize the shape, you can find it in any key.",
          "Notice each new key starts a fourth above its predecessor (C, then F, then Bb), the same circle-of-fifths pull you met in Fly Me to the Moon. The keys themselves are walking around the circle, which is why the medley flows rather than jumps.",
          "Keep it steady and warm in octave 3 to 4. Do not rush; let every I chord settle for its full two beats before the next ii pulls you onward. If you can play this cleanly, you have the foundation under every standard in the book."
        ],
        "keyPoints": [
          "ii-V-I is the most common phrase in jazz; learn it in every key.",
          "Same three roles each time (ii, V, I), just transposed.",
          "The keys C, F, Bb walk around the circle of fifths.",
          "Let each I chord settle before the next ii pulls you on."
        ],
        "example": {
          "label": "ii-V-I in C, then F",
          "chords": [
            {
              "root": "D",
              "quality": "m7",
              "octave": 4
            },
            {
              "root": "G",
              "quality": "7",
              "octave": 4
            },
            {
              "root": "C",
              "quality": "maj7",
              "octave": 4
            }
          ]
        },
        "practice": {
          "bpm": 66,
          "lives": 4,
          "key": "C",
          "events": [
            {
              "beat": 0,
              "chord": {
                "root": "D",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 2,
              "chord": {
                "root": "G",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 4,
              "chord": {
                "root": "C",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 6,
              "chord": {
                "root": "G",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 8,
              "chord": {
                "root": "C",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 10,
              "chord": {
                "root": "F",
                "quality": "maj7",
                "octave": 4
              }
            },
            {
              "beat": 12,
              "chord": {
                "root": "C",
                "quality": "m7",
                "octave": 4
              }
            },
            {
              "beat": 14,
              "chord": {
                "root": "F",
                "quality": "7",
                "octave": 4
              }
            },
            {
              "beat": 16,
              "chord": {
                "root": "Bb",
                "quality": "maj7",
                "octave": 4
              }
            }
          ]
        }
      }
    ]
  }
];

export const LESSONS = {};
export const LEVELS = {};
for (const u of UNITS) {
  u.lessons.forEach((ls, i) => {
    LESSONS[ls.id] = { ...ls, unitId: u.id, unitName: u.name, unitNum: u.num, index: i };
    LEVELS[ls.id] = { ...ls.practice, id: ls.id, name: ls.title, unitId: u.id, unitName: u.name };
  });
}
