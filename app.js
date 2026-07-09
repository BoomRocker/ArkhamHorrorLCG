// Arkham Horror LCG Companion – Vanilla JS prototype
// Mobile-first, PWA-ready, heavily commented for future expansion.

// Global app state
const state = {
  actionsUsed: 0,
  currentView: "home",
  skillTest: {
    skill: null,
    difficulty: 2,
    baseSkill: 4,
    modifiers: 0,
    totalBeforeChaos: 4,
    chaosToken: null,
    chaosModifier: 0,
    finalValue: 4
  },
  campaign: {
    name: "Night of the Zealot",
    scenario: "The Gathering",
    difficulty: "Easy"
  },
  investigator: {
    name: "Roland Banks",
    subtitle: "The Fed",
    health: 9,
    sanity: 5,
    resources: 0,
    clues: 0,
    doom: 0,
    damage: 0,
    horror: 0,
    skills: {
      willpower: 3,
      intellect: 3,
      combat: 4,
      agility: 2
    },
    elderSignText: "+1 for each clue on your location."
  },
  chaosBag: [],
  music: {
    enabled: true,
    currentTrack: "rain",
    volume: 0.5,
    playing: false
  },
  settings: {
    animations: true,
    sfx: true,
    largeText: false,
    darkMode: true
  }
};

// LocalStorage keys
const STORAGE_KEY = "arkham_lcg_companion_v1";

// Utility: load state from localStorage
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    Object.assign(state.campaign, saved.campaign || {});
    Object.assign(state.investigator, saved.investigator || {});
    Object.assign(state.music, saved.music || {});
    state.actionsUsed = saved.actionsUsed || 0;
  } catch (e) {
    console.warn("Failed to load state", e);
  }
}

