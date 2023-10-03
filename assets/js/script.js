// ver 3 oct 2023 validated

// alias library (first item for both gamemodes, full library for gamemode "what" only)
let playerRockAlias = ['🪨', '🍌', '👻', '👗', '🦆', '👀'];
let playerPaperAlias = ['🧻', '🍉', '👽', '👙', '🐸', '👃'];
let playerScissorsAlias = ['✂️', '🍋', '💀', '👘', '😸', '👄'];
let cpuRockAlias = ['🪨', '🧅', '🍹', '💻', '🥸', '🌹'];
let cpuPaperAlias = ['🧻', '🥑', '🍷', '📱', '😴', '🌳'];
let cpuScissorsAlias = ['✂️', '🍅', '🍺', '🖥️', '😍', '🪴'];

// ID that decides which emoji to slice from alias library (gamemode "what" only)
let randomPlayerRockId = null;
let randomPlayerPaperId = null;
let randomPlayerScissorsId = null;
let randomCpuRockId = null;
let randomCpuPaperId = null;
let randomCpuScissorsId = null;

// emoji alias decision (gamemode "what" only)
let playerRock = playerRockAlias[0];
let playerPaper = playerPaperAlias[0];
let playerScissors = playerScissorsAlias[0];
let cpuRock = cpuRockAlias[0];
let cpuPaper = cpuPaperAlias[0];
let cpuScissors = cpuScissorsAlias[0];

// emoji "spotlight" library, one of these is the alias emoji the player will need to determine (gamemode "what" only)
let emojiSpotlightLibrary = [playerRock, playerPaper, 
 playerScissors, cpuRock, cpuPaper, cpuScissors];
let emojiSpotlight = null;
// true identity behind the alias will be revealed upon submittion, update at shuffleEmojiSpotlight()
let trueId = null;
let writeEmojiSpotlight = document.getElementById('emoji_spotlight');

// Game score and pronoun conditions (gamemode "normal" only)
let gameCounterSlot = document.getElementById('game_counter_slot');
let gameMatchCount = 1;
let playerScoreSlot = document.getElementById('player_score_slot');
let countPlayerScoreSlot = 0;
let cpuScoreSlot = document.getElementById('cpu_score_slot');
let countCpuScoreSlot = 0;

// Announce section
let announce = document.getElementById('announcement_board');
let gameMatchPronoun = "th";

// showing either < > = depending on who wins. Icon is updated by the addScoreTo() function
let dominantContributeIcon = " = ";

// Player data for "game conditions" and "highlight"
let playerHighlight = null;
let playerHighlightRock = document.getElementById("player_slot_1");
let playerHighlightPaper = document.getElementById("player_slot_2");
let playerHighlightScissors = document.getElementById("player_slot_3");
var playerScoreboard = 0;

// CPU data for "game conditions" and "highlight"
let cpuHighlight = null;
let cpuHighlightRock = document.getElementById("cpu_slot_1");
let cpuHighlightPaper = document.getElementById("cpu_slot_2");
let cpuHighlightScissors = document.getElementById("cpu_slot_3");
let cpuScoreboard = 0;

// Alias guess data for "highlight" will be compared with "trueId" at revealAlias()(gamemode 'what' only)
let guessAliasHighlight = null;
let guessAliasHighlightRock = document.getElementById("guess_alias_slot_rock");
let guessAliasHighlightPaper = document.getElementById("guess_alias_slot_paper");
let guessAliasHighlightScissors = document.getElementById("guess_alias_slot_scissors");

// Gamemode variable to switch between 'normal' and 'what'
let gamemodeVar = 'normal';

// shuffle an emoji for "spotlight", this is the alias emoji the player will need to determine (gamemode "what" only)
function shuffleEmojiSpotlight() {
    let decideId = Math.floor(Math.random() * 6);
    emojiSpotlight = emojiSpotlightLibrary[decideId];
    writeEmojiSpotlight.innerHTML = (emojiSpotlight);
    if (decideId == 0 || decideId == 3) {
        trueId = 'rock';
    } else if (decideId == 1 || decideId == 4) {
        trueId = 'paper';
    } else if (decideId == 2 || decideId == 5) {
        trueId = 'scissors';
    }
}

