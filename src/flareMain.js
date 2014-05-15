var gameState = 1; //should be 1, to go to game play : 4

var ALLTILES = new AllTiles();
var ENEMYPATH = new EnemyPathList();

var SOUNDS;

var mainGuy;
var entityManager;
var thisLevel;
var lastLevel;
var flagFinalLevel = false;
var storymode = true;

var fadeTimer = 0;
var fadeDuration = 30;
var flagLampEffect = false;
var flagTorchlightEffect = false;
var effectR = 0;

//globals for sprites
var loadSpriteP;
 var loadSpriteMiles;
 //loadSpriteMiles = null;
var loadSpriteTMunge;
var loadSpriteMouse;

var loadImg; //load screen image (splash/team logo)

//behavior globals
MOVEB = new MoveBehavior();
CHASEB = new ChaseBehavior();
REACTB = new ReactBehavior();

function resizeScreen() {
    //thanks to Gopherwood studios on html5rocks.com on how to do this
    var screen = document.getElementById('gameScreen');
    var gameAspectRatio = 5/3;
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    var windowAspectRatio = newWidth/newHeight;
    
    //adjust for windows not at the right aspect ratio:
    if (windowAspectRatio > gameAspectRatio) {
        newWidth = newHeight * gameAspectRatio;
        screen.style.height = newHeight + 'px';
        screen.style.width = newWidth + 'px';
    } else { 
        newHeight = newWidth / gameAspectRatio;
        screen.style.width = newWidth + 'px';
        screen.style.height = newHeight + 'px';
    }
    
    //center the new screen:
    screen.style.marginTop = (-newHeight / 2) + 'px';
    screen.style.marginLeft = (-newWidth / 2) + 'px';
    
    //adjust canvas sizes
    var worldC = document.getElementById('world');
    worldC.width = newWidth*.85;
    worldC.height = newHeight;
    var darkC = document.getElementById('dark');
    darkC.width = newWidth*.85;
    darkC.height = newHeight;
    var uiC = document.getElementById('ui');
    uiC.width = newWidth*.15;
    uiC.height = newHeight;
    
    //set the global width and height:
    GAME_WIDTH = newWidth;
    GAME_HEIGHT = newHeight;
    //set the unit size in pixels
    //assuming one unit will be one tiles width
    //6.6% is ~15 tiles
    var oldUnit = MEASURE_UNIT;
    MEASURE_UNIT = Math.floor(newWidth * .054);
}

