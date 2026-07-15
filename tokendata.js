const scenarioTokenEffects = {
  // ==========================================
  // 1. NIGHT OF THE ZEALOT (Core Campaign)
  // ==========================================
  notz: {
    scen1: { // The Gathering
      name: "The Gathering",
      easyStandard: {
        skull: "Skull: -X. X is the number of Ghoul enemies at your location.",
        cultist: "Cultist: -1. If you fail, take 1 horror.",
        tablet: "Tablet: -2. If there is a Ghoul enemy at your location, take 1 damage.",
        elderthing: "Elder Thing: Token not in play for this scenario."
      },
      hardExpert: {
        skull: "Skull: -2. If you fail, take 1 horror.",
        cultist: "Cultist: Reveal another token. If you fail, take 2 horror.",
        tablet: "Tablet: -4. If there is a Ghoul enemy at your location, take 1 damage and 1 horror.",
        elderthing: "Elder Thing: Token not in play for this scenario."
      }
    },
    scen2: { // The Midnight Masks
      name: "The Midnight Masks",
      easyStandard: {
        skull: "Skull: -X. X is the highest number of doom on a Cultist enemy in play.",
        cultist: "Cultist: -2. Place 1 doom on the nearest Cultist enemy.",
        tablet: "Tablet: -3. If you fail, place 1 of your clues on your location.",
        elderthing: "Elder Thing: Token not in play for this scenario."
      },
      hardExpert: {
        skull: "Skull: -X. X is the total number of doom in play.",
        cultist: "Cultist: -2. Place 1 doom on each Cultist enemy in play. If there are no Cultist enemies in play, reveal another token.",
        tablet: "Tablet: -4. If you fail, place all your clues on your location.",
        elderthing: "Elder Thing: Token not in play for this scenario."
      }
    },
    scen3: { // The Devourer Below
      name: "The Devourer Below",
      easyStandard: {
        skull: "Skull: -X. X is the number of Monster enemies in play.",
        cultist: "Cultist: -2. Place 1 doom on the nearest enemy.",
        tablet: "Tablet: -3. If there is a Monster enemy at your location, take 1 damage.",
        elderthing: "Elder Thing: -5. If you fail, place 1 doom on the current agenda."
      },
      hardExpert: {
        skull: "Skull: -3. If you fail, search the encounter deck and discard pile for a Monster enemy and draw it.",
        cultist: "Cultist: -4. Place 2 doom on the nearest enemy.",
        tablet: "Tablet: -5. If there is a Monster enemy at your location, take 1 damage and 1 horror.",
        elderthing: "Elder Thing: -7. If you fail, place 1 doom on the current agenda."
      }
    }
  },

  // ==========================================
  // 2. THE DUNWICH LEGACY
  // ==========================================
  dunwich: {
    scen1: { // Extracurricular Activity
      name: "Extracurricular Activity",
      easyStandard: {
        skull: "Skull: -1. If you fail, discard the top 3 cards of your deck.",
        cultist: "Cultist: -1 (-3 instead if there are 10 or more cards in your discard pile).",
        tablet: "Tablet: Token not in play for this scenario.",
        elderthing: "Elder Thing: -X. Discard the top 2 cards of your deck. X is the total printed cost of those discarded cards.",
        eye: "Eye: Token not in play for this scenario."
      },
      hardExpert: {
        skull: "Skull: -2. If you fail, discard the top 5 cards of your deck.",
        cultist: "Cultist: -1 (-5 instead if there are 10 or more cards in your discard pile).",
        tablet: "Tablet: Token not in play for this scenario.",
        elderthing: "Elder Thing: -X. Discard the top 3 cards of your deck. X is the total printed cost of those discarded cards.",
        eye: "Eye: Token not in play for this scenario."
      }
    },
    scen2: { // The House Always Wins
      name: "The House Always Wins",
      easyStandard: {
        skull: "Skull: -2. You may spend 2 resources to treat this token as a 0 instead.",
        cultist: "Cultist: -3. If you succeed, gain 3 resources.",
        tablet: "Tablet: -2. If you fail, discard 3 resources.",
        elderthing: "Elder Thing: Token not in play for this scenario.",
        eye: "Eye: Token not in play for this scenario."
      },
      hardExpert: {
        skull: "Skull: -3. You may spend 3 resources to treat this token as a 0 instead.",
        cultist: "Cultist: -3. If you fail, discard 3 resources.",
        tablet: "Tablet: -2. Discard 3 resources.",
        elderthing: "Elder Thing: Token not in play for this scenario.",
        eye: "Eye: Token not in play for this scenario."
      }
    },
    scen3: { // The Miskatonic Museum
      name: "The Miskatonic Museum",
      easyStandard: {
        skull: "Skull: -1 (-3 instead if the Hunting Horror is at your location).",
        cultist: "Cultist: -1. If you fail, search the encounter deck, discard pile, and the void for the Hunting Horror and spawn it at your location.",
        tablet: "Tablet: -2. Return 1 of your clues to your current location.",
        elderthing: "Elder Thing: -3. If you fail, discard an asset you control.",
        eye: "Eye: Token not in play for this scenario."
      },
      hardExpert: {
        skull: "Skull: -2 (-4 instead if the Hunting Horror is at your location).",
        cultist: "Cultist: -3. If you fail, search the encounter deck, discard pile, and the void for the Hunting Horror and spawn it at your location.",
        tablet: "Tablet: -4. If the Hunting Horror is at your location, it immediately attacks you.",
        elderthing: "Elder Thing: -5. If you fail, discard an asset you control.",
        eye: "Eye: Token not in play for this scenario."
      }
    }
  },

  // ==========================================
  // 3. THE PATH TO CARCOSA
  // ==========================================
  carcosa: {
    scen1: { // Curtain Call
      name: "Curtain Call",
      easyStandard: {
        skull: "Skull: -1 (-3 instead if you have 3 or more horror on you).",
        cultist: "Cultist: Token not in play for this scenario.",
        tablet: "Tablet: Token not in play for this scenario.",
        elderthing: "Elder Thing: -4. If your location has at least 1 horror on it, take 1 horror. If your location has no horror on it, place 1 horror on it instead."
      },
      hardExpert: {
        skull: "Skull: -X, where X is the amount of horror on you. (If you have no horror on you, X is 1.)",
        cultist: "Cultist: Token not in play for this scenario.",
        tablet: "Tablet: Token not in play for this scenario.",
        elderthing: "Elder Thing: -5. If your location has at least 1 horror on it, take 1 horror. If your location has no horror on it, place 1 horror on it instead."
      }
    },
    scen2: { // The Last King
      name: "The Last King",
      easyStandard: {
        skull: "Skull: -X. X is the number of Bystander assets in play.",
        cultist: "Cultist: -2. If you fail, move 1 doom from the nearest cultist or bystander onto the agenda.",
        tablet: "Tablet: -2. If you fail, place 1 clue on your location.",
        elderthing: "Elder Thing: Token not in play for this scenario."
      },
      hardExpert: {
        skull: "Skull: -X. X is 1 more than the number of Bystander assets in play.",
        cultist: "Cultist: -3. If you fail, move 1 doom from the nearest cultist or bystander onto the agenda.",
        tablet: "Tablet: -3. If you fail, place 1 clue on your location.",
        elderthing: "Elder Thing: Token not in play for this scenario."
      }
    },
    scen3: { // Echoes of the Past
      name: "Echoes of the Past",
      easyStandard: {
        skull: "Skull: -X. X is the highest number of doom on an enemy in play.",
        cultist: "Cultist: -2. If you fail, place 1 doom on the nearest enemy.",
        tablet: "Tablet: -2. If you fail, discard a random card from your hand.",
        elderthing: "Elder Thing: -2. If you fail and there is an enemy at your location, take 1 horror."
      },
      hardExpert: {
        skull: "Skull: -X. X is the total number of doom on enemies in play.",
        cultist: "Cultist: -4. Place 1 doom on the nearest enemy.",
        tablet: "Tablet: -4. Discard a random card from your hand.",
        elderthing: "Elder Thing: -4. If there is an enemy at your location, take 1 horror."
      }
    }
  },

  // ==========================================
  // 4. BRETHREN OF ASH (2026 Core/Campaign)
  // ==========================================
  ash: {
    scen1: { // The Embers Awaken
      name: "The Embers Awaken",
      easyStandard: {
        skull: "Skull: -X. X is the number of Fire or Ash hazards at your location.",
        cultist: "Cultist: -2. If you fail, place 1 doom on the nearest Cultist enemy.",
        tablet: "Tablet: -2. If you fail, take 1 damage for each burning location in play.",
        elderthing: "Elder Thing: -3. If you fail, discard the top card of your deck."
      },
      hardExpert: {
        skull: "Skull: -X. X is 1 plus the number of Fire or Ash hazards in play.",
        cultist: "Cultist: -3. Place 1 doom on each Cultist enemy in play.",
        tablet: "Tablet: -4. Take 1 damage for each burning location in play.",
        elderthing: "Elder Thing: -5. If you fail, discard the top 3 cards of your deck."
      }
    },
    scen2: { // Smoke on the Horizon
      name: "Smoke on the Horizon",
      easyStandard: {
        skull: "Skull: -2 (-4 instead if your location has the Smoldering trait).",
        cultist: "Cultist: Reveal another token. If you fail, take 1 damage.",
        tablet: "Tablet: -3. If you fail, lose 2 resources.",
        elderthing: "Elder Thing: Token not in play for this scenario."
      },
      hardExpert: {
        skull: "Skull: -3 (-5 instead if your location has the Smoldering trait).",
        cultist: "Cultist: Reveal another token. If you fail, take 1 damage and 1 horror.",
        tablet: "Tablet: -4. Lose 2 resources.",
        elderthing: "Elder Thing: Token not in play for this scenario."
      }
    },
    scen3: { // The Obsidian Altar
      name: "The Obsidian Altar",
      easyStandard: {
        skull: "Skull: -X. X is the highest amount of doom on any Cultist enemy or agenda in play.",
        cultist: "Cultist: -3. If you fail, place 1 doom on the current agenda.",
        tablet: "Tablet: -3. If you fail, each investigator at a burning location takes 1 damage.",
        elderthing: "Elder Thing: -4. If you fail, spawn the set-aside Ashen Thrall at your location."
      },
      hardExpert: {
        skull: "Skull: -X. X is the total amount of doom in play.",
        cultist: "Cultist: -4. Place 1 doom on the current agenda.",
        tablet: "Tablet: -5. Each investigator at a burning location takes 1 damage and 1 horror.",
        elderthing: "Elder Thing: -6. Spawn the set-aside Ashen Thrall at your location."
      }
    }
  }
};