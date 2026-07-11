const investigators = {
  roland: { name: "Roland Banks", classId: "guardian", will: 3, intellect: 3, combat: 4, agility: 2, ability: "Reaction: After you defeat an enemy: Discover 1 clue at your location. (Limit once per round.)", elder: 'Effect: <img src="images/icons/chaos_eldersign.png" class="token-icon" alt="Elder Sign"> +1 for each clue on your location.', img: "images/investigators/roland.png" },
  daisy: { name: "Daisy Walker", classId: "seeker", will: 3, intellect: 5, combat: 2, agility: 2, ability: "You may take 1 additional action during your turn, which can only be used on Tome abilities.", elder: 'Effect: <img src="images/icons/chaos_eldersign.png" class="token-icon" alt="Elder Sign"> +0. Draw 1 card for each Tome you control.', img: "images/investigators/daisy.png" },
  skids: { name: '"Skids" O\'Toole', classId: "rogue", will: 2, intellect: 3, combat: 3, agility: 4, ability: "Free Trigger: Spend 2 resources: Take 1 additional action during your turn. (Limit once per turn.)", elder: 'Effect: <img src="images/icons/chaos_eldersign.png" class="token-icon" alt="Elder Sign"> +2. Gain 2 resources if successful.', img: "images/investigators/skids.png" },
  agnes: { name: "Agnes Baker", classId: "mystic", will: 5, intellect: 2, combat: 2, agility: 3, ability: "Reaction: When 1 or more horror is placed on Agnes Baker: Deal 1 damage to an enemy at your location.", elder: 'Effect: <img src="images/icons/chaos_eldersign.png" class="token-icon" alt="Elder Sign"> +1 for each horror on Agnes Baker.', img: "images/investigators/agnes.png" },
  wendy: { name: "Wendy Adams", classId: "survivor", will: 4, intellect: 3, combat: 1, agility: 4, ability: "Reaction: When you reveal a chaos token, discard 1 card from your hand: Cancel that token and draw a new one.", elder: 'Effect: <img src="images/icons/chaos_eldersign.png" class="token-icon" alt="Elder Sign"> +0. You may choose to reveal a new token from the chaos bag instead.', img: "images/investigators/wendy.png" },
  zoey: { name: "Zoey Samaras", classId: "guardian", will: 4, intellect: 2, combat: 4, agility: 2, ability: "Reaction: After you engage an enemy: Gain 1 resource.", elder: 'Effect: <img src="images/icons/chaos_eldersign.png" class="token-icon" alt="Elder Sign"> +1. If successful, deal 1 damage to an engaged enemy.', img: "images/investigators/zoey.png" },
  rex: { name: "Rex Murphy", classId: "seeker", will: 3, intellect: 4, combat: 2, agility: 3, ability: "After you succeed on a skill test by 2 or more while investigating: Discover 1 additional clue.", elder: 'Effect: <img src="images/icons/chaos_eldersign.png" class="token-icon" alt="Elder Sign"> +2. You may draw 1 card.', img: "images/investigators/rex.png" },
  jenny: { name: "Jenny Barnes", classId: "rogue", will: 3, intellect: 3, combat: 3, agility: 3, ability: "You gain 1 additional resource during the upkeep phase.", elder: 'Effect: <img src="images/icons/chaos_eldersign.png" class="token-icon" alt="Elder Sign"> +1 for each resource you currently have.', img: "images/investigators/jenny.png" },
  jim: { name: "Jim Culver", classId: "mystic", will: 4, intellect: 3, combat: 3, agility: 2, ability: "You may treat Skull tokens revealed during skill tests as if they were '0'", elder: 'Effect: <img src="images/icons/chaos_eldersign.png" class="token-icon" alt="Elder Sign"> +1. If you succeed, heal 1 stamina or 1 sanity.', img: "images/investigators/jim.png" },
  pete: { name: '"Ashcan" Pete', classId: "survivor", will: 4, intellect: 2, combat: 2, agility: 3, ability: "You start the game with Duke in play. You may discard a card to ready an exhausted asset.", elder: 'Effect: <img src="images/icons/chaos_eldersign.png" class="token-icon" alt="Elder Sign"> +2. Ready Duke.', img: "images/investigators/pete.png" }
};

