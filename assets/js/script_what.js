// alias library
let playerRockAlias = ['🪨', '🍌', '👻', '👗', '🦆', '👀'];
let playerPaperAlias = ['🧻', '🍉', '👽', '👙', '🐸', '👃'];
let playerScissorsAlias = ['✂️', '🍋', '💀', '👘', '😸', '👄'];
let cpuRockAlias = ['🪨', '🧅', '🍹', '💻', '🥸', '🌹'];
let cpuPaperAlias = ['🧻', '🥑', '🍷', '📱', '😴', '🌳'];
let cpuScissorsAlias = ['✂️', '🍅', '🍺', '🖥️', '😍', '🪴'];

// ID that decides which emoji to slice from alias library
let randomPlayerRockId = null;
let randomPlayerPaperId = null;
let randomPlayerScissorsId = null;
let randomCpuRockId = null;
let randomCpuPaperId = null;
let randomCpuScissorsId = null;

// emoji alias decision
var playerRock = playerRockAlias[0];
var playerPaper = playerPaperAlias[0];
var playerScissors = playerScissorsAlias[0];
console.log("player's rock: " + playerRock);
console.log("player's paper: " + playerPaper);
console.log("player's scissors: " + playerScissors);
var cpuRock = cpuRockAlias[0];
var cpuPaper = cpuPaperAlias[0];
var cpuScissors = cpuScissorsAlias[0];
console.log("computer's rock: " + cpuRock);
console.log("computer's paper: " + cpuPaper);
console.log("computer's scissors: " + cpuScissors);

function randomizePlayerAlias() {
    randomPlayerRockId = Math.floor(Math.random() * 6);
    randomPlayerPaperId = Math.floor(Math.random() * 6);
    randomPlayerScissorsId = Math.floor(Math.random() * 6);
    console.log("player's rock emoji ID: " + randomPlayerRockId);
    console.log("player's paper emoji ID: " + randomPlayerPaperId);
    console.log("player's scissors emoji ID: " + randomPlayerScissorsId);
    playerRock = playerRockAlias[randomPlayerRockId];
    playerPaper = playerPaperAlias[randomPlayerPaperId];
    playerScissors = playerScissorsAlias[randomPlayerScissorsId];
    console.log("player's rock: " + playerRock);
    console.log("player's paper: " + playerPaper);
    console.log("player's scissors: " + playerScissors);
}

function randomizeCpuAlias() {
    randomCpuRockId = Math.floor(Math.random() * 6);
    randomCpuPaperId = Math.floor(Math.random() * 6);
    randomCpuScissorsId = Math.floor(Math.random() * 6);
    console.log("computer's rock emoji ID: " + randomCpuRockId);
    console.log("computer's paper emoji ID: " + randomCpuPaperId);
    console.log("computer's scissors emoji ID: " + randomCpuScissorsId);
    cpuRock = cpuRockAlias[randomCpuRockId];
    cpuPaper = cpuPaperAlias[randomCpuPaperId];
    cpuScissors = cpuScissorsAlias[randomCpuScissorsId];
    console.log("computer's rock: " + cpuRock);
    console.log("computer's paper: " + cpuPaper);
    console.log("computer's scissors: " + cpuScissors);
}

// ensuring at least one is a rock or paper or scissors
function ensureOriginalAlias() {
    if (randomPlayerRockId === 0 || randomPlayerPaperId === 0 || randomPlayerScissorsId === 0 || randomCpuRockId === 0 || randomCpuPaperId === 0 || randomCpuScissorsId === 0) {
        console.log("game setup is fair");
    } else {
        console.log("game setup is unfair");
        let decideFairGameId = Math.floor(Math.random() * 3);
        if (decideFairGameId === 0) {
            playerRock = playerRockAlias[0];
            console.log("assigned 🪨 for player's rock");
            console.log("game setup is now fair");
        } else if (decideFairGameId === 1) {
            playerPaper = playerPaperAlias[0];
            console.log("assigned 🧻 for player's paper");
            console.log("game setup is now fair");
        } else if (decideFairGameId === 2) {
            playerPaper = playerScissorsAlias[0];
            console.log("assigned ✂️ for player's scissors");
            console.log("game setup is now fair");
        } else {
            console.log("error: failed to make the game fair")
        }
    }
}

