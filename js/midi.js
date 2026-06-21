// MIDI input: connects to physical MIDI keyboards via the Web MIDI API and
// normalizes everything (hardware, computer keyboard, on-screen clicks) into a
// single stream of {type:'on'|'off', midi, velocity, source} events.
//
// Reliability choices:
//  - We listen to EVERY connected input at once, so whichever port the user's
//    piano is on (and however many devices are plugged in), notes are heard.
//  - Notes are REFERENCE-COUNTED across sources: a note only emits 'off' once
//    every source holding it has released, so a finger on the on-screen key and
//    a held hardware key never cut each other short.
//  - Hardware notes are tracked PER PORT, so unplugging one device releases only
//    its own notes, never notes still held on another device.

const NOTE_ON = 0x90;
const NOTE_OFF = 0x80;

// Computer-keyboard layout keyed by PHYSICAL e.code (independent of layout,
// Shift and CapsLock). Home row = white keys from C4; covers C4..G5.
const KEY_MAP = {
  KeyA: 60, KeyW: 61, KeyS: 62, KeyE: 63, KeyD: 64, KeyF: 65, KeyT: 66,
  KeyG: 67, KeyY: 68, KeyH: 69, KeyU: 70, KeyJ: 71, KeyK: 72, KeyO: 73,
  KeyL: 74, KeyP: 75, Semicolon: 76, Quote: 77, BracketLeft: 78, BracketRight: 79,
};

export class MidiInput extends EventTarget {
  constructor() {
    super();
    this.access = null;
    this.inputs = [];
    this.bound = new Set();      // MIDIInputs we've attached a listener to
    this.computerKeyboard = true;
    this._held = new Map();      // midi -> ref count across all sources (the gate)
    this._kbHeld = new Map();    // e.code -> midi (computer keyboard)
    this._hwPorts = new Map();   // MIDIInput -> Set<midi> currently held on that port
    this._boundMsg = (e) => this._onMidiMessage(e);
    this._installComputerKeyboard();
    this._installPanic();
  }

  get supported() {
    return typeof navigator !== "undefined" && !!navigator.requestMIDIAccess;
  }

  get connected() { return this.inputs.length > 0; }

  // Ask the browser for MIDI access. Must be called from a user gesture.
  async connect() {
    if (!this.supported) {
      this._status("unsupported", "Web MIDI needs Chrome, Edge or a recent Safari — the computer keyboard works here too.");
      return false;
    }
    this._status("connecting", "Connecting…");
    try {
      this.access = await navigator.requestMIDIAccess({ sysex: false });
    } catch (err) {
      this._status("denied", "MIDI permission was blocked — allow it, or play with the computer keyboard.");
      return false;
    }
    this.access.onstatechange = () => this._refreshInputs();
    this._refreshInputs();
    return true;
  }

  _refreshInputs() {
    if (!this.access) return;
    this.inputs = [...this.access.inputs.values()];
    // Attach to every input that isn't bound yet.
    for (const inp of this.inputs) {
      if (!this.bound.has(inp)) { inp.addEventListener("midimessage", this._boundMsg); this.bound.add(inp); }
    }
    // Detach a vanished device and release ONLY the notes it was holding.
    for (const inp of [...this.bound]) {
      if (!this.inputs.includes(inp)) {
        inp.removeEventListener("midimessage", this._boundMsg);
        this.bound.delete(inp);
        const set = this._hwPorts.get(inp);
        if (set) { for (const m of set) this._emitOff(m, "midi"); this._hwPorts.delete(inp); }
      }
    }
    const names = this.inputs.map((i) => i.name);
    this.dispatchEvent(new CustomEvent("devices", { detail: names }));
    if (names.length) {
      this._status("connected", names.length === 1
        ? `Connected: ${names[0]} — play a note!`
        : `Connected: ${names.length} devices — play a note!`);
    } else {
      this._status("waiting", "Listening… switch on or pair your MIDI piano.");
    }
  }

  _onMidiMessage(e) {
    const [status, note, velocity] = e.data;
    const command = status & 0xf0;
    if (command === NOTE_ON && velocity > 0) {
      let set = this._hwPorts.get(e.target);
      if (!set) { set = new Set(); this._hwPorts.set(e.target, set); }
      if (set.has(note)) return;          // ignore duplicate note-on from same port
      set.add(note);
      this._emitOn(note, velocity / 127, "midi");
    } else if (command === NOTE_OFF || (command === NOTE_ON && velocity === 0)) {
      const set = this._hwPorts.get(e.target);
      if (set && set.delete(note)) this._emitOff(note, "midi");
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
      this._emitOn(midi, 0.8, "kb");
    });
    window.addEventListener("keyup", (e) => {
      const midi = this._kbHeld.get(e.code);
      if (midi === undefined) return;
      this._kbHeld.delete(e.code);
      this._emitOff(midi, "kb");
    });
  }

  // Release everything when focus is lost, so a key-up delivered to another
  // window can never leave a note (or its highlight) stuck on.
  _installPanic() {
    window.addEventListener("blur", () => this.panic());
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") this.panic();
    });
  }

  panic() {
    for (const midi of this._held.keys()) this._dispatch("off", midi, 0, "panic");
    this._held.clear();
    this._kbHeld.clear();
    this._hwPorts.clear();
  }

  // Used by the on-screen keyboards (game + home mini piano).
  play(midi, velocity = 0.85) { this._emitOn(midi, velocity, "screen"); }
  release(midi) { this._emitOff(midi, "screen"); }

  // --- reference-counting gate: emit a single on/off per pitch regardless of
  //     how many sources are holding it ----------------------------------------
  _emitOn(midi, velocity, source) {
    const c = this._held.get(midi) || 0;
    this._held.set(midi, c + 1);
    if (c === 0) this._dispatch("on", midi, velocity, source);
  }

  _emitOff(midi, source) {
    const c = this._held.get(midi) || 0;
    if (c <= 0) return;
    if (c === 1) { this._held.delete(midi); this._dispatch("off", midi, 0, source); }
    else this._held.set(midi, c - 1);
  }

  _dispatch(type, midi, velocity, source) {
    this.dispatchEvent(new CustomEvent("note", { detail: { type, midi, velocity, source } }));
  }

  _status(state, message) {
    this.dispatchEvent(new CustomEvent("status", { detail: { state, message } }));
  }
}
