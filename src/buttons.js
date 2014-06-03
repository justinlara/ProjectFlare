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

	var gameMute = document.createElement('div');
	gameMute.id = 'gameMute';
	gameMute.setAttribute('style', "width: " + MEASURE_UNIT * .5 + "px; height: " + MEASURE_UNIT * .5 + "px; left: " + MEASURE_UNIT * 0.4 + "px; top: " + (GAME_HEIGHT - MEASURE_UNIT)  + "px; position: absolute; z-index: 5; background-image:url(assets/ui/mute_button.png); background-size: 400% 100%; background-position: 0% 0%");
	topCanvas.appendChild(gameMute);
	gameMute.style.display = 'none';
	gameMute.addEventListener("click", gameMuteHandler, false);
	
	var gamePause = document.createElement('div');
	gamePause.id = 'gamePause';
	gamePause.setAttribute('style', "width: " + MEASURE_UNIT * .5 + "px; height: " + MEASURE_UNIT * .5 + "px; left: " + MEASURE_UNIT * 0.9 + "px; top: " + (GAME_HEIGHT - MEASURE_UNIT)  + "px; position: absolute; z-index: 5; background-image:url(assets/ui/pause_button.png); background-size: 200% 100%; background-position: -100% 0%");
	topCanvas.appendChild(gamePause);
	gamePause.style.display = 'none';
	gamePause.addEventListener("click", gamePauseHandler, false);
	
}
function gameMuteHandler() {
	if (soundManager.muted) {
		soundManager.unmute();
		document.getElementById('gameMute').style.backgroundPosition = "0% 0%";
	} else {
		soundManager.mute();
		document.getElementById('gameMute').style.backgroundPosition = "-200% 0%";
	}
}

function gamePauseHandler() {
	if (!paused) {
		paused = true;
		gameState = 6;
	}
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
		document.getElementById('lampsMeter').style.display = "block";
		document.getElementById('lampsMask').style.display = "block";
		document.getElementById('floorsMask').style.display = "block";
		document.getElementById('healthMeter').style.display = "block";
		document.getElementById('healthMask').style.display = "block";
		document.getElementById('healthUndermask').style.display = "block";
		document.getElementById('lightMeter').style.display = "block";
		document.getElementById('lightMask').style.display = "block";
		document.getElementById('gameMute').style.display = "block";
		document.getElementById('gamePause').style.display = "block";
		
		document.getElementById('lampsCtrSingle').style.display = "block";
		document.getElementById('lampsCtrDouble1').style.display = "block";
		document.getElementById('lampsCtrDouble2').style.display = "block";
	} else {
		document.getElementById('dashMeter').style.display = "none";
		document.getElementById('dashMask').style.display = "none";
		document.getElementById('lampsMeter').style.display = "none";
		document.getElementById('lampsMask').style.display = "none";
		document.getElementById('floorsMask').style.display = "none";
		document.getElementById('healthMeter').style.display = "none";
		document.getElementById('healthMask').style.display = "none";
		document.getElementById('healthUndermask').style.display = "none";
		document.getElementById('lightMeter').style.display = "none";
		document.getElementById('lightMask').style.display = "none";
		document.getElementById('gameMute').style.display = "none";
		document.getElementById('gamePause').style.display = "none";
		
		document.getElementById('lampsCtrSingle').style.display = "none";
		document.getElementById('lampsCtrDouble1').style.display = "none";
		document.getElementById('lampsCtrDouble2').style.display = "none";
	}
}