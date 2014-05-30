var lampsLit;
var levelsTraversed;

var showCredits = false;
var firstInit = true;

//UI Pole
var pole = new Image();
pole.src = "assets/ui/pole_bare.png";

// UI health
var heart = new Image();
heart.src = "assets/ui_rod_sample.png";

// UI Numbers
var UINums = new Array();
for (var i = 0; i < 10; i++) {
	UINums[i] = new Image();
	UINums[i].src = "assets/ui/" + i + ".png";
}

// Game Over
var gameOver = new Image();
gameOver.src = "assets/ui/endscreen_mock.jpg";
var complete = new Image();
complete.src = "assets/ui/credits/credits_bg.jpg";

// maxHealth = 100;
const maxHealth = 6;
const maxLight = 6;

// Pause menu
var pauseMenu = new Image();
pauseMenu.src = "assets/ui/pauseMenu/pauseMenu.png";

var resumeButton = new Image();
resumeButton.src = "assets/ui/pauseMenu/resume.png";

var restartButton = new Image();
restartButton.src = "assets/ui/pauseMenu/restart.png";

var quitButton = new Image();
quitButton.src = "assets/ui/pauseMenu/quit.png";

var paused = false;

var mainMenu = new Image();
mainMenu.src = "assets/ui/mainMenu/main_menu_bg.png";

var creditsScreen = new Image();
creditsScreen.src = "assets/ui/credits/credits_bg.jpg";

// Accepts an image and draws it over the whole screen, including UI and game
function drawFullScreenImage(im) {
	// Clear the whole screen
	ctxUI.clearRect(0, 0, GAME_WIDTH*.15, GAME_HEIGHT);
	ctxDark.clearRect(0, 0, GAME_WIDTH*.85, GAME_HEIGHT);

	// Draw image on the UI canvas, then again off the left side of the Dark canvas
	ctxUI.drawImage(im, 0, 0, GAME_WIDTH, GAME_HEIGHT);
	ctxDark.drawImage(im, -(GAME_WIDTH * 0.15), 0, GAME_WIDTH, GAME_HEIGHT);
}