function loadAssets() {
	// just have to list everything like so
    // when we put this on a website, we can simplify this with PHP
	loadImg = new Image();
	loadImg.src = "assets/loading.png";
	
    var images = new Array();
    var imgNumber = 36;
    for (var i = 0; i < imgNumber; i++) {
        images[i] = new Image();
    }
    images[0].src = "assets/player/Walking.png";
    images[1].src = "assets/enemies/miles_test_sheet.png";
    images[2].src = "assets/tiles/errorTile.png";
    images[3].src = "assets/tiles/lamp_castle_1.png";
    images[4].src = "assets/tiles/lamp_castle_2.png";
    images[5].src = "assets/tiles/block_castle_1.png";
    images[6].src = "assets/tiles/floor_castle_1.png";
    images[7].src = "assets/tiles/floor_castle_2.png";
    images[8].src = "assets/tiles/floor_castle_3.png";
    images[9].src = "assets/tiles/wall_castle_1.png";
    images[10].src = "assets/tiles/wall_castle_2.png";
    images[11].src = "assets/tiles/wall_castle_3.png";
    images[12].src = "assets/tiles/wall_castle_4.png";
    images[13].src = "assets/tiles/wall_castle_5.png";
    images[14].src = "assets/tiles/wall_castle_6.png";
    images[15].src = "assets/tiles/wall_castle_7.png";
    images[16].src = "assets/tiles/wall_castle_8.png";
	images[17].src = "assets/tiles/block_castle_2.png";
	images[18].src = "assets/tiles/block_castle_3.png";
	images[19].src = "assets/tiles/block_castle_4.png";
	images[20].src = "assets/tiles/block_castle_5.png";
	images[21].src = "assets/tiles/block_castle_6.png";
	images[22].src = "assets/tiles/block_castle_7.png";
	images[23].src = "assets/tiles/block_castle_8.png";
	images[24].src = "assets/tiles/block_castle_9.png";
	images[25].src = "assets/loading.png";
	images[26].src = "assets/ui/heart_sheet.png";
	images[27].src = "assets/ui/light_sheet.png";
	images[28].src = "assets/tiles/door_castle_1.png";
	images[29].src = "assets/tiles/door_castle_2.png";
	images[30].src = "assets/tiles/door_castle_3.png";
	images[31].src = "assets/tiles/door_castle_4.png";
	images[32].src = "assets/tiles/door_castle_5.png";
	images[33].src = "assets/tiles/door_castle_6.png";
	images[34].src = "assets/tiles/door_castle_7.png";
	images[35].src = "assets/tiles/door_castle_8.png";
	
	loadSpriteP =  new SpriteMap('assets/player/Walking.png',//image
			{ //anim sequences
				idle: {startRow: 0, startCol: 0, endRow: 0, endCol: 0},
				walkDown: {startRow: 0, startCol: 0, endRow: 0, endCol: 3},
				walkLeft: {startRow: 3, startCol: 0, endRow: 3, endCol: 3},
				walkRight: {startRow: 1, startCol: 0, endRow: 1, endCol: 3},
				walkUp: {startRow: 2, startCol: 0, endRow: 2, endCol: 3}
			}, { //options
				frameW: 64, // Width of each frame of the animation in pixels
				frameH: 64, // Height of each frame of the animation in pixels
				projectedW: MEASURE_UNIT, // Displayed width
				projectedH: MEASURE_UNIT, // Displayed height 
				interval: 150, // Switch frames every xxx ms
				useTimer: false, // Rely on requestAnimFrame to update frames instead of setInterval
				postInitCallback: function() {
					//loadSpriteP.use('idle');//start the idle anim
					//when/where you want to switch anim sequences, use sprite.use(stringAnimName);
				}
	});
	scaleLight = 1;
	SpriteNoOil = new Sprite("assets/New light filters/LightOverlay_NoOil.png",
		{
			frameW: 128,
			frameH: 128,
			projectedW: MEASURE_UNIT*2,
			projectedH: MEASURE_UNIT*2, 
			interval: 150,
			postInitCallback: function() {
				SpriteNoOil.startLoop();
			}
		}
	);
	SpriteLanternUP = new Sprite("assets/New light filters/LightOverlay_3.png",
		{
			frameW: 320,
			frameH: 384,
			projectedW: MEASURE_UNIT*5*scaleLight,
			projectedH: MEASURE_UNIT*6*scaleLight, 
			interval: 150,
			postInitCallback: function() {
				SpriteLanternUP.startLoop();
			}
		}
	);
	SpriteLanternRIGHT = new Sprite("assets/New light filters/LightOverlay_2.png",
		{
			frameW: 384,
			frameH: 320,
			projectedW: MEASURE_UNIT*6*scaleLight,
			projectedH: MEASURE_UNIT*5*scaleLight, 
			interval: 150,
			postInitCallback: function() {
				SpriteLanternRIGHT.startLoop();
			}
		}
	);
	SpriteLanternDOWN = new Sprite("assets/New light filters/LightOverlay_1.png",
		{
			frameW: 320,
			frameH: 384,
			projectedW: MEASURE_UNIT*5*scaleLight,
			projectedH: MEASURE_UNIT*6*scaleLight, 
			interval: 150,
			postInitCallback: function() {
				SpriteLanternDOWN.startLoop();
			}
		}
	);
	SpriteLanternLEFT = new Sprite("assets/New light filters/LightOverlay_4.png",
		{
			frameW: 384,
			frameH: 320,
			projectedW: MEASURE_UNIT*6*scaleLight,
			projectedH: MEASURE_UNIT*5*scaleLight, 
			interval: 150,
			postInitCallback: function() {
				SpriteLanternLEFT.startLoop();
			}
		}
	);
	SpriteDoorOverN = new Sprite("assets/New light filters/LightOverlay_LitDoor_1.png", 
		{
			frameW: 192,
			frameH: 192,
			projectedW: MEASURE_UNIT*2,
			projectedH: MEASURE_UNIT*2, 
			interval: 150,
			postInitCallback: function() {
				SpriteDoorOverN.startLoop();
			}
		}
	);
	SpriteDoorOverE = new Sprite("assets/New light filters/LightOverlay_LitDoor_2.png", 
		{
			frameW: 192,
			frameH: 192,
			projectedW: MEASURE_UNIT*2,
			projectedH: MEASURE_UNIT*2, 
			interval: 150,
			postInitCallback: function() {
				SpriteDoorOverE.startLoop();
			}
		}
	);
	SpriteDoorOverS = new Sprite("assets/New light filters/LightOverlay_LitDoor_3.png", 
		{
			frameW: 192,
			frameH: 192,
			projectedW: MEASURE_UNIT*2,
			projectedH: MEASURE_UNIT*2, 
			interval: 150,
			postInitCallback: function() {
				SpriteDoorOverS.startLoop();
			}
		}
	);
	SpriteDoorOverW = new Sprite("assets/New light filters/LightOverlay_LitDoor_4.png", 
		{
			frameW: 192,
			frameH: 192,
			projectedW: MEASURE_UNIT*2,
			projectedH: MEASURE_UNIT*2, 
			interval: 150,
			postInitCallback: function() {
				SpriteDoorOverW.startLoop();
			}
		}
	);
	loadSpriteMiles = new SpriteMap("assets/enemies/miles_test_sheet.png",
		{
			idle: {startRow: 0, startCol: 0, endRow: 0, endCol: 1},
			death: {startRow: 0, startCol: 2, endRow: 0, endCol: 3},
			// added this
			attack:{startRow: 1, startCol: 0, endRow: 1, endCol: 0}
		},
		{
			frameW: 128, // Width of each frame of the animation in pixels
			frameH: 128, // Height of each frame of the animation in pixels
			projectedW: MEASURE_UNIT, // Displayed width
			projectedH: MEASURE_UNIT, // Displayed height 
			interval: 150, // Switch frames every xxx ms
			useTimer: false, // Rely on requestAnimFrame to update frames instead of setInterval
			postInitCallback: function() {
				loadSpriteMiles.start('idle');
			}
		}
	);
	loadSpriteTMunge = new SpriteMap("assets/enemies/munge_idle_sheet.png",
		{
			idle: {startRow: 0, startCol: 0, endRow: 0, endCol: 17},
			death: {startRow: 1, startCol: 0, endRow: 1, endCol: 17}
		},
		{
			frameW: 64, // Width of each frame of the animation in pixels
			frameH: 64, // Height of each frame of the animation in pixels
			projectedW: MEASURE_UNIT, // Displayed width
			projectedH: MEASURE_UNIT, // Displayed height 
			interval: 150, // Switch frames every xxx ms
			useTimer: false, // Rely on requestAnimFrame to update frames instead of setInterval
			postInitCallback: function() {
				loadSpriteTMunge.start('idle');
			}
		}
	);
	loadSpriteMouse = new SpriteMap("assets/critters/mouse_spritesheet.png",
		{ //anim sequences
			walkDown: {startRow: 0, startCol: 0, endRow: 0, endCol: 1},
			walkUp: {startRow: 0, startCol: 2, endRow: 0, endCol: 3},
			walkRight: {startRow: 1, startCol: 0, endRow: 1, endCol: 1},
			walkLeft: {startRow: 1, startCol: 2, endRow: 1, endCol: 3}
		},
		{ //options
			frameW: 32, // Width of each frame of the animation in pixels
			frameH: 32, // Height of each frame of the animation in pixels
			projectedW: MEASURE_UNIT, // Displayed width
			projectedH: MEASURE_UNIT, // Displayed height 
			interval: 150, // Switch frames every xxx ms
			useTimer: false, // Rely on requestAnimFrame to update frames instead of setInterval
			postInitCallback: function() {}
		}
	);
	lsSprite = new Sprite("assets/LightSource_Spreadsheet.png",
		{
			frameW: 64,
			frameH: 64,
			projectedW: MEASURE_UNIT,
			projectedH: MEASURE_UNIT, 
			interval: 150,
			postInitCallback: function() {
				lsSprite.startLoop();
			}
		}
	);
	torchSprite = new Sprite("assets/Torch_Spreadsheet.png", 
		{
			frameW: 64,
			frameH: 64,
			projectedW: MEASURE_UNIT,
			projectedH: MEASURE_UNIT, 
			interval: 150,
			postInitCallback: function() {
				torchSprite.startLoop();
			}
		}
	);
	
	//ui sprites:
	UIlight = new SpriteMap('assets/ui/light_sheet.png',//image
			{ //anim sequences
				full: {startRow: 0, startCol: 0, endRow: 0, endCol: 0},
				first_use: {startRow: 0, startCol: 1, endRow: 0, endCol: 1},
				second_use: {startRow: 0, startCol: 2, endRow: 0, endCol: 2},
				third_use: {startRow: 0, startCol: 3, endRow: 0, endCol: 3},
				fourth_use: {startRow: 0, startCol: 4, endRow: 0, endCol: 4},
				fifth_use: {startRow: 0, startCol: 5, endRow: 0, endCol: 5},
				empty: {startRow: 0, startCol: 6, endRow: 0, endCol: 6}
			}, { //options
				frameW: 128, // Width of each frame of the animation in pixels
				frameH: 256, // Height of each frame of the animation in pixels
				projectedW: 1024, // Displayed width
				projectedH: 256, // Displayed height 
				interval: 150, // Switch frames every xxx ms
				useTimer: true, // Rely on requestAnimFrame to update frames instead of setInterval
				postInitCallback: function() {
					UIlight.start('full');//start the idle anim
					//when/where you want to switch anim sequences, use sprite.use(stringAnimName);
				}
	});
	UIhealth = new SpriteMap('assets/ui/heart_sheet.png',//image
			{ //anim sequences
				full: {startRow: 0, startCol: 0, endRow: 0, endCol: 0},
				one: {startRow: 0, startCol: 1, endRow: 0, endCol: 1},
				two: {startRow: 0, startCol: 2, endRow: 0, endCol: 2},
				three: {startRow: 0, startCol: 3, endRow: 0, endCol: 3},
				four: {startRow: 0, startCol: 4, endRow: 0, endCol: 4},
				five: {startRow: 0, startCol: 5, endRow: 0, endCol: 5},
				empty: {startRow: 0, startCol: 6, endRow: 0, endCol: 6}
			}, { //options
				frameW: 128, // Width of each frame of the animation in pixels
				frameH: 256, // Height of each frame of the animation in pixels
				projectedW: 1024, // Displayed width
				projectedH: 256, // Displayed height 
				interval: 150, // Switch frames every xxx ms
				useTimer: true, // Rely on requestAnimFrame to update frames instead of setInterval
				postInitCallback: function() {
					UIhealth.start('full');//start the idle anim
					//when/where you want to switch anim sequences, use sprite.use(stringAnimName);
				}
	});
	
	createButtons();
}

