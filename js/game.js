// Falling-notes game engine: piano keyboard, descending chord blocks,
// hit grading, canvas rendering, visualiser waveform.

import { chord as buildChord, chordSymbol, isBlackKey } from "./music.js";

const LOOKAHEAD  = 4200;  // ms notes are visible (was 2800 — more time to prepare)
const COUNT_IN   = 700;
const PERFECT    = 70, GREAT = 130, GOOD = 200;
const KB_HEIGHT  = 162;   // taller, more realistic piano keys

const NOTE_LETTERS = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

const C = {
  note:         "#3ad8c4",
  noteTop:      "#5ae8d6",
  perfect:      "#34d8b4",
  great:        "#6ea8ff",
  good:         "#f6b352",
  miss:         "#7a2f3a",
  hitline:      "rgba(246,179,82,0.95)",
  lane:         "rgba(255,255,255,0.018)",
  laneLine:     "rgba(255,255,255,0.045)",
};

export class Game {
  constructor({ canvas, input, synth, onUpdate, onProgress, onChord, onEnd }) {
    this.canvas    = canvas;
    this.ctx       = canvas.getContext("2d");
    this.input     = input;
    this.synth     = synth;
    this.onUpdate  = onUpdate  || (() => {});
    this.onProgress= onProgress|| (() => {});
    this.onChord   = onChord   || (() => {});
    this.onEnd     = onEnd     || (() => {});
    this._coachKey = null;

    this.level      = null;
    this.notes      = [];
    this.events     = [];
    this.layout     = new Map();
    this.activeKeys = new Set();

    this.running     = false;
    this.finished    = false;
    this.destroyed   = false;
    this.startPerf   = 0;
    this.pausedTotal = 0;
    this.pausedAt    = 0;

    this.stats = { score:0, combo:0, maxCombo:0, lives:0, hits:0, total:0 };

    this._raf       = null;
    this._pointers  = new Map();
    this._onNote    = (e) => this._handleNote(e.detail);
    this._onPtrDown = (e) => this._pointerDown(e);
    this._onPtrUp   = (e) => this._pointerUp(e);
    this._resize    = () => { this._layoutKeyboard(); if (!this.running) this._draw(); };
    window.addEventListener("resize", this._resize);
    canvas.addEventListener("pointerdown", this._onPtrDown);
    window.addEventListener("pointerup",   this._onPtrUp);
    window.addEventListener("pointercancel", this._onPtrUp);
  }

  load(level) {
    this.level    = level;
    this.finished = false;
    this.running  = false;
    this.stats    = { score:0, combo:0, maxCombo:0, lives:level.lives, hits:0, total:0 };

    const beatMs     = 60000 / level.bpm;
    this.lookahead   = level.lookahead ?? LOOKAHEAD;

    this.notes  = [];
    this.events = [];
    this._coachKey = null;

    level.events.forEach((ev, i) => {
      let midis, name;
      if (ev.midis) {
        // Raw MIDI import — skip chord builder
        midis = ev.midis;
        name  = ev.name || ev.midis.map(m => NOTE_LETTERS[m % 12]).join("·");
      } else {
        const c       = ev.chord;
        const root    = Array.isArray(c) ? c[0] : c.root;
        const quality = Array.isArray(c) ? c[1] : c.quality;
        const octave  = (Array.isArray(c) ? c[2] : c.octave) ?? 4;
        midis = buildChord(root, quality, octave);
        name  = chordSymbol(root, quality);
      }
      const target  = COUNT_IN + this.lookahead + ev.beat * beatMs;
      const refs    = [];
      for (const midi of midis) {
        const note = { midi, target, eventIndex:i, judged:false, judgment:null, label:name };
        this.notes.push(note);
        refs.push(note);
      }
      this.events.push({ target, notes:refs, resolved:false, name, midis });
    });

    this._emitCoach();
    this.stats.total  = this.notes.length;
    this.lastTarget   = this.events.length ? this.events[this.events.length-1].target : 0;
    this._layoutKeyboard();
    this.input.addEventListener("note", this._onNote);
    this._draw();
  }

  start() {
    if (this.destroyed || this.running || this.finished) return;
    this.running    = true;
    this.startPerf  = performance.now();
    this.pausedTotal= 0;
    this._loop();
  }

  pause() {
    if (!this.running) return;
    this.running  = false;
    this.pausedAt = performance.now();
    cancelAnimationFrame(this._raf);
  }

