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
- As a visitor playing gamemode “What?”, I expect the duel to be endless, with no scoreboard involved.
- As a visitor playing gamemode “what?”, I expect to highlight and submit my guess for the emoji I'm identifying in the same way I highlight and submit my cards for a match.
- As a visitor playing gamemode “what?”, when I click "Submit" for the guess emoji section, the "Submit" button for my cards section should be functionally and visually disabled until I click the "Next game" button.
- As a visitor playing gamemode “what?”, I expect to get a revealed answer if I was right or wrong, and if the emoji I'm identifying was a rock, paper, or scissors.
- As a visitor, I want to be able to find the developer of the website's social media links in a footer.

Wireframes:
------
- Visualisation for front-end appearance was sketched with art software.
- The following images are wireframes to support as visual references during the early phase:
![wireframe1]https://github.com/MidnattLantern/rock_paper_what/blob/main/readme_images/wireframe1.png?raw=true

Testing
------
- Using media queries in CSS, the appearance varies from device to device in a manner that's appropriate for such diversity.
- Here's how the game layout appears in both desktop and phone:
![wireframe2]https://github.com/MidnattLantern/rock_paper_what/blob/main/readme_images/wireframe2.png?raw=true

Unsolved bugs:
------
- During gamemode "what", in extremely rare cases, the game will expect you to identify an alias emoji that isn't on the board.

Solves bugs:
------
- During gamemode "what", if the alias emoji is scissors, the game will announce "incorrect" even when the player is right. This has been fixed.

Testing:
------
- a version from the 28 of October passed the validator tests

Credits:
- The social media icons appearing at the footer were borrowed from fontawesome.com.
- The theme font is "Tilt Neon", borrowed from fonts.google.com.
- The wallpaper was designed by the same developer behind Rock Paper What?
- The how-to-play section was written by the same developer behind Rock Paper What, with a little help from GrammarlyGo for grammar and spelling checking.

GitHub deployment:
------
- The site was deployed to GitHub pages. Here's how to deploy:
- In the GitHub repository, navigate to the settings tab, it looks like a cogwheel,
- From the source section drop-down menu, select the master branch,
- When the master branch is selected, the page should provide a link to the website.
- The repository link can be found here - 
- The live link can be found here - 

Features:
------
- The visitor can easily switch gamemode by clicking this text :
![demo_switch.png]https://github.com/MidnattLantern/rock_paper_what/blob/main/readme_images/features_demostration/demo_switch.png?raw=true

- The visitor can easily navigate to the how to play section by clicking this text :
![demo_howto.png]https://github.com/MidnattLantern/rock_paper_what/blob/main/readme_images/features_demostration/demo_howto.png?raw=true

- Here's what the game board looks like in gamemode "normal" :
![demo_board.png]https://github.com/MidnattLantern/rock_paper_what/blob/main/readme_images/features_demostration/demo_board.png?raw=true

Here is what the game board looks like in gamemode "What?" every alias emoji will be random for each match or reload :
![demo_what.png]https://github.com/MidnattLantern/rock_paper_what/blob/main/readme_images/features_demostration/demo_what.png?raw=true

- Here's how the appearance of a card changes when the player highlights that card :
![demo_highlight.png]https://github.com/MidnattLantern/rock_paper_what/blob/main/readme_images/features_demostration/demo_highlight.png?raw=true

- The player initiates the match by clicking "submit", this is the appearance when hovering :
![demo_submit]https://github.com/MidnattLantern/rock_paper_what/blob/main/readme_images/features_demostration/demo_submit.png?raw=true

- The player can at any time during gamemode "normal" reset the game by clicking "reset game", this is the appearance when hovering :
![demo_reset]https://github.com/MidnattLantern/rock_paper_what/blob/main/readme_images/features_demostration/demo_reset.png?raw=true

- The player submits their guess on the alias during gamemode "what" in the same fashion as they highlight and initiate a game duel :
![demo_what_submit]https://github.com/MidnattLantern/rock_paper_what/blob/main/readme_images/features_demostration/demo_what_submit.png?raw=true

- The submit button will appear ghosted and cannot be clicked :
![demo_disabled.png]https://github.com/MidnattLantern/rock_paper_what/blob/main/readme_images/features_demostration/demo_disabled.png?raw=true

- The answer for the alias emoji in gamemode “What?” is revealed at this spot. In this case, it's Paper disguised as an alien, another emoji will appear for each match :
![demo_what_reveal.png]https://github.com/MidnattLantern/rock_paper_what/blob/main/readme_images/features_demostration/demo_what_reveal.png?raw=true

- The visitor can find links to the developer's socials in the footer :
![demo_footer.png]https://github.com/MidnattLantern/rock_paper_what/blob/main/readme_images/features_demostration/demo_footer.png?raw=true

Future features:
------
- For gamemode 'What?', the emoji alias the player need to identify could exclude rock, paper, or scissors.
- For gamemode 'What?', The game board will only have one original, instad of a chance of two or more of the original rock, paper, or scissors.
- For gamemode 'What?', Currently on the card layout, rock is always at top, paper at the middle, and scissors at bottom. This setup could be shuffled to prevent predictability.
- For gamemode 'What?', ther could be a game of ten matches. At the end, a scoreboard could show up to reveal how the player did on all matches.