function initUI() {
	//soundManager.mute();
	// Create dash UI
	if (!document.getElementById('dashMeter')) {
		var dashMeter = document.createElement('div');
		dashMeter.id = 'dashMeter';
		dashMeter.setAttribute('style', "width: " + MEASURE_UNIT * 2.1 + "px; height: " + MEASURE_UNIT * 1.5 + "px; left: " + GAME_WIDTH * 0.0145 + "px; top: " + GAME_HEIGHT * .55 + "px; position: absolute; z-index: 5; background-image: -webkit-gradient(linear, left top, right top, from(#003), to(#06f)); background-size: 100% 100%; background-repeat: no-repeat;");
		document.getElementById('gameScreen').appendChild(dashMeter);
		dashMeter.style.display = 'none';
	}
	
	if (!document.getElementById('dashMask')) {
		var dashMask = document.createElement('div');
		dashMask.id = 'dashMask';
		dashMask.setAttribute('style', "width: " + MEASURE_UNIT * 3 + "px; height: " + MEASURE_UNIT * 1.5 + "px; left: " + GAME_WIDTH * -0.0228 + "px; top: " + GAME_HEIGHT * .55 + "px; position: absolute; z-index: 7; background-image: url(assets/ui/dash_bar.png); background-size: 100% 100%;");
		document.getElementById('gameScreen').appendChild(dashMask);
		dashMask.style.display = 'none';
	}
	
	if (!document.getElementById('lampsMeter')) {
		var lampsMeter = document.createElement('div');
		lampsMeter.id = 'lampsMeter';
		//lampsMeter.setAttribute('style', "width: " + MEASURE_UNIT * 3 + "px; height: " + MEASURE_UNIT * 1.66 + "px; left: " + GAME_WIDTH * -0.02281 + "px; top: " + GAME_HEIGHT * .333 + "px; position: absolute; z-index: 5; background-image: -webkit-gradient(linear, left bottom, left top, from(#630), to(#fc4)); background-size: 100% 100%; background-repeat: no-repeat; border:1px solid white");
		lampsMeter.setAttribute('style', "width: " + MEASURE_UNIT * 3 + "px; height: " + MEASURE_UNIT * 1.66 + "px; left: " + GAME_WIDTH * -0.02281 + "px; top: " + GAME_HEIGHT * .333 + "px; position: absolute; z-index: 5; background-image: linear-gradient(transparent 100%, white 2%, #fc4, #630); background-size: 100% 100%; background-repeat: no-repeat;");
		document.getElementById('gameScreen').appendChild(lampsMeter);
		lampsMeter.style.display = 'none';
	}
	
	if (!document.getElementById('lampsMask')) {
		var lampsMask = document.createElement('div');
		lampsMask.id = 'lampsMask';
		lampsMask.setAttribute('style', "width: " + MEASURE_UNIT * 3 + "px; height: " + MEASURE_UNIT * 3 + "px; left: " + GAME_WIDTH * -0.02281 + "px; top: " + GAME_HEIGHT * .28 + "px; position: absolute; z-index: 7; background-image: url(assets/ui/lamps_bar.png); background-size: 100% 100%;");
		document.getElementById('gameScreen').appendChild(lampsMask);
		lampsMask.style.display = 'none';
	}
	
	if (!document.getElementById('floorsMask')) {
		var floorsMask = document.createElement('div');
		floorsMask.id = 'floorsMask';
		floorsMask.setAttribute('style', "width: " + MEASURE_UNIT * 3 + "px; height: " + MEASURE_UNIT * 1.5 + "px; left: " + GAME_WIDTH * -0.0228 + "px; top: " + GAME_HEIGHT * .68 + "px; position: absolute; z-index: 6; background-image: url(assets/ui/floor_bar.png); background-size: 100% 100%;");
		document.getElementById('gameScreen').appendChild(floorsMask);
		floorsMask.style.display = 'none';
	}
	
	if (!document.getElementById('healthMeter')) {
		var healthMeter = document.createElement('div');
		healthMeter.id = 'healthMeter';
		healthMeter.setAttribute('style', "width: " + MEASURE_UNIT * 1.25 + "px; height: " + MEASURE_UNIT * 2.5 + "px; left: " + GAME_WIDTH * 0.081 + "px; top: " + GAME_HEIGHT * 0.128 + "px; position: absolute; z-index: 5; background-color: #f00; background-size: 100% 100%; background-repeat: no-repeat;");
		document.getElementById('gameScreen').appendChild(healthMeter);
		healthMeter.style.display = 'none';
	}
	
	if (!document.getElementById('healthMask')) {
		var healthMask = document.createElement('div');
		healthMask.id = 'healthMask';
		healthMask.setAttribute('style', "width: " + MEASURE_UNIT * 1.25 + "px; height: " + MEASURE_UNIT * 2.5 + "px; left: " + GAME_WIDTH * 0.081 + "px; top: " + GAME_HEIGHT * 0.128 + "px; position: absolute; z-index: 6; background-image: url(assets/ui/heart_black.png); background-size: 100% 100%;");
		document.getElementById('gameScreen').appendChild(healthMask);
		healthMask.style.display = 'none';
	}
}

// Draw main menu background over both canvases.129*.1
function mainMenuDraw() {
	if (showCredits) {
		drawFullScreenImage(creditsScreen);
		seeMainMenuButtons(false);
	} else {
		drawFullScreenImage(mainMenu);
	}
}