// "1st, 5th" and such
function updatePronoun() {
    if (gameMatchCount == 1) {
        gameMatchPronoun = 'st';
    } else if (gameMatchCount == 2) {
        gameMatchPronoun = 'nd';
    } else if (gameMatchCount == 3) {
        gameMatchPronoun = 'rd';
    } else if (gameMatchCount >= 4) {
        gameMatchPronoun = 'th';
    } else {
    }
    }

// Alias setup
function switchGamemode(gamemode) {
    let playerSlotSetup1 = document.getElementById("player_slot_1");
    let playerSlotSetup2 = document.getElementById("player_slot_2");
    let playerSlotSetup3 = document.getElementById("player_slot_3");
    let cpuSlotSetup1 = document.getElementById("cpu_slot_1");
    let cpuSlotSetup2 = document.getElementById("cpu_slot_2");
    let cpuSlotSetup3 = document.getElementById("cpu_slot_3");
    if (gamemode === 'normal') {
        gamemodeVar = 'normal';
        playerSlotSetup1.innerHTML = playerRockAlias[0];
        playerSlotSetup2.innerHTML = playerPaperAlias[0];
        playerSlotSetup3.innerHTML = playerScissorsAlias[0];
        cpuSlotSetup1.innerHTML = cpuRockAlias[0];
        cpuSlotSetup2.innerHTML = cpuPaperAlias[0];
        cpuSlotSetup3.innerHTML = cpuScissorsAlias[0];
    } else if (gamemode === 'what') {
        gamemodeVar = 'what';
        randomizePlayerAlias();
        randomizeCpuAlias();
        ensureOriginalAlias();
        shuffleEmojiSpotlight();

        playerSlotSetup1.innerHTML = playerRock;
        playerSlotSetup2.innerHTML = playerPaper;
        playerSlotSetup3.innerHTML = playerScissors;
        cpuSlotSetup1.innerHTML = cpuRock;
        cpuSlotSetup2.innerHTML = cpuPaper;
        cpuSlotSetup3.innerHTML = cpuScissors;
    }
}

// For gamemode "what": ensuring at least one is a rock or paper or scissors
function ensureOriginalAlias() {
    if (randomPlayerRockId === 0 || randomPlayerPaperId === 0 ||
         randomPlayerScissorsId === 0 || randomCpuRockId === 0 ||
          randomCpuPaperId === 0 || randomCpuScissorsId === 0) {
    } else {
        let decideFairGameId = Math.floor(Math.random() * 3);
        if (decideFairGameId === 0) {
            playerRock = playerRockAlias[0];
        } else if (decideFairGameId === 1) {
            playerPaper = playerPaperAlias[0];
        } else if (decideFairGameId === 2) {
            playerScissors = playerScissorsAlias[0];
        } else {
        }
    }
}

// computer will pick a card at random
function cpuDecideCard() {
    // to ensure choice ID is either 0, 1, or 2
    let decideId = Math.floor(Math.random() * 3);
    if (decideId == 0) {
        cpuPickSlot1();
    } else if (decideId == 1) {
        cpuPickSlot2();
    } else if (decideId == 2) {
        cpuPickSlot3();
    } else {
    }
}

// gamemode 'what' only
function randomizePlayerAlias() {
    randomPlayerRockId = Math.floor(Math.random() * 6);
    randomPlayerPaperId = Math.floor(Math.random() * 6);
    randomPlayerScissorsId = Math.floor(Math.random() * 6);
    playerRock = playerRockAlias[randomPlayerRockId];
    playerPaper = playerPaperAlias[randomPlayerPaperId];
    playerScissors = playerScissorsAlias[randomPlayerScissorsId];
    // update the library for spotlight (needs to be repeated for CPU)
    emojiSpotlightLibrary = [playerRock, playerPaper, 
        playerScissors, cpuRock, cpuPaper, cpuScissors];
}

//gamemode 'what' only
function randomizeCpuAlias() {
    randomCpuRockId = Math.floor(Math.random() * 6);
    randomCpuPaperId = Math.floor(Math.random() * 6);
    randomCpuScissorsId = Math.floor(Math.random() * 6);
    cpuRock = cpuRockAlias[randomCpuRockId];
    cpuPaper = cpuPaperAlias[randomCpuPaperId];
    cpuScissors = cpuScissorsAlias[randomCpuScissorsId];
    // update the library for spotlight
    emojiSpotlightLibrary = [playerRock, playerPaper, 
        playerScissors, cpuRock, cpuPaper, cpuScissors];
}

