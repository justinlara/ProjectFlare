function createButtons() {
	// Create variable for the gameScreen div
	var topCanvas = document.getElementById('gameScreen');

	// Pause buttons
	var pauseResume = document.createElement('div');
	pauseResume.id = 'resume';
	pauseResume.setAttribute('style', "width: " + MEASURE_UNIT * 2.5 + "px; height: " + MEASURE_UNIT * 2.5 + "px; left: " + ((GAME_WIDTH * .18) + (MEASURE_UNIT * 2.8)) + "px; top: " + GAME_HEIGHT * .46 + "px; position: absolute; z-index: 5; background-image:url(assets/ui/pauseMenu/resume_spritesheet.png); background-size: 400% 200%; background-position: 0% 0%");
	topCanvas.appendChild(pauseResume);
	pauseResume.style.display = 'none';
	pauseResume.setAttribute('onmouseover', "this.style.backgroundPosition='-100% 0%'");
	pauseResume.setAttribute('onmouseout', "this.style.backgroundPosition='0% 0%'");
	pauseResume.setAttribute('onmousedown', "this.style.backgroundPosition='-200% -100%'");
	pauseResume.setAttribute('onmouseup', "this.style.backgroundPosition='-100% 0%'");
	pauseResume.addEventListener("click", resumeHandler, false);
	
	var pauseRestart = document.createElement('div');
	pauseRestart.id = 'restart';
	pauseRestart.setAttribute('style', "width: " + MEASURE_UNIT * 2.5 + "px; height: " + MEASURE_UNIT * 2.5 + "px; left: " + ((GAME_WIDTH * .18) + (MEASURE_UNIT * 5.7)) + "px; top: " + GAME_HEIGHT * .46 + "px; position: absolute; z-index: 5; background-image:url(assets/ui/pauseMenu/restart_spritesheet.png); background-size: 400% 200%; background-position: 0% 0%");
	topCanvas.appendChild(pauseRestart);
	pauseRestart.style.display = 'none';
	pauseRestart.setAttribute('onmouseover', "this.style.backgroundPosition='-100% 0%'");
	pauseRestart.setAttribute('onmouseout', "this.style.backgroundPosition='0% 0%'");
	pauseRestart.setAttribute('onmousedown', "this.style.backgroundPosition='-200% -100%'");
	pauseRestart.setAttribute('onmouseup', "this.style.backgroundPosition='-100% 0%'");
	pauseRestart.addEventListener("click", restartHandler, false);
	
	var pauseQuit = document.createElement('div');
	pauseQuit.id = 'quit';
	pauseQuit.setAttribute('style', "width: " + MEASURE_UNIT * 2.5 + "px; height: " + MEASURE_UNIT * 2.5 + "px; left: " + ((GAME_WIDTH * .18) + (MEASURE_UNIT * 8.6)) + "px; top: " + GAME_HEIGHT * .46 + "px; position: absolute; z-index: 5; background-image:url(assets/ui/pauseMenu/quit_spritesheet.png); background-size: 400% 200%; background-position: 0% 0%");
	topCanvas.appendChild(pauseQuit);
	pauseQuit.style.display = 'none';
	pauseQuit.setAttribute('onmouseover', "this.style.backgroundPosition='-100% 0%'");
	pauseQuit.setAttribute('onmouseout', "this.style.backgroundPosition='0% 0%'");
	pauseQuit.setAttribute('onmousedown', "this.style.backgroundPosition='-200% -100%'");
	pauseQuit.setAttribute('onmouseup', "this.style.backgroundPosition='-100% 0%'");
	pauseQuit.addEventListener("click", quitHandler, false);
	
	// main menu buttons
	var mainStory = document.createElement('div');
	mainStory.id = 'mainStory';
    mainStory.setAttribute('style', "width: " + MEASURE_UNIT * 3 + "px; height: " + MEASURE_UNIT * 1.5 + "px; left: " + GAME_WIDTH * .78 + "px; top: " + GAME_HEIGHT *  .47 + "px; position: absolute; z-index: 5; background-image:url(assets/ui/mainMenu/main_story_button.png); background-size: 100% 400%; background-position: 0% 0%");
	topCanvas.appendChild(mainStory);
	mainStory.style.display = 'none';
	mainStory.setAttribute('onmouseover', "this.style.backgroundPosition='0% -100%'");
	mainStory.setAttribute('onmouseout', "this.style.backgroundPosition='0% 0%'");
	mainStory.setAttribute('onmousedown', "this.style.backgroundPosition='0% -200%'");
	mainStory.setAttribute('onmouseup', "this.style.backgroundPosition='0% -100%'");
	mainStory.addEventListener("click", mainStoryHandler, false);
	
	var mainEndless = document.createElement('div');
	mainEndless.id = 'mainEndless';
	mainEndless.setAttribute('style', "width: " + MEASURE_UNIT * 3 + "px; height: " + MEASURE_UNIT * 1.5 + "px; left: " + GAME_WIDTH * .78 + "px; top: " + GAME_HEIGHT *  .6 + "px; position: absolute; z-index: 5; background-image:url(assets/ui/mainMenu/main_endless_button.png); background-size: 100% 400%; background-position: 0% 0%");
	topCanvas.appendChild(mainEndless);
	mainEndless.style.display = 'none';
	mainEndless.setAttribute('onmouseover', "this.style.backgroundPosition='0% -100%'");
	mainEndless.setAttribute('onmouseout', "this.style.backgroundPosition='0% 0%'");
	mainEndless.setAttribute('onmousedown', "this.style.backgroundPosition='0% -200%'");
	mainEndless.setAttribute('onmouseup', "this.style.backgroundPosition='0% -100%'");
	mainEndless.addEventListener("click", mainEndlessHandler, false);
	
	var mainCredits = document.createElement('div');
	mainCredits.id = 'mainCredits';
	mainCredits.setAttribute('style', "width: " + MEASURE_UNIT * 3 + "px; height: " + MEASURE_UNIT * 1.5 + "px; left: " + GAME_WIDTH * .78 + "px; top: " + GAME_HEIGHT *  .75 + "px; position: absolute; z-index: 5; background-image:url(assets/ui/mainMenu/main_credits_button.png); background-size: 100% 400%; background-position: 0% 0%");
	topCanvas.appendChild(mainCredits);
	mainCredits.style.display = 'none';
	mainCredits.setAttribute('onmouseover', "this.style.backgroundPosition='0% -100%'");
	mainCredits.setAttribute('onmouseout', "this.style.backgroundPosition='0% 0%'");
	mainCredits.setAttribute('onmousedown', "this.style.backgroundPosition='0% -200%'");
	mainCredits.setAttribute('onmouseup', "this.style.backgroundPosition='0% -100%'");
	mainCredits.addEventListener("click", mainCreditsHandler, false);
	
	// credits screen buttons
	var creditsBack = document.createElement('div');
	creditsBack.id = 'creditsBack';
	creditsBack.setAttribute('style', "width: " + MEASURE_UNIT * 3 + "px; height: " + MEASURE_UNIT * 1.5 + "px; left: " + GAME_WIDTH * .80 + "px; top: " + GAME_HEIGHT *  .82 + "px; position: absolute; z-index: 5; background-image:url(assets/ui/credits/credits_back_button.png); background-size: 100% 400%; background-position: 0% 0%");
	topCanvas.appendChild(creditsBack);
	creditsBack.style.display = 'none';
	creditsBack.setAttribute('onmouseover', "this.style.backgroundPosition='0% -100%'");
	creditsBack.setAttribute('onmouseout', "this.style.backgroundPosition='0% 0%'");
	creditsBack.setAttribute('onmousedown', "this.style.backgroundPosition='0% -200%'");
	creditsBack.setAttribute('onmouseup', "this.style.backgroundPosition='0% -100%'");
	creditsBack.addEventListener("click", creditsBackHandler, false);
	
	
	// game over buttons
	var gameOverReplay = document.createElement('div');
	gameOverReplay.id = 'gameOverReplay';
	gameOverReplay.setAttribute('style', "width: " + MEASURE_UNIT * 3 + "px; height: " + MEASURE_UNIT * 1.5 + "px; left: " + GAME_WIDTH * .55 + "px; top: " + GAME_HEIGHT *  .82 + "px; position: absolute; z-index: 5; background-image:url(assets/ui/endscreen_replay_button.png); background-size: 100% 400%; background-position: 0% 0%");
	topCanvas.appendChild(gameOverReplay);
	gameOverReplay.style.display = 'none';
	gameOverReplay.setAttribute('onmouseover', "this.style.backgroundPosition='0% -100%'");
	gameOverReplay.setAttribute('onmouseout', "this.style.backgroundPosition='0% 0%'");
	gameOverReplay.setAttribute('onmousedown', "this.style.backgroundPosition='0% -200%'");
	gameOverReplay.setAttribute('onmouseup', "this.style.backgroundPosition='0% -100%'");
	gameOverReplay.addEventListener("click", gameOverReplayHandler, false);

	var gameOverQuit = document.createElement('div');
	gameOverQuit.id = 'gameOverQuit';
	gameOverQuit.setAttribute('style', "width: " + MEASURE_UNIT * 3 + "px; height: " + MEASURE_UNIT * 1.5 + "px; left: " + GAME_WIDTH * .80 + "px; top: " + GAME_HEIGHT *  .82 + "px; position: absolute; z-index: 5; background-image:url(assets/ui/endscreen_quit_button.png); background-size: 100% 400%; background-position: 0% 0%");
	topCanvas.appendChild(gameOverQuit);
	gameOverQuit.style.display = 'none';
	gameOverQuit.setAttribute('onmouseover', "this.style.backgroundPosition='0% -100%'");
	gameOverQuit.setAttribute('onmouseout', "this.style.backgroundPosition='0% 0%'");
	gameOverQuit.setAttribute('onmousedown', "this.style.backgroundPosition='0% -200%'");
	gameOverQuit.setAttribute('onmouseup', "this.style.backgroundPosition='0% -100%'");
	gameOverQuit.addEventListener("click", gameOverQuitHandler, false);	
	
	
	//mainNewGame.addEventListener("click", newGameHandler, false);
	
	//ctxDark.drawImage(resumeButton, GAME_WIDTH * .18, GAME_HEIGHT * .46, MEASURE_UNIT * 2.5, MEASURE_UNIT * 2.5);
	//ctxDark.drawImage(restartButton, (GAME_WIDTH * .18) + (MEASURE_UNIT * 2.9), GAME_HEIGHT * .46, MEASURE_UNIT * 2.5, MEASURE_UNIT * 2.5);
	//ctxDark.drawImage(quitButton, (GAME_WIDTH * .18) + (MEASURE_UNIT * 5.8), GAME_HEIGHT * .46, MEASURE_UNIT * 2.5, MEASURE_UNIT * 2.5);
	
	//resume.drawImage(resumeButton, 0, 0, MEASURE_UNIT * 2.5, MEASURE_UNIT * 2.5); //GAME_WIDTH * .18, GAME_HEIGHT * .46
	//$('#resume').on('click', clickedd());
}

