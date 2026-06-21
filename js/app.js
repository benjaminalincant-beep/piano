// App shell: screen navigation, MIDI device UI, level select, results, and
// localStorage persistence of best star ratings.

import { MidiInput } from "./midi.js";
import { Synth } from "./audio.js";
import { Game } from "./game.js";
import { MiniKeyboard } from "./keyboard.js";
import { WORLDS, LEVELS } from "./levels.js";

const input = new MidiInput();
const synth = new Synth();
let game = null;
let currentLevelId = null;

const STORE_KEY = "jazzkeys.stars";
const loadStars = () => { try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch { return {}; } };
const saveStar = (id, stars) => {
  const all = loadStars();
  if (!all[id] || stars > all[id]) { all[id] = stars; localStorage.setItem(STORE_KEY, JSON.stringify(all)); }
};

const $ = (sel) => document.querySelector(sel);
const screens = ["home", "levels", "game", "results"];
function show(name) {
  for (const s of screens) $("#screen-" + s).classList.toggle("active", s === name);
  const active = $("#screen-" + name);
  if (active && active.focus) active.focus(); // move focus to the shown screen
}

function starRow(filled, total = 3) {
  let html = "";
  for (let i = 0; i < total; i++) {
    html += `<i class="star ${i < filled ? "on" : ""}" aria-hidden="true">★</i>`;
  }
  return html;
}

// ---- MIDI status -----------------------------------------------------------
input.addEventListener("status", (e) => {
  const { state, message } = e.detail;
  $("#midi-status").textContent = message;
  $("#status-dot").dataset.state = state;
});
$("#btn-connect").addEventListener("click", async () => {
  await synth.resume();
  await input.connect();
});

// ---- level select ----------------------------------------------------------
function renderLevels() {
  const stars = loadStars();
  const root = $("#world-list");
  root.innerHTML = "";
  let earnedTotal = 0, maxTotal = 0;
  for (const world of WORLDS) {
    const section = document.createElement("section");
    section.className = "world";
    section.innerHTML = `<div class="world-head"><span class="world-num">World ${world.id}</span><h3>${world.name}</h3></div><p class="blurb">${world.blurb}</p>`;
    const grid = document.createElement("div");
    grid.className = "level-grid";
    world.levels.forEach((level, i) => {
      const earned = stars[level.id] || 0;
      earnedTotal += earned;
      maxTotal += 3;
      const card = document.createElement("button");
      card.className = "level-card";
      card.innerHTML = `
        <div class="level-top">
          <span class="level-num">${i + 1}</span>
          <span class="stars" aria-label="${earned} of 3 stars">${starRow(earned)}</span>
        </div>
        <span class="level-name">${level.name}</span>
        <span class="level-blurb">${level.blurb}</span>`;
      card.addEventListener("click", () => startLevel(level.id));
      grid.appendChild(card);
    });
    section.appendChild(grid);
    root.appendChild(section);
  }
  $("#total-stars").textContent = `★ ${earnedTotal} / ${maxTotal} stars earned`;
}

$("#btn-play").addEventListener("click", () => { renderLevels(); show("levels"); });
$("#btn-back-home").addEventListener("click", () => show("home"));

// ---- gameplay --------------------------------------------------------------
function startLevel(id) {
  clearCountIn(); // cancel any count-in still pending from a previous start
  currentLevelId = id;
  const level = LEVELS[id];
  show("game");
  $("#hud-level").textContent = `${level.worldName} · ${level.name}`;
  resetHud(level);

  if (game) game.destroy();
  const canvas = $("#game-canvas");
  $("#song-progress").style.width = "0%";
  game = new Game({
    canvas,
    input,
    synth,
    onUpdate: updateHud,
    onProgress: (p) => { $("#song-progress").style.width = (p * 100).toFixed(1) + "%"; },
    onChord: (next) => {
      $("#coach-chord").textContent = next ? next.name : "—";
      $("#coach-notes").textContent = next ? next.notes.join(" ") : "";
    },
    onEnd: showResults,
  });
  game.load(level);
  synth.resume();
  countInThenStart();
}

function resetHud(level) {
  $("#hud-score").textContent = "0";
  const comboEl = $("#hud-combo");
  comboEl.textContent = "0×";
  comboEl.classList.remove("hot");
  $("#hud-acc").textContent = "100%";
  renderLives(level.lives, level.lives);
  $("#btn-pause").textContent = "Pause";
}

function renderLives(current, max) {
  let html = "";
  for (let i = 0; i < max; i++) html += `<i class="heart ${i < current ? "on" : ""}" aria-hidden="true">♥</i>`;
  const el = $("#hud-lives");
  el.innerHTML = html;
  el.setAttribute("aria-label", `Lives: ${current} of ${max}`);
}

function updateHud(s) {
  $("#hud-score").textContent = s.score;
  const comboEl = $("#hud-combo");
  comboEl.textContent = s.combo + "×";
  comboEl.classList.toggle("hot", s.combo >= 8);
  $("#hud-acc").textContent = Math.round(s.accuracy * 100) + "%";
  renderLives(s.lives, LEVELS[currentLevelId].lives);
  if (s.lastJudgment) flashJudgment(s.lastJudgment);
}

