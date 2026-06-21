// MIDI input: connects to a physical MIDI keyboard via the Web MIDI API and
// normalizes everything (hardware, computer keyboard, on-screen clicks) into a
// single stream of {type:'on'|'off', midi, velocity} events.

const NOTE_ON = 0x90;
const NOTE_OFF = 0x80;

// Computer-keyboard layout keyed by PHYSICAL e.code (independent of layout,
// Shift and CapsLock). Home row = white keys from C4; covers C4..G5 so every
// note the curriculum requires is reachable.
const KEY_MAP = {
  KeyA: 60, KeyW: 61, KeyS: 62, KeyE: 63, KeyD: 64, KeyF: 65, KeyT: 66,
  KeyG: 67, KeyY: 68, KeyH: 69, KeyU: 70, KeyJ: 71, KeyK: 72, KeyO: 73,
  KeyL: 74, KeyP: 75, Semicolon: 76, Quote: 77, BracketLeft: 78, BracketRight: 79,
};

export class MidiInput extends EventTarget {
  constructor() {
    super();
    this.access = null;
    this.input = null;          // currently bound MIDIInput
    this.inputs = [];           // available MIDIInputs
    this.computerKeyboard = true;
    this._kbHeld = new Map();   // e.code -> emitted midi (computer keyboard)
    this._hwHeld = new Set();   // midi numbers currently down on hardware
    this._boundMsg = (e) => this._onMidiMessage(e);
    this._installComputerKeyboard();
    this._installPanic();
  }

  get supported() {
    return typeof navigator !== "undefined" && !!navigator.requestMIDIAccess;
  }

  // Ask the browser for MIDI access. Must be called from a user gesture.
  async connect() {
    if (!this.supported) {
      this._status("unsupported", "Web MIDI not supported — use the computer keyboard.");
      return false;
    }
    try {
      this.access = await navigator.requestMIDIAccess({ sysex: false });
    } catch (err) {
      this._status("denied", "MIDI permission denied — using computer keyboard.");
      return false;
    }
    this.access.onstatechange = () => this._refreshInputs();
    this._refreshInputs();
    return true;
  }

  _refreshInputs() {
    if (!this.access) return;
    this.inputs = [...this.access.inputs.values()];
    // If the bound device vanished, release anything it was holding first.
    if (this.input && !this.inputs.includes(this.input)) { this.panic(); this.input = null; }
    if (!this.input && this.inputs.length) this.selectInput(this.inputs[0].id);
    this.dispatchEvent(new CustomEvent("devices", { detail: this.inputs }));
    if (!this.inputs.length) this._status("waiting", "No MIDI device found — plug one in or use the keyboard.");
  }

  selectInput(id) {
    this.panic(); // release notes held on the previous device before switching
    if (this.input) this.input.removeEventListener("midimessage", this._boundMsg);
    this.input = this.inputs.find((i) => i.id === id) || null;
    if (this.input) {
      this.input.addEventListener("midimessage", this._boundMsg);
      this._status("connected", `Connected: ${this.input.name}`);
    }
  }

  _onMidiMessage(e) {
    const [status, note, velocity] = e.data;
    const command = status & 0xf0;
    if (command === NOTE_ON && velocity > 0) {
      this._hwHeld.add(note);
      this._emit("on", note, velocity / 127);
    } else if (command === NOTE_OFF || (command === NOTE_ON && velocity === 0)) {
      this._hwHeld.delete(note);
      this._emit("off", note, 0);
    }
  }

  _installComputerKeyboard() {
    window.addEventListener("keydown", (e) => {
      if (!this.computerKeyboard || e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target && e.target.tagName) || "";
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      const midi = KEY_MAP[e.code];
      if (midi === undefined || this._kbHeld.has(e.code)) return;
      this._kbHeld.set(e.code, midi);
      this._emit("on", midi, 0.8);
    });
    window.addEventListener("keyup", (e) => {
      const midi = this._kbHeld.get(e.code);
      if (midi === undefined) return;
      this._kbHeld.delete(e.code);
      this._emit("off", midi, 0);
    });
  }

  // Release every held note when focus is lost, so a key-up delivered to
  // another window can never leave a note (or its highlight) stuck on.
  _installPanic() {
    window.addEventListener("blur", () => this.panic());
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") this.panic();
    });
  }

  panic() {
    for (const midi of this._kbHeld.values()) this._emit("off", midi, 0);
    for (const midi of this._hwHeld) this._emit("off", midi, 0);
    this._kbHeld.clear();
    this._hwHeld.clear();
  }

  // Used by the on-screen keyboard UI to inject notes.
  play(midi, velocity = 0.8) { this._emit("on", midi, velocity); }
  release(midi) { this._emit("off", midi, 0); }

  _emit(type, midi, velocity) {
    this.dispatchEvent(new CustomEvent("note", { detail: { type, midi, velocity } }));
  }

  _status(state, message) {
    this.dispatchEvent(new CustomEvent("status", { detail: { state, message } }));
  }
}
