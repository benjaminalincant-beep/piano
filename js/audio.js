// Audio engine — Salamander Grand Piano samples (tonejs CDN) with Web Audio API.
// Falls back to oscillator synth if samples can't load.
// Exposes getWaveform() for the in-game visualiser.

import { midiToFreq } from "./music.js";

const SALAMANDER = "https://tonejs.github.io/audio/salamander/";
const SAMPLES = [
  "A0","C1","D#1","F#1","A1","C2","D#2","F#2",
  "A2","C3","D#3","F#3","A3","C4","D#4","F#4",
  "A4","C5","D#5","F#5","A5","C6","D#6","F#6",
  "A6","C7","D#7","F#7","A7","C8",
];
const SEMI = { C:0,"C#":1,D:2,"D#":3,E:4,F:5,"F#":6,G:7,"G#":8,A:9,"A#":10,B:11 };

function nameToMidi(n) {
  const m = n.match(/^([A-G]#?)(-?\d+)$/);
  return (parseInt(m[2]) + 1) * 12 + SEMI[m[1]];
}

export class Synth {
  constructor() {
    this.ctx        = null;
    this.master     = null;
    this.analyser   = null;
    this.voices     = new Map();   // midi → voice descriptor
    this.enabled    = true;
    this._buffers   = new Map();   // sampleName → AudioBuffer
    this._midiMap   = [];          // [{midi, name}] sorted
    this._ready     = false;       // true once ≥ 4 samples decoded
  }

  async resume() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AC({ latencyHint: "interactive" });

      this.master = this.ctx.createGain();
      this.master.gain.value = 0.8;

      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 1024;
      this.analyser.smoothingTimeConstant = 0.85;

      const lim = this.ctx.createDynamicsCompressor();
      lim.threshold.value = -8;
      lim.knee.value      =  3;
      lim.ratio.value     = 10;
      lim.attack.value    = 0.001;
      lim.release.value   = 0.12;

      this.master.connect(this.analyser);
      this.analyser.connect(lim);
      lim.connect(this.ctx.destination);

      this._loadSalamander();
    }
    if (this.ctx.state === "suspended") await this.ctx.resume();
  }

  async _loadSalamander() {
    // Load centre octaves first so playback starts quickly
    const sorted = [...SAMPLES].sort((a, b) =>
      Math.abs(nameToMidi(a) - 60) - Math.abs(nameToMidi(b) - 60)
    );

    for (const name of sorted) {
      try {
        const resp = await fetch(`${SALAMANDER}${name}.mp3`);
        if (!resp.ok) continue;
        const arr = await resp.arrayBuffer();
        const buf = await this.ctx.decodeAudioData(arr);
        this._buffers.set(name, buf);
        this._midiMap = [...this._buffers.keys()]
          .map(n => ({ midi: nameToMidi(n), name: n }))
          .sort((a, b) => a.midi - b.midi);
        if (!this._ready && this._buffers.size >= 4) this._ready = true;
      } catch (_) { /* skip */ }
    }
  }

  _closest(midi) {
    if (!this._midiMap.length) return null;
    return this._midiMap.reduce((best, cur) =>
      Math.abs(cur.midi - midi) < Math.abs(best.midi - midi) ? cur : best
    );
  }

  noteOn(midi, velocity = 0.8) {
    if (!this.enabled || !this.ctx) return;
    this.noteOff(midi);

    if (this._ready) {
      const sample = this._closest(midi);
      if (sample) {
        const buf = this._buffers.get(sample.name);
        const src = this.ctx.createBufferSource();
        src.buffer = buf;
        src.playbackRate.value = Math.pow(2, (midi - sample.midi) / 12);

        const gain = this.ctx.createGain();
        const now  = this.ctx.currentTime;
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(Math.max(0.01, velocity * 1.1), now + 0.004);

        src.connect(gain);
        gain.connect(this.master);
        src.start(now);

        const voice = { type: "piano", src, gain };
        src.onended = () => {
          if (this.voices.get(midi) === voice) this.voices.delete(midi);
          try { gain.disconnect(); } catch (_) {}
        };
        this.voices.set(midi, voice);
        return;
      }
    }

    this._synthOn(midi, velocity);
  }

  noteOff(midi) {
    const v = this.voices.get(midi);
    if (!v || !this.ctx) return;
    this.voices.delete(midi);
    const now = this.ctx.currentTime;

    if (v.type === "piano") {
      try {
        v.gain.gain.cancelScheduledValues(now);
        v.gain.gain.setValueAtTime(Math.max(v.gain.gain.value, 0.001), now);
        v.gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
        v.src.stop(now + 0.6);
      } catch (_) {}
    } else {
      this._synthRelease(v, false);
    }
  }

  // Returns Float32Array waveform for the visualiser, or null.
  getWaveform() {
    if (!this.analyser) return null;
    const buf = new Float32Array(this.analyser.fftSize);
    this.analyser.getFloatTimeDomainData(buf);
    return buf;
  }

  // ---- oscillator fallback -------------------------------------------------
  _synthOn(midi, velocity = 0.8) {
    if (!this.ctx) return;
    const now  = this.ctx.currentTime;
    const freq = midiToFreq(midi);

    const gain   = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    filter.type            = "lowpass";
    filter.frequency.value = 1200 + velocity * 4000;
    filter.Q.value         = 0.7;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    osc1.type = "triangle"; osc2.type = "sine";
    osc1.frequency.value = freq;
    osc2.frequency.value = freq * 2.001;

    const peak = 0.18 + velocity * 0.22;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(peak, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);

    osc1.connect(gain); osc2.connect(gain);
    gain.connect(filter); filter.connect(this.master);
    osc1.start(now); osc2.start(now);
    osc1.stop(now + 2.5); osc2.stop(now + 2.5);

    const voice = { type: "osc", osc1, osc2, gain, filter };
    osc1.onended = () => {
      if (this.voices.get(midi) === voice) this.voices.delete(midi);
      try { gain.disconnect(); filter.disconnect(); } catch (_) {}
    };
    this.voices.set(midi, voice);
  }

  _synthRelease(v, immediate = false) {
    if (!v || v.type !== "osc" || !this.ctx) return;
    const now     = this.ctx.currentTime;
    const release = immediate ? 0.02 : 0.25;
    try {
      v.gain.gain.cancelScheduledValues(now);
      v.gain.gain.setValueAtTime(Math.max(v.gain.gain.value, 0.0001), now);
      v.gain.gain.exponentialRampToValueAtTime(0.0001, now + release);
      v.osc1.stop(now + release + 0.05);
      v.osc2.stop(now + release + 0.05);
    } catch (_) {}
  }
}