const unusedCampaignBags = {
  notz: {
    easy: ["+1", "+1", "0", "0", "0", "-1", "-1", "-2", "-2", "skull", "skull", "cultist", "tablet", "autofail", "eldersign"],
    standard: ["+1", "0", "0", "-1", "-1", "-1", "-2", "-2", "-3", "-4", "skull", "skull", "cultist", "tablet", "autofail", "eldersign"],
    hard: ["0", "0", "0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-5", "skull", "skull", "cultist", "tablet", "autofail", "eldersign"],
    expert: ["0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-4", "-5", "-6", "-8", "skull", "skull", "cultist", "tablet", "autofail", "eldersign"]
  },
  dunwich: {
    easy: ["+1", "+1", "0", "0", "0", "-1", "-1", "-1", "-2", "-2", "skull", "skull", "eye", "elderthing", "cultist", "autofail", "eldersign"],
    standard: ["+1", "0", "0", "-1", "-1", "-1", "-2", "-2", "-3", "-4", "skull", "skull", "eye", "elderthing", "cultist", "autofail", "eldersign"],
    hard: ["0", "0", "0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-5", "skull", "skull", "skull", "eye", "elderthing", "cultist", "autofail", "eldersign"],
    expert: ["0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-4", "-5", "-6", "-8", "skull", "skull", "skull", "eye", "elderthing", "cultist", "autofail", "eldersign"]
  },
  carcosa: {
    easy: ["+1", "+1", "0", "0", "0", "-1", "-1", "-1", "-2", "-2", "skull", "skull", "skull", "elderthing", "autofail", "eldersign"],
    standard: ["+1", "0", "0", "-1", "-1", "-1", "-2", "-2", "-3", "-4", "skull", "skull", "skull", "elderthing", "autofail", "eldersign"],
    hard: ["0", "0", "0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-5", "skull", "skull", "skull", "elderthing", "autofail", "eldersign"],
    expert: ["0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-4", "-5", "-6", "-8", "skull", "skull", "skull", "elderthing", "autofail", "eldersign"]
  },
  ash: {
    easy: ["+1", "+1", "0", "0", "0", "-1", "-1", "-1", "-2", "-2", "skull", "skull", "tablet", "elderthing", "cultist", "autofail", "eldersign"],
    standard: ["+1", "0", "0", "-1", "-1", "-2", "-2", "-3", "-4", "skull", "skull", "tablet", "elderthing", "cultist", "autofail", "eldersign"],
    hard: ["0", "0", "0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-5", "skull", "skull", "tablet", "elderthing", "cultist", "autofail", "eldersign"],
    expert: ["0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-4", "-5", "-6", "-8", "skull", "skull", "tablet", "elderthing", "cultist", "autofail", "eldersign"]
  }
};

const unusedTokenImagePaths = {
  "+1": "images/icons/chaos_plus1.png",
  "0": "images/icons/chaos_0.png",
  "-1": "images/icons/chaos_minus1.png",
  "-2": "images/icons/chaos_minus2.png",
  "-3": "images/icons/chaos_minus3.png",
  "-4": "images/icons/chaos_minus4.png",
  "-5": "images/icons/chaos_minus5.png",
  "-6": "images/icons/chaos_minus6.png",
  "-8": "images/icons/chaos_minus8.png",
  "skull": "images/icons/chaos_skull.png",
  "cultist": "images/icons/chaos_cultist.png",
  "tablet": "images/icons/chaos_tablet.png",
  "elderthing": "images/icons/chaos_elderthing.png",
  "eye": "images/icons/chaos_eye.png",
  "autofail": "images/icons/chaos_autofail.png",
  "eldersign": "images/icons/chaos_eldersign.png"
};