// computer will pick a card at random
function cpuDecideCard() {
    // to ensure choice ID is either 0, 1, or 2
    let decideId = Math.floor(Math.random() * 3);
    if (decideId == 0) {
        cpuPickSlot1();
    } else if (decideId == 1) {
        cpuPickSlot2();
    } else if (decideId == 2) {
        cpuPickSlot3();
    } else {
    }
}

// Player hightlight
function playerPickNull() {
    playerHighlightRock.style.borderColor = "grey";
    playerHighlightRock.style.borderWidth = "1px";
    playerHighlightPaper.style.borderColor = "grey";
    playerHighlightPaper.style.borderWidth = "1px";
    playerHighlightScissors.style.borderColor = "grey";
    playerHighlightScissors.style.borderWidth = "1px";
    playerHighlight = null;
}
function playerPickSlot1() {
    cpuPickNull();
    playerHighlightRock.style.borderColor = "lightcoral";
    playerHighlightRock.style.borderWidth = "2px";
    playerHighlightPaper.style.borderColor = "grey";
    playerHighlightPaper.style.borderWidth = "1px";
    playerHighlightScissors.style.borderColor = "grey";
    playerHighlightScissors.style.borderWidth = "1px";
    playerHighlight = "rock";
}
function playerPickSlot2() {
    cpuPickNull();
    playerHighlightRock.style.borderColor = "grey";
    playerHighlightRock.style.borderWidth = "1px";
    playerHighlightPaper.style.borderColor = "lightcoral";
    playerHighlightPaper.style.borderWidth = "2px";
    playerHighlightScissors.style.borderColor = "grey";
    playerHighlightScissors.style.borderWidth = "1px";
    playerHighlight = "paper";
}
function playerPickSlot3() {
    cpuPickNull();
    playerHighlightRock.style.borderColor = "grey";
    playerHighlightRock.style.borderWidth = "1px";
    playerHighlightPaper.style.borderColor = "grey";
    playerHighlightPaper.style.borderWidth = "1px";
    playerHighlightScissors.style.borderColor = "lightcoral";
    playerHighlightScissors.style.borderWidth = "2px";
    playerHighlight = "scissors";
}

// CPU highlight
function cpuPickNull() {
    cpuHighlightRock.style.borderColor = "grey";
    cpuHighlightRock.style.borderWidth = "1px";
    cpuHighlightPaper.style.borderColor = "grey";
    cpuHighlightPaper.style.borderWidth = "1px";
    cpuHighlightScissors.style.borderColor = "grey";
    cpuHighlightScissors.style.borderWidth = "1px";
    cpuHighlight = null;
}
function cpuPickSlot1() {
    cpuHighlightRock.style.borderColor = "lightcoral";
    cpuHighlightRock.style.borderWidth = "2px";
    cpuHighlightPaper.style.borderColor = "grey";
    cpuHighlightPaper.style.borderWidth = "1px";
    cpuHighlightScissors.style.borderColor = "grey";
    cpuHighlightScissors.style.borderWidth = "1px";
    cpuHighlight = "rock";
}
function cpuPickSlot2() {
    cpuHighlightRock.style.borderColor = "grey";
    cpuHighlightRock.style.borderWidth = "1px";
    cpuHighlightPaper.style.borderColor = "lightcoral";
    cpuHighlightPaper.style.borderWidth = "2px";
    cpuHighlightScissors.style.borderColor = "grey";
    cpuHighlightScissors.style.borderWidth = "1px";
    cpuHighlight = "paper";
}
function cpuPickSlot3() {
    cpuHighlightRock.style.borderColor = "grey";
    cpuHighlightRock.style.borderWidth = "1px";
    cpuHighlightPaper.style.borderColor = "grey";
    cpuHighlightPaper.style.borderWidth = "1px";
    cpuHighlightScissors.style.borderColor = "lightcoral";
    cpuHighlightScissors.style.borderWidth = "2px";
    cpuHighlight = "scissors";
}

