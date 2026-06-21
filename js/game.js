// The falling-notes game engine: lays out a piano keyboard, schedules a level's
// chords as descending blocks, grades incoming MIDI against a timing window, and
// renders everything to a canvas.

import { chord as buildChord, chordSymbol, isBlackKey } from "./music.js";

const LOOKAHEAD = 2800;   // ms a note is visible while falling (slower = learnable)
const COUNT_IN = 700;     // ms pause before the first note lands
const PERFECT = 70, GREAT = 130, GOOD = 200; // hit windows in ms
const KB_HEIGHT = 116;    // keyboard height in px

const NOTE_LETTERS = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

const COLORS = {
  note: "#3ad1c0",
  perfect: "#34d8b4",
  great: "#6ea8ff",
  good: "#f6b352",
  miss: "#7a2f3a",
  hitline: "rgba(246, 179, 82, 0.9)",
  lane: "rgba(255, 255, 255, 0.022)",
  laneLine: "rgba(255, 255, 255, 0.05)",
  whiteKey: "#efece4",
  whiteKeyShade: "#cdc9bd",
  whiteKeyText: "#6d6a80",
  blackKey: "#171522",
  activeKey: "#f6b352",
  activeKeyEdge: "#ffd27a",
};

export class Game {
  constructor({ canvas, input, synth, onUpdate, onProgress, onChord, onEnd }) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.input = input;
    this.synth = synth;
    this.onUpdate = onUpdate || (() => {});
    this.onProgress = onProgress || (() => {});
    this.onChord = onChord || (() => {});
    this.onEnd = onEnd || (() => {});
    this._coachKey = null;

    this.level = null;
    this.notes = [];          // {midi, target, eventIndex, judged, judgment}
    this.events = [];         // {target, notes:[noteRefs], resolved}
    this.layout = new Map();  // midi -> {x, w, cx, black}
    this.activeKeys = new Set();

    this.running = false;
    this.finished = false;
    this.destroyed = false;
    this.startPerf = 0;
    this.pausedTotal = 0;
    this.pausedAt = 0;

    this.stats = { score: 0, combo: 0, maxCombo: 0, lives: 0, hits: 0, total: 0 };

    this._raf = null;
    this._pointers = new Map(); // pointerId -> midi (on-screen keyboard)
    this._onNote = (e) => this._handleNote(e.detail);
    this._onPointerDown = (e) => this._pointerDown(e);
    this._onPointerUp = (e) => this._pointerUp(e);