const campaignBags = {
  notz: {
    easy: ["+1", "+1", "0", "0", "0", "-1", "-1", "-2", "-2", "skull", "skull", "cultist", "tablet", "autofail", "eldersign"],
    standard: ["+1", "0", "0", "-1", "-1", "-1", "-2", "-2", "-3", "-4", "skull", "skull", "cultist", "tablet", "autofail", "eldersign"],
    hard: ["0", "0", "0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-5", "skull", "skull", "cultist", "tablet", "autofail", "eldersign"],
    expert: ["0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-4", "-5", "-6", "-8", "skull", "skull", "cultist", "tablet", "autofail", "eldersign"]
  },
  dunwich: {
    easy: ["+1", "+1", "0", "0", "0", "-1", "-1", "-1", "-2", "-2", "skull", "skull", "eye", "elderthing", "cultist", "autofail", "eldersign"],
    standard: ["+1", "0", "0", "-1", "-1", "-1", "-2", "-2", "-3", "-4", "skull", "skull", "eye", "elderthing", "cultist", "autofail", "eldersign"],
    hard: ["0", "0", "0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-5", "skull", "skull", "skull", "eye", "elderthing", "cultist", "autofail", "eldersign"],
    expert: ["0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-4", "-5", "-6", "-8", "skull", "skull", "skull", "eye", "elderthing", "cultist", "autofail", "eldersign"]
  },
  carcosa: {
    easy: ["+1", "+1", "0", "0", "0", "-1", "-1", "-1", "-2", "-2", "skull", "skull", "skull", "elderthing", "autofail", "eldersign"],
    standard: ["+1", "0", "0", "-1", "-1", "-1", "-2", "-2", "-3", "-4", "skull", "skull", "skull", "elderthing", "autofail", "eldersign"],
    hard: ["0", "0", "0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-5", "skull", "skull", "skull", "elderthing", "autofail", "eldersign"],
    expert: ["0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-4", "-5", "-6", "-8", "skull", "skull", "skull", "elderthing", "autofail", "eldersign"]
  },
  ash: {
    easy: ["+1", "+1", "0", "0", "0", "-1", "-1", "-1", "-2", "-2", "skull", "skull", "tablet", "elderthing", "cultist", "autofail", "eldersign"],
    standard: ["+1", "0", "0", "-1", "-1", "-2", "-2", "-3", "-4", "skull", "skull", "tablet", "elderthing", "cultist", "autofail", "eldersign"],
    hard: ["0", "0", "0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-5", "skull", "skull", "tablet", "elderthing", "cultist", "autofail", "eldersign"],
    expert: ["0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-4", "-5", "-6", "-8", "skull", "skull", "tablet", "elderthing", "cultist", "autofail", "eldersign"]
  }
};

const tokenImagePaths = {
  "+1": "images/icons/chaos_plus1.png",
  "0": "images/icons/chaos_0.png",
  "-1": "images/icons/chaos_minus1.png",
  "-2": "images/icons/chaos_minus2.png",
  "-3": "images/icons/chaos_minus3.png",
  "-4": "images/icons/chaos_minus4.png",
  "-5": "images/icons/chaos_minus5.png",
  "-6": "images/icons/chaos_minus6.png",
  "-8": "images/icons/chaos_minus8.png",
  "skull": "images/icons/chaos_skull.png",
  "cultist": "images/icons/chaos_cultist.png",
  "tablet": "images/icons/chaos_tablet.png",
  "elderthing": "images/icons/chaos_elderthing.png",
  "eye": "images/icons/chaos_eye.png",
  "autofail": "images/icons/chaos_autofail.png",
  "eldersign": "images/icons/chaos_eldersign.png"
};

// Chaos-token effects normally vary by campaign and scenario. These notes
// tell the player what to resolve immediately, without putting rules text
// outside the chaos-bag draw area.
const specialTokenDescriptors = {
  notz: {
    skull: "Apply -X, where X is the number of Ghoul enemies in play.",
    cultist: "Reveal another token. If you fail, place 1 doom on the nearest Cultist enemy.",
    tablet: "Apply -X. If you fail, take 1 horror.",
    eldersign: "Resolve this investigator's Elder Sign effect shown in the dossier header.",
    autofail: "This test automatically fails. Do not calculate a final skill value."
  },
  default: {
    skull: "Resolve the Skull effect on the current scenario reference card.",
    cultist: "Resolve the Cultist effect on the current scenario reference card.",
    tablet: "Resolve the Tablet effect on the current scenario reference card.",
    elderthing: "Resolve the Elder Thing effect on the current scenario reference card.",
    eye: "Resolve the Eye effect on the current scenario reference card.",
    eldersign: "Resolve this investigator's Elder Sign effect shown in the dossier header.",
    autofail: "This test automatically fails. Do not calculate a final skill value."
  }
};