// Alias highlight (gamemode 'what' only)
function guessAliasIs(guess) {
    if (guess === 'rock') {
        guessAliasHighlight = 'rock';
        guessAliasHighlightRock.style.borderColor = "lightcoral";
        guessAliasHighlightRock.style.borderWidth = "2px";
        guessAliasHighlightPaper.style.borderColor = "grey";
        guessAliasHighlightPaper.style.borderWidth = "1px";
        guessAliasHighlightScissors.style.borderColor = "grey";
        guessAliasHighlightScissors.style.borderWidth = "1px";

    } else if (guess === 'paper') {
        guessAliasHighlight = 'paper';
        guessAliasHighlightRock.style.borderColor = "grey";
        guessAliasHighlightRock.style.borderWidth = "1px";
        guessAliasHighlightPaper.style.borderColor = "lightcoral";
        guessAliasHighlightPaper.style.borderWidth = "2px";
        guessAliasHighlightScissors.style.borderColor = "grey";
        guessAliasHighlightScissors.style.borderWidth = "1px";

    } else if (guess === 'scissors') {
        guessAliasHighlight = 'scissors';
        guessAliasHighlightRock.style.borderColor = "grey";
        guessAliasHighlightRock.style.borderWidth = "1px";
        guessAliasHighlightPaper.style.borderColor = "grey";
        guessAliasHighlightPaper.style.borderWidth = "1px";
        guessAliasHighlightScissors.style.borderColor = "lightcoral";
        guessAliasHighlightScissors.style.borderWidth = "2px";

    } else {
    }
}

// announce 'pick a card'
function announcePickCard() {
    announce.innerHTML = "pick a card";
}

// add score (gamemode 'normal' only)
function addScoreTo(winningContribute) {
    if (winningContribute === 'player') {
        dominantContributeIcon = " > ";
        // update score for end-user interface only for "normal" gamemode
        if (gamemodeVar === "normal") {
            playerScoreboard = playerScoreboard + 1;
            countPlayerScoreSlot = countPlayerScoreSlot + 1;
            playerScoreSlot.innerHTML = countPlayerScoreSlot;
        }
    } else if (winningContribute === 'cpu') {
        dominantContributeIcon = " < ";
        // update score for end-user interface only for "normal" gamemode
        if (gamemodeVar === "normal") {
            cpuScoreboard = cpuScoreboard + 1;
            countCpuScoreSlot = countCpuScoreSlot + 1;
            cpuScoreSlot.innerHTML = countCpuScoreSlot;
        }
    } else if (winningContribute === 'draw') {
        dominantContributeIcon = " = ";
        // update score for end-user interface only for "normal" gamemode
        if (gamemodeVar === "normal") {
            playerScoreboard = playerScoreboard + 1;
            countPlayerScoreSlot = countPlayerScoreSlot + 1;
            playerScoreSlot.innerHTML = countPlayerScoreSlot;
            // update score for end-user interface only for "normal" gamemode
            countCpuScoreSlot = countCpuScoreSlot + 1;
            cpuScoreSlot.innerHTML = countCpuScoreSlot;
            cpuScoreboard = cpuScoreboard + 1;
        }
    } else {
    }
}

// announce engeagement
function highlightCondition(player, cpu) {
    // gamemode controllant
    if (gamemodeVar === "normal") {
        announce.innerHTML = playerHighlight + dominantContributeIcon + cpuHighlight;
    } else if (gamemodeVar === "what") {
        announce.innerHTML = '?' + dominantContributeIcon + '?';
    }
}

// event that happens after player clicks "submit"
function progressGame() {
    // gamemode controllant
    if (gamemodeVar === "normal") {
        if (gameMatchCount < 10) {
            highlightCondition();
            gameMatchCount = gameMatchCount + 1;
            updatePronoun();
            gameCounterSlot.innerHTML = gameMatchCount + gameMatchPronoun;
        } else if (gameMatchCount == 10) {
            announce.innerHTML = "Game over";
            // remove the submit button when Game Over appear
            let closeSubmitButton = document.getElementById('submit_pick');
            closeSubmitButton.innerHTML = `<button id="closed_submit_button" >Submit</button>`;
        }
    } else if (gamemodeVar === "what") {
            highlightCondition();
    }
}

// reveal alias answer upon clicking 'submit' (gamemode 'what' only)
function revealAlias() {
    let reveal = document.getElementById('emoji_spotlight_reveal');
    if (trueId === guessAliasHighlight) {
        announce.innerHTML = "Correct!";
    } else {
        announce.innerHTML = "Incorrect...";
    }
    if (trueId == 'rock') {
        reveal.innerHTML = " 🪨";
    } else if (trueId == 'paper') {
        reveal.innerHTML = " 🧻";
    } else if (trueId == 'scissors') {
        reveal.innerHTML = " ✂️";
    }
    let closeSubmitButton = document.getElementById('submit_pick');
    let nextGameButton = document.getElementById('alias_submit_button');
    closeSubmitButton.innerHTML = `<button id="closed_submit_button" >Submit</button>`;
    nextGameButton.innerHTML = `<button onclick="resetGame('what')">Next Game</button>`;
}

