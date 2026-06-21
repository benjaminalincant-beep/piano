// A lightweight DOM piano keyboard. It lights up when notes arrive from any
// source (MIDI, computer keys, clicks) and plays sound when pressed — used on
// the home page so the player can instantly confirm their piano is working.

const BLACK = [1, 3, 6, 8, 10];
const isBlack = (m) => BLACK.includes(m % 12);

export class MiniKeyboard {
  constructor(container, input, synth, { low = 60, high = 84 } = {}) {
    this.container = container;
    this.input = input;
    this.synth = synth;
    this.low = low;
    this.high = high;
    this.keyEls = new Map();   // midi -> element
    this._pointers = new Map(); // pointerId -> midi
    this._render();
    this._bind();
  }

  _render() {
    const whites = [];
    for (let m = this.low; m <= this.high; m++) if (!isBlack(m)) whites.push(m);
    const ww = 100 / whites.length;

    let html = '<div class="mk-keys">';
    for (const m of whites) html += `<div class="mk-white" data-midi="${m}"></div>`;
    html += '</div><div class="mk-blacks">';
    for (let m = this.low; m <= this.high; m++) {
      if (!isBlack(m)) continue;
      const lowerWhite = whites.indexOf(m - 1);
      if (lowerWhite < 0) continue;
      const left = (lowerWhite + 1) * ww;
      html += `<div class="mk-black" data-midi="${m}" style="left:${left}%; width:${(ww * 0.62).toFixed(3)}%"></div>`;
    }
    html += "</div>";

    this.container.innerHTML = html;
    this.container.querySelectorAll("[data-midi]").forEach((el) => this.keyEls.set(+el.dataset.midi, el));
  }

  _bind() {
    // Light keys for every incoming note, whatever the source.
    this.input.addEventListener("note", (e) => {
      const el = this.keyEls.get(e.detail.midi);
      if (el) el.classList.toggle("on", e.detail.type === "on");
    });

    const press = (e) => {
      const el = e.target.closest("[data-midi]");
      if (!el) return;
      e.preventDefault();
      const midi = +el.dataset.midi;
      this._pointers.set(e.pointerId, midi);
      try { el.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
      if (this.synth.resume) this.synth.resume();
      this.input.play(midi, 0.85);
    };
    const release = (e) => {
      const midi = this._pointers.get(e.pointerId);
      if (midi == null) return;
      this._pointers.delete(e.pointerId);
      this.input.release(midi);
    };
    this.container.addEventListener("pointerdown", press);
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", release);
  }
}