// Player data for "game conditions" and "highlight"
var playerHighlight = null;
console.log("playerHighlight: " + playerHighlight);
let playerHighlightRock = document.getElementById("player_slot_1");
let playerHighlightPaper = document.getElementById("player_slot_2");
let playerHighlightScissors = document.getElementById("player_slot_3");
var playerScoreboard = 0;
console.log("Player's Scoreboard is: " + playerScoreboard);

// CPU data for "game conditions" and "highlight"
var cpuHighlight = null;
console.log("cpuHighlight: " + cpuHighlight);
let cpuHighlightRock = document.getElementById("cpu_slot_1");
let cpuHighlightPaper = document.getElementById("cpu_slot_2");
let cpuHighlightScissors = document.getElementById("cpu_slot_3");
var cpuScoreboard = 0;
console.log("Computer's Scoreboard is: " + cpuScoreboard);

// showing either < > = depending on who wins. Icon is updated by the addScoreTo() function
var dominantContributeIcon = " = ";

// computer will pick a card at random
function cpuDecideCard() {
    // to ensure choice ID is either 0, 1, or 2
    let decideId = Math.floor(Math.random() * 3);
    console.log("new computer's decision id: " + decideId);
    if (decideId == 0) {
        console.log("computer will pick slot 1");
        cpuPickSlot1();
    } else if (decideId == 1) {
        console.log("computer will pick slot 2");
        cpuPickSlot2();
    } else if (decideId == 2) {
        console.log("computer will pick slot 3");
        cpuPickSlot3();
    } else {
        console.log("error: computer failed to make a decision");
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
    console.log("unselected player's pick");
    playerHighlight = null;
    console.log("playerHighlight: " + playerHighlight);    
}

function playerPickSlot1() {
    cpuPickNull();

    playerHighlightRock.style.borderColor = "lightcoral";
    playerHighlightRock.style.borderWidth = "2px";
    playerHighlightPaper.style.borderColor = "grey";
    playerHighlightPaper.style.borderWidth = "1px";
    playerHighlightScissors.style.borderColor = "grey";
    playerHighlightScissors.style.borderWidth = "1px";
    console.log("player picked rock");
    playerHighlight = "rock";
    console.log("playerHighlight: " + playerHighlight);
}
// -
function playerPickSlot2() {
    cpuPickNull();

    playerHighlightRock.style.borderColor = "grey";
    playerHighlightRock.style.borderWidth = "1px";
    playerHighlightPaper.style.borderColor = "lightcoral";
    playerHighlightPaper.style.borderWidth = "2px";
    playerHighlightScissors.style.borderColor = "grey";
    playerHighlightScissors.style.borderWidth = "1px";
    console.log("player picked paper");
    playerHighlight = "paper";
    console.log("playerHighlight: " + playerHighlight);
}
// -
function playerPickSlot3() {
    cpuPickNull();
    
    playerHighlightRock.style.borderColor = "grey";
    playerHighlightRock.style.borderWidth = "1px";
    playerHighlightPaper.style.borderColor = "grey";
    playerHighlightPaper.style.borderWidth = "1px";
    playerHighlightScissors.style.borderColor = "lightcoral";
    playerHighlightScissors.style.borderWidth = "2px";
    console.log("player picked scissors");
    playerHighlight = "scissors";
    console.log("playerHighlight: " + playerHighlight);
}

// CPU highlight

function cpuPickNull() {
    cpuHighlightRock.style.borderColor = "grey";
    cpuHighlightRock.style.borderWidth = "1px";
    cpuHighlightPaper.style.borderColor = "grey";
    cpuHighlightPaper.style.borderWidth = "1px";
    cpuHighlightScissors.style.borderColor = "grey";
    cpuHighlightScissors.style.borderWidth = "1px";
    console.log("unselected computer's pick");
    cpuHighlight = null;
    console.log("cpuHighlight: " + cpuHighlight);    
}
function cpuPickSlot1() {
    cpuHighlightRock.style.borderColor = "lightcoral";
    cpuHighlightRock.style.borderWidth = "2px";
    cpuHighlightPaper.style.borderColor = "grey";
    cpuHighlightPaper.style.borderWidth = "1px";
    cpuHighlightScissors.style.borderColor = "grey";
    cpuHighlightScissors.style.borderWidth = "1px";
    console.log("cpu picked rock" + cpuDecideCard);
    cpuHighlight = "rock";
    console.log("cpuHighlight: " + cpuHighlight);
}
// -
function cpuPickSlot2() {
    cpuHighlightRock.style.borderColor = "grey";
    cpuHighlightRock.style.borderWidth = "1px";
    cpuHighlightPaper.style.borderColor = "lightcoral";
    cpuHighlightPaper.style.borderWidth = "2px";
    cpuHighlightScissors.style.borderColor = "grey";
    cpuHighlightScissors.style.borderWidth = "1px";
    console.log("cpu picked paper" + cpuDecideCard);
    cpuHighlight = "paper";
    console.log("cpuHighlight: " + cpuHighlight);
}
// -
function cpuPickSlot3() {
    cpuHighlightRock.style.borderColor = "grey";
    cpuHighlightRock.style.borderWidth = "1px";
    cpuHighlightPaper.style.borderColor = "grey";
    cpuHighlightPaper.style.borderWidth = "1px";
    cpuHighlightScissors.style.borderColor = "lightcoral";
    cpuHighlightScissors.style.borderWidth = "2px";
    console.log("cpu picked scissors" + cpuDecideCard);
    cpuHighlight = "scissors";
    console.log("cpuHighlight: " + cpuHighlight);
}

// Announce section
let announce = document.getElementById('announcement_board');

function announcePickCard() {
    announce.innerHTML = "pick a card";
}


// add score
function addScoreTo(winningContribute) {
    if (winningContribute === 'player') {
        dominantContributeIcon = " > ";

    } else if (winningContribute === 'cpu') {
        dominantContributeIcon = " < ";

    } else if (winningContribute === 'draw') {
        dominantContributeIcon = " = ";

    } else {
        console.log("error: failed to determine dominant contribute");
    }
}

// announce engeagement
function highlightCondition(player, cpu) {
    announce.innerHTML = playerHighlight + dominantContributeIcon + cpuHighlight;
    console.log("--- < game conditions > ---");
    console.log("player: " + player);
    console.log("computer: " + cpu);
}

// Conditions for what contribute will win based on picked card
function engageGame(player, cpu) {
    
    // To ensure the game can only be initiated when both contributes have made a choice
    if (playerHighlight != null && cpuHighlight != null) {

        if (player == rock && cpu == rock) {
            addScoreTo('draw');
            highlightCondition();
            console.log("player rock, cpu rock, draw");
        } else if (player == rock && cpu == paper) {
            addScoreTo('cpu');
            highlightCondition();
            console.log("player rock, cpu paper, cpu win");
        } else if (player == rock && cpu == scissors) {
            addScoreTo('player');
            highlightCondition();
            console.log("player rock, cpu scissors, player win");
        } else if (player == paper && cpu == rock) {
            addScoreTo('player');
            highlightCondition();
            console.log("player paper, cpu rock, player win");
        } else if (player == paper && cpu == paper) {
            addScoreTo('draw');
            highlightCondition();
            console.log("player paper, cpu paper, draw");
        } else if (player == paper && cpu == scissors) {
            addScoreTo('cpu');
            highlightCondition();
            console.log("player paper, cpu scissors, cpu win");
        } else if (player == scissors && cpu == rock) {
            addScoreTo('cpu');
            highlightCondition();
            console.log("player scissors, cpu rock, cpu win");
        } else if (player == scissors && cpu == paper) {
            addScoreTo('player');
            highlightCondition();
            console.log("player scissors, cpu paper, player win");
        } else if (player == scissors && cpu == scissors) {
            addScoreTo('draw');
            highlightCondition();
            console.log("player scissors, cpu scissors, draw");
        } else {
            console.log("error: couldn't judge the engagement");
        }

    } else {

        announce.innerHTML = "Please, pick a card";
        console.log("error: player and computer didn't highlight a card each");
    }
}