// Conditions for what contribute will win based on picked card, (player, cpu) should be connected to "playerHighlight"
function engageGame(player, cpu) {

        // To ensure the game can only be initiated when both contributes have made a choice
        if (playerHighlight != null && cpuHighlight != null) {
                if (player == "rock" && cpu == "rock") {
                    addScoreTo('draw');
                    progressGame();
                } else if (player == "rock" && cpu == "paper") {
                    addScoreTo('cpu');
                    progressGame();
                } else if (player == "rock" && cpu == "scissors") {
                    addScoreTo('player');
                    progressGame();
                } else if (player == "paper" && cpu == "rock") {
                    addScoreTo('player');
                    progressGame();
                } else if (player == "paper" && cpu == "paper") {
                    addScoreTo('draw');
                    progressGame();
                } else if (player == "paper" && cpu == "scissors") {
                    addScoreTo('cpu');
                    progressGame();
                } else if (player == "scissors" && cpu == "rock") {
                    addScoreTo('cpu');
                    progressGame();
                } else if (player == "scissors" && cpu == "paper") {
                    addScoreTo('player');
                    progressGame();
                } else if (player == "scissors" && cpu == "scissors") {
                    addScoreTo('draw');
                    progressGame();
                } else {
                }
    } else {
        announce.innerHTML = "Please, pick a card";
    }
}

function resetGame(gamemode) {
    if (gamemode == 'normal') {
        if (confirm('The game will be reset upon clicking "OK"! ') == true) {
            playerHighlight = null;
            cpuHighlight = null;
            gameMatchCount = 1;
            countPlayerScoreSlot = 0;
            countCpuScoreSlot = 0;
            gameMatchPronoun = "st";
            gameCounterSlot.innerHTML = gameMatchCount + gameMatchPronoun;
            playerScoreSlot.innerHTML = countPlayerScoreSlot;
            cpuScoreSlot.innerHTML = countCpuScoreSlot;
            playerPickNull();
            cpuPickNull();
            announce.innerHTML = "Game reset";
            // takes back the submit button upon reset
            let reopenSubmitButton = document.getElementById('submit_pick');
            reopenSubmitButton.innerHTML = `<button onclick="cpuDecideCard(),
             engageGame(playerHighlight, cpuHighlight)">Submit</button>`;
            }
    } else if (gamemode == 'what') {
        // SwitchGamemode already shuffle the alias emojis
        switchGamemode('what');

        cpuHighlightRock.style.borderColor = "grey";
        cpuHighlightRock.style.borderWidth = "1px";
        cpuHighlightPaper.style.borderColor = "grey";
        cpuHighlightPaper.style.borderWidth = "1px";
        cpuHighlightScissors.style.borderColor = "grey";
        cpuHighlightScissors.style.borderWidth = "1px";

        playerHighlightRock.style.borderColor = "grey";
        playerHighlightRock.style.borderWidth = "1px";
        playerHighlightPaper.style.borderColor = "grey";
        playerHighlightPaper.style.borderWidth = "1px";
        playerHighlightScissors.style.borderColor = "grey";
        playerHighlightScissors.style.borderWidth = "1px";

        guessAliasHighlightRock.style.borderColor = "grey";
        guessAliasHighlightRock.style.borderWidth = "1px";
        guessAliasHighlightPaper.style.borderColor = "grey";
        guessAliasHighlightPaper.style.borderWidth = "1px";
        guessAliasHighlightScissors.style.borderColor = "grey";
        guessAliasHighlightScissors.style.borderWidth = "1px";

        playerHighlight = null;
        cpuHighlight = null;
        guessAliasHighlight = null;
        let resetAliasReveal = document.getElementById('emoji_spotlight_reveal');
        let reopenSubmitButton = document.getElementById('submit_pick');
        let reopenAliasSubmitButton = document.getElementById('alias_submit_button');
        resetAliasReveal.innerHTML = "...";
        reopenSubmitButton.innerHTML = `<button onclick="cpuDecideCard(), engageGame(playerHighlight, cpuHighlight)">Submit</button>`;
        reopenAliasSubmitButton.innerHTML = `<button onclick="revealAlias()">Submit</button>`;
        announce.innerHTML = "New Game";
    }
}