function mainStoryHandler() {
	seeMainMenuButtons(false);
	seeGameElements(true);
	storymode = true;
	initGame();
	gameState = 4;
}

function mainEndlessHandler() {
	seeMainMenuButtons(false);
	seeGameElements(true);
	storymode = false;
	initGame();
	gameState = 4;
}

function mainCreditsHandler() {
	seeMainMenuButtons(false);
	showCredits = true;
	seeCreditsButtons(true);
}

function creditsBackHandler() {
	seeCreditsButtons(false);
	showCredits = false;
	seeMainMenuButtons(true);
}

function resumeHandler() {
	paused = false;
	gameState = 4;
	
	seePauseButtons(false);
}

function restartHandler() {
	seePauseButtons(false);
	
	initGame();
}

function quitHandler() {
	paused = false;
	gameState = 2;
	seeMainMenuButtons(true);
	
	seePauseButtons(false);
	seeGameElements(false);
}

function gameOverReplayHandler() {
	seeGameOverButtons(false);
	initGame();
	gameState = 4;
}

function gameOverQuitHandler() {
	seeGameOverButtons(false);
	seeMainMenuButtons(true);
	seeGameElements(false);
	gameState = 2;
}

function seePauseButtons(buttonFlag) {
	if (buttonFlag) {
		document.getElementById('resume').style.display =  "block";
		document.getElementById('restart').style.display =  "block";
		document.getElementById('quit').style.display =  "block";
	} else {
		document.getElementById('resume').style.display =  "none";
		document.getElementById('restart').style.display =  "none";
		document.getElementById('quit').style.display =  "none";
	}
}