  resume() {
    if (this.destroyed || this.running || this.finished || !this.startPerf) return;
    this.running      = true;
    this.pausedTotal += performance.now() - this.pausedAt;
    this._loop();
  }

  destroy() {
    this.destroyed = true;
    cancelAnimationFrame(this._raf);
    this.input.removeEventListener("note", this._onNote);
    window.removeEventListener("resize",      this._resize);
    window.removeEventListener("pointerup",   this._onPtrUp);
    window.removeEventListener("pointercancel", this._onPtrUp);
    this.canvas.removeEventListener("pointerdown", this._onPtrDown);
  }

  get gameTime() { return performance.now() - this.startPerf - this.pausedTotal; }

  // ---- keyboard geometry --------------------------------------------------
  _range() {
    let lo = Math.min(...this.notes.map(n => n.midi));
    let hi = Math.max(...this.notes.map(n => n.midi));
    while (lo % 12 !== 0) lo--;
    while (hi % 12 !== 0) hi++;
    return [lo, hi];
  }

  _layoutKeyboard() {
    const rect = this.canvas.getBoundingClientRect();
    const dpr  = Math.min(window.devicePixelRatio || 1, 2);
    this.W = rect.width;
    this.H = rect.height;
    this.canvas.width  = this.W * dpr;
    this.canvas.height = this.H * dpr;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.rollH = this.H - KB_HEIGHT;
    if (!this.notes.length) return;

    const [lo, hi] = this._range();
    const whites = [];
    for (let m = lo; m <= hi; m++) if (!isBlackKey(m)) whites.push(m);
    const whiteW = this.W / whites.length;
    const blackW = whiteW * 0.60;
    this.layout  = new Map();
    whites.forEach((m, i) => {
      const x = i * whiteW;
      this.layout.set(m, { x, w: whiteW, cx: x + whiteW/2, black: false });
    });
    for (let m = lo; m <= hi; m++) {
      if (!isBlackKey(m)) continue;
      const lower = this.layout.get(m - 1);
      if (!lower) continue;
      const cx = lower.x + lower.w;
      this.layout.set(m, { x: cx - blackW/2, w: blackW, cx, black: true });
    }

    // Pre-bake roll gradient
    const rg = this.ctx.createLinearGradient(0, 0, 0, this.rollH);
    rg.addColorStop(0, "rgba(10,8,18,0)");
    rg.addColorStop(0.7, "rgba(10,8,18,0)");
    rg.addColorStop(1, "rgba(246,179,82,0.04)");
    this._rollGrad = rg;
  }

  // ---- input + grading ----------------------------------------------------
  _handleNote({ type, midi, velocity }) {
    if (type === "on") {
      this.synth.noteOn(midi, velocity);
      this.activeKeys.add(midi);
      if (this.running) this._judge(midi);
    } else {
      this.synth.noteOff(midi);
      this.activeKeys.delete(midi);
    }
  }

  _judge(midi) {
    const now = this.gameTime;
    let best = null, bestDelta = Infinity;
    for (const n of this.notes) {
      if (n.judged || n.midi !== midi) continue;
      const delta = Math.abs(now - n.target);
      if (delta <= GOOD && delta < bestDelta) { best = n; bestDelta = delta; }
    }
    if (!best) return;
    best.judged = true;
    best.judgment = bestDelta <= PERFECT ? "perfect" : bestDelta <= GREAT ? "great" : "good";
    const pts  = { perfect:100, great:70, good:40 }[best.judgment];
    this.stats.combo++;
    this.stats.maxCombo = Math.max(this.stats.maxCombo, this.stats.combo);
    this.stats.score   += Math.round(pts * (1 + Math.min(this.stats.combo, 32) / 8));
    this.stats.hits++;
    this._emitUpdate(best.judgment);
  }

  _missNote(n) { n.judged = true; n.judgment = "miss"; }

  _emitUpdate(lastJudgment = null) {
    this.onUpdate({
      score: this.stats.score, combo: this.stats.combo,
      lives: this.stats.lives,
      accuracy: this.stats.total ? this.stats.hits / this.stats.total : 0,
      lastJudgment,
    });
  }

  _emitCoach() {
    const next = this.events.find(ev => !ev.resolved);
    const key  = next ? next.target : -1;
    if (key === this._coachKey) return;
    this._coachKey = key;
    this.onChord(next ? { name: next.name, notes: next.midis.map(m => NOTE_LETTERS[m%12]) } : null);
  }

