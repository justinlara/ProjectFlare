function createButtons() {
	// Create variable for the gameScreen div
	var topCanvas = document.getElementById('gameScreen');

	// Pause buttons
	var pauseResume = document.createElement('div');
	pauseResume.id = 'resume';
	pauseResume.innerHTML = "<img src='assets/ui/pauseMenu/resume.png' width='100%' height='100%' />";
	pauseResume.setAttribute('style', "width: " + MEASURE_UNIT * 2.5 + "px; height: " + MEASURE_UNIT * 2.5 + "px; left: " + ((GAME_WIDTH * .18) + (MEASURE_UNIT * 2.8)) + "px; top: " + GAME_HEIGHT * .46 + "px; position: absolute; z-index: 5;");
	topCanvas.appendChild(pauseResume);
	pauseResume.style.display = 'none';
	pauseResume.addEventListener("click", resumeHandler, false);
	
	var pauseRestart = document.createElement('div');
	pauseRestart.id = 'restart';
	pauseRestart.innerHTML = "<img src='assets/ui/pauseMenu/restart.png' width='100%' height='100%' />";
	pauseRestart.setAttribute('style', "width: " + MEASURE_UNIT * 2.5 + "px; height: " + MEASURE_UNIT * 2.5 + "px; left: " + ((GAME_WIDTH * .18) + (MEASURE_UNIT * 5.7)) + "px; top: " + GAME_HEIGHT * .46 + "px; position: absolute; z-index: 5;");
	topCanvas.appendChild(pauseRestart);
	pauseRestart.style.display = 'none';
	pauseRestart.addEventListener("click", restartHandler, false);
	
	var pauseQuit = document.createElement('div');
	pauseQuit.id = 'quit';
	pauseQuit.innerHTML = "<img src='assets/ui/pauseMenu/quit.png' width='100%' height='100%' />";
	pauseQuit.setAttribute('style', "width: " + MEASURE_UNIT * 2.5 + "px; height: " + MEASURE_UNIT * 2.5 + "px; left: " + ((GAME_WIDTH * .18) + (MEASURE_UNIT * 8.6)) + "px; top: " + GAME_HEIGHT * .46 + "px; position: absolute; z-index: 5;");
	topCanvas.appendChild(pauseQuit);
	pauseQuit.style.display = 'none';
	pauseQuit.addEventListener("click", quitHandler, false);
	
	// main menu buttons
	var mainNewGame = document.createElement('div');
	mainNewGame.id = 'newGame';
	mainNewGame.setAttribute('style', "width: " + MEASURE_UNIT * 3 + "px; height: " + MEASURE_UNIT * 1.5 + "px; left: " + ((GAME_WIDTH * .38) + (MEASURE_UNIT * 8.6)) + "px; top: " + GAME_HEIGHT *  .62 + "px; position: absolute; z-index: 5; background-image:url(assets/ui/mainMenu/main_story_button.png); background-size: 100% 400%; background-position: 0% 0%");
	topCanvas.appendChild(mainNewGame);
	mainNewGame.style.display = 'none';
	mainNewGame.setAttribute('onmouseover', "this.style.backgroundPosition='0% -100%'");
	mainNewGame.setAttribute('onmouseout', "this.style.backgroundPosition='0% 0%'");
	mainNewGame.setAttribute('onmousedown', "this.style.backgroundPosition='0% -200%%'");
	mainNewGame.setAttribute('onmouseup', "this.style.backgroundPosition='0% -100%'");
	mainNewGame.addEventListener("click", newGameHandler, false);
	
	var mainCredits = document.createElement('div');
	mainCredits.id = 'mainCredits';
	mainCredits.setAttribute('style', "width: " + MEASURE_UNIT * 3 + "px; height: " + MEASURE_UNIT * 1.5 + "px; left: " + ((GAME_WIDTH * .38) + (MEASURE_UNIT * 8.6)) + "px; top: " + GAME_HEIGHT *  .75 + "px; position: absolute; z-index: 5; background-image:url(assets/ui/mainMenu/main_credits_button.png); background-size: 100% 400%; background-position: 0% 0%");
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

function newGameHandler() {
	seeMainMenuButtons(false);
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
}

function gameOverReplayHandler() {
	seeGameOverButtons(false);
	initGame();
	gameState = 4;
}

function gameOverQuitHandler() {
	seeGameOverButtons(false);
	seeMainMenuButtons(true);
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
		document.getElementById('newGame').style.display = "block";
		document.getElementById('mainCredits').style.display = "block";
	} else {
		document.getElementById('newGame').style.display = "none";
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