# Jazz Keys

A browser game that teaches jazz piano. Chords fall toward an on-screen keyboard;
play the matching notes in time on your MIDI piano to earn stars. Built on the
Web MIDI API — no install, works with any USB or Bluetooth MIDI keyboard.

## Run it

Web MIDI and ES modules need a secure context, so serve over `http://localhost`
(opening `index.html` directly with `file://` will not work):

```bash
cd jazz-keys
python3 -m http.server 8000
# then open http://localhost:8000 in Chrome or Edge
```

Click **Connect MIDI keyboard** and approve the browser's MIDI prompt. No
hardware? Play with the computer keyboard: `a s d f g h j k` are the white keys,
`w e t y u` the black keys.

## How it works

| File | Role |
|------|------|
| `js/music.js` | Note/MIDI math and chord construction |
| `js/levels.js` | The curriculum: worlds → levels → timed chord events |
| `js/midi.js` | Web MIDI input + computer-keyboard fallback, one event stream |
| `js/audio.js` | Web Audio synth for note feedback |
| `js/game.js` | Piano-roll rendering, timing windows, scoring, stars |
| `js/app.js` | Screen navigation, level select, results, star persistence |

## Gameplay

- Notes fall to the hit line over ~2 seconds. Play each note within ±200 ms.
- Timing tiers: **Perfect** (±70 ms), **Great** (±130 ms), **Good** (±200 ms).
- Combo multiplies your score; missing a whole chord costs a life.
- Stars at the end: 3 ★ ≥ 90% accuracy, 2 ★ ≥ 70%, 1 ★ ≥ 50%. Best result is saved.

## Roadmap

This is a vertical slice (2 worlds). Planned: rootless & quartal voicings,
comping rhythms, full standards as boss levels, velocity-sensitive "feel"
scoring, left/right-hand split, and improv challenges over backing tracks.