  // ---- main loop ----------------------------------------------------------
  _loop() {
    if (!this.running) return;
    const now = this.gameTime;
    this.onProgress(Math.max(0, Math.min(1, now / (this.lastTarget + GOOD + 600))));
    this._emitCoach();

    for (const ev of this.events) {
      if (ev.resolved || now <= ev.target + GOOD) continue;
      ev.resolved = true;
      let missed = 0;
      for (const n of ev.notes) if (!n.judged) { this._missNote(n); missed++; }
      if (missed === ev.notes.length && missed > 0) {
        this.stats.combo = 0;
        this.stats.lives--;
        this._emitUpdate("miss");
        if (this.stats.lives <= 0) return this._finish(false);
      } else if (missed > 0) {
        this._emitUpdate("miss");
      }
    }

    this._draw();
    if (now > this.lastTarget + GOOD + 600) return this._finish(true);
    this._raf = requestAnimationFrame(() => this._loop());
  }

  // ---- rendering ----------------------------------------------------------
  _draw() {
    const ctx = this.ctx;
    const now = this.running ? this.gameTime : COUNT_IN;
    ctx.clearRect(0, 0, this.W, this.H);

    // Roll backdrop
    if (this._rollGrad) { ctx.fillStyle = this._rollGrad; ctx.fillRect(0, 0, this.W, this.rollH); }

    // Lane guides
    for (const [, k] of this.layout) {
      if (k.black) continue;
      ctx.fillStyle = C.lane;
      ctx.fillRect(k.x, 0, k.w, this.rollH);
      ctx.fillStyle = C.laneLine;
      ctx.fillRect(k.x, 0, 1, this.rollH);
    }

    // Falling notes
    const upcomingActive = new Set();
    for (const n of this.notes) {
      const key = this.layout.get(n.midi);
      if (!key) continue;
      const progress = (now - (n.target - this.lookahead)) / this.lookahead;
      if (progress < 0 || progress > 1.18) continue;

      const y   = progress * this.rollH;
      const h   = 30;
      const pad = key.black ? 2 : 4;
      const x   = key.x + pad, w = key.w - pad * 2;

      // Proximity glow ramps up in the last 20% of fall
      const proximity = Math.max(0, (progress - 0.8) / 0.2);

      ctx.save();
      if (n.judgment && n.judgment !== "miss") {
        ctx.shadowColor = C[n.judgment]; ctx.shadowBlur = 22;
        ctx.fillStyle = C[n.judgment];
      } else if (n.judgment === "miss") {
        ctx.fillStyle = C.miss; ctx.shadowBlur = 0;
      } else {
        ctx.shadowColor = C.note;
        ctx.shadowBlur  = 6 + proximity * 22;
        // Gradient pill: brighter at leading edge (bottom)
        const ng = ctx.createLinearGradient(0, y - h/2, 0, y + h/2);
        ng.addColorStop(0, C.noteTop);
        ng.addColorStop(1, C.note);
        ctx.fillStyle = ng;
      }

      _roundRect(ctx, x, y - h/2, w, h, 8);
      ctx.fill();
      ctx.restore();

      // Gloss strip
      if (!n.judgment) {
        ctx.fillStyle = "rgba(255,255,255,0.32)";
        _roundRect(ctx, x + 2, y - h/2 + 2, w - 4, 5, 3);
        ctx.fill();
      }

      // Note label on wide white keys
      if (!key.black && w > 22 && !n.judgment) {
        ctx.save();
        ctx.fillStyle = "rgba(4,16,14,0.75)";
        ctx.font = "700 10px 'Inter', system-ui";
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText(NOTE_LETTERS[n.midi % 12], x + w/2, y);
        ctx.restore();
      }

      if (!n.judged && Math.abs(now - n.target) <= GOOD) upcomingActive.add(n.midi);
    }

    // Hit line
    ctx.save();
    ctx.strokeStyle = C.hitline;
    ctx.lineWidth   = 2;
    ctx.shadowColor = C.hitline;
    ctx.shadowBlur  = 18;
    ctx.beginPath();
    ctx.moveTo(0, this.rollH); ctx.lineTo(this.W, this.rollH);
    ctx.stroke();
    ctx.restore();

    // Audio visualiser — waveform just above keyboard
    this._drawVisualiser();

    // Ghost hints for next chord
    const ghost = new Set();
    const nextEv = this.events.find(ev => !ev.resolved);
    if (nextEv) for (const gn of nextEv.notes) if (!gn.judged) ghost.add(gn.midi);

    this._drawKeyboard(upcomingActive, ghost);
  }

