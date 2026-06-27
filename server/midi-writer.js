const NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

function variableLength(value) {
  let buffer = value & 0x7f;
  const bytes = [];
  while ((value >>= 7)) {
    buffer <<= 8;
    buffer |= (value & 0x7f) | 0x80;
  }
  while (true) {
    bytes.push(buffer & 0xff);
    if (buffer & 0x80) buffer >>= 8;
    else break;
  }
  return bytes;
}

function u16(value) {
  return [(value >> 8) & 0xff, value & 0xff];
}

function u32(value) {
  return [(value >> 24) & 0xff, (value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
}

export function midiName(midi) {
  return `${NOTE_NAMES[midi % 12]}${Math.floor(midi / 12) - 1}`;
}

export function writeMidi(level) {
  const ticksPerBeat = 480;
  const tempo = Math.round(60000000 / level.bpm);
  const scheduled = [];

  for (const event of level.events) {
    const start = Math.max(0, Math.round(event.beat * ticksPerBeat));
    const duration = Math.max(60, Math.round((event.duration || 1) * ticksPerBeat));
    for (const midi of event.midis) {
      scheduled.push({ tick: start, order: 1, bytes: [0x90, midi, 96] });
      scheduled.push({ tick: start + duration, order: 0, bytes: [0x80, midi, 0] });
    }
  }
  scheduled.sort((a, b) => a.tick - b.tick || a.order - b.order);

  const track = [
    0x00, 0xff, 0x51, 0x03, (tempo >> 16) & 0xff, (tempo >> 8) & 0xff, tempo & 0xff,
    0x00, 0xff, 0x58, 0x04, 0x04, 0x02, 0x18, 0x08,
  ];
  let previousTick = 0;
  for (const event of scheduled) {
    track.push(...variableLength(event.tick - previousTick), ...event.bytes);
    previousTick = event.tick;
  }
  track.push(0x00, 0xff, 0x2f, 0x00);

  return Buffer.from([
    0x4d, 0x54, 0x68, 0x64, ...u32(6), ...u16(0), ...u16(1), ...u16(ticksPerBeat),
    0x4d, 0x54, 0x72, 0x6b, ...u32(track.length), ...track,
  ]);
}
