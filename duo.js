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
  pete: { name: '"Ashcan" Pete', classId: "survivor", will: 4, intellect: 2, combat: 2, agility: 3, ability: "You start the game with Duke in play. You may discard a card to ready an exhausted asset.", elder: 'Effect: <img src="images/icons/chaos_eldersign.png" class="token-icon" alt="Elder Sign"> +2. Ready Duke.', img: "images/investigators/pete.png" },
  mark: { name: "Mark Harrigan", classId: "guardian", will: 3, intellect: 2, combat: 5, agility: 2, ability: "After 1 or more damage is placed on an asset or investigator you control: Draw 1 card. (Limit once per phase.)", elder: 'Effect: <img src="images/icons/chaos_eldersign.png" class="token-icon" alt="Elder Sign"> +1 for each damage on Mark Harrigan.', img: "images/investigators/mark.png" },
  minh: { name: "Minh Thi Phan", classId: "seeker", will: 4, intellect: 4, combat: 2, agility: 2, ability: "The first card you commit to each skill test gains a wild skill icon.", elder: 'Effect: <img src="images/icons/chaos_eldersign.png" class="token-icon" alt="Elder Sign"> +1. Choose an investigator at your location to get +1 skill value for this test.', img: "images/investigators/minh.png" },
  sefina: { name: "Sefina Rousseau", classId: "rogue", will: 4, intellect: 2, combat: 2, agility: 4, ability: "During setup, draw 13 cards instead of 5. Choose up to 5 events from among them and place them beneath Sefina.", elder: 'Effect: <img src="images/icons/chaos_eldersign.png" class="token-icon" alt="Elder Sign"> +3. You may play an event beneath Sefina as if it were in your hand.', img: "images/investigators/sefina.png" },
  akachi: { name: "Akachi Onyele", classId: "mystic", will: 5, intellect: 2, combat: 3, agility: 3, ability: "Each asset you control that enters play with charges gains 1 additional charge.", elder: 'Effect: <img src="images/icons/chaos_eldersign.png" class="token-icon" alt="Elder Sign"> +1. Add 1 charge to an asset you control.', img: "images/investigators/akachi.png" },
  yorick: { name: "William Yorick", classId: "survivor", will: 3, intellect: 2, combat: 4, agility: 3, ability: "After you defeat an enemy: You may play an asset from your discard pile. (Pay its cost.)", elder: 'Effect: <img src="images/icons/chaos_eldersign.png" class="token-icon" alt="Elder Sign"> +2. If this test succeeds, you may play an asset from your discard pile. (Pay its cost.)', img: "images/investigators/yorick.png" },
  lola: { name: "Lola Hayes", classId: "neutral", classIcon: "images/icons/chaos_eldersign.png", will: 3, intellect: 3, combat: 3, agility: 3, ability: "Choose a role during setup. You can only play, commit, or trigger abilities on cards of your current role.", elder: 'Effect: <img src="images/icons/chaos_eldersign.png" class="token-icon" alt="Elder Sign"> +2. You may switch your role.', img: "images/investigators/lola.png" },
  daniela: { name: "Daniela Reyes", classId: "guardian", will: 4, intellect: 2, combat: 5, agility: 2, ability: "After an enemy attack deals 1 or more damage to you: Deal 1 damage to that enemy.", elder: 'Effect: <img src="images/icons/chaos_eldersign.png" class="token-icon" alt="Elder Sign"> +1. You may deal 1 damage to an enemy engaged with you.', img: "images/investigators/daniela.png" },
  joe: { name: "Joe Diamond", classId: "seeker", will: 3, intellect: 4, combat: 4, agility: 2, ability: "You have a separate 10-card Hunch deck. Once each turn, reveal the top card of your Hunch deck; you may play it as if it were in your hand, at -2 cost.", elder: 'Effect: <img src="images/icons/chaos_eldersign.png" class="token-icon" alt="Elder Sign"> +1. If you succeed, discover 1 clue at your location.', img: "images/investigators/joe.png" },
  trish: { name: "Trish Scarborough", classId: "rogue", will: 2, intellect: 4, combat: 2, agility: 4, ability: "After you discover 1 or more clues at a location with an enemy: Either discover 1 additional clue there, or automatically evade that enemy.", elder: 'Effect: <img src="images/icons/chaos_eldersign.png" class="token-icon" alt="Elder Sign"> +2. If you succeed, automatically evade an enemy at your location.', img: "images/investigators/trish.png" },
  dexter: { name: "Dexter Drake", classId: "mystic", will: 5, intellect: 2, combat: 3, agility: 2, ability: "During your turn, you may play 1 asset as a fast action. If you do, discard an asset you control with a different title.", elder: 'Effect: <img src="images/icons/chaos_eldersign.png" class="token-icon" alt="Elder Sign"> +2. You may play an asset from your discard pile. (Pay its cost.)', img: "images/investigators/dexter.png" },
  isabelle: { name: "Isabelle Barnes", classId: "survivor", will: 3, intellect: 2, combat: 3, agility: 4, ability: "When you fail a test, place 1 tracking resource on Isabelle. Spend 2 tracking resources to look at the top 3 cards of the deck.", elder: 'Effect: <img src="images/icons/chaos_eldersign.png" class="token-icon" alt="Elder Sign"> +0. Gain 2 tracking resources.', img: "images/investigators/isabelle.png" }
};

const investigatorFlavor = {
  roland: "A federal agent who left the FBI's books behind to hunt the unnatural in Arkham.",
  daisy: "A Miskatonic librarian whose forbidden tomes are as useful as they are dangerous.",
  skids: "A former crook trying to outrun Arkham's underworld and his own past.",
  agnes: "A waitress burdened by a dark power she can barely keep contained.",
  wendy: "A streetwise orphan who has learned to survive whatever Arkham throws at her.",
  zoey: "A chef with a secret calling: hunt monsters in the name of her faith.",
  rex: "A newspaper reporter who will chase any strange lead, no matter how dangerous.",
  jenny: "A glamorous socialite with a fortune, a gun, and a missing sister to find.",
  jim: "A jazz musician whose trumpet calls to spirits lingering beyond the veil.",
  pete: "A drifter whose loyal hound Duke is his best friend and greatest ally.",
  mark: "A battle-scarred soldier still fighting the horrors that followed him home.",
  minh: "A meticulous Miskatonic secretary who finds power in careful preparation.",
  sefina: "A Parisian painter whose art has drawn her into a nightmare beyond imagination.",
  akachi: "A shaman who travels the world to keep ancient evils bound and buried.",
  yorick: "A gravedigger who knows the dead do not always stay where they are laid.",
  lola: "A stage actress caught between roles, each one a mask against the darkness.",
  daniela: "A stubborn mechanic who meets every impossible problem with a wrench and grit.",
  joe: "A hardboiled private investigator following the clues no one else can see.",
  trish: "A clever spy who turns secrets, shadows, and a quick exit into weapons.",
  dexter: "A stage magician whose real tricks begin when the lights go out.",
  isabelle: "A returned survivor still tracking the threads that tie her to the unknown."
};

// Duo mode keeps each player's selection independent; only the active dossier
// supplies the shared skill-test controls and profile presentation.
let activeInvestigatorSlot = 'primary';
const bonusSkillCounterIds = ['val-commit', 'val-events', 'val-assets', 'val-other'];
const bonusSkillTypes = ['will', 'intellect', 'combat', 'agility'];
const makeBonusSkillState = initialValue => Object.fromEntries(
  bonusSkillTypes.map(skill => [skill, Object.fromEntries(bonusSkillCounterIds.map(id => [id, initialValue]))])
);
const bonusSkillStateBySlot = {
  primary: makeBonusSkillState(0),
  secondary: makeBonusSkillState(0)
};
const bonusSkillLockStateBySlot = {
  primary: makeBonusSkillState(false),
  secondary: makeBonusSkillState(false)
};

