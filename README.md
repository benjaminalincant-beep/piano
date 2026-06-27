# Jazz Keys

A browser game that teaches jazz piano. Chords fall toward an on-screen keyboard;
play the matching notes in time on your MIDI piano to earn stars. Built on the
Web MIDI API — no install, works with any USB or Bluetooth MIDI keyboard.

## Run the full PDF → Survival pipeline

The production path uses Audiveris 5.10.2 to transcribe printed PDF scores to
MusicXML, validates the musical structure, generates a deterministic MIDI file,
and sends the same normalized events to the Survival game.

```bash
docker build -t jazz-keys .
docker run --rm -p 3000:3000 jazz-keys
# open http://localhost:3000 in Chrome or Edge
```

The container installs the official Ubuntu Audiveris package. For development
without PDF recognition, `npm install && npm start` runs the UI and API, but
`AUDIVERIS_BIN` must point to a local Audiveris executable before conversion.

## Recognition quality

The pipeline deliberately does not promise infallible OMR. Printed Common
Western Music Notation is supported; handwritten and unusual notation are not.

Every conversion:

1. validates the upload type, signature, and size;
2. runs Audiveris in isolated temporary storage with a hard timeout;
3. parses MusicXML in document order, including chords, rests, voices,
   `backup`/`forward`, accidentals, divisions, and tempo;
4. checks missing musical metadata, invalid pitches, suspicious density,
   part count, and the number of recognized events;
5. blocks automatic launch when the confidence report requires review;
6. generates MIDI and gameplay events from one normalized source, preventing
   the downloaded MIDI and the game from drifting apart.

The API endpoint is `POST /api/score-to-level` with one multipart field named
`score`. Successful responses contain `level`, `report`, and a base64 Standard
MIDI File in `midi`.

Run checks with:

```bash
npm test
npm run check
npm audit
```

## How it works

| File | Role |
|------|------|
| `js/music.js` | Note/MIDI math and chord construction |
| `js/levels.js` | The curriculum: worlds → levels → timed chord events |
| `js/midi.js` | Web MIDI input + computer-keyboard fallback, one event stream |
| `js/audio.js` | Web Audio synth for note feedback |
| `js/game.js` | Piano-roll rendering, timing windows, scoring, stars |
| `js/app.js` | Screen navigation, level select, results, star persistence |
| `js/score-import.js` | Upload state, API contract, and normalized import data |
| `server/omr.js` | Isolated Audiveris batch orchestration |
| `server/musicxml.js` | Ordered MusicXML → playable events conversion |
| `server/midi-writer.js` | Deterministic Standard MIDI File generation |

## Gameplay

- Notes fall to the hit line over ~2 seconds. Play each note within ±200 ms.
- Timing tiers: **Perfect** (±70 ms), **Great** (±130 ms), **Good** (±200 ms).
- Combo multiplies your score; missing a whole chord costs a life.
- Stars at the end: 3 ★ ≥ 90% accuracy, 2 ★ ≥ 70%, 1 ★ ≥ 50%. Best result is saved.

## Roadmap

This is a vertical slice (2 worlds). Planned: rootless & quartal voicings,
comping rhythms, full standards as boss levels, velocity-sensitive "feel"
scoring, left/right-hand split, and improv challenges over backing tracks.