function initGame() {
	//set up sound manager
	soundManager.setup({
        url: 'src/swf/',
		debugMode: false,
        onready: function () {
		//when soundmanager is set up, create sounds
			//all sounds accessible through SOUNDS
			SOUNDS = new Soundloader();
        }
    });

    //create the entity manger
    entityManager = new EntityManager();
    
    //create a player instance
    mainGuy =  new Player();
    entityManager.addEntity(mainGuy);
    
    //generate the level
    thisLevel = new Level(10, 1);
    levelBox = new levelBarrier();
    
    //add current enemies to manager
    for (var i = 0; i<thisLevel.currentRoom.enemies.length; i++)
    {
		entityManager.addEntity(thisLevel.currentRoom.enemies[i]);
    }
    
    //initialize collision detections
    collisionDetection = new Collisions(); 

	//----------- show collision boxes (for debugging) ------------
	debugDraw = new b2DebugDraw();
	debugDraw.SetSprite(document.getElementById("world").getContext("2d"));
	debugDraw.SetDrawScale(30.0);
	debugDraw.SetFillAlpha(0.5);
	debugDraw.SetLineThickness(1.0);
	debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
	collisionWorld.SetDebugDraw(debugDraw);    
	//----------- show collision boxes (for debugging) ------------    
	
	// initialize UI counters
	lampsLit = 0;
	levelsTraversed = 1;
	
	//init measure unit dependant variables
	effectR = MEASURE_UNIT *.5;
}