function seeMainMenuButtons(flag) {
	if (flag) {
		document.getElementById('mainStory').style.display = "block";
		document.getElementById('mainEndless').style.display = "block";
		document.getElementById('mainCredits').style.display = "block";
	} else {
		document.getElementById('mainStory').style.display = "none";
		document.getElementById('mainEndless').style.display = "none";
		document.getElementById('mainCredits').style.display = "none";
	}
}

function seeCreditsButtons(buttonFlag) {
	if (buttonFlag) {
		document.getElementById('creditsBack').style.display = "block";
	} else {
		document.getElementById('creditsBack').style.display = "none";
	}
}

function seeGameOverButtons(buttonFlag) {
	if (buttonFlag) {
		document.getElementById('gameOverReplay').style.display = "block";
		document.getElementById('gameOverQuit').style.display = "block";
	} else {
		document.getElementById('gameOverReplay').style.display = "none";
		document.getElementById('gameOverQuit').style.display = "none";
	}
}

function seeGameElements(buttonFlag) {
	if (buttonFlag) {
		document.getElementById('dashMeter').style.display = "block";
		document.getElementById('dashMask').style.display = "block";
	} else {
		document.getElementById('dashMeter').style.display = "none";
		document.getElementById('dashMask').style.display = "block";
	}
}