  _drawVisualiser() {
    const waveform = this.synth?.getWaveform?.();
    if (!waveform) return;

    let rms = 0;
    for (const s of waveform) rms += s * s;
    rms = Math.sqrt(rms / waveform.length);
    if (rms < 0.0008) return;

    const ctx   = this.ctx;
    const vizH  = 34;
    const y0    = this.rollH - vizH - 6;
    const alpha = Math.min(1, rms * 25);

    ctx.save();
    ctx.globalAlpha  = alpha * 0.75;
    ctx.strokeStyle  = "#34d8b4";
    ctx.lineWidth    = 1.5;
    ctx.shadowColor  = "#34d8b4";
    ctx.shadowBlur   = 8;
    ctx.beginPath();

    const step = this.W / waveform.length;
    for (let i = 0; i < waveform.length; i++) {
      const px = i * step;
      const py = y0 + vizH/2 + waveform[i] * vizH * 0.44;
      i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.restore();
  }

  _drawKeyboard(upcoming, ghost) {
    const ctx = this.ctx;
    const top = this.rollH;

    // Piano body frame
    ctx.fillStyle = "#0c0a14";
    ctx.fillRect(0, top - 4, this.W, KB_HEIGHT + 8);

    // Thin shadow ledge at top of keyboard
    const ledge = ctx.createLinearGradient(0, top - 4, 0, top + 6);
    ledge.addColorStop(0, "rgba(0,0,0,0.7)");
    ledge.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = ledge;
    ctx.fillRect(0, top - 4, this.W, 10);

    // ---- white keys ---------------------------------------------------------
    for (const [midi, k] of this.layout) {
      if (k.black) continue;
      const on      = this.activeKeys.has(midi) || upcoming.has(midi);
      const isGhost = !on && ghost?.has(midi);
      const kx = k.x + 0.5, ky = top + 1, kw = k.w - 1, kh = KB_HEIGHT - 3;
      const r  = 5;

      ctx.save();
      if (on) {
        ctx.shadowColor = "rgba(246,179,82,0.9)";
        ctx.shadowBlur  = 22;
        const pg = ctx.createLinearGradient(kx, ky, kx, ky + kh);
        pg.addColorStop(0,   "#ffd070");
        pg.addColorStop(0.25,"#f6b352");
        pg.addColorStop(1,   "#b87828");
        ctx.fillStyle = pg;
      } else {
        const wg = ctx.createLinearGradient(kx, ky, kx, ky + kh);
        wg.addColorStop(0,   "#f8f5ee");
        wg.addColorStop(0.65,"#ede9de");
        wg.addColorStop(1,   "#d4d0c0");
        ctx.fillStyle = wg;
      }

      _keyShape(ctx, kx, ky, kw, kh, r);
      ctx.fill();
      ctx.restore();

      // Ghost: subtle gold overlay + cue bar
      if (isGhost) {
        ctx.save();
        _keyShape(ctx, kx, ky, kw, kh, r);
        ctx.fillStyle = "rgba(246,179,82,0.14)";
        ctx.fill();
        ctx.restore();
        ctx.fillStyle = "rgba(246,179,82,0.85)";
        ctx.fillRect(kx, ky, kw, 4);
      }

      // Subtle inner-edge shadow between white keys (left border)
      ctx.fillStyle = "rgba(0,0,0,0.22)";
      ctx.fillRect(k.x, top, 1, KB_HEIGHT);

      // Bottom fade
      ctx.fillStyle = "rgba(0,0,0,0.12)";
      ctx.fillRect(kx, ky + kh - 10, kw, 9);

      // C octave label
      if (midi % 12 === 0) {
        ctx.fillStyle = on ? "rgba(40,16,0,0.7)" : "rgba(0,0,0,0.28)";
        ctx.font = "500 9px 'Inter', system-ui";
        ctx.textAlign = "center";
        ctx.fillText("C" + (Math.floor(midi/12) - 1), k.cx, top + KB_HEIGHT - 11);
      }
    }

    // ---- black keys ---------------------------------------------------------
    for (const [midi, k] of this.layout) {
      if (!k.black) continue;
      const on      = this.activeKeys.has(midi) || upcoming.has(midi);
      const isGhost = !on && ghost?.has(midi);
      const h  = KB_HEIGHT * 0.63;
      const kx = k.x, ky = top, kw = k.w;
      const r  = 4;

      ctx.save();
      if (on) {
        ctx.shadowColor = "rgba(246,179,82,0.8)";
        ctx.shadowBlur  = 16;
        const pg = ctx.createLinearGradient(kx, ky, kx, ky + h);
        pg.addColorStop(0, "#f6c060");
        pg.addColorStop(1, "#b07020");
        ctx.fillStyle = pg;
      } else if (isGhost) {
        const gg = ctx.createLinearGradient(kx, ky, kx, ky + h);
        gg.addColorStop(0, "rgba(246,179,82,0.8)");
        gg.addColorStop(1, "rgba(246,140,50,0.6)");
        ctx.fillStyle = gg;
      } else {
        const bg = ctx.createLinearGradient(kx, ky, kx, ky + h);
        bg.addColorStop(0,   "#1c1826");
        bg.addColorStop(0.4, "#12101c");
        bg.addColorStop(1,   "#080610");
        ctx.fillStyle = bg;
      }

      _keyShape(ctx, kx, ky, kw, h, r);
      ctx.fill();
      ctx.restore();

      // Gloss highlight strip on black keys
      if (!on && !isGhost) {
        const gloss = ctx.createLinearGradient(kx, ky, kx, ky + h * 0.38);
        gloss.addColorStop(0, "rgba(255,255,255,0.22)");
        gloss.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = gloss;
        ctx.fillRect(kx + kw*0.2, ky + 3, kw*0.6, h*0.32);
      }
    }
  }

  // ---- on-screen keyboard (mouse / touch) ---------------------------------
  _pointerDown(e) {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    if (y < this.rollH) return;
    const midi = this._keyAt(x, y - this.rollH);
    if (midi == null) return;
    this._pointers.set(e.pointerId, midi);
    try { this.canvas.setPointerCapture(e.pointerId); } catch (_) {}
    if (this.synth.resume) this.synth.resume();
    this.input.play(midi, 0.85);
  }

  _pointerUp(e) {
    const midi = this._pointers.get(e.pointerId);
    if (midi == null) return;
    this._pointers.delete(e.pointerId);
    this.input.release(midi);
  }

  _keyAt(x, yInKb) {
    if (yInKb <= KB_HEIGHT * 0.63) {
      for (const [midi, k] of this.layout)
        if (k.black && x >= k.x && x <= k.x + k.w) return midi;
    }
    for (const [midi, k] of this.layout)
      if (!k.black && x >= k.x && x <= k.x + k.w) return midi;
    return null;
  }

  _finish(completed) {
    this.running  = false;
    this.finished = true;
    cancelAnimationFrame(this._raf);
    this.input.removeEventListener("note", this._onNote);
    for (const m of this.activeKeys) this.synth.noteOff(m);
    this.activeKeys.clear();
    this._draw();
    const accuracy = this.stats.total ? this.stats.hits / this.stats.total : 0;
    const stars    = !completed ? 0 : accuracy >= 0.9 ? 3 : accuracy >= 0.7 ? 2 : accuracy >= 0.5 ? 1 : 0;
    this.onEnd({ completed, stars, accuracy, score: this.stats.score, maxCombo: this.stats.maxCombo, hits: this.stats.hits, total: this.stats.total });
  }
}

function _roundRect(ctx, x, y, w, h, r) {
  r = Math.min(r, w/2, h/2);
  ctx.beginPath();
  ctx.moveTo(x+r, y);
  ctx.arcTo(x+w, y,   x+w, y+h, r);
  ctx.arcTo(x+w, y+h, x,   y+h, r);
  ctx.arcTo(x,   y+h, x,   y,   r);
  ctx.arcTo(x,   y,   x+w, y,   r);
  ctx.closePath();
}

// Key with flat top, rounded bottom
function _keyShape(ctx, x, y, w, h, r) {
  r = Math.min(r, w/2, h/2);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x+w, y);
  ctx.lineTo(x+w, y+h-r);
  ctx.arcTo(x+w, y+h, x+w-r, y+h, r);
  ctx.lineTo(x+r, y+h);
  ctx.arcTo(x, y+h, x, y+h-r, r);
  ctx.lineTo(x, y);
  ctx.closePath();
}
