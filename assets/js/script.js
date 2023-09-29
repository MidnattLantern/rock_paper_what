// Player data for "game conditions" and "highlight"
var playerHighlight = null;
console.log("playerHighlight: " + playerHighlight);
let playerHighlightRock = document.getElementById("player_rock_button");
let playerHighlightPaper = document.getElementById("player_paper_button");
let playerHighlightScissors = document.getElementById("player_scissors_button");
var playerScoreboard = 0;
console.log("Player's Scoreboard is: " + playerScoreboard);

// CPU data for "game conditions" and "highlight"
var cpuHighlight = null;
console.log("cpuHighlight: " + cpuHighlight);
let cpuHighlightRock = document.getElementById("cpu_rock_button");
let cpuHighlightPaper = document.getElementById("cpu_paper_button");
let cpuHighlightScissors = document.getElementById("cpu_scissors_button");
var cpuScoreboard = 0;
console.log("Computer's Scoreboard is: " + cpuScoreboard);

// Game score and pronoun conditions
let gameCounterSlot = document.getElementById('game_counter_slot');
var gameMatchCount = 1;

let playerScoreSlot = document.getElementById('player_score_slot');
var countPlayerScoreSlot = 0;

let cpuScoreSlot = document.getElementById('cpu_score_slot');
var countCpuScoreSlot = 0;

var gameMatchPronoun = "th";
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
    console.log('error: failed to update gameMatchPronoun function');
}
console.log("Cuttent game-match: " + gameMatchCount + gameMatchPronoun);
}
updatePronoun();

// showing either < > = depending on who wins. Icon is updated by the addScoreTo() function
var dominantContributeIcon = " = ";

// for console.log() and initiate game
let rock = "rock";
let paper = "paper";
let scissors = "scissors";

// computer will pick a card at random
function cpuDecideCard() {
    // to ensure choice ID is either 0, 1, or 2
    let decideId = Math.floor(Math.random() * 3);
    console.log("new computer's decision id: " + decideId);
    if (decideId == 0) {
        console.log("computer will pick rock");
        cpuPickRock();
    } else if (decideId == 1) {
        console.log("computer will pick paper");
        cpuPickPaper();
    } else if (decideId == 2) {
        console.log("computer will pick scissors");
        cpuPickScissors();
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

function playerPickRock() {
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
function playerPickPaper() {
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
function playerPickScissors() {
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
function cpuPickRock() {
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
function cpuPickPaper() {
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
function cpuPickScissors() {
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
        // update score for end-user interface
        playerScoreboard = playerScoreboard + 1;
        countPlayerScoreSlot = countPlayerScoreSlot + 1;
        //update score for console
        playerScoreSlot.innerHTML = countPlayerScoreSlot;
        console.log("Player's Scoreboard is: " + playerScoreboard);

    } else if (winningContribute === 'cpu') {
        dominantContributeIcon = " < ";
        // update score for end-user interface
        cpuScoreboard = cpuScoreboard + 1;
        countCpuScoreSlot = countCpuScoreSlot + 1;
        //update score for console
        cpuScoreSlot.innerHTML = countCpuScoreSlot;
        console.log("Computer's Scoreboard is: " + cpuScoreboard);

    } else if (winningContribute === 'draw') {
        dominantContributeIcon = " = ";
        // update score for end-user interface
        playerScoreboard = playerScoreboard + 1;
        countPlayerScoreSlot = countPlayerScoreSlot + 1;
        //update score for console
        playerScoreSlot.innerHTML = countPlayerScoreSlot;
        console.log("Player's Scoreboard is: " + playerScoreboard);
        // update score for end-user interface
        countCpuScoreSlot = countCpuScoreSlot + 1;
        cpuScoreSlot.innerHTML = countCpuScoreSlot;
        //update score for console
        cpuScoreboard = cpuScoreboard + 1;
        console.log("Computer's Scoreboard is: " + cpuScoreboard);

    } else {
        console.log("error: failed to update contribute(s) score(s)");
    }
}

// announce engeagement
function highlightCondition(player, cpu) {
    announce.innerHTML = playerHighlight + dominantContributeIcon + cpuHighlight;
    console.log("--- < game conditions > ---");
    console.log("player: " + player);
    console.log("computer: " + cpu);
}

// the condition section will aready console.log( new pronoun )
function progressGame() {
    if (gameMatchCount < 10) {
        highlightCondition();
        gameMatchCount = gameMatchCount + 1;
        updatePronoun();
        gameCounterSlot.innerHTML = gameMatchCount + gameMatchPronoun;
    } else if (gameMatchCount == 10) {
        announce.innerHTML = "Game over";
        console.log("game over");
    }
}

// Conditions for what contribute will win based on picked card
function engageGame(player, cpu) {
    
    // To ensure the game can only be initiated when both contributes have made a choice
    if (playerHighlight != null && cpuHighlight != null) {

        if (player == rock && cpu == rock) {
            addScoreTo('draw');
            progressGame();
            console.log("player rock, cpu rock, draw");
        } else if (player == rock && cpu == paper) {
            addScoreTo('cpu');
            progressGame();
            console.log("player rock, cpu paper, cpu win");
        } else if (player == rock && cpu == scissors) {
            addScoreTo('player');
            progressGame();
            console.log("player rock, cpu scissors, player win");
        } else if (player == paper && cpu == rock) {
            addScoreTo('player');
            progressGame();
            console.log("player paper, cpu rock, player win");
        } else if (player == paper && cpu == paper) {
            addScoreTo('draw');
            progressGame();
            console.log("player paper, cpu paper, draw");
        } else if (player == paper && cpu == scissors) {
            addScoreTo('cpu');
            progressGame();
            console.log("player paper, cpu scissors, cpu win");
        } else if (player == scissors && cpu == rock) {
            addScoreTo('cpu');
            progressGame();
            console.log("player scissors, cpu rock, cpu win");
        } else if (player == scissors && cpu == paper) {
            addScoreTo('player');
            progressGame();
            console.log("player scissors, cpu paper, player win");
        } else if (player == scissors && cpu == scissors) {
            addScoreTo('draw');
            progressGame();
            console.log("player scissors, cpu scissors, draw");
        } else {
            console.log("error: couldn't judge the engagement");
        }

    } else {

        announce.innerHTML = "Please, pick a card";
        console.log("error: player and computer didn't highlight a card each");
    }
}

function resetGame() {
    playerHighlight = null;
    cpuHighlight = null;
    gameMatchCount = 1;
    countPlayerScoreSlot = 0;
    countCpuScoreSlot = 0;
    gameMatchPronoun = "th";
    gameCounterSlot.innerHTML = gameMatchCount + gameMatchPronoun;
    playerScoreSlot.innerHTML = countPlayerScoreSlot;
    cpuScoreSlot.innerHTML = countCpuScoreSlot;
    playerPickNull();
    cpuPickNull();
    announce.innerHTML = "Game reset";
    console.log("game reset");
}