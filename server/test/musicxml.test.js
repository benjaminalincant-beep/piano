import assert from "node:assert/strict";
import test from "node:test";
import { musicXmlToLevel } from "../musicxml.js";
import { writeMidi } from "../midi-writer.js";

const SCORE = `<?xml version="1.0" encoding="UTF-8"?>
<score-partwise version="4.0">
  <part-list><score-part id="P1"><part-name>Piano</part-name></score-part></part-list>
  <part id="P1">
    <measure number="1">
      <attributes>
        <divisions>2</divisions>
        <time><beats>4</beats><beat-type>4</beat-type></time>
        <clef><sign>G</sign><line>2</line></clef>
      </attributes>
      <direction><sound tempo="120"/></direction>
      <note><pitch><step>C</step><octave>4</octave></pitch><duration>2</duration><voice>1</voice></note>
      <note><chord/><pitch><step>E</step><octave>4</octave></pitch><duration>2</duration><voice>1</voice></note>
      <note><rest/><duration>2</duration><voice>1</voice></note>
      <note><pitch><step>D</step><alter>1</alter><octave>4</octave></pitch><duration>2</duration><voice>1</voice></note>
      <backup><duration>6</duration></backup>
      <note><pitch><step>C</step><octave>3</octave></pitch><duration>6</duration><voice>2</voice></note>
    </measure>
    <measure number="2">
      <note><pitch><step>G</step><octave>4</octave></pitch><duration>2</duration><voice>1</voice></note>
    </measure>
  </part>
</score-partwise>`;

test("converts MusicXML pitch, chords, rests, tempo and polyphony", () => {
  const { level, report } = musicXmlToLevel(SCORE, "Test");
  assert.equal(level.bpm, 120);
  assert.equal(level.name, "Test");
  assert.deepEqual(level.events, [
    { beat: 0, duration: 3, midis: [48, 60, 64] },
    { beat: 2, duration: 1, midis: [63] },
    { beat: 3, duration: 1, midis: [67] },
  ]);
  assert.equal(report.stats.voices, 2);
  assert.equal(report.stats.rests, 1);
  assert.equal(report.stats.invalidPitches, 0);
  assert.equal(report.needsReview, true);
});

test("writes a deterministic standard MIDI file", () => {
  const { level } = musicXmlToLevel(SCORE, "Test");
  const midi = writeMidi(level);
  assert.equal(midi.subarray(0, 4).toString("ascii"), "MThd");
  assert.equal(midi.subarray(14, 18).toString("ascii"), "MTrk");
  assert.ok(midi.includes(Buffer.from([0xff, 0x51, 0x03])));
  assert.deepEqual(writeMidi(level), midi);
});

test("rejects XML without playable notes", () => {
  assert.throws(
    () => musicXmlToLevel("<score-partwise><part><measure/></part></score-partwise>"),
    /Aucune note exploitable/
  );
});