let flashTimer = null;
function flashJudgment(j) {
  const el = $("#judgment");
  el.textContent = { perfect: "Perfect!", great: "Great", good: "Good", miss: "Miss" }[j] || "";
  el.dataset.kind = j;
  el.classList.add("show");
  clearTimeout(flashTimer);
  flashTimer = setTimeout(() => el.classList.remove("show"), 450);
}

let countInTimer = null;
function clearCountIn() {
  if (countInTimer) { clearTimeout(countInTimer); countInTimer = null; }
}

function countInThenStart() {
  const el = $("#countdown");
  const pauseBtn = $("#btn-pause");
  pauseBtn.disabled = true;   // no pausing mid count-in (would corrupt the clock)
  const g = game;             // bind to the game this count-in belongs to
  let n = 3;
  el.classList.add("show");
  el.textContent = n;
  const tick = () => {
    n -= 1;
    if (n > 0) { el.textContent = n; countInTimer = setTimeout(tick, 600); }
    else {
      el.textContent = "Go";
      countInTimer = setTimeout(() => {
        el.classList.remove("show");
        pauseBtn.disabled = false;
        if (g && g === game && !g.finished && !g.destroyed) g.start();
      }, 500);
    }
  };
  countInTimer = setTimeout(tick, 600);
}

$("#btn-pause").addEventListener("click", () => {
  if (!game) return;
  if (game.running) { game.pause(); $("#btn-pause").textContent = "Resume"; }
  else if (!game.finished) { game.resume(); $("#btn-pause").textContent = "Pause"; }
});
$("#btn-restart").addEventListener("click", () => startLevel(currentLevelId));
$("#btn-quit").addEventListener("click", () => {
  clearCountIn();
  if (game) game.destroy();
  game = null;
  show("levels");
  renderLevels();
});

// ---- results ---------------------------------------------------------------
const RESULT_TITLES = { 3: "Flawless!", 2: "Great playing!", 1: "Level cleared", 0: "Keep practicing" };

function showResults(r) {
  saveStar(currentLevelId, r.stars);
  show("results");
  $("#result-eyebrow").textContent = r.completed ? "Level complete" : "Out of lives";
  $("#result-title").textContent = r.completed ? RESULT_TITLES[r.stars] : "So close — try again";
  const starsEl = $("#result-stars");
  starsEl.innerHTML = starRow(r.stars);
  starsEl.setAttribute("aria-label", `${r.stars} of 3 stars`);
  $("#result-acc").textContent = Math.round(r.accuracy * 100) + "%";
  $("#result-score").textContent = r.score;
  $("#result-combo").textContent = r.maxCombo + "×";
  $("#result-notes").textContent = `${r.hits}/${r.total}`;

  const ids = Object.keys(LEVELS);
  const idx = ids.indexOf(currentLevelId);
  const nextId = ids[idx + 1];
  const nextBtn = $("#btn-next");
  if (nextId && r.stars > 0) { nextBtn.style.display = ""; nextBtn.onclick = () => startLevel(nextId); }
  else nextBtn.style.display = "none";

  if (r.stars > 0) confetti(r.stars === 3 ? 120 : 60);
}

function confetti(count) {
  const colors = ["#f6b352", "#ef6f5e", "#8e7bf2", "#e879c0", "#34d8b4"];
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "confetti";
    el.style.left = (Math.random() * 100) + "vw";
    el.style.background = colors[i % colors.length];
    document.body.appendChild(el);
    const dx = (Math.random() - 0.5) * 220;
    const anim = el.animate(
      [
        { transform: "translate(0, -10px) rotate(0deg)", opacity: 1 },
        { transform: `translate(${dx}px, 102vh) rotate(${720 + Math.random() * 540}deg)`, opacity: 1 },
      ],
      { duration: 1900 + Math.random() * 1400, easing: "cubic-bezier(0.2,0.6,0.4,1)", delay: Math.random() * 280 }
    );
    anim.onfinish = () => el.remove();
  }
}
$("#btn-retry").addEventListener("click", () => startLevel(currentLevelId));
$("#btn-results-levels").addEventListener("click", () => { show("levels"); renderLevels(); });

// ---- boot ------------------------------------------------------------------
if (!input.supported) {
  $("#midi-status").textContent = "Web MIDI not available — the computer keyboard works great.";
  $("#status-dot").dataset.state = "unsupported";
} else {
  $("#midi-status").textContent = "Connect your MIDI piano, or just play with the keyboard.";
  $("#status-dot").dataset.state = "idle";
}

// Home mini-piano: a live test that lights up the moment a note is played.
new MiniKeyboard(document.getElementById("mini-piano"), input, synth, { low: 60, high: 84 });

// Resume audio on the first played note, and confirm when real MIDI is heard.
let heardMidi = false;
input.addEventListener("note", (e) => {
  if (e.detail.type === "on" && synth.resume) synth.resume();
  if (!heardMidi && e.detail.source === "midi" && e.detail.type === "on") {
    heardMidi = true;
    $("#midi-status").textContent = "✓ I can hear your piano — you're all set!";
    $("#status-dot").dataset.state = "connected";
  }
});

show("home");