const specialTokenLabels = {
  skull: 'Skull',
  cultist: 'Cultist',
  tablet: 'Tablet',
  elderthing: 'Elder Thing',
  eye: 'Eye',
  eldersign: 'Elder Sign',
  autofail: 'Auto-fail'
};

const skillVisuals = {
  will: { icon: 'images/icons/invest_willpower.png', color: '#1a4f78', background: 'rgba(26, 79, 120, 0.18)' },
  intellect: { icon: 'images/icons/invest_intellect.png', color: '#693b73', background: 'rgba(105, 59, 115, 0.18)' },
  combat: { icon: 'images/icons/invest_combat.png', color: '#7a4027', background: 'rgba(122, 64, 39, 0.18)' },
  agility: { icon: 'images/icons/invest_agility.png', color: '#1f6b52', background: 'rgba(31, 107, 82, 0.18)' }
};

let activeBagContents = [];
let activeSkillType = 'will';
let activeClassId = 'guardian';

function syncDifficultyBagLayout() {
  const campaign = document.getElementById('campaign-select').value;
  const difficulty = document.getElementById('difficulty-select').value;
  
  if (campaignBags[campaign] && campaignBags[campaign][difficulty]) {
    activeBagContents = [...campaignBags[campaign][difficulty]];
  }
  
  const grid = document.getElementById('bag-contents-grid');
  grid.innerHTML = '';
  activeBagContents.forEach(token => {
    const img = document.createElement('img');
    img.className = 'actual-mini-token';
    img.src = tokenImagePaths[token] || "images/icons/chaos_unknown.png";
    img.alt = token;
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', `Use ${specialTokenLabels[token] || token} for this test`);
    img.addEventListener('click', () => {
      toggleBagPopover(false);
      drawSimpleToken(token);
    });
    img.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleBagPopover(false);
        drawSimpleToken(token);
      }
    });
    grid.appendChild(img);
  });
}

function drawSimpleToken(forcedToken) {
  if (activeBagContents.length === 0) syncDifficultyBagLayout();

  playSfx('sfx/card.mp3');
  
  const randIndex = Math.floor(Math.random() * activeBagContents.length);
  const drawnToken = forcedToken || activeBagContents[randIndex];
  
  const graphicEl = document.getElementById('token-graphic');
  graphicEl.classList.remove('spin-roll');
  void graphicEl.offsetWidth; 
  
  const path = tokenImagePaths[drawnToken] || "images/icons/chaos_unknown.png";
  graphicEl.style.backgroundImage = `url('${path}')`;
  graphicEl.classList.add('spin-roll');

  const isElderSign = drawnToken === 'eldersign';
  const elderFlash = document.getElementById('elder-sign-flash');
  const elderRule = document.getElementById('card-portrait');
  elderRule.classList.remove('elder-sign-triggered');
  elderFlash.classList.remove('is-visible');
  if (isElderSign) {
    // Restart the animation so every Elder Sign draw calls attention to its rule.
    void elderRule.offsetWidth;
    elderRule.classList.add('elder-sign-triggered');
    const investigator = investigators[document.getElementById('investigator-select').value];
    const elderEffect = investigator?.elder
      .replace(/<[^>]*>/g, '')
      .replace(/^Effect:\s*/i, '') || 'Resolve your investigator\'s Elder Sign effect.';
    elderFlash.textContent = elderEffect;
    void elderFlash.offsetWidth;
    elderFlash.classList.add('is-visible');
  }

  const effectMsgEl = document.getElementById('token-effect-msg');
  const activeCampaign = document.getElementById('campaign-select').value;
  const campaignDescriptors = specialTokenDescriptors[activeCampaign] || {};
  const tokenEffect = campaignDescriptors[drawnToken]
    || specialTokenDescriptors.default[drawnToken];
  effectMsgEl.replaceChildren();
  if (tokenEffect) {
    const tokenName = document.createElement('strong');
    tokenName.textContent = specialTokenLabels[drawnToken] || drawnToken;
    effectMsgEl.append(tokenName, `: ${tokenEffect}`);
  }

  let modifier = 0;
  if (!isNaN(parseInt(drawnToken))) {
    modifier = parseInt(drawnToken);
  } else if (drawnToken === 'autofail') {
    modifier = -99;
  }

  const baseSkill = parseInt(document.getElementById(`stat-${activeSkillType}`).innerText) || 0;
  const committed = parseInt(document.getElementById('val-commit').innerText) || 0;
  const target = parseInt(document.getElementById('val-target').innerText) || 0;
  
  const finalTotal = Math.max(0, baseSkill + committed + (drawnToken === 'autofail' ? -99 : modifier));
  const outcomeMsg = document.getElementById('test-outcome-msg');
  const tokenTheater = document.querySelector('.token-theater');
  tokenTheater.classList.remove('test-success', 'test-failure', 'elder-sign-result', 'autofail-result');
  void tokenTheater.offsetWidth;
  
  if (drawnToken === 'autofail' || (!isElderSign && finalTotal < target)) {
    outcomeMsg.innerText = drawnToken === 'autofail' ? "Tentacles! Fail" : 'Failed';
    outcomeMsg.style.color = "var(--fail-red)";
    tokenTheater.classList.add('test-failure');
  } else {
    outcomeMsg.innerText = isElderSign ? 'Elder Sign! Automatic Success!' : 'Success!';
    outcomeMsg.style.color = "var(--success-green)";
    tokenTheater.classList.add('test-success');
  }

  if (isElderSign) {
    tokenTheater.classList.add('elder-sign-result');
    playSfx('sfx/stager.mp3');
  } else if (drawnToken === 'autofail') {
    tokenTheater.classList.add('autofail-result');
    playSfx('sfx/dmg.mp3');
  }

  if (isElderSign || drawnToken === 'autofail') {
    document.getElementById('test-score-counters').replaceChildren();
  } else {
    renderTestScoreCounters(target, finalTotal, activeSkillType);
  }
}