// Utility: save state to localStorage
function saveState() {
  const payload = {
    campaign: state.campaign,
    investigator: state.investigator,
    music: state.music,
    actionsUsed: state.actionsUsed
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (e) {
    console.warn("Failed to save state", e);
  }
}

// View management: slide between views
function setView(viewName) {
  state.currentView = viewName;
  const views = document.querySelectorAll(".view");
  views.forEach((v) => {
    if (v.dataset.view === viewName) {
      v.classList.add("view-active");
    } else {
      v.classList.remove("view-active");
    }
  });

  // Bottom nav active state
  const navButtons = document.querySelectorAll(".bottom-nav-button");
  navButtons.forEach((btn) => {
    if (btn.dataset.navView === viewName) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// Render header from campaign + investigator
function renderHeader() {
  document.getElementById("header-campaign").textContent = state.campaign.name;
  document.getElementById("header-scenario").textContent = state.campaign.scenario;
  document.getElementById("header-difficulty").textContent = state.campaign.difficulty;
  document.getElementById("header-investigator").textContent = state.investigator.name;
}

// Render investigator card
function renderInvestigator() {
  document.getElementById("inv-name").textContent = state.investigator.name;
  document.getElementById("inv-subtitle").textContent = state.investigator.subtitle;
  document.getElementById("inv-health").textContent = state.investigator.health;
  document.getElementById("inv-sanity").textContent = state.investigator.sanity;
  document.getElementById("inv-resources").textContent = state.investigator.resources;
  document.getElementById("inv-clues").textContent = state.investigator.clues;
  document.getElementById("inv-doom").textContent = state.investigator.doom;
  document.getElementById("inv-damage").textContent = state.investigator.damage;
  document.getElementById("inv-horror").textContent = state.investigator.horror;

  document.getElementById("skill-willpower").textContent = state.investigator.skills.willpower;
  document.getElementById("skill-intellect").textContent = state.investigator.skills.intellect;
  document.getElementById("skill-combat").textContent = state.investigator.skills.combat;
  document.getElementById("skill-agility").textContent = state.investigator.skills.agility;

  // Summary text in Investigator Manager
  const summary = `${state.investigator.name} · Elder Sign: ${state.investigator.elderSignText}`;
  document.getElementById("investigator-summary-text").textContent = summary;
}

// Render actions (exhausted state)
function renderActions() {
  const buttons = document.querySelectorAll(".action-button");
  buttons.forEach((btn) => {
    const actionIndex = parseInt(btn.dataset.action, 10);
    if (actionIndex <= state.actionsUsed) {
      btn.classList.add("exhausted");
    } else {
      btn.classList.remove("exhausted");
    }
  });
}

// Reset actions for new round
function resetActions() {
  state.actionsUsed = 0;
  renderActions();
  saveState();
}

// Initialize skill test workflow with a given skill
function startSkillTest(skillKey) {
  state.skillTest.skill = skillKey;
  state.skillTest.baseSkill = state.investigator.skills[skillKey] || 0;
  state.skillTest.modifiers = 0;
  state.skillTest.difficulty = 2;
  state.skillTest.totalBeforeChaos = state.skillTest.baseSkill;

  // Step visuals
  setView("skill");
  setActiveStep(1);

  // Highlight selected skill button
  document.querySelectorAll(".skill-select").forEach((btn) => {
    btn.classList.toggle("selected", btn.dataset.skill === skillKey);
  });

  // Update base skill display
  document.getElementById("base-skill-value").textContent = state.skillTest.baseSkill;
  document.getElementById("difficulty-value").textContent = state.skillTest.difficulty;
  document.getElementById("modifier-value").textContent = state.skillTest.modifiers;
  updateTotalBeforeChaos();
}

// Set active step in skill workflow
function setActiveStep(stepNumber) {
  document.querySelectorAll(".step").forEach((step) => {
    const s = parseInt(step.dataset.step, 10);
    step.classList.toggle("step-active", s === stepNumber);
  });
}

// Update total before chaos
function updateTotalBeforeChaos() {
  const base = state.skillTest.baseSkill;
  const mods = state.skillTest.modifiers;
  const total = base + mods;
  state.skillTest.totalBeforeChaos = total;

  document.getElementById("total-base").textContent = base;
  document.getElementById("total-modifiers").textContent = mods;
  document.getElementById("total-before-chaos").textContent = total;
}

// Chaos bag generation – simplified mapping for prototype
// In a full app, this would be data-driven per campaign/difficulty.
function generateChaosBag() {
  const difficulty = state.campaign.difficulty;
  const bag = [];

  // Basic distribution; tweak per difficulty
  const baseTokens = [
    { name: "+1", modifier: +1 },
    { name: "0", modifier: 0 },
    { name: "-1", modifier: -1 },
    { name: "-2", modifier: -2 },
    { name: "-3", modifier: -3 },
    { name: "Skull", modifier: -1, type: "skull" },
    { name: "Cultist", modifier: -2, type: "cultist" },
    { name: "Tablet", modifier: -3, type: "tablet" },
    { name: "Elder Thing", modifier: -4, type: "elder_thing" },
    { name: "Auto-Fail", modifier: "auto", type: "auto_fail" },
    { name: "Elder Sign", modifier: "+1*", type: "elder_sign" }
  ];

  // Difficulty scaling: more negative tokens for higher difficulty
  baseTokens.forEach((t) => {
    let copies = 1;
    if (difficulty === "Easy") {
      if (t.modifier === -3 || t.modifier === -4) copies = 0;
    } else if (difficulty === "Standard") {
      copies = 1;
    } else if (difficulty === "Hard") {
      if (typeof t.modifier === "number" && t.modifier <= -2) copies = 2;
    } else if (difficulty === "Expert") {
      if (typeof t.modifier === "number" && t.modifier <= -1) copies = 2;
      if (t.type === "auto_fail") copies = 2;
    }

    for (let i = 0; i < copies; i++) {
      bag.push({ ...t });
    }
  });

  state.chaosBag = bag;
}

// Draw a random chaos token
function drawChaosToken() {
  if (!state.chaosBag.length) {
    generateChaosBag();
  }
  const index = Math.floor(Math.random() * state.chaosBag.length);
  const token = state.chaosBag[index];
  state.skillTest.chaosToken = token;

  // Apply modifier
  let chaosModifier = 0;
  if (token.modifier === "auto") {
    chaosModifier = "auto";
  } else if (token.modifier === "+1*") {
    // Elder Sign – apply investigator-specific effect
    chaosModifier = 1; // base +1; full effect described in rules text
  } else {
    chaosModifier = token.modifier;
  }
  state.skillTest.chaosModifier = chaosModifier;

  // Update chaos UI
  renderChaosToken(token);
  computeResult();
}

// Render chaos token and rules text
function renderChaosToken(token) {
  const bagEl = document.getElementById("chaos-bag");
  const artEl = document.getElementById("chaos-token-art");
  const nameEl = document.getElementById("chaos-token-name");
  const modEl = document.getElementById("chaos-token-modifier");
  const rulesEl = document.getElementById("chaos-token-rules-text");

  // Shake bag
  bagEl.classList.add("shake");
  setTimeout(() => bagEl.classList.remove("shake"), 400);

  // Flip token
  artEl.classList.add("flip");
  setTimeout(() => artEl.classList.remove("flip"), 600);

  nameEl.textContent = token.name;
  modEl.textContent = typeof token.modifier === "number" ? (token.modifier >= 0 ? `+${token.modifier}` : `${token.modifier}`) : token.modifier;

  // Campaign-specific rule text – simplified examples
  let rules = "";
  switch (token.type) {
    case "elder_sign":
      rules = `Elder Sign: ${state.investigator.elderSignText}`;
      break;
    case "skull":
      rules = "Skull: If there is a Ghoul enemy at your location, take 1 horror.";
      break;
    case "cultist":
      rules = "Cultist: If there is a Cultist enemy engaged with you, take 1 damage.";
      break;
    case "tablet":
      rules = "Tablet: If you fail, place 1 doom on the nearest enemy.";
      break;
    case "elder_thing":
      rules = "Elder Thing: If you fail, discard 1 card at random from your hand.";
      break;
    case "auto_fail":
      rules = "Auto-Fail: Your skill test automatically fails.";
      break;
    default:
      rules = "Apply the modifier to your total.";
      break;
  }

  rulesEl.textContent = rules;
}

// Compute final result of skill test
function computeResult() {
  const target = state.skillTest.difficulty;
  const baseTotal = state.skillTest.totalBeforeChaos;
  const chaos = state.skillTest.chaosModifier;

  let finalValue;
  let success;
  let margin;

  if (chaos === "auto") {
    finalValue = 0;
    success = false;
    margin = target;
  } else {
    finalValue = baseTotal + chaos;
    success = finalValue >= target;
    margin = Math.abs(finalValue - target);
  }

  state.skillTest.finalValue = finalValue;

  // Render result view
  document.getElementById("result-target").textContent = target;
  document.getElementById("result-investigator-total").textContent = baseTotal;
  document.getElementById("result-chaos-modifier").textContent =
    chaos === "auto" ? "Auto-Fail" : (chaos >= 0 ? `+${chaos}` : `${chaos}`);
  document.getElementById("result-final-value").textContent = finalValue;

  const stampEl = document.getElementById("result-stamp");
  const marginEl = document.getElementById("result-margin-text");

  if (success) {
    stampEl.textContent = "SUCCESS";
    stampEl.classList.remove("failure");
    marginEl.textContent = `Succeeded by ${margin}`;
  } else {
    stampEl.textContent = "FAILURE";
    stampEl.classList.add("failure");
    marginEl.textContent = `Failed by ${margin}`;
  }

  setView("result");
}

// Music player setup
const audioEl = document.getElementById("bg-audio");

// Map track keys to audio file paths (place files in /audio)
const TRACKS = {
  rain: "audio/rain.mp3",
  wind: "audio/wind.mp3",
  library: "audio/library.mp3",
  cathedral: "audio/cathedral.mp3",
  house: "audio/creaking_house.mp3",
  streets: "audio/arkham_streets.mp3",
  whispers: "audio/whispers.mp3"
};

function loadTrack(trackKey) {
  state.music.currentTrack = trackKey;
  audioEl.src = TRACKS[trackKey] || "";
  document.getElementById("music-title").textContent = trackLabel(trackKey);
  highlightTrack(trackKey);
}

function trackLabel(key) {
  switch (key) {
    case "rain":
      return "Rain";
    case "wind":
      return "Wind";
    case "library":
      return "Library";
    case "cathedral":
      return "Cathedral";
    case "house":
      return "Creaking House";
    case "streets":
      return "Arkham Streets";
    case "whispers":
      return "Whispers";
    default:
      return "Atmosphere";
  }
}

function highlightTrack(trackKey) {
  document.querySelectorAll("#music-list li").forEach((li) => {
    li.classList.toggle("active", li.dataset.track === trackKey);
  });
}

function playMusic() {
  if (!state.music.enabled) return;
  audioEl.volume = state.music.volume;
  audioEl
    .play()
    .then(() => {
      state.music.playing = true;
      document.getElementById("music-status").textContent = "Playing";
    })
    .catch((e) => console.warn("Audio play failed", e));
}

function pauseMusic() {
  audioEl.pause();
  state.music.playing = false;
  document.getElementById("music-status").textContent = "Paused";
}

// Settings: apply large text and dark mode
function applySettings() {
  document.body.classList.toggle("large-text", state.settings.largeText);
  // Dark mode is default; if disabled, we could swap theme, but for this prototype we keep dark only.
}

// Event wiring
function initEvents() {
  // Bottom nav
  document.querySelectorAll(".bottom-nav-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const view = btn.dataset.navView;
      setView(view);
    });
  });

  // Skill icons on home
  document.querySelectorAll(".skill-icon").forEach((btn) => {
    btn.addEventListener("click", () => {
      const skill = btn.dataset.skill;
      startSkillTest(skill);
    });
  });

  // Action buttons
  document.querySelectorAll(".action-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = parseInt(btn.dataset.action, 10);
      if (index <= state.actionsUsed) return;
      state.actionsUsed = index;
      renderActions();
      saveState();
    });
  });

  // Utility buttons (open views)
  document.querySelectorAll(".utility-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const nav = btn.dataset.nav;
      if (nav === "investigator") {
        setView("investigator");
      } else if (nav === "round") {
        // Round turns could be a future view; for now, open campaign manager
        setView("campaign");
      } else if (nav === "music") {
        setView("music");
      }
    });
  });

  // Close buttons
  document.querySelectorAll(".close-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      // Close returns to home for simplicity
      setView("home");
    });
  });

  // Result close button
  document.getElementById("result-close-button").addEventListener("click", () => {
    setView("home");
  });

  // Skill workflow controls
  document.querySelectorAll(".skill-select").forEach((btn) => {
    btn.addEventListener("click", () => {
      const skill = btn.dataset.skill;
      startSkillTest(skill);
    });
  });

  document.getElementById("difficulty-minus").addEventListener("click", () => {
    if (state.skillTest.difficulty > 0) {
      state.skillTest.difficulty -= 1;
      document.getElementById("difficulty-value").textContent = state.skillTest.difficulty;
    }
    setActiveStep(2);
  });

  document.getElementById("difficulty-plus").addEventListener("click", () => {
    state.skillTest.difficulty += 1;
    document.getElementById("difficulty-value").textContent = state.skillTest.difficulty;
    setActiveStep(2);
  });

  document.getElementById("modifier-minus").addEventListener("click", () => {
    state.skillTest.modifiers -= 1;
    document.getElementById("modifier-value").textContent = state.skillTest.modifiers;
    updateTotalBeforeChaos();
    setActiveStep(4);
  });

  document.getElementById("modifier-plus").addEventListener("click", () => {
    state.skillTest.modifiers += 1;
    document.getElementById("modifier-value").textContent = state.skillTest.modifiers;
    updateTotalBeforeChaos();
    setActiveStep(4);
  });

  document.getElementById("begin-chaos").addEventListener("click", () => {
    setView("chaos");
  });

  // Chaos bag draw
  document.getElementById("chaos-draw-button").addEventListener("click", () => {
    drawChaosToken();
  });

  // Campaign manager
  document.getElementById("campaign-save").addEventListener("click", () => {
    const campaignSelect = document.getElementById("campaign-select");
    const scenarioInput = document.getElementById("scenario-input");
    const difficultySelect = document.getElementById("difficulty-select");

    state.campaign.name = campaignSelect.value;
    state.campaign.scenario = scenarioInput.value || state.campaign.scenario;
    state.campaign.difficulty = difficultySelect.value;

    generateChaosBag();
    renderHeader();
    saveState();
    setView("home");
  });

  // Investigator manager
  document.getElementById("investigator-load").addEventListener("click", () => {
    const select = document.getElementById("investigator-select");
    const name = select.value;
    state.investigator.name = name;

    // Simple demo stats; real app would load from data
    if (name === "Roland Banks") {
      state.investigator.subtitle = "The Fed";
      state.investigator.skills = { willpower: 3, intellect: 3, combat: 4, agility: 2 };
      state.investigator.elderSignText = "+1 for each clue on your location.";
    } else if (name === "Daisy Walker") {
      state.investigator.subtitle = "The Librarian";
      state.investigator.skills = { willpower: 3, intellect: 5, combat: 2, agility: 2 };
      state.investigator.elderSignText = "+0. Draw 1 card.";
    } else if (name === "Skids O'Toole") {
      state.investigator.subtitle = "The Ex-Con";
      state.investigator.skills = { willpower: 2, intellect: 3, combat: 3, agility: 4 };
      state.investigator.elderSignText = "+2. If you succeed, gain 2 resources.";
    }

    renderInvestigator();
    renderHeader();
    saveState();
    setView("home");
  });

  // Music controls
  document.getElementById("music-play").addEventListener("click", () => {
    if (state.music.playing) {
      pauseMusic();
    } else {
      playMusic();
    }
  });

  document.getElementById("music-prev").addEventListener("click", () => {
    const keys = Object.keys(TRACKS);
    const idx = keys.indexOf(state.music.currentTrack);
    const prevKey = keys[(idx - 1 + keys.length) % keys.length];
    loadTrack(prevKey);
    playMusic();
  });

  document.getElementById("music-next").addEventListener("click", () => {
    const keys = Object.keys(TRACKS);
    const idx = keys.indexOf(state.music.currentTrack);
    const nextKey = keys[(idx + 1) % keys.length];
    loadTrack(nextKey);
    playMusic();
  });

  document.getElementById("music-volume-slider").addEventListener("input", (e) => {
    const vol = parseFloat(e.target.value);
    state.music.volume = vol;
    audioEl.volume = vol;
    saveState();
  });

  document.querySelectorAll("#music-list li").forEach((li) => {
    li.addEventListener("click", () => {
      const track = li.dataset.track;
      loadTrack(track);
      playMusic();
    });
  });

  // Settings toggles
  document.getElementById("settings-animations").addEventListener("change", (e) => {
    state.settings.animations = e.target.checked;
    saveState();
  });

  document.getElementById("settings-music").addEventListener("change", (e) => {
    state.music.enabled = e.target.checked;
    if (!state.music.enabled) {
      pauseMusic();
    } else if (!state.music.playing) {
      playMusic();
    }
    saveState();
  });

  document.getElementById("settings-sfx").addEventListener("change", (e) => {
    state.settings.sfx = e.target.checked;
    saveState();
  });

  document.getElementById("settings-large-text").addEventListener("change", (e) => {
    state.settings.largeText = e.target.checked;
    applySettings();
    saveState();
  });

  document.getElementById("settings-dark-mode").addEventListener("change", (e) => {
    state.settings.darkMode = e.target.checked;
    // For now, dark mode is always on; this toggle is future-proof.
    saveState();
  });

  document.getElementById("settings-reset-actions").addEventListener("click", () => {
    resetActions();
  });

  document.getElementById("settings-reset-round").addEventListener("click", () => {
    resetActions();
    // Future: also reset phase trackers, enemies, etc.
  });

  document.getElementById("settings-reset-scenario").addEventListener("click", () => {
    resetActions();
    // Future: reset campaign log, trauma, XP, etc.
  });
}

// PWA: register service worker for offline capability
function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("service-worker.js")
      .catch((e) => console.warn("Service worker registration failed", e));
  }
}

// Initial bootstrap
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  renderHeader();
  renderInvestigator();
  renderActions();
  generateChaosBag();
  applySettings();
  setView("home");

  // Music initial track
  loadTrack(state.music.currentTrack);
  audioEl.volume = state.music.volume;

  initEvents();
  registerServiceWorker();
});
