// App shell: screen navigation, MIDI, the course (units -> lesson cards ->
// theory -> practice level), results, and localStorage star persistence.

import { MidiInput } from "./midi.js";
import { Synth } from "./audio.js";
import { Game } from "./game.js";
import { MiniKeyboard } from "./keyboard.js";
import { UNITS, LESSONS, LEVELS } from "./course.js";
import { chord as buildChord } from "./music.js";

const input = new MidiInput();
const synth = new Synth();
let game = null;
let currentLessonId = null;

// Flat lesson order, for "next lesson".
const ORDER = [];
for (const u of UNITS) for (const ls of u.lessons) ORDER.push(ls.id);

const STORE_KEY = "jazzkeys.stars";
const loadStars = () => { try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch { return {}; } };
const saveStar = (id, stars) => {
  const all = loadStars();
  if (!all[id] || stars > all[id]) { all[id] = stars; localStorage.setItem(STORE_KEY, JSON.stringify(all)); }
};

const $ = (sel) => document.querySelector(sel);
const screens = ["home", "levels", "lesson", "game", "results"];
function show(name) {
  for (const s of screens) $("#screen-" + s).classList.toggle("active", s === name);
  const active = $("#screen-" + name);
  if (active && active.focus) active.focus();
  window.scrollTo(0, 0);
}

function starRow(filled, total = 3) {
  let html = "";
  for (let i = 0; i < total; i++) html += `<i class="star ${i < filled ? "on" : ""}" aria-hidden="true">★</i>`;
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

// ---- course map ------------------------------------------------------------
function renderCourse() {
  const stars = loadStars();
  const root = $("#world-list");
  root.innerHTML = "";
  let earnedTotal = 0, maxTotal = 0;
  for (const unit of UNITS) {
    const section = document.createElement("section");
    section.className = "world";
    section.innerHTML = `<div class="world-head"><span class="world-num">Unit ${unit.num}</span><h3>${unit.name}</h3></div><p class="blurb">${unit.blurb}</p>`;
    const grid = document.createElement("div");
    grid.className = "level-grid";
    unit.lessons.forEach((ls, i) => {
      const earned = stars[ls.id] || 0;
      earnedTotal += earned;
      maxTotal += 3;
      const card = document.createElement("button");
      card.className = "level-card";
      card.innerHTML = `
        <div class="level-top">
          <span class="level-num">${i + 1}</span>
          <span class="stars" aria-label="${earned} of 3 stars">${starRow(earned)}</span>
        </div>
        <span class="level-name">${ls.title}</span>
        <span class="level-blurb">${ls.goal}</span>`;
      card.addEventListener("click", () => openLesson(ls.id));
      grid.appendChild(card);
    });
    section.appendChild(grid);
    root.appendChild(section);
  }
  $("#total-stars").textContent = `★ ${earnedTotal} / ${maxTotal} stars · ${ORDER.length} lessons`;
}

// ---- lesson view -----------------------------------------------------------
function openLesson(id) {
  currentLessonId = id;
  const ls = LESSONS[id];
  $("#lesson-unit").textContent = `Unit ${ls.unitNum} · ${ls.unitName}`;
  $("#lesson-title").textContent = ls.title;
  $("#lesson-goal").textContent = ls.goal;
  $("#lesson-theory").innerHTML = ls.theory.map((p) => `<p>${p}</p>`).join("");
  $("#lesson-keypoints").innerHTML = ls.keyPoints.map((k) => `<li>${k}</li>`).join("");
  $("#example-label").textContent = (ls.example && ls.example.label) || "example";
  show("lesson");
}

function playExample(chords) {
  synth.resume();
  let t = 0;
  for (const c of chords) {
    const midis = buildChord(c.root, c.quality, c.octave ?? 4);
    setTimeout(() => {
      midis.forEach((m) => synth.noteOn(m, 0.8));
      setTimeout(() => midis.forEach((m) => synth.noteOff(m)), 720);
    }, t);
    t += 850;
  }
}
$("#btn-listen").addEventListener("click", () => {
  const ls = LESSONS[currentLessonId];
  if (ls && ls.example) playExample(ls.example.chords);
});
$("#btn-practice").addEventListener("click", () => startLevel(currentLessonId));

$("#btn-play").addEventListener("click", () => { renderCourse(); show("levels"); });
$("#btn-back-home").addEventListener("click", () => show("home"));
$("#btn-lesson-back").addEventListener("click", () => { renderCourse(); show("levels"); });

// ---- gameplay --------------------------------------------------------------
function startLevel(id) {
  clearCountIn();
  currentLessonId = id;
  const level = LEVELS[id];
  show("game");
  $("#hud-level").textContent = `${LESSONS[id].unitName} · ${level.name}`;
  resetHud(level);

  if (game) game.destroy();
  const canvas = $("#game-canvas");
  $("#song-progress").style.width = "0%";
  game = new Game({
    canvas, input, synth,
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
  renderLives(s.lives, LEVELS[currentLessonId].lives);
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
  pauseBtn.disabled = true;
  const g = game;
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
$("#btn-restart").addEventListener("click", () => startLevel(currentLessonId));
$("#btn-quit").addEventListener("click", () => {
  clearCountIn();
  if (game) game.destroy();
  game = null;
  renderCourse();
  show("levels");
});

// ---- results ---------------------------------------------------------------
const RESULT_TITLES = { 3: "Flawless!", 2: "Great playing!", 1: "Lesson cleared", 0: "Keep practicing" };

function showResults(r) {
  saveStar(currentLessonId, r.stars);
  show("results");
  $("#result-eyebrow").textContent = r.completed ? "Lesson complete" : "Out of lives";
  $("#result-title").textContent = r.completed ? RESULT_TITLES[r.stars] : "So close — try again";
  const starsEl = $("#result-stars");
  starsEl.innerHTML = starRow(r.stars);
  starsEl.setAttribute("aria-label", `${r.stars} of 3 stars`);
  $("#result-acc").textContent = Math.round(r.accuracy * 100) + "%";
  $("#result-score").textContent = r.score;
  $("#result-combo").textContent = r.maxCombo + "×";
  $("#result-notes").textContent = `${r.hits}/${r.total}`;

  const idx = ORDER.indexOf(currentLessonId);
  const nextId = ORDER[idx + 1];
  const nextBtn = $("#btn-next");
  if (nextId && r.stars > 0) { nextBtn.style.display = ""; nextBtn.onclick = () => openLesson(nextId); }
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
$("#btn-retry").addEventListener("click", () => startLevel(currentLessonId));
$("#btn-results-levels").addEventListener("click", () => { renderCourse(); show("levels"); });

// ---- boot ------------------------------------------------------------------
if (!input.supported) {
  $("#midi-status").textContent = "Web MIDI not available — the computer keyboard works great.";
  $("#status-dot").dataset.state = "unsupported";
} else {
  $("#midi-status").textContent = "Connect your MIDI piano, or just play with the keyboard.";
  $("#status-dot").dataset.state = "idle";
}

new MiniKeyboard(document.getElementById("mini-piano"), input, synth, { low: 60, high: 84 });

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
