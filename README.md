Rock Paper What
======
Rock Paper What is a website that offers two mini-games for visitors to play. The first game is the classic Rock-Paper Scissors, played in a best-of-ten format. The second game, Rock-Paper-What, is an expanded version of the classic game, with rules that will be explained later in the readme.

User stories:
------
- As a visitor, I want to play a gamemode called "normal", which is a Rock-Paper-Scissors in a best-of-ten game.
- As a visitor, I want to play a gamemode called “What”, that expands on regular Rock-Paper-Scissors where you win by skill and not by luck.
- As a visitor, I want to be able to switch between the gamemodes at the header.
- As a visitor, I want to find clear instructions in the header on how to play the games.
- As a visitor, I expect that my opponent, the computer, will make its choice entirely by chance and that my choice will not affect it.
- As a visitor, I want my choice of card to be visually clear, with visual elements that stand out from the other elements.
- As a visitor, I expect that the visual elements on the computer’s side appear the same as mine.
- As a visitor, I want clear notifications for all kinds of actions, like which game mode I'm playing, who wins, if the game has reset, and such.
- As a visitor, I expect that the card I highlighted in the last match will stay highlighted until I pick another card.
- As a visitor, I want to be in control of the initiation of the duel, by initiating it by clicking a submit button.
- As a visitor, I expect the next game match to begin immediately after I click "submit". 
- As a visitor playing gamemode “normal”, I want to at any time be able to reset the game by clicking a reset button. I expect to confirm my decision in case I reach the reset button by accident.
- As a visitor playing gamemode “normal”, I expect to see a scoreboard for me and my opponent, which will reset when I click "reset". 
- As a visitor playing gamemode “normal”, when the game is over, I expect the submit button to be visually and functionally disabled until I click “reset”.
- As a visitor playing gamemode “what?”, I expect at least one of the random emojis to be either an original rock, paper, or scissors, and that it behaves accordingly
- As a visitor playing gamemode “what?”, I expect the duel to be endless, with no scoreboard involved.
- As a visitor playing gamemode “what?”, I expect to highlight and submit my guess for the emoji I'm identifying in the same way I highlight and submit my cards for a match.
- As a visitor playing gamemode “what?”, when I click "Submit" for the guess emoji section, the "Submit" button for my cards section should be functionally and visually disabled until I click the "Next game" button.
- As a visitor playing gamemode “what?”, I expect to get a revealed answer if I was right or wrong, and if the emoji I'm identifying was a rock, paper, or scissors.
- As a visitor, I want to be able to find the developer of the website's social media links in a footer.

Wireframes:
------
- Visualisation for front-end appearance was sketched with art software.
- The following images are wireframes to support as visual references during the early phase:
![wireframe1]https://raw.githubusercontent.com/MidnattLantern/rock_paper_what/main/assets/images/wireframe.png

Testing
------
- Using media queries in CSS, the appearance varies from device to device in a manner that's appropriate for such diversity.
- Here's how the game layout appear in both desktop and phone:
!

Unsolved bugs:
------
- During gamemode "what", in rare cases, the game will announce "incorrect" even when the player is right.
- During gamemode "what", in extremely rare cases, the game will expect you to identify an emoji that isn't on the board.