// Draw UI on the left canvase
function UIDraw() {
	ctxUI.clearRect(0, 0, GAME_WIDTH*.15, GAME_HEIGHT);
	
	var lmeter, hmeter = '';
	var UIHeight = GAME_HEIGHT;
	var UIWidth = GAME_WIDTH * 0.15;
	ctxUI.drawImage(pole, 0, 0, UIWidth, UIHeight);// MEASURE_UNIT * 2.25, MEASURE_UNIT * 11);	
	
	// LIGHT METER
	var pLight = mainGuy.light;
	//	UIlight.draw(ctxUI, (0.129 * UIWidth), (0.048 * UIHeight), MEASURE_UNIT * 1.25, MEASURE_UNIT * 2.5);
	
	// HEALTH
	var pHealth = mainGuy.hp;
	//	UIhealth.draw(ctxUI, (0.540 * UIWidth), (0.128 * UIHeight), MEASURE_UNIT * 1.25, MEASURE_UNIT * 2.5);
	
	// COUNTERS
	var Y1 = GAME_HEIGHT * 0.38;
	var Y2 = GAME_HEIGHT * 0.742;
	var numSide = MEASURE_UNIT / 3;
	
	var singleX = GAME_WIDTH * 0.0615;
	var doubleX1 = GAME_WIDTH * 0.055;
	var doubleX2 = GAME_WIDTH * 0.068;
	var tripleX1 = GAME_WIDTH * 0.0485;
	var tripleX3 = GAME_WIDTH * 0.0745;

	if (lampsLit < 10) { // Single digit on top
		ctxUI.drawImage(UINums[lampsLit], singleX, Y1, numSide, numSide);
	} else if (lampsLit < 100) { // Double digits on top
		ctxUI.drawImage(UINums[Math.floor(lampsLit / 10)], doubleX1, Y1, numSide, numSide);
		ctxUI.drawImage(UINums[lampsLit % 10], doubleX2, Y1, numSide, numSide);
	} else { // Triple digits on top
		ctxUI.drawImage(UINums[Math.floor(lampsLit / 100)], tripleX1, Y1, numSide, numSide);
		ctxUI.drawImage(UINums[Math.floor((lampsLit % 100) / 10)], singleX, Y1, numSide, numSide);
		ctxUI.drawImage(UINums[lampsLit % 10], tripleX3, Y1, numSide, numSide);
	}
	
	if (levelsTraversed < 10) { // Single digit on the bottom
		ctxUI.drawImage(UINums[levelsTraversed], singleX, Y2, numSide, numSide);
	} else if (levelsTraversed < 100) { // Double digits on the bottom
		ctxUI.drawImage(UINums[Math.floor(levelsTraversed / 10)], doubleX1, Y2, numSide, numSide);
		ctxUI.drawImage(UINums[levelsTraversed % 10], doubleX2, Y2, numSide, numSide);
	} else { // Triple digits on the bottom
		ctxUI.drawImage(UINums[Math.floor(levelsTraversed / 100)], tripleX1, Y2, numSide, numSide);
		ctxUI.drawImage(UINums[Math.floor((levelsTraversed % 100) / 10)], singleX, Y2, numSide, numSide);
		ctxUI.drawImage(UINums[levelsTraversed % 10], tripleX3, Y2, numSide, numSide);
	}
	
	// Update dash meter
	var runPercentage = mainGuy.runMeter * 10;
	document.getElementById('dashMeter').style.backgroundSize = runPercentage + "% 100%";
	
	var lampPercentage = Math.floor((lampsLit / thisLevel.lightsTotal) * 100);
	document.getElementById('lampsMeter').style.backgroundImage = "linear-gradient(transparent " + (100 - lampPercentage) + "%, white 2%, #fc4, #630)";
	
}

function pauseDraw() {
	//draw each canvas one at a time
    //don't forget to clear the canvas before drawing the next frame
    ctxWorld.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	
	//draw room
	thisLevel.currentRoom.draw();
	
	ctxDark.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
   
	//only draw if not lit
	if (!thisLevel.currentRoom.isLit) {
		ctxDark.globalAlpha = 0.90;
			
		  // // * COMMENT FOR DEBUGGIN
		ctxDark.globalCompositeOperation = 'source-over';
		// Draw the field of darkness.
		ctxDark.fillStyle = 'black';
		ctxDark.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
		ctxDark.globalAlpha = 1;
		ctxDark.fillRect(MEASURE_UNIT, MEASURE_UNIT, MEASURE_UNIT*13, MEASURE_UNIT*9);
			
		ctxDark.globalAlpha = 0.99;
		ctxDark.fillRect(MEASURE_UNIT, MEASURE_UNIT, MEASURE_UNIT*13, MEASURE_UNIT*9);
		ctxDark.globalCompositeOperation = 'xor';//change back for lantern. may have to change the operation
		
		
		// Draw the white arc to represent the light from the character's lantern.
		//LIGHT MOVED TO Player.js!
	}
	
	entityManager.renderAllEntities();
	ctxDark.globalCompositeOperation = 'source-over';
	// Draw pause menu and buttons
	ctxDark.drawImage(pauseMenu, -MEASURE_UNIT, GAME_HEIGHT * .16, GAME_WIDTH * .9, GAME_HEIGHT * .60);
	seePauseButtons(true);
}