function renderTestScoreCounters(shroud, skillTotal, skill) {
  const container = document.getElementById('test-score-counters');
  const frameFilters = {
    shroud: 'invert(18%) sepia(72%) saturate(2025%) hue-rotate(342deg) brightness(83%) contrast(96%)',
    will: 'invert(28%) sepia(31%) saturate(1430%) hue-rotate(164deg) brightness(87%) contrast(91%)',
    intellect: 'invert(26%) sepia(22%) saturate(1776%) hue-rotate(243deg) brightness(88%) contrast(91%)',
    combat: 'invert(31%) sepia(29%) saturate(1458%) hue-rotate(336deg) brightness(87%) contrast(88%)',
    agility: 'invert(33%) sepia(18%) saturate(1699%) hue-rotate(113deg) brightness(86%) contrast(88%)'
  };
  const makeCounter = (value, color, label, frameFilter) => {
    const counter = document.createElement('div');
    counter.className = `test-score-counter ${label === 'Shroud' ? 'shroud-score-counter' : 'skill-score-counter'}`;
    counter.style.setProperty('--counter-color', color);
    counter.style.setProperty('--counter-filter', frameFilter);
    counter.setAttribute('aria-label', `${label}: ${value}`);

    const frame = document.createElement('img');
    frame.className = 'counter-frame-shape';
    frame.src = 'images/icons/counter-frame.svg';
    frame.alt = '';
    const number = document.createElement('span');
    number.className = 'counter-frame-number';
    number.textContent = value;
    counter.append(frame, number);
    return counter;
  };

  container.replaceChildren(
    makeCounter(shroud, '#9d2828', 'Shroud', frameFilters.shroud),
    Object.assign(document.createElement('span'), { className: 'test-score-vs', textContent: 'vs' }),
    makeCounter(skillTotal, skillVisuals[skill]?.color || '#1a4f78', 'Skill', frameFilters[skill] || frameFilters.will)
  );
}

