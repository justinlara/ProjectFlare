var lampsLit;
var levelsTraversed;

var showCredits = false;

//UI Pole
var pole = new Image();
pole.src = "assets/ui/pole.png";

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

// Draw main menu background over both canvases
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
	switch(pLight)
	{	
	case 5:
	  lmeter = 'first_use';
	  break;
	case 4:
	  lmeter = 'second_use';
	  break;
	case 3:
	  lmeter = 'third_use';
	  break;
	case 2:
	  lmeter = 'fourth_use';
	  break;
	case 1:
	  lmeter = 'fifth_use';
	  break;
	case 0:
	  lmeter = 'empty';
	  break;
	default:
	  lmeter = 'full';
	}
				
	UIlight.use(lmeter);
	UIlight.draw(ctxUI, (0.129 * UIWidth), (0.048 * UIHeight), MEASURE_UNIT * 1.25, MEASURE_UNIT * 2.5);
	
// HEALTH
	var pHealth = mainGuy.hp;
	if (pHealth == 6) //100 || pHealth > 95)
		hmeter = 'full';
	else if (pHealth == 5) //95 && pHealth > 75)
		hmeter = 'one';
	else if (pHealth == 4) //75 && pHealth > 55)
		hmeter = 'two';
	else if (pHealth == 3) //55 && pHealth > 35)
		hmeter = 'three';
	else if (pHealth == 2) //35 && pHealth > 15)
		hmeter = 'four';
	else if (pHealth == 1) //15 && pHealth > 10)
		hmeter = 'five';
	else if (pHealth == 0 || pHealth < 0)
		hmeter = 'empty';
	
	UIhealth.use(hmeter);
	UIhealth.draw(ctxUI, (0.540 * UIWidth), (0.128 * UIHeight), MEASURE_UNIT * 1.25, MEASURE_UNIT * 2.5);
	
	// COUNTERS
		
	var Y1 = GAME_HEIGHT * 0.38;
	var Y2 = GAME_HEIGHT * 0.482;
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
	
	// Draw pause menu and buttons
	ctxDark.drawImage(pauseMenu, -MEASURE_UNIT, GAME_HEIGHT * .16, GAME_WIDTH * .9, GAME_HEIGHT * .60);
	seePauseButtons(true);
}