function drawFade() {
	// Fade to black immediately.
	//ctxDark.clearRect(0, 0, GAME_WIDTH*.85, GAME_HEIGHT);
	//opacity = 1.0;
	//ctxDark.globalAlpha = opacity;
	//ctxDark.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	
	
	// Smooth fade to black
	var opacity = fadeTimer/fadeDuration;
	
	ctxDark.globalAlpha = opacity;
	ctxDark.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	
	fadeTimer++;
	
	if (fadeTimer == 30)
	{
	    fadeTimer = 0;
	}
	
	//console.log(opacity);
	
}

function draw() {
    window.requestAnimationFrame(draw);
	if (gameState == 1) //splash
	{
		setTimeout(function() {
			gameState = 2;
			seeMainMenuButtons(true);
		}, 2000); //after xxx seconds, advances to the game
		drawFullScreenImage(loadImg);

	} else if (gameState == 2) //menu
	{
		mainMenuDraw();
	} else if (gameState == 3) //cutscene
	{
	
	} else if (gameState == 4) //game
	{
		gameDraw(); 
		UIDraw();
	} else if (gameState == 5) //death
	{
		drawFullScreenImage(gameOver);
	} else if (gameState == 6) // paused
	{
		pauseDraw();
	}
	else if (gameState == 7) //fade
	{
		var fadeDurationInMillis = 500;
		
		setTimeout(function(){
			gameState = 4;
		}, fadeDurationInMillis); //after 0.5 seconds, fade stops and game resumes
		drawFade();
	}
}