function loadInvestigatorProfileManual() {
  const select = document.getElementById('investigator-select');
  const data = investigators[select.value];
  if (!data) return;

  document.getElementById('card-name').innerText = data.name;
  document.getElementById('card-portrait').src = data.img;
  document.getElementById('profile-name').innerText = data.name;
  document.getElementById('profile-portrait').src = data.img;
  document.getElementById('profile-portrait').alt = `${data.name} portrait`;
  document.getElementById('profile-ability').innerText = data.ability;
  document.getElementById('profile-elder').innerHTML = data.elder;
  document.getElementById('elder-sign-flash').classList.remove('is-visible');
  
  document.getElementById('class-mood-badge').src = "images/icons/class_" + data.classId + ".png";
  document.getElementById('dossier-start-class-icon').src = "images/icons/class_" + data.classId + ".png";
  activeClassId = data.classId;
  renderActionIcons();
  
  document.getElementById('stat-will').innerText = data.will;
  document.getElementById('stat-intellect').innerText = data.intellect;
  document.getElementById('stat-combat').innerText = data.combat;
  document.getElementById('stat-agility').innerText = data.agility;

  const classColors = {
    guardian: "#1a334d",
    seeker: "#8a6416",
    rogue: "#075734",
    mystic: "#5c3d75",
    survivor: "#8b263e",
    neutral: "#4f4f4f"
  };
  const activeSkinColor = classColors[data.classId] || "#362a20";
  document.getElementById('dynamic-class-skin').style.backgroundColor = activeSkinColor;
  document.documentElement.style.setProperty('--class-color', activeSkinColor);
  document.documentElement.style.setProperty('--investigator-watermark', `url("${data.img}")`);
  
  selectSkillManual(activeSkillType, data[activeSkillType], false);
}

function selectSkillManual(skill, val, playSound = true) {
  activeSkillType = skill;
  document.querySelectorAll('.stat-badge').forEach(b => b.classList.remove('active-test'));
  document.getElementById(`badge-${skill}`).classList.add('active-test');
  updateBonusSkillVisual(skill);
  if (playSound) playSfx('sfx/dice.mp3');
}

function updateBonusSkillVisual(skill) {
  const visual = skillVisuals[skill];
  if (!visual) return;

  const bonusRow = document.querySelector('.bonus-skills-row');
  const bonusIcon = document.getElementById('bonus-skill-icon');
  bonusRow.style.backgroundColor = visual.background;
  bonusRow.style.borderColor = visual.color;
  bonusIcon.src = visual.icon;
  bonusIcon.alt = `${skill} skill`;
}

function adjustCounter(id, delta) {
  const el = document.getElementById(id);
  let current = parseInt(el.innerText) || 0;
  const nextValue = Math.max(0, current + delta);
  if (nextValue === current) return;

  el.innerText = nextValue;
  if (id === 'val-target' || id === 'val-commit') {
    playSfx(delta > 0 ? 'sfx/symbol.mp3' : 'sfx/trash.mp3');
  }
}

function playSfx(src) {
  const sound = new Audio(src);
  sound.volume = 0.45;
  sound.play().catch(() => {});
}

function switchActiveTab(target) {
  document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active-view'));
  document.querySelectorAll('.nav-tab-item').forEach(t => t.classList.remove('active-tab'));
  document.getElementById(`view-${target}`).classList.add('active-view');
  document.getElementById(`tab-btn-${target}`).classList.add('active-tab');
}

function toggleBagPopover(show) {
  document.getElementById('bag-popover').style.display = show ? 'flex' : 'none';
}

function toggleInvestigatorModal(show) {
  document.getElementById('investigator-modal').style.display = show ? 'flex' : 'none';
}

function togglePhaseCard(event, index) {
  const card = document.getElementById(`phase-card-${index}`);
  card.classList.toggle('completed');
}

function checkSubtaskProgress(index) {
  playSfx('sfx/press5.mp3');
  const tasks = Array.from(document.querySelectorAll(`.phase-flow-step.phase-${index} input[type="checkbox"]`));
  const phaseSteps = document.querySelectorAll(`.phase-flow-step.phase-${index}`);
  // Upkeep ends with Reset round, so do not dim it before its final action.
  if (index === 3) {
    updatePhaseFlowGuidance();
    return;
  }
  const complete = tasks.length > 0 && tasks.every(task => task.checked);
  phaseSteps.forEach(step => step.classList.toggle('phase-complete', complete));
  updatePhaseFlowGuidance();
}