function saveBonusSkillStateForSlot(slot, skill = activeSkillType) {
  bonusSkillCounterIds.forEach(id => {
    bonusSkillStateBySlot[slot][skill][id] = parseInt(document.getElementById(id)?.textContent) || 0;
  });
}

function restoreBonusSkillStateForSlot(slot, skill = activeSkillType) {
  bonusSkillCounterIds.forEach(id => {
    const counter = document.getElementById(id);
    const value = bonusSkillStateBySlot[slot][skill][id] || 0;
    if (counter) {
      counter.textContent = value;
      counter.classList.toggle('is-zero', value === 0);
    }
    updateBonusSkillLockButton(id, slot, skill);
  });
}

function updateBonusSkillLockButton(id, slot = activeInvestigatorSlot, skill = activeSkillType) {
  const button = document.getElementById(`lock-${id}`);
  if (!button) return;
  const locked = Boolean(bonusSkillLockStateBySlot[slot][skill][id]);
  const label = document.querySelector(`#${id}`)?.closest('.bonus-skills-row')
    ?.querySelector('.bonus-skill-label span')?.textContent.replace(':', '') || 'bonus';
  button.textContent = locked ? '🔒' : '🔓';
  button.classList.toggle('is-locked', locked);
  button.setAttribute('aria-pressed', String(locked));
  button.setAttribute('aria-label', `${locked ? 'Unlock' : 'Lock'} ${label} value`);
}

function toggleBonusSkillLock(id) {
  const locks = bonusSkillLockStateBySlot[activeInvestigatorSlot][activeSkillType];
  locks[id] = !locks[id];
  updateBonusSkillLockButton(id);
  playSfx('sfx/symbol.mp3');
}

function resetUnlockedBonusSkillCounters(slot = activeInvestigatorSlot, skill = activeSkillType) {
  bonusSkillCounterIds.forEach(id => {
    if (bonusSkillLockStateBySlot[slot][skill][id]) return;
    bonusSkillStateBySlot[slot][skill][id] = 0;
    const counter = document.getElementById(id);
    if (counter && slot === activeInvestigatorSlot && skill === activeSkillType) {
      counter.textContent = '0';
      counter.classList.add('is-zero');
    }
  });
}

function getActiveInvestigatorSelect() {
  return document.getElementById(activeInvestigatorSlot === 'secondary'
    ? 'co-investigator-select'
    : 'investigator-select');
}

function getActiveInvestigatorKey() {
  return getActiveInvestigatorSelect()?.value || 'roland';
}

function setInvestigatorForSlot(slot) {
  activateInvestigatorSlot(slot);
}

function activateInvestigatorSlot(slot) {
  saveBonusSkillStateForSlot(activeInvestigatorSlot);
  activeInvestigatorSlot = slot;
  resetUnlockedBonusSkillCounters(activeInvestigatorSlot, activeSkillType);
  playSfx('sfx/pageflip2.mp3');
  loadInvestigatorProfileManual();
  restoreBonusSkillStateForSlot(activeInvestigatorSlot);
}

