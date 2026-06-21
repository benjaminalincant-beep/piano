// Audio engine. Primary voice is a real sampled grand piano (smplr, loaded from
// a CDN). If that can't load (offline, blocked), it falls back to a built-in
// oscillator synth so the app always makes sound. Same interface either way:
// resume(), noteOn(midi, velocity), noteOff(midi).

import { midiToFreq } from "./music.js";

const SMPLR_URL = "https://esm.sh/smplr@0.16.0";

export class Synth {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.limiter = null;
    this.voices = new Map();   // fallback synth voices: midi -> {osc1, osc2, gain, filter}
    this.enabled = true;
    this.piano = null;         // sampled piano once loaded
    this.loadingPiano = false;
  }

  // Must be resumed from a user gesture (browser autoplay policy).
  async resume() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.6;
      this.limiter = this.ctx.createDynamicsCompressor();
      this.limiter.threshold.value = -10;
      this.limiter.knee.value = 0;
      this.limiter.ratio.value = 12;
      this.limiter.attack.value = 0.003;
      this.limiter.release.value = 0.1;
      this.master.connect(this.limiter);
      this.limiter.connect(this.ctx.destination);
      this._loadPiano();
    }
    if (this.ctx.state === "suspended") await this.ctx.resume();
  }

  async _loadPiano() {
    if (this.piano || this.loadingPiano) return;
    this.loadingPiano = true;
    try {
      const mod = await import(/* @vite-ignore */ SMPLR_URL);
      const Piano = mod.SplendidGrandPiano;
      const piano = new Piano(this.ctx, { destination: this.master });
      await (piano.load !== undefined ? piano.load : piano.loaded());
      this.piano = piano;
    } catch (e) {
      this.piano = null; // keep the oscillator fallback
    } finally {
      this.loadingPiano = false;
    }
  }

  noteOn(midi, velocity = 0.8) {
    if (!this.enabled || !this.ctx) return;
    if (this.piano) {
      try { this.piano.start({ note: midi, velocity: Math.round(20 + velocity * 100) }); return; }
      catch (e) { /* fall through to synth */ }
    }
    this._synthOn(midi, velocity);
  }

  noteOff(midi) {
    if (this.piano) {
      try { this.piano.stop(midi); return; }
      catch (e) { /* fall through */ }
    }
    this._synthOff(midi);
  }

  // ---- fallback oscillator synth ----------------------------------------
  _synthOn(midi, velocity = 0.8) {
    if (!this.ctx) return;
    this._synthOff(midi, true);
    const now = this.ctx.currentTime;
    const freq = midiToFreq(midi);
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 1200 + velocity * 4000;
    filter.Q.value = 0.7;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    osc1.type = "triangle";
    osc2.type = "sine";
    osc1.frequency.value = freq;
    osc2.frequency.value = freq * 2.001;
    const peak = 0.18 + velocity * 0.22;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(peak, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(filter);
    filter.connect(this.master);
    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 2.5);
    osc2.stop(now + 2.5);
    const voice = { osc1, osc2, gain, filter };
    osc1.onended = () => {
      if (this.voices.get(midi) === voice) this.voices.delete(midi);
      try { gain.disconnect(); filter.disconnect(); } catch (e) { /* gone */ }
    };
    this.voices.set(midi, voice);
  }

  _synthOff(midi, immediate = false) {
    const v = this.voices.get(midi);
    if (!v || !this.ctx) return;
    const now = this.ctx.currentTime;
    const release = immediate ? 0.02 : 0.25;
    try {
      v.gain.gain.cancelScheduledValues(now);
      v.gain.gain.setValueAtTime(Math.max(v.gain.gain.value, 0.0001), now);
      v.gain.gain.exponentialRampToValueAtTime(0.0001, now + release);
      v.osc1.stop(now + release + 0.05);
      v.osc2.stop(now + release + 0.05);
    } catch (e) { /* already stopped */ }
    this.voices.delete(midi);
  }
}