    // Repaint on resize so a paused / pre-start frame isn't left blank.
    this._resize = () => { this._layoutKeyboard(); if (!this.running) this._draw(); };
    window.addEventListener("resize", this._resize);
    this.canvas.addEventListener("pointerdown", this._onPointerDown);
    window.addEventListener("pointerup", this._onPointerUp);
    window.addEventListener("pointercancel", this._onPointerUp);
  }

  load(level) {
    this.level = level;
    this.finished = false;
    this.running = false;
    this.stats = { score: 0, combo: 0, maxCombo: 0, lives: level.lives, hits: 0, total: 0 };
    const beatMs = 60000 / level.bpm;
    this.lookahead = level.lookahead ?? LOOKAHEAD; // lower = notes fall faster = harder

    this.notes = [];
    this.events = [];
    this._coachKey = null;
    level.events.forEach((ev, i) => {
      const c = ev.chord;
      const root = Array.isArray(c) ? c[0] : c.root;
      const quality = Array.isArray(c) ? c[1] : c.quality;
      const octave = (Array.isArray(c) ? c[2] : c.octave) ?? 4;
      const midis = buildChord(root, quality, octave);
      const name = chordSymbol(root, quality);
      const target = COUNT_IN + this.lookahead + ev.beat * beatMs;
      const refs = [];
      for (const midi of midis) {
        const note = { midi, target, eventIndex: i, judged: false, judgment: null, label: name };
        this.notes.push(note);
        refs.push(note);
      }
      this.events.push({ target, notes: refs, resolved: false, name, midis });
    });
    // Show the first chord on the coach during the count-in.
    this._emitCoach();
    this.stats.total = this.notes.length;
    this.lastTarget = this.events.length ? this.events[this.events.length - 1].target : 0;

    this._layoutKeyboard();
    this.input.addEventListener("note", this._onNote);
    this._draw(); // show the start state immediately
  }

  start() {
    if (this.destroyed || this.running || this.finished) return;
    this.running = true;
    this.startPerf = performance.now();
    this.pausedTotal = 0;
    this._loop();
  }

  pause() {
    if (!this.running) return;
    this.running = false;
    this.pausedAt = performance.now();
    cancelAnimationFrame(this._raf);
  }

  resume() {
    // !startPerf means start() never ran (e.g. paused during the count-in) —
    // refuse, so we never corrupt the clock origin.
    if (this.destroyed || this.running || this.finished || !this.startPerf) return;
    this.running = true;
    this.pausedTotal += performance.now() - this.pausedAt;
    this._loop();
  }

  destroy() {
    this.destroyed = true;
    cancelAnimationFrame(this._raf);
    this.input.removeEventListener("note", this._onNote);
    window.removeEventListener("resize", this._resize);
    this.canvas.removeEventListener("pointerdown", this._onPointerDown);
    window.removeEventListener("pointerup", this._onPointerUp);
    window.removeEventListener("pointercancel", this._onPointerUp);
  }

  get gameTime() {
    return performance.now() - this.startPerf - this.pausedTotal;
  }

  // ---- keyboard geometry -------------------------------------------------
  _range() {
    let lo = Math.min(...this.notes.map((n) => n.midi));
    let hi = Math.max(...this.notes.map((n) => n.midi));
    while (lo % 12 !== 0) lo--;            // extend down to a C
    while (hi % 12 !== 0) hi++;            // extend up to a C
    return [lo, hi];
  }

  _layoutKeyboard() {
    const rect = this.canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.W = rect.width;
    this.H = rect.height;
    this.canvas.width = this.W * dpr;
    this.canvas.height = this.H * dpr;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.rollH = this.H - KB_HEIGHT;

    if (!this.notes.length) return;
    const [lo, hi] = this._range();
    const whites = [];
    for (let m = lo; m <= hi; m++) if (!isBlackKey(m)) whites.push(m);
    const whiteW = this.W / whites.length;
    const blackW = whiteW * 0.62;
    this.layout = new Map();
    whites.forEach((m, i) => {
      const x = i * whiteW;
      this.layout.set(m, { x, w: whiteW, cx: x + whiteW / 2, black: false });
    });
    // Black keys sit between their lower and upper white neighbours.
    for (let m = lo; m <= hi; m++) {
      if (!isBlackKey(m)) continue;
      const lower = this.layout.get(m - 1);
      if (!lower) continue;
      const cx = lower.x + lower.w;
      this.layout.set(m, { x: cx - blackW / 2, w: blackW, cx, black: true });
    }

    // Cache the gradients used every frame.
    const rg = this.ctx.createLinearGradient(0, 0, 0, this.rollH);
    rg.addColorStop(0, "rgba(255,255,255,0)");
    rg.addColorStop(1, "rgba(246,179,82,0.06)");
    this._rollGrad = rg;
    const wg = this.ctx.createLinearGradient(0, this.rollH, 0, this.rollH + KB_HEIGHT);
    wg.addColorStop(0, COLORS.whiteKey);
    wg.addColorStop(1, COLORS.whiteKeyShade);
    this._whiteGrad = wg;
  }

  // ---- input + grading ---------------------------------------------------
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
    if (!best) return; // stray note — no penalty, just sound
    best.judged = true;
    if (bestDelta <= PERFECT) best.judgment = "perfect";
    else if (bestDelta <= GREAT) best.judgment = "great";
    else best.judgment = "good";

    const points = { perfect: 100, great: 70, good: 40 }[best.judgment];
    this.stats.combo += 1;
    this.stats.maxCombo = Math.max(this.stats.maxCombo, this.stats.combo);
    const mult = 1 + Math.min(this.stats.combo, 32) / 8;
    this.stats.score += Math.round(points * mult);
    this.stats.hits += 1;
    this._emitUpdate(best.judgment);
  }

  _missNote(n) {
    n.judged = true;
    n.judgment = "miss";
  }

  _emitUpdate(lastJudgment = null) {
    this.onUpdate({
      score: this.stats.score,
      combo: this.stats.combo,
      lives: this.stats.lives,
      accuracy: this.stats.total ? this.stats.hits / this.stats.total : 0,
      lastJudgment,
    });
  }

  // Tell the UI which chord is coming up next (changes only when it advances).
  _emitCoach() {
    const next = this.events.find((ev) => !ev.resolved);
    const key = next ? next.target : -1;
    if (key === this._coachKey) return;
    this._coachKey = key;
    this.onChord(next ? { name: next.name, notes: next.midis.map((m) => NOTE_LETTERS[m % 12]) } : null);
  }

  // ---- main loop ---------------------------------------------------------
  _loop() {
    if (!this.running) return;
    const now = this.gameTime;
    this.onProgress(Math.max(0, Math.min(1, now / (this.lastTarget + GOOD + 600))));
    this._emitCoach();

    // Resolve misses and life loss per event once its window has passed.
    for (const ev of this.events) {
      if (ev.resolved || now <= ev.target + GOOD) continue;
      ev.resolved = true;
      let missed = 0;
      for (const n of ev.notes) {
        if (!n.judged) { this._missNote(n); missed++; }
      }
      if (missed === ev.notes.length && missed > 0) {
        // Only a fully-missed chord breaks the combo and costs a life; partial
        // hits keep the combo earned from the notes that did land.
        this.stats.combo = 0;
        this.stats.lives -= 1;
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

  _draw() {
    const ctx = this.ctx;
    const now = this.running ? this.gameTime : COUNT_IN; // pre-roll preview
    ctx.clearRect(0, 0, this.W, this.H);

    // roll backdrop + lane guides
    if (this._rollGrad) { ctx.fillStyle = this._rollGrad; ctx.fillRect(0, 0, this.W, this.rollH); }
    for (const [, k] of this.layout) {
      if (k.black) continue;
      ctx.fillStyle = COLORS.lane;
      ctx.fillRect(k.x, 0, k.w, this.rollH);
      ctx.fillStyle = COLORS.laneLine;
      ctx.fillRect(k.x, 0, 1, this.rollH);
    }

    // hit line with glow
    ctx.save();
    ctx.strokeStyle = COLORS.hitline;
    ctx.lineWidth = 2;
    ctx.shadowColor = COLORS.hitline;
    ctx.shadowBlur = 16;
    ctx.beginPath();
    ctx.moveTo(0, this.rollH);
    ctx.lineTo(this.W, this.rollH);
    ctx.stroke();
    ctx.restore();

    // falling notes
    const upcomingActive = new Set();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "600 11px 'Sora', system-ui, sans-serif";
    for (const n of this.notes) {
      const key = this.layout.get(n.midi);
      if (!key) continue;
      const progress = (now - (n.target - this.lookahead)) / this.lookahead;
      if (progress < 0 || progress > 1.15) continue;
      const y = progress * this.rollH;
      const h = 24;
      let color = COLORS.note;
      if (n.judgment) color = COLORS[n.judgment];
      const pad = key.black ? 2 : 5;
      const x = key.x + pad, w = key.w - pad * 2;
      ctx.save();
      if (n.judgment && n.judgment !== "miss") { ctx.shadowColor = color; ctx.shadowBlur = 14; }
      ctx.fillStyle = color;
      roundRect(ctx, x, y - h / 2, w, h, 6);
      ctx.fill();
      ctx.restore();
      // glossy top edge
      ctx.fillStyle = "rgba(255,255,255,0.38)";
      roundRect(ctx, x + 2, y - h / 2 + 2, w - 4, 3, 2);
      ctx.fill();
      // note name on the wider white-key blocks
      if (!key.black && w > 22 && !n.judgment) {
        ctx.fillStyle = "rgba(6,20,18,0.78)";
        ctx.fillText(NOTE_LETTERS[n.midi % 12], x + w / 2, y + 1);
      }
      if (!n.judged && Math.abs(now - n.target) <= GOOD) upcomingActive.add(n.midi);
    }

    // ghost: softly light where the fingers go for the next chord, ahead of time
    const ghost = new Set();
    const nextEv = this.events.find((ev) => !ev.resolved);
    if (nextEv) for (const gn of nextEv.notes) if (!gn.judged) ghost.add(gn.midi);

    this._drawKeyboard(upcomingActive, ghost);
  }

  _drawKeyboard(upcoming, ghost) {
    const ctx = this.ctx;
    const top = this.rollH;
    // white keys
    for (const [midi, k] of this.layout) {
      if (k.black) continue;
      const on = this.activeKeys.has(midi) || upcoming.has(midi);
      const isGhost = !on && ghost && ghost.has(midi);
      if (on) {
        ctx.save();
        ctx.shadowColor = COLORS.activeKey; ctx.shadowBlur = 18;
        ctx.fillStyle = COLORS.activeKey;
        ctx.fillRect(k.x + 0.5, top, k.w - 1, KB_HEIGHT);
        ctx.restore();
      } else {
        ctx.fillStyle = this._whiteGrad || COLORS.whiteKey;
        ctx.fillRect(k.x + 0.5, top, k.w - 1, KB_HEIGHT);
        if (isGhost) {
          ctx.fillStyle = "rgba(246,179,82,0.22)";
          ctx.fillRect(k.x + 0.5, top, k.w - 1, KB_HEIGHT);
          ctx.fillStyle = COLORS.activeKey;
          ctx.fillRect(k.x + 0.5, top, k.w - 1, 4); // gold cue bar
        }
      }
      ctx.strokeStyle = "rgba(0,0,0,0.28)";
      ctx.lineWidth = 1;
      ctx.strokeRect(k.x + 0.5, top, k.w - 1, KB_HEIGHT);
      if (midi % 12 === 0) { // label each C
        ctx.fillStyle = on ? "#3a1e06" : COLORS.whiteKeyText;
        ctx.font = "600 10px 'Sora', system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("C" + (Math.floor(midi / 12) - 1), k.cx, top + KB_HEIGHT - 12);
      }
    }
    // black keys on top
    for (const [midi, k] of this.layout) {
      if (!k.black) continue;
      const on = this.activeKeys.has(midi) || upcoming.has(midi);
      const isGhost = !on && ghost && ghost.has(midi);
      const h = KB_HEIGHT * 0.62;
      if (on) {
        ctx.save();
        ctx.shadowColor = COLORS.activeKey; ctx.shadowBlur = 16;
        ctx.fillStyle = COLORS.activeKeyEdge;
        ctx.fillRect(k.x, top, k.w, h);
        ctx.restore();
      } else {
        ctx.fillStyle = isGhost ? "rgba(246,179,82,0.6)" : COLORS.blackKey;
        ctx.fillRect(k.x, top, k.w, h);
      }
    }
  }

  // ---- on-screen keyboard (mouse + multi-touch) -------------------------
  _pointerDown(e) {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    if (y < this.rollH) return;
    const midi = this._keyAt(x, y - this.rollH);
    if (midi == null) return;
    this._pointers.set(e.pointerId, midi);          // one note per pointer -> chords by touch
    try { this.canvas.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
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
    // black keys are on top and shorter
    if (yInKb <= KB_HEIGHT * 0.62) {
      for (const [midi, k] of this.layout) {
        if (k.black && x >= k.x && x <= k.x + k.w) return midi;
      }
    }
    for (const [midi, k] of this.layout) {
      if (!k.black && x >= k.x && x <= k.x + k.w) return midi;
    }
    return null;
  }

  _finish(completed) {
    this.running = false;
    this.finished = true;
    cancelAnimationFrame(this._raf);
    // Stop reacting to input once the level is over (results screen is live).
    this.input.removeEventListener("note", this._onNote);
    for (const m of this.activeKeys) this.synth.noteOff(m);
    this.activeKeys.clear();
    this._draw();
    const accuracy = this.stats.total ? this.stats.hits / this.stats.total : 0;
    const stars = !completed ? 0 : accuracy >= 0.9 ? 3 : accuracy >= 0.7 ? 2 : accuracy >= 0.5 ? 1 : 0;
    this.onEnd({
      completed,
      stars,
      accuracy,
      score: this.stats.score,
      maxCombo: this.stats.maxCombo,
      hits: this.stats.hits,
      total: this.stats.total,
    });
  }
}

function roundRect(ctx, x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