//main update loop, called at regular intervals
function gameDraw() {
    //draw each canvas one at a time
    //don't forget to clear the canvas before drawing the next frame
    ctxWorld.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	ctxDark.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	
	// During each gameDraw, check if the player has died
	if (mainGuy.hp <= 0) { // Player is dead, change gameState
		gameState = 5;
	}
    
	//draw room
	thisLevel.currentRoom.draw();
	
	//for debugging collisions
	//collisionWorld.DrawDebugData();

	//only draw if not lit
 ///*	
	if (!thisLevel.currentRoom.isLit) {
		ctxDark.globalAlpha = 0.90;
			
		  // // * COMMENT FOR DEBUGGIN
		ctxDark.globalCompositeOperation = 'source-over';
		// Draw the field of darkness.
		ctxDark.fillStyle = 'black';
		ctxDark.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
			
		ctxDark.globalAlpha = 1;
		ctxDark.fillRect(MEASURE_UNIT, MEASURE_UNIT, MEASURE_UNIT*13, MEASURE_UNIT*9);
		
		// Draw the white arc to represent the light from the character's lantern.
		//LIGHT MOVED TO Player.js!
	}
//*/	
	if (flagLampEffect) {
		lightlampEffect(thisLevel.currentRoom.lamp.posX,thisLevel.currentRoom.lamp.posY, effectR);
		//console.log(effectR);
		effectR += MEASURE_UNIT *.5;
	}
	if (flagTorchlightEffect) {
		lightTorchEffect(effectR);
		effectR += MEASURE_UNIT*.5;
	}
	//draw entities, including the player
	entityManager.drawAllEntities();
	thisLevel.currentRoom.drawOverlays();
	
	collisionWorld.Step((0),0,0);
	
	collisionDetection.collisionContact();
	
	collisionWorld.ClearForces();
	
	//This part below has been moved to Collisions.js
	//also when the lights come on, the enemies in the current room need to be removed:
	//entityManager.clearEnemies();
	
	//}
	
	if (controls.isDown(controls.ESC) && !paused) {
		paused = true;
	}
	if (paused) {
		gameState = 6;
	}
}

function initDrawUpdate() {
    //size the window:
    resizeScreen();
	
    //set up contexts:
    ctxWorld = document.getElementById('world').getContext('2d');
    ctxDark = document.getElementById('dark').getContext('2d');
    ctxUI = document.getElementById('ui').getContext('2d');
	
	//physics:
    collisionWorld = new b2World( new b2Vec2(0,0), true);
    
    //load images
    loadAssets();
    
    //set up gameplay elements
    initGame();
    
    //return setInterval(function(){draw()}, 30);//ms between updates
    //more efficient version using requestAnimationFrame:

	draw();
}


//-----------------------------------------------


window.addEventListener("load", initDrawUpdate, false);

// for the movement control
window.addEventListener('keyup', function(event) { controls.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { controls.onKeydown(event); }, false);