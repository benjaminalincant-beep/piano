// A small polyphonic synth for note feedback. Piano-ish: two detuned oscillators
// through a lowpass with a fast attack and exponential decay. No samples needed.

import { midiToFreq } from "./music.js";

export class Synth {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.voices = new Map(); // midi -> {osc1, osc2, gain}
    this.enabled = true;
  }

  // Must be resumed from a user gesture (browser autoplay policy).
  async resume() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.5;
      // Limiter catches the peaks when several chord notes overlap, so the
      // output never hard-clips at the destination.
      this.limiter = this.ctx.createDynamicsCompressor();
      this.limiter.threshold.value = -10;
      this.limiter.knee.value = 0;
      this.limiter.ratio.value = 12;
      this.limiter.attack.value = 0.003;
      this.limiter.release.value = 0.1;
      this.master.connect(this.limiter);
      this.limiter.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") await this.ctx.resume();
  }

  noteOn(midi, velocity = 0.8) {
    if (!this.enabled || !this.ctx) return;
    this.noteOff(midi, true); // retrigger cleanly
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
    osc2.frequency.value = freq * 2.001; // slight detune for shimmer

    const peak = 0.18 + velocity * 0.22;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(peak, now + 0.008); // fast attack
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4); // long decay

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(filter);
    filter.connect(this.master);
    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 2.5);
    osc2.stop(now + 2.5);

    const voice = { osc1, osc2, gain, filter };
    // Evict the voice whether it ends by release or by the scheduled auto-stop,
    // and free its nodes so the Map and the audio graph don't leak.
    osc1.onended = () => {
      if (this.voices.get(midi) === voice) this.voices.delete(midi);
      try { gain.disconnect(); filter.disconnect(); } catch (e) { /* already gone */ }
    };
    this.voices.set(midi, voice);
  }

  noteOff(midi, immediate = false) {
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