function updatePhaseFlowGuidance() {
  const steps = Array.from(document.querySelectorAll('.phase-flow-step'));
  // The visual track doubles back across row two, so its DOM order differs
  // from the arrow order at that turn in the round.
  const roundOrder = [0, 1, 2, 3, 7, 6, 5, 4, 8, 9];
  steps.forEach(step => step.classList.remove('next-action'));

  const nextIndex = roundOrder.find(index => {
    const checkbox = steps[index]?.querySelector('input[type="checkbox"]');
    return checkbox ? !checkbox.checked : false;
  });
  (nextIndex === undefined ? steps[9] : steps[nextIndex])?.classList.add('next-action');
}

function selectPhaseForPhone(index) {
  document.querySelectorAll('.phase-column-card').forEach((card, cardIndex) => {
    card.classList.toggle('phone-active', cardIndex === index);
  });
  document.querySelectorAll('.phase-phone-tab').forEach((tab, tabIndex) => {
    tab.classList.toggle('active', tabIndex === index);
  });
}

function togglePhaseActivation(index) {
  const card = document.getElementById(`phase-card-${index}`);
  const completed = card.classList.toggle('completed');
  card.querySelectorAll('input[type="checkbox"]').forEach(task => task.disabled = completed);
}

function renderActionIcons() {
  const actionIcons = document.getElementById('phase-action-icons');
  if (!actionIcons) return;

  actionIcons.replaceChildren();
  for (let index = 0; index < 3; index += 1) {
    const action = document.createElement('button');
    action.type = 'button';
    action.className = 'action-icon';
    action.setAttribute('aria-label', `Spend action ${index + 1}`);

    const icon = document.createElement('img');
    icon.src = `images/icons/class_${activeClassId}.png`;
    icon.alt = '';
    action.appendChild(icon);
    action.addEventListener('click', () => {
      const spent = action.classList.toggle('spent');
      playSfx(spent ? 'sfx/trash.mp3' : 'sfx/symbol.mp3');
    });
    actionIcons.appendChild(action);
  }
}

function resetRoundMatrix() {
  playSfx('sfx/symbol.mp3');
  document.querySelectorAll('.phase-flow-step').forEach(step => step.classList.remove('phase-complete'));
  document.querySelectorAll('.phase-flow-board input').forEach(i => {
    i.checked = false;
    i.disabled = false;
  });
  updatePhaseFlowGuidance();
  renderActionIcons();
}

let isPlaying = false;
function togglePlay() {
  const player = document.getElementById('audio-player');
  const btn = document.getElementById('play-btn');
  if (isPlaying) {
    player.pause();
    btn.innerText = "▶ Play";
  } else {
    player.play().catch(()=>{});
    btn.innerText = "⏸ Pause";
  }
  isPlaying = !isPlaying;
}

function loadTrack(element, src) {
  document.querySelectorAll('.track-item').forEach(i => i.classList.remove('active'));
  element.classList.add('active');
  const player = document.getElementById('audio-player');
  player.src = src;
  player.load();
  document.getElementById('track-scrubber').value = 0;
  player.play().then(() => {
    isPlaying = true;
    document.getElementById('play-btn').innerText = "⏸ Pause";
  }).catch(() => {
    isPlaying = false;
    document.getElementById('play-btn').innerText = "▶ Play";
  });
}

function scrubAudio() {
  const player = document.getElementById('audio-player');
  const scrubber = document.getElementById('track-scrubber');
  if (Number.isFinite(player.duration) && player.duration > 0) {
    player.currentTime = player.duration * (Number(scrubber.value) / 100);
  }
}

function syncAudioScrubber() {
  const player = document.getElementById('audio-player');
  const scrubber = document.getElementById('track-scrubber');
  if (Number.isFinite(player.duration) && player.duration > 0) {
    scrubber.value = (player.currentTime / player.duration) * 100;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  syncDifficultyBagLayout();
  selectSkillManual(activeSkillType, 0, false);
  renderActionIcons();
  updatePhaseFlowGuidance();
  const player = document.getElementById('audio-player');
  player.addEventListener('timeupdate', syncAudioScrubber);
  player.addEventListener('loadedmetadata', syncAudioScrubber);
});