function updateDuoInvestigatorTabs() {
  const primary = document.getElementById('investigator-select');
  const secondary = document.getElementById('co-investigator-select');
  const primaryTab = document.getElementById('header-primary-tab');
  const secondaryTab = document.getElementById('header-secondary-tab');
  if (!primary || !secondary || !primaryTab || !secondaryTab) return;

  const setTabContents = (tab, investigatorId, fallback) => {
    const investigator = investigators[investigatorId];
    const classColors = {
      guardian: '#1a334d', seeker: '#8a6416', rogue: '#075734',
      mystic: '#5c3d75', survivor: '#8b263e', neutral: '#4f4f4f'
    };
    tab.style.setProperty('--tab-class-color', classColors[investigator?.classId] || '#4f4f4f');
    const icon = document.createElement('img');
    icon.className = 'duo-investigator-tab-icon';
    icon.src = investigator?.classIcon || `images/icons/class_${investigator?.classId || 'neutral'}.png`;
    icon.alt = '';
    const name = document.createElement('span');
    name.className = 'duo-investigator-tab-name';
    name.textContent = investigator?.name || fallback;
    const nameLength = name.textContent.replace(/["']/g, '').length;
    let nameplateWidth = '75%';
    if (nameLength >= 18) nameplateWidth = '94%';
    else if (nameLength >= 15) nameplateWidth = '88%';
    else if (nameLength >= 12) nameplateWidth = '82%';
    tab.style.setProperty('--nameplate-width', nameplateWidth);
    tab.replaceChildren(icon, name);
  };
  setTabContents(primaryTab, primary.value, 'First investigator');
  setTabContents(secondaryTab, secondary.value, 'Second investigator');

  const primaryActionIcon = document.getElementById('phase-action-primary-icon');
  const secondaryActionIcon = document.getElementById('phase-action-secondary-icon');
  const primaryActionLabel = document.getElementById('phase-action-primary-label');
  const secondaryActionLabel = document.getElementById('phase-action-secondary-label');
  const primaryInvestigator = investigators[primary.value];
  const secondaryInvestigator = investigators[secondary.value];
  const firstName = investigator => (investigator?.name || 'Investigator')
    .replace(/["']/g, '')
    .trim()
    .split(/\s+/)[0];
  if (primaryActionIcon) {
    primaryActionIcon.src = primaryInvestigator?.classIcon || `images/icons/class_${primaryInvestigator?.classId || 'neutral'}.png`;
    primaryActionIcon.alt = `${primaryInvestigator?.name || 'First investigator'} class`;
  }
  if (secondaryActionIcon) {
    secondaryActionIcon.src = secondaryInvestigator?.classIcon || `images/icons/class_${secondaryInvestigator?.classId || 'neutral'}.png`;
    secondaryActionIcon.alt = `${secondaryInvestigator?.name || 'Second investigator'} class`;
  }
  if (primaryActionLabel) primaryActionLabel.textContent = `${firstName(primaryInvestigator)} Actions`;
  if (secondaryActionLabel) secondaryActionLabel.textContent = `${firstName(secondaryInvestigator)} Actions`;

  primaryTab.classList.toggle('active', activeInvestigatorSlot === 'primary');
  secondaryTab.classList.toggle('active', activeInvestigatorSlot === 'secondary');
  primaryTab.setAttribute('aria-selected', String(activeInvestigatorSlot === 'primary'));
  secondaryTab.setAttribute('aria-selected', String(activeInvestigatorSlot === 'secondary'));
}

const investigatorVitalLimits = {
  roland: { health: 9, sanity: 5 }, daisy: { health: 5, sanity: 9 }, skids: { health: 8, sanity: 6 },
  agnes: { health: 6, sanity: 8 }, wendy: { health: 7, sanity: 7 }, zoey: { health: 9, sanity: 6 },
  rex: { health: 6, sanity: 9 }, jenny: { health: 8, sanity: 7 }, jim: { health: 7, sanity: 8 },
  pete: { health: 6, sanity: 7 }, mark: { health: 9, sanity: 5 }, minh: { health: 7, sanity: 9 },
  sefina: { health: 6, sanity: 8 }, akachi: { health: 5, sanity: 9 }, yorick: { health: 8, sanity: 6 },
  lola: { health: 6, sanity: 6 }, daniela: { health: 8, sanity: 7 }, joe: { health: 9, sanity: 6 },
  trish: { health: 6, sanity: 8 }, dexter: { health: 5, sanity: 9 }, isabelle: { health: 7, sanity: 7 }
};
const investigatorVitalState = {};

function syncDossierVitals(investigatorId) {
  const limits = investigatorVitalLimits[investigatorId] || { health: 7, sanity: 7 };
  const vitals = investigatorVitalState[investigatorId] ||= { ...limits };
  document.getElementById('vital-health').textContent = vitals.health;
  document.getElementById('vital-sanity').textContent = vitals.sanity;
  document.getElementById('profile-vital-health').textContent = vitals.health;
  document.getElementById('profile-vital-sanity').textContent = vitals.sanity;
  document.getElementById('profile-modal-vital-health').textContent = vitals.health;
  document.getElementById('profile-modal-vital-sanity').textContent = vitals.sanity;
}

function adjustVital(type, delta) {
  const investigatorId = getActiveInvestigatorKey();
  const limits = investigatorVitalLimits[investigatorId] || { health: 7, sanity: 7 };
  const vitals = investigatorVitalState[investigatorId] ||= { ...limits };
  vitals[type] = Math.max(0, vitals[type] + delta);
  syncDossierVitals(investigatorId);
  playSfx(delta > 0 ? 'sfx/symbol.mp3' : 'sfx/trash.mp3');
}

function resetDossierVitals() {
  const investigatorId = getActiveInvestigatorKey();
  const limits = investigatorVitalLimits[investigatorId] || { health: 7, sanity: 7 };
  investigatorVitalState[investigatorId] = { ...limits };
  syncDossierVitals(investigatorId);
  playSfx('sfx/flip.mp3');
}

const unusedCampaignBags = {
  notz: {
    easy: ["+1", "+1", "0", "0", "0", "-1", "-1", "-1", "-2", "-2", "skull", "skull", "cultist", "tablet", "autofail", "eldersign"],
    standard: ["+1", "0", "0", "-1", "-1", "-1", "-2", "-2", "-3", "-4", "skull", "skull", "cultist", "tablet", "autofail", "eldersign"],
    hard: ["0", "0", "0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-5", "skull", "skull", "cultist", "tablet", "autofail", "eldersign"],
    expert: ["0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-4", "-5", "-6", "-8", "skull", "skull", "cultist", "tablet", "autofail", "eldersign"]
  },
  dunwich: {
    easy: ["+1", "+1", "0", "0", "0", "-1", "-1", "-1", "-2", "-2", "skull", "skull", "cultist", "autofail", "eldersign"],
    standard: ["+1", "0", "0", "-1", "-1", "-1", "-2", "-2", "-3", "-4", "skull", "skull", "cultist", "autofail", "eldersign"],
    hard: ["0", "0", "0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-5", "skull", "skull", "cultist", "autofail", "eldersign"],
    expert: ["0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-4", "-5", "-6", "-8", "skull", "skull", "cultist", "autofail", "eldersign"]
  },
  carcosa: {
    easy: ["+1", "+1", "0", "0", "0", "-1", "-1", "-1", "-2", "-2", "skull", "skull", "skull", "autofail", "eldersign"],
    standard: ["+1", "0", "0", "-1", "-1", "-1", "-2", "-2", "-3", "-4", "skull", "skull", "skull", "autofail", "eldersign"],
    hard: ["0", "0", "0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-5", "skull", "skull", "skull", "autofail", "eldersign"],
    expert: ["0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-4", "-5", "-6", "-8", "skull", "skull", "skull", "autofail", "eldersign"]
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
    easy: ["+1", "+1", "0", "0", "0", "-1", "-1", "-1", "-2", "-2", "skull", "skull", "cultist", "tablet", "autofail", "eldersign"],
    standard: ["+1", "0", "0", "-1", "-1", "-1", "-2", "-2", "-3", "-4", "skull", "skull", "cultist", "tablet", "autofail", "eldersign"],
    hard: ["0", "0", "0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-5", "skull", "skull", "cultist", "tablet", "autofail", "eldersign"],
    expert: ["0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-4", "-5", "-6", "-8", "skull", "skull", "cultist", "tablet", "autofail", "eldersign"]
  },
  dunwich: {
    easy: ["+1", "+1", "0", "0", "0", "-1", "-1", "-1", "-2", "-2", "skull", "skull", "cultist", "autofail", "eldersign"],
    standard: ["+1", "0", "0", "-1", "-1", "-1", "-2", "-2", "-3", "-4", "skull", "skull", "cultist", "autofail", "eldersign"],
    hard: ["0", "0", "0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-5", "skull", "skull", "cultist", "autofail", "eldersign"],
    expert: ["0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-4", "-5", "-6", "-8", "skull", "skull", "cultist", "autofail", "eldersign"]
  },
  carcosa: {
    easy: ["+1", "+1", "0", "0", "0", "-1", "-1", "-1", "-2", "-2", "skull", "skull", "skull", "autofail", "eldersign"],
    standard: ["+1", "0", "0", "-1", "-1", "-1", "-2", "-2", "-3", "-4", "skull", "skull", "skull", "autofail", "eldersign"],
    hard: ["0", "0", "0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-5", "skull", "skull", "skull", "autofail", "eldersign"],
    expert: ["0", "-1", "-1", "-2", "-2", "-3", "-3", "-4", "-4", "-5", "-6", "-8", "skull", "skull", "skull", "autofail", "eldersign"]
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
    eldersign: "Resolve this investigator's Elder Sign effect.",
    autofail: "This test automatically fails. Do not calculate a final skill value."
  },
  default: {
    skull: "Resolve the Skull effect on the current scenario reference card.",
    cultist: "Resolve the Cultist effect on the current scenario reference card.",
    tablet: "Resolve the Tablet effect on the current scenario reference card.",
    elderthing: "Resolve the Elder Thing effect on the current scenario reference card.",
    eye: "Resolve the Eye effect on the current scenario reference card.",
    eldersign: "Resolve this investigator's Elder Sign effect.",
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

function getScenarioTokenEffect(token) {
  if (typeof scenarioTokenEffects === 'undefined') return null;

  const campaign = document.getElementById('campaign-select')?.value;
  const scenarioSelect = document.getElementById('scenario-select');
  const difficulty = document.getElementById('difficulty-select')?.value;
  if (!campaign || !scenarioSelect || !difficulty) return null;

  const scenarioKey = `scen${scenarioSelect.selectedIndex + 1}`;
  const difficultyKey = difficulty === 'hard' || difficulty === 'expert'
    ? 'hardExpert'
    : 'easyStandard';

  return scenarioTokenEffects[campaign]?.[scenarioKey]?.[difficultyKey]?.[token] || null;
}

const skillVisuals = {
  will: { icon: 'images/icons/invest_willpower.png', color: '#1a4f78', background: 'rgba(26, 79, 120, 0.18)' },
  intellect: { icon: 'images/icons/invest_intellect.png', color: '#693b73', background: 'rgba(105, 59, 115, 0.18)' },
  combat: { icon: 'images/icons/invest_combat.png', color: '#7a4027', background: 'rgba(122, 64, 39, 0.18)' },
  agility: { icon: 'images/icons/invest_agility.png', color: '#1f6b52', background: 'rgba(31, 107, 82, 0.18)' }
};

let activeBagContents = [];
let activeSkillType = 'will';
let activeClassId = 'guardian';

const campaignScenarios = {
  notz: [
    { value: 'gathering', label: 'The Gathering', bagTokens: ['cultist'] },
    { value: 'midnight-masks', label: 'The Midnight Masks', bagTokens: ['cultist', 'tablet'] },
    { value: 'devourer-below', label: 'The Devourer Below', bagTokens: ['skull', 'tablet'] }
  ],
  dunwich: [
    { value: 'extracurricular', label: 'Extracurricular Activity', bagTokens: ['cultist'] },
    { value: 'house-always-wins', label: 'The House Always Wins', bagTokens: ['skull'] },
    { value: 'miskatonic-museum', label: 'The Miskatonic Museum', bagTokens: ['elderthing'] },
    { value: 'essex-county-express', label: 'The Essex County Express', bagTokens: ['eye'] },
    { value: 'blood-on-the-altar', label: 'Blood on the Altar', bagTokens: ['cultist', 'elderthing'] },
    { value: 'undimensioned-unseen', label: 'Undimensioned and Unseen', bagTokens: ['skull', 'eye'] },
    { value: 'where-gods-dwell', label: 'Where Doom Awaits', bagTokens: ['elderthing', 'cultist'] },
    { value: 'lost-in-time-space', label: 'Lost in Time and Space', bagTokens: ['eye', 'elderthing'] }
  ],
  carcosa: [
    { value: 'curtain-call', label: 'Curtain Call', bagTokens: ['skull'] },
    { value: 'last-king', label: 'The Last King', bagTokens: ['cultist'] },
    { value: 'echoes-past', label: 'Echoes of the Past', bagTokens: ['elderthing'] },
    { value: 'unspeakable-oath', label: 'The Unspeakable Oath', bagTokens: ['skull', 'elderthing'] },
    { value: 'phantom-truth', label: 'The Phantom of Truth', bagTokens: ['cultist', 'elderthing'] },
    { value: 'pallid-mask', label: 'The Pallid Mask', bagTokens: ['skull', 'skull'] },
    { value: 'black-stars-rise', label: 'Black Stars Rise', bagTokens: ['elderthing', 'cultist'] },
    { value: 'dim-carcosa', label: 'Dim Carcosa', bagTokens: ['skull', 'elderthing', 'cultist'] }
  ],
  ash: [
    { value: 'ashfall', label: 'Ashfall', bagTokens: ['cultist'] },
    { value: 'embers', label: 'The Dying Embers', bagTokens: ['tablet'] },
    { value: 'cinder', label: 'Cinder and Bone', bagTokens: ['elderthing'] },
    { value: 'brethren', label: 'The Brethren of Ash', bagTokens: ['cultist', 'tablet'] }
  ]
};

function getActiveScenarioDefinition() {
  const campaign = document.getElementById('campaign-select').value;
  const scenario = document.getElementById('scenario-select').value;
  return (campaignScenarios[campaign] || []).find(item => item.value === scenario);
}

function updateCampaignScenario() {
  const campaign = document.getElementById('campaign-select').value;
  const scenarioSelect = document.getElementById('scenario-select');
  const previousScenario = scenarioSelect.value;
  const scenarios = campaignScenarios[campaign] || [];
  scenarioSelect.replaceChildren(...scenarios.map(scenario => {
    const option = document.createElement('option');
    option.value = scenario.value;
    option.textContent = scenario.label;
    return option;
  }));
  scenarioSelect.value = scenarios.some(scenario => scenario.value === previousScenario)
    ? previousScenario
    : scenarios[0]?.value || '';
  syncDifficultyBagLayout();
}

function syncDifficultyBagLayout() {
  const campaign = document.getElementById('campaign-select').value;
  const difficulty = document.getElementById('difficulty-select').value;
  const scenario = getActiveScenarioDefinition();
  
  if (campaignBags[campaign] && campaignBags[campaign][difficulty]) {
    activeBagContents = [...campaignBags[campaign][difficulty]];
  }

  const campaignLabel = document.getElementById('campaign-select').selectedOptions[0]?.textContent || campaign;
  const scenarioLabel = scenario?.label || 'Scenario';
  document.getElementById('bag-headline').textContent = `${campaignLabel} — ${scenarioLabel} (${difficulty})`;
  const scenarioContext = document.getElementById('active-scenario-context');
  scenarioContext.replaceChildren(
    document.createTextNode(`${campaignLabel}:`),
    document.createElement('br'),
    document.createTextNode(scenarioLabel)
  );
  
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

function appendHighlightedTokenEffectText(container, text) {
  const parts = String(text).split(/([+-]?(?:\d+(?:\.\d+)?|X)\b)/gi);
  parts.forEach(part => {
    if (/^[+-]?(?:\d+(?:\.\d+)?|X)$/i.test(part)) {
      const number = document.createElement('strong');
      number.className = 'token-effect-number';
      number.textContent = part;
      container.appendChild(number);
    } else if (part) {
      container.appendChild(document.createTextNode(part));
    }
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
  const elderRule = document.getElementById('card-portrait');
  elderRule.classList.remove('elder-sign-triggered');
  if (isElderSign) {
    void elderRule.offsetWidth;
    elderRule.classList.add('elder-sign-triggered');
  }

  const effectMsgEl = document.getElementById('token-effect-msg');
  const activeCampaign = document.getElementById('campaign-select').value;
  const campaignDescriptors = specialTokenDescriptors[activeCampaign] || {};
  const tokenEffect = getScenarioTokenEffect(drawnToken)
    || campaignDescriptors[drawnToken]
    || specialTokenDescriptors.default[drawnToken];
  effectMsgEl.replaceChildren();
  effectMsgEl.classList.remove('token-effect-resolved');
  document.getElementById('test-math-details')?.replaceChildren();
  effectMsgEl.classList.toggle('elder-sign-effect-flash', isElderSign);
  if (isElderSign) {
    const investigator = investigators[getActiveInvestigatorKey()];
    const elderEffect = investigator?.elder
      .replace(/<[^>]*>/g, '')
      .replace(/^Effect:\s*/i, '') || 'Resolve your investigator\'s Elder Sign effect.';
    const tokenName = document.createElement('strong');
    tokenName.textContent = 'Elder Sign';
    effectMsgEl.append(tokenName);
    appendHighlightedTokenEffectText(effectMsgEl, `: ${elderEffect}`);
    void effectMsgEl.offsetWidth;
  } else if (tokenEffect) {
    const tokenName = document.createElement('strong');
    tokenName.textContent = specialTokenLabels[drawnToken] || drawnToken;
    const effectText = tokenEffect.replace(/^[^:]+:\s*/, '');
    effectMsgEl.append(tokenName);
    appendHighlightedTokenEffectText(effectMsgEl, `: ${effectText}`);
  }

  let modifier = 0;
  if (!isNaN(parseInt(drawnToken))) {
    modifier = parseInt(drawnToken);
  } else if (drawnToken === 'autofail') {
    modifier = -99;
  }

  const baseSkill = parseInt(document.getElementById(`stat-${activeSkillType}`).innerText) || 0;
  const committed = getBonusSkillTotal();
  const target = parseInt(document.getElementById('val-target').innerText) || 0;

  const finalTotal = Math.max(0, baseSkill + committed + (drawnToken === 'autofail' ? -99 : modifier));
  const outcomeMsg = document.getElementById('test-outcome-msg');
  const tokenTheater = document.querySelector('.token-theater');
  tokenTheater.closest('.arena-right')?.classList.add('notebook-open');
  tokenTheater.classList.add('trial-started');
  tokenTheater.classList.remove('test-success', 'test-failure', 'elder-sign-result', 'autofail-result', 'special-token-pending');
  void tokenTheater.offsetWidth;

  const needsManualModifier = ['skull', 'cultist', 'tablet', 'elderthing', 'eye', 'eldersign'].includes(drawnToken);
  if (needsManualModifier) {
    pendingSpecialTest = { drawnToken, isElderSign, baseSkill, committed, target, modifier: 0 };
    addSpecialTokenControls(effectMsgEl);
    outcomeMsg.textContent = 'Pending...';
    outcomeMsg.style.color = 'var(--class-color)';
    outcomeMsg.classList.remove('has-skill-outcome');
    tokenTheater.classList.add('special-token-pending');
    if (isElderSign) tokenTheater.classList.add('elder-sign-result');
    document.getElementById('test-score-counters').replaceChildren();
    playSfx('sfx/rty.mp3');
    return;
  }

  pendingSpecialTest = null;
  outcomeMsg.classList.remove('has-skill-outcome');
  if (drawnToken === 'autofail' || (!isElderSign && finalTotal < target)) {
    if (drawnToken === 'autofail') {
      outcomeMsg.innerText = 'Tentacles! Fail';
    } else {
      setOutcomeLabel(outcomeMsg, 'Failed', activeSkillType);
    }
    outcomeMsg.style.color = "var(--fail-red)";
    tokenTheater.classList.add('test-failure');
    if (drawnToken !== 'autofail') {
          playSfx('sfx/tenaclesfail.mp3');
    }
  } else {
    if (isElderSign) {
      outcomeMsg.innerText = 'Investigator Ability!';
    } else {
      setOutcomeLabel(outcomeMsg, 'Success!', activeSkillType);
    }
    outcomeMsg.style.color = "var(--success-green)";
    tokenTheater.classList.add('test-success');
    if (!isElderSign) playSfx('sfx/success.mp3');
  }

  if (isElderSign) {
    tokenTheater.classList.add('elder-sign-result');
    playSfx('sfx/harp.mp3');
    playSfx('sfx/glory.mp3');
  } else if (drawnToken === 'autofail') {
    tokenTheater.classList.add('autofail-result');
	  playSfx('sfx/monster.mp3');
      playSfx('sfx/appear.mp3');
  }

  if (isElderSign || drawnToken === 'autofail') {
    document.getElementById('test-score-counters').replaceChildren();
  } else {
    renderTestScoreCounters(target, finalTotal, activeSkillType);
    renderTestMathDetails(baseSkill, committed, modifier, finalTotal, target);
  }
}

let pendingSpecialTest = null;

function addSpecialTokenControls(effectCard) {
  const controls = document.createElement('div');
  controls.className = 'special-token-controls';

  const label = document.createElement('span');
  label.className = 'special-token-control-label';
  label.textContent = 'Final token modifier';

  const modifierRow = document.createElement('div');
  modifierRow.className = 'special-token-modifier-row';
  modifierRow.innerHTML = `
    <button type="button" onclick="adjustSpecialTokenModifier(-1)" aria-label="Decrease token modifier">−</button>
    <span id="special-token-modifier" aria-live="polite">0</span>
    <button type="button" onclick="adjustSpecialTokenModifier(1)" aria-label="Increase token modifier">+</button>
    <button class="special-token-confirm" type="button" onclick="confirmSpecialTokenModifier()">Calculate</button>
  `;

  controls.append(label, modifierRow);
  effectCard.appendChild(controls);
}

function adjustSpecialTokenModifier(delta) {
  if (!pendingSpecialTest) return;
  pendingSpecialTest.modifier += delta;
  document.getElementById('special-token-modifier').textContent = pendingSpecialTest.modifier > 0
    ? `+${pendingSpecialTest.modifier}`
    : pendingSpecialTest.modifier;
  playSfx(delta > 0 ? 'sfx/symbol.mp3' : 'sfx/trash.mp3');
}

function confirmSpecialTokenModifier() {
  if (!pendingSpecialTest) return;

  const test = pendingSpecialTest;
  const finalTotal = Math.max(0, test.baseSkill + test.committed + test.modifier);
  const outcomeMsg = document.getElementById('test-outcome-msg');
  const tokenTheater = document.querySelector('.token-theater');
  tokenTheater.classList.remove('special-token-pending', 'test-success', 'test-failure');
  outcomeMsg.classList.remove('has-skill-outcome');

  if (finalTotal < test.target) {
    setOutcomeLabel(outcomeMsg, 'Failed', activeSkillType);
    outcomeMsg.style.color = 'var(--fail-red)';
    tokenTheater.classList.add('test-failure');
    playSfx('sfx/tenaclesfail.mp3');
  } else {
    setOutcomeLabel(outcomeMsg, 'Success!', activeSkillType);
    outcomeMsg.style.color = 'var(--success-green)';
    tokenTheater.classList.add('test-success');
    playSfx('sfx/success.mp3');
  }

  renderTestScoreCounters(test.target, finalTotal, activeSkillType);
  renderTestMathDetails(test.baseSkill, test.committed, test.modifier, finalTotal, test.target);
  document.querySelector('.special-token-controls')?.remove();
  document.getElementById('token-effect-msg').classList.add('token-effect-resolved');
  pendingSpecialTest = null;
}

function closeTrialNotebook() {
  const tokenTheater = document.querySelector('.token-theater');
  tokenTheater.classList.remove('trial-started', 'test-success', 'test-failure', 'elder-sign-result', 'autofail-result', 'special-token-pending');
  tokenTheater.closest('.arena-right')?.classList.remove('notebook-open');

  const graphic = document.getElementById('token-graphic');
  graphic.classList.remove('spin-roll');
  graphic.style.backgroundImage = '';
  document.getElementById('test-outcome-msg').replaceChildren();
  document.getElementById('test-score-counters').replaceChildren();
  document.getElementById('test-math-details')?.remove();
  const effect = document.getElementById('token-effect-msg');
  effect.replaceChildren();
  effect.classList.remove('elder-sign-effect-flash', 'token-effect-resolved');
  document.getElementById('card-portrait')?.classList.remove('elder-sign-triggered');
  pendingSpecialTest = null;
  playSfx('sfx/flip2.mp3');
}

function renderTestMathDetails(baseSkill, committed, modifier, finalTotal, target) {
  const counters = document.getElementById('test-score-counters');
  let details = document.getElementById('test-math-details');
  if (!details) {
    details = document.createElement('div');
    details.id = 'test-math-details';
    details.className = 'test-math-details';
    details.setAttribute('aria-live', 'polite');
  }

  if (document.querySelector('.token-theater').classList.contains('elder-sign-result')) {
    counters.appendChild(details);
  } else {
    counters.insertAdjacentElement('afterend', details);
  }

  const committedMath = committed > 0 ? ` + ${committed}` : '';
  const tokenMath = modifier > 0 ? ` + ${modifier}` : modifier < 0 ? ` − ${Math.abs(modifier)}` : ' + 0';
  details.textContent = `Difficulty ${target} vs skill ${baseSkill}${committedMath}${tokenMath} = ${finalTotal}`;
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

function setOutcomeLabel(element, label, skill) {
  const icon = document.createElement('img');
  icon.className = 'test-skill-marker-icon';
  icon.src = skillVisuals[skill]?.icon || skillVisuals.will.icon;
  icon.alt = '';
  const text = document.createElement('span');
  text.textContent = label;
  element.replaceChildren(icon, text);
  element.classList.add('has-skill-outcome');
}

function loadInvestigatorProfileManual() {
  const select = getActiveInvestigatorSelect();
  const data = investigators[select.value];
  if (!data) return;

  document.getElementById('card-name').innerText = data.name;
  document.getElementById('card-portrait').src = data.img;
  document.getElementById('profile-name').innerText = data.name;
  document.getElementById('profile-portrait').src = data.img;
  document.getElementById('profile-portrait').alt = `${data.name} portrait`;
  document.getElementById('ipad-investigator-name').innerText = data.name;
  document.getElementById('ipad-investigator-portrait').src = data.img;
  document.getElementById('ipad-investigator-portrait').alt = `${data.name} portrait`;
  const flavor = investigatorFlavor[select.value] || '';
  document.getElementById('dossier-flavor').innerText = flavor;
  document.getElementById('profile-flavor').innerText = flavor;
  document.getElementById('profile-ability').innerText = data.ability;
  document.getElementById('profile-elder').innerHTML = data.elder;
  document.getElementById('ipad-investigator-ability').innerText = data.ability;
  document.getElementById('ipad-investigator-elder').innerHTML = data.elder;
  highlightInvestigatorRuleTerms(document.getElementById('profile-ability'));
  highlightInvestigatorRuleTerms(document.getElementById('profile-elder'));
  highlightInvestigatorRuleTerms(document.getElementById('ipad-investigator-ability'));
  highlightInvestigatorRuleTerms(document.getElementById('ipad-investigator-elder'));
  
  const classIcon = data.classIcon || "images/icons/class_" + data.classId + ".png";
  document.getElementById('class-mood-badge').src = classIcon;
  document.getElementById('dossier-start-class-icon').src = classIcon;
  document.getElementById('profile-class-icon').src = classIcon;
  document.getElementById('ipad-card-class-icon').src = classIcon;
  document.getElementById('ipad-card-class-icon').alt = `${data.classId} class`;
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
  const dynamicSkin = document.getElementById('dynamic-class-skin');
  dynamicSkin.style.setProperty('--header-class-color', activeSkinColor);
  dynamicSkin.style.backgroundColor = activeSkinColor;
  dynamicSkin.classList.add('ios-banner-color-fix');
  dynamicSkin.dataset.classId = data.classId;
  document.documentElement.style.setProperty('--class-color', activeSkinColor);
  void dynamicSkin.offsetHeight;
  const classArrowFilters = {
    guardian: 'invert(22%) sepia(26%) saturate(1373%) hue-rotate(164deg) brightness(88%) contrast(89%)',
    seeker: 'invert(42%) sepia(29%) saturate(1026%) hue-rotate(4deg) brightness(92%) contrast(88%)',
    rogue: 'invert(30%) sepia(46%) saturate(862%) hue-rotate(105deg) brightness(87%) contrast(91%)',
    mystic: 'invert(29%) sepia(15%) saturate(1663%) hue-rotate(238deg) brightness(89%) contrast(88%)',
    survivor: 'invert(22%) sepia(42%) saturate(1177%) hue-rotate(328deg) brightness(86%) contrast(87%)',
    neutral: 'invert(28%) sepia(0%) saturate(0%) hue-rotate(149deg) brightness(93%) contrast(89%)'
  };
  document.documentElement.style.setProperty('--profile-arrow-filter', classArrowFilters[data.classId] || 'none');
  document.documentElement.style.setProperty('--investigator-watermark', `url("${data.img}")`);
  
  updateDuoInvestigatorTabs();
  syncDossierVitals(select.value);
  selectSkillManual(activeSkillType, data[activeSkillType], false);
}

function cycleInvestigator(direction) {
  const select = getActiveInvestigatorSelect();
  const next = (select.selectedIndex + direction + select.options.length) % select.options.length;
  select.selectedIndex = next;
  playSfx('sfx/pageflip2.mp3');
  loadInvestigatorProfileManual();
}

function highlightInvestigatorRuleTerms(element) {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  textNodes.forEach(node => {
    const matches = [...node.textContent.matchAll(/\b(Reaction|Effect|Free Trigger|Discover)\b/gi)];
    if (!matches.length) return;
    const fragment = document.createDocumentFragment();
    let offset = 0;
    matches.forEach(match => {
      fragment.append(document.createTextNode(node.textContent.slice(offset, match.index)));
      const highlight = document.createElement('strong');
      highlight.className = 'rule-term-highlight';
      highlight.textContent = match[0];
      fragment.append(highlight);
      offset = match.index + match[0].length;
    });
    fragment.append(document.createTextNode(node.textContent.slice(offset)));
    node.replaceWith(fragment);
  });
}

function selectSkillManual(skill, val, playSound = true) {
  if (playSound) saveBonusSkillStateForSlot(activeInvestigatorSlot, activeSkillType);
  activeSkillType = skill;
  if (playSound) resetUnlockedBonusSkillCounters(activeInvestigatorSlot, activeSkillType);
  restoreBonusSkillStateForSlot(activeInvestigatorSlot, activeSkillType);
  document.querySelectorAll('.stat-badge').forEach(b => b.classList.remove('active-test'));
  document.getElementById(`badge-${skill}`).classList.add('active-test');
  updateBonusSkillVisual(skill);
  if (playSound) playSfx('sfx/dice.mp3');
}

function updateBonusSkillVisual(skill) {
  const visual = skillVisuals[skill];
  if (!visual) return;

  document.querySelectorAll('.bonus-skills-row').forEach(row => {
    row.style.setProperty('--bonus-skill-color', visual.color);
    row.style.setProperty('--bonus-skill-tint', visual.background);
  });
  document.querySelectorAll('#bonus-skill-icon').forEach(icon => {
    icon.src = visual.icon;
    icon.alt = `${skill} skill`;
  });
}

function getBonusSkillTotal() {
  return ['val-commit', 'val-events', 'val-assets', 'val-other']
    .reduce((total, id) => total + (parseInt(document.getElementById(id)?.innerText) || 0), 0);
}

function adjustCounter(id, delta) {
  const el = document.getElementById(id);
  let current = parseInt(el.innerText) || 0;
  const nextValue = Math.max(0, current + delta);
  if (nextValue === current) return;

  el.innerText = nextValue;
  if (bonusSkillCounterIds.includes(id)) el.classList.toggle('is-zero', nextValue === 0);
  if (bonusSkillCounterIds.includes(id)) {
    bonusSkillStateBySlot[activeInvestigatorSlot][activeSkillType][id] = nextValue;
  }
  if (id === 'val-target' || id.startsWith('val-')) {
    playSfx(delta > 0 ? 'sfx/symbol.mp3' : 'sfx/trash.mp3');
  }
}

const sfxPlayers = new Map();
let masterMuted = false;

function getSfxPlayer(src) {
  if (!sfxPlayers.has(src)) {
    const sound = new Audio(src);
    sound.preload = 'auto';
    sound.setAttribute('playsinline', '');
    sound.volume = 0.45;
    sound.load();
    sfxPlayers.set(src, sound);
  }
  return sfxPlayers.get(src);
}

function playSfx(src) {
  if (masterMuted) return;
  const sound = getSfxPlayer(src);
  sound.pause();
  sound.currentTime = 0;
  sound.play().catch(() => {});
}

// Preload the phase/reset sound so iOS can play it immediately from the tap handler.
getSfxPlayer('sfx/symbol.mp3');

function switchActiveTab(target) {
  playSfx('sfx/pageflip1.mp3');
  document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active-view'));
  document.querySelectorAll('.nav-tab-item').forEach(t => t.classList.remove('active-tab'));
  document.getElementById(`view-${target}`).classList.add('active-view');
  document.getElementById(`tab-btn-${target}`).classList.add('active-tab');
}

function toggleBagPopover(show) {
  document.getElementById('bag-popover').style.display = show ? 'flex' : 'none';
}

function refreshApp() {
  window.location.reload();
}

function toggleInvestigatorModal(show) {
  document.getElementById('investigator-modal').style.display = show ? 'flex' : 'none';
}

const savedSessionStorageKey = 'arkham-duo-saved-session-v1';

function toggleSessionModal(show) {
  const modal = document.getElementById('session-modal');
  modal.style.display = show ? 'flex' : 'none';
  if (show) {
    playSfx('sfx/pageflip1.mp3');
    updateSessionSaveStatus();
  }
}

function readSavedSession() {
  try {
    const saved = localStorage.getItem(savedSessionStorageKey);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    return null;
  }
}

function updateSessionSaveStatus(message = '') {
  const saved = readSavedSession();
  const status = document.getElementById('session-save-status');
  const loadButton = document.getElementById('session-load-button');
  const clearButton = document.getElementById('session-clear-button');
  if (!status || !loadButton || !clearButton) return;

  if (message) {
    status.textContent = message;
  } else if (saved?.savedAt) {
    status.textContent = `Last saved ${new Date(saved.savedAt).toLocaleString()}.`;
  } else {
    status.textContent = 'No saved session on this device.';
  }
  loadButton.disabled = !saved;
  clearButton.disabled = !saved;
}

function saveCurrentSession() {
  const counterIds = ['val-target', 'val-commit', 'val-events', 'val-assets', 'val-other'];
  saveBonusSkillStateForSlot(activeInvestigatorSlot);
  const player = document.getElementById('audio-player');
  const activeTrack = document.querySelector('.track-item.active');
  const activeView = document.querySelector('.view-panel.active-view');
  const session = {
    version: 1,
    savedAt: new Date().toISOString(),
    primaryInvestigator: document.getElementById('investigator-select').value,
    secondaryInvestigator: document.getElementById('co-investigator-select').value,
    activeInvestigatorSlot,
    investigatorVitals: JSON.parse(JSON.stringify(investigatorVitalState)),
    campaign: document.getElementById('campaign-select').value,
    scenario: document.getElementById('scenario-select').value,
    difficulty: document.getElementById('difficulty-select').value,
    activeSkillType,
    bonusSkillPointsBySlot: JSON.parse(JSON.stringify(bonusSkillStateBySlot)),
    bonusSkillLocksBySlot: JSON.parse(JSON.stringify(bonusSkillLockStateBySlot)),
    counters: Object.fromEntries(counterIds.map(id => [id, document.getElementById(id)?.textContent || '0'])),
    phaseChecks: Array.from(document.querySelectorAll('.phase-flow-step input[type="checkbox"]'), input => input.checked),
    activeTab: activeView?.id.replace('view-', '') || 'setup',
    audio: {
      trackSrc: activeTrack?.dataset.src || player.getAttribute('src'),
      trackTitle: activeTrack?.dataset.title || document.getElementById('current-track-name').textContent,
      currentTime: Number.isFinite(player.currentTime) ? player.currentTime : 0,
      volume: document.getElementById('volume-slider').value,
      wasPlaying: !player.paused,
      masterMuted
    }
  };

  try {
    localStorage.setItem(savedSessionStorageKey, JSON.stringify(session));
    updateSessionSaveStatus(`Session saved ${new Date(session.savedAt).toLocaleString()}.`);
    playSfx('sfx/type.wav');
  } catch (error) {
    updateSessionSaveStatus('This browser could not save the session.');
  }
}

function loadSavedSession() {
  const session = readSavedSession();
  if (!session) {
    updateSessionSaveStatus('No saved session is available.');
    return;
  }
  playSfx('sfx/load.wav');

  const primarySelect = document.getElementById('investigator-select');
  const secondarySelect = document.getElementById('co-investigator-select');
  primarySelect.value = session.primaryInvestigator || 'roland';
  secondarySelect.value = session.secondaryInvestigator || 'daisy';
  activeInvestigatorSlot = session.activeInvestigatorSlot === 'secondary' ? 'secondary' : 'primary';
  activeSkillType = bonusSkillTypes.includes(session.activeSkillType) ? session.activeSkillType : 'will';
  Object.keys(investigatorVitalState).forEach(key => delete investigatorVitalState[key]);
  Object.assign(investigatorVitalState, session.investigatorVitals || {});
  const hasPerSlotBonusPoints = Boolean(session.bonusSkillPointsBySlot);
  ['primary', 'secondary'].forEach(slot => {
    bonusSkillTypes.forEach(skill => {
      bonusSkillCounterIds.forEach(id => {
        const savedPoints = session.bonusSkillPointsBySlot?.[slot];
        const savedLocks = session.bonusSkillLocksBySlot?.[slot];
        const legacySkill = skill === activeSkillType;
        bonusSkillStateBySlot[slot][skill][id] = parseInt(
          savedPoints?.[skill]?.[id] ?? (legacySkill ? savedPoints?.[id] : 0)
        ) || 0;
        bonusSkillLockStateBySlot[slot][skill][id] = Boolean(
          savedLocks?.[skill]?.[id] ?? (legacySkill ? savedLocks?.[id] : false)
        );
      });
    });
  });
  loadInvestigatorProfileManual();

  const campaignSelect = document.getElementById('campaign-select');
  const scenarioSelect = document.getElementById('scenario-select');
  const difficultySelect = document.getElementById('difficulty-select');
  campaignSelect.value = session.campaign || 'notz';
  updateCampaignScenario();
  scenarioSelect.value = session.scenario || scenarioSelect.options[0]?.value || '';
  difficultySelect.value = session.difficulty || 'easy';
  syncDifficultyBagLayout();

  Object.entries(session.counters || {}).forEach(([id, value]) => {
    const counter = document.getElementById(id);
    if (counter) counter.textContent = value;
  });
  if (hasPerSlotBonusPoints) restoreBonusSkillStateForSlot(activeInvestigatorSlot);
  else {
    saveBonusSkillStateForSlot(activeInvestigatorSlot);
    restoreBonusSkillStateForSlot(activeInvestigatorSlot);
  }
  selectSkillManual(session.activeSkillType || 'will', 0, false);

  const phaseInputs = document.querySelectorAll('.phase-flow-step input[type="checkbox"]');
  phaseInputs.forEach((input, index) => {
    input.checked = Boolean(session.phaseChecks?.[index]);
  });
  [0, 1, 2].forEach(index => {
    const tasks = Array.from(document.querySelectorAll(`.phase-flow-step.phase-${index} input[type="checkbox"]`));
    const complete = tasks.length > 0 && tasks.every(task => task.checked);
    document.querySelectorAll(`.phase-flow-step.phase-${index}`)
      .forEach(step => step.classList.toggle('phase-complete', complete));
  });
  updatePhaseFlowGuidance();

  const audioState = session.audio || {};
  const player = document.getElementById('audio-player');
  const volumeSlider = document.getElementById('volume-slider');
  const matchingTrack = Array.from(document.querySelectorAll('.track-item'))
    .find(track => track.dataset.src === audioState.trackSrc);
  document.querySelectorAll('.track-item').forEach(track => track.classList.toggle('active', track === matchingTrack));
  if (matchingTrack) {
    player.src = matchingTrack.dataset.src;
    document.getElementById('current-track-name').textContent = matchingTrack.dataset.title;
  } else if (audioState.trackSrc) {
    player.src = audioState.trackSrc;
    document.getElementById('current-track-name').textContent = audioState.trackTitle || 'Saved track';
  }
  volumeSlider.value = audioState.volume ?? 80;
  setVolume();
  player.load();
  player.addEventListener('loadedmetadata', () => {
    if (Number.isFinite(audioState.currentTime)) {
      player.currentTime = Math.min(audioState.currentTime, player.duration || audioState.currentTime);
    }
    syncAudioScrubber();
    if (audioState.wasPlaying) player.play().catch(() => updatePlayButton());
  }, { once: true });

  if (masterMuted !== Boolean(audioState.masterMuted)) toggleMasterMute();
  switchActiveTab(session.activeTab || 'setup');
  toggleSessionModal(false);
}

function clearSavedSession() {
  try {
    localStorage.removeItem(savedSessionStorageKey);
    updateSessionSaveStatus('Saved session deleted.');
    playSfx('sfx/trash.mp3');
  } catch (error) {
    updateSessionSaveStatus('This browser could not delete the saved session.');
  }
}

function togglePhaseCard(event, index) {
  const card = document.getElementById(`phase-card-${index}`);
  card.classList.toggle('completed');
}

function checkSubtaskProgress(index) {
  playSfx('sfx/symbol.mp3');
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
  const roundOrder = [0, 1, 2, 3, 4, 9, 8, 7, 5, 6, 10, 11];
  steps.forEach(step => step.classList.remove('next-action'));

  const nextIndex = roundOrder.find(index => {
    const checkbox = steps[index]?.querySelector('input[type="checkbox"]');
    return checkbox ? !checkbox.checked : false;
  });
  const nextStep = nextIndex === undefined
    ? document.querySelector('.phase-flow-board .phase-reset-flow')
    : steps[nextIndex];
  nextStep?.classList.add('next-action');
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
  playSfx('sfx/flip.mp3');
  document.querySelectorAll('.phase-flow-step').forEach(step => step.classList.remove('phase-complete'));
  document.querySelectorAll('.phase-flow-board input').forEach(i => {
    i.checked = false;
    i.disabled = false;
  });
  updatePhaseFlowGuidance();
  renderActionIcons();
}

let isPlaying = false;
function legacyTogglePlay() {
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

function legacyLoadTrack(element, src) {
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

function legacyScrubAudio() {
  const player = document.getElementById('audio-player');
  const scrubber = document.getElementById('track-scrubber');
  if (Number.isFinite(player.duration) && player.duration > 0) {
    player.currentTime = player.duration * (Number(scrubber.value) / 100);
  }
}

function legacySyncAudioScrubber() {
  const player = document.getElementById('audio-player');
  const scrubber = document.getElementById('track-scrubber');
  if (Number.isFinite(player.duration) && player.duration > 0) {
    scrubber.value = (player.currentTime / player.duration) * 100;
  }
}

function formatAudioTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainingSeconds}`;
}

function updatePlayButton() {
  const player = document.getElementById('audio-player');
  const button = document.getElementById('transport-toggle');
  if (!player || !button) return;
  const playing = !player.paused;
  const trackName = document.getElementById('current-track-name');
  const elderSign = document.getElementById('now-playing-elder-sign');
  const ambientTabIcon = document.getElementById('ambient-tab-music-icon');
  button.innerHTML = playing
    ? '<img src="images/icons/music_pause.png" alt="">'
    : '<img src="images/icons/music_play.png" alt="">';
  button.setAttribute('aria-label', playing ? 'Pause' : 'Play');
  if (trackName) trackName.classList.toggle('is-playing', playing);
  if (elderSign) elderSign.classList.toggle('is-playing', playing);
  if (ambientTabIcon) ambientTabIcon.classList.toggle('is-playing', playing);
}

function togglePlay() {
  const player = document.getElementById('audio-player');
  if (player.paused) player.play().catch(() => {});
  else player.pause();
}

function playTrack() {
  document.getElementById('audio-player').play().catch(() => {});
}

function pauseTrack() {
  document.getElementById('audio-player').pause();
}

function previousTrack() {
  const tracks = Array.from(document.querySelectorAll('.track-item'));
  const current = tracks.findIndex(track => track.classList.contains('active'));
  loadTrack(tracks[(current - 1 + tracks.length) % tracks.length]);
}

function nextTrack() {
  const tracks = Array.from(document.querySelectorAll('.track-item'));
  const current = tracks.findIndex(track => track.classList.contains('active'));
  loadTrack(tracks[(current + 1 + tracks.length) % tracks.length]);
}

function loadTrack(element) {
  const player = document.getElementById('audio-player');
  document.querySelectorAll('.track-item').forEach(item => item.classList.remove('active'));
  element.classList.add('active');
  document.getElementById('current-track-name').textContent = element.dataset.title;
  player.src = element.dataset.src;
  player.load();
  player.play().catch(() => updatePlayButton());
}

function scrubAudio() {
  const player = document.getElementById('audio-player');
  const scrubber = document.getElementById('track-scrubber');
  if (Number.isFinite(player.duration) && player.duration > 0) {
    player.currentTime = player.duration * (Number(scrubber.value) / 100);
  }
}

let musicAudioContext = null;
let musicMediaSource = null;
let musicGainNode = null;

function ensureMusicVolumeGraph() {
  if (musicGainNode) return musicGainNode;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;

  try {
    musicAudioContext = new AudioContextClass();
    musicMediaSource = musicAudioContext.createMediaElementSource(document.getElementById('audio-player'));
    musicGainNode = musicAudioContext.createGain();
    musicMediaSource.connect(musicGainNode);
    musicGainNode.connect(musicAudioContext.destination);
    return musicGainNode;
  } catch (error) {
    musicAudioContext = null;
    musicMediaSource = null;
    musicGainNode = null;
    return null;
  }
}

function setVolume(fromUserGesture = false) {
  const player = document.getElementById('audio-player');
  const slider = document.getElementById('volume-slider');
  const volume = Number(slider.value) / 100;

  // Desktop browsers honor media-element volume directly.
  player.volume = volume;

  // iPad/iPhone Safari keeps media-element volume tied to the device. A gain
  // node created during the slider gesture provides app-level volume control.
  if (fromUserGesture) {
    const gainNode = ensureMusicVolumeGraph();
    if (gainNode && musicAudioContext) {
      gainNode.gain.setValueAtTime(masterMuted ? 0 : volume, musicAudioContext.currentTime);
      if (musicAudioContext.state === 'suspended') {
        musicAudioContext.resume().catch(() => {});
      }
    }
  }

  updateSliderFill(slider);
}

function toggleMasterMute() {
  masterMuted = !masterMuted;
  const player = document.getElementById('audio-player');
  const slider = document.getElementById('volume-slider');
  const button = document.getElementById('master-sound-toggle');
  const ambientTabIcon = document.getElementById('ambient-tab-music-icon');
  const selectedVolume = Number(slider.value) / 100;

  player.muted = masterMuted;
  sfxPlayers.forEach(sound => {
    sound.muted = masterMuted;
    if (masterMuted) sound.pause();
  });

  if (musicGainNode && musicAudioContext) {
    musicGainNode.gain.setValueAtTime(masterMuted ? 0 : selectedVolume, musicAudioContext.currentTime);
  }

  button.classList.toggle('is-muted', masterMuted);
  button.setAttribute('aria-pressed', String(masterMuted));
  button.setAttribute('aria-label', masterMuted ? 'Turn on all sound and music' : 'Mute all sound and music');
  const buttonIcon = button.querySelector('img');
  if (buttonIcon) {
    buttonIcon.src = masterMuted ? 'images/icons/sound-mute.svg' : 'images/icons/sound-on.svg';
  }

  if (ambientTabIcon) {
    ambientTabIcon.src = masterMuted ? 'images/icons/sound-mute.svg' : 'images/icons/tab_music.png';
    ambientTabIcon.classList.toggle('is-muted', masterMuted);
  }
}

function updateSliderFill(slider) {
  slider.style.setProperty('--range-progress', `${slider.value}%`);
}

function syncAudioScrubber() {
  const player = document.getElementById('audio-player');
  const scrubber = document.getElementById('track-scrubber');
  if (Number.isFinite(player.duration) && player.duration > 0) {
    scrubber.value = (player.currentTime / player.duration) * 100;
  }
  updateSliderFill(scrubber);
  document.getElementById('current-time').textContent = formatAudioTime(player.currentTime);
  document.getElementById('duration-time').textContent = formatAudioTime(player.duration);
}

window.addEventListener('DOMContentLoaded', () => {
  const primarySelect = document.getElementById('investigator-select');
  const secondarySelect = document.getElementById('co-investigator-select');
  secondarySelect.innerHTML = primarySelect.innerHTML;
  secondarySelect.value = 'daisy';
  loadInvestigatorProfileManual();
  updateCampaignScenario();
  selectSkillManual(activeSkillType, 0, false);
  renderActionIcons();
  updatePhaseFlowGuidance();
  const player = document.getElementById('audio-player');
  setVolume();
  updatePlayButton();
  player.addEventListener('timeupdate', syncAudioScrubber);
  player.addEventListener('loadedmetadata', syncAudioScrubber);
  player.addEventListener('play', updatePlayButton);
  player.addEventListener('pause', updatePlayButton);
});
