var ALLTILES = new AllTiles();
var ENEMYPATH = new EnemyPathList();
//variables for drawing lantern light
var arcStart = Math.PI*3/4;
var arcEnd = Math.PI*1/4;
var x = 0;
var y = 0;
var centerX;
var centerY;
var spriteCharName = 'assets/char.png';
var SOUNDS;

var mainGuy;
var entityManager;
var thisLevel;

var loadSpriteP;
var loadSpriteMiles;

//UI Pole
var pole = new Image();
pole.src = "assets/ui/pole.png";

// UI health
var heart = new Image();
heart.src = "assets/ui_rod_sample.png";

// Game Over
var gameOver = new Image();
gameOver.src = "assets/gameOverScreen.png";

// maxHealth = 100;
const maxHealth = 6;
const maxLight = 6;


function loadAssets() {

    // just have to list everything like so
    // when we put this on a website, we can simplify this with PHP
    var images = new Array();
    var imgNumber = 17;
    for (var i = 0; i < imgNumber; i++) {
        images[i] = new Image();
    }
    images[0].src = "assets/player/Walk_Forward.png";
    images[1].src = "assets/tiles/errorTile.png";
    images[2].src = "assets/tiles/lamp_castle_1.png";
    images[3].src = "assets/tiles/lamp_castle_2.png";
    images[4].src = "assets/enemies/miles_test_sheet.png";
    images[5].src = "assets/Miles_Enemy1.png";
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
	loadSpriteMiles = new SpriteMap("assets/enemies/miles_test_sheet.png",
		{
			idle: {startRow: 0, startCol: 0, endRow: 0, endCol: 1},
			death: {startRow: 0, startCol: 2, endRow: 0, endCol: 3}
		},
		{
			frameW: 128, // Width of each frame of the animation in pixels
			frameH: 128, // Height of each frame of the animation in pixels
			projectedW: MEASURE_UNIT, // Displayed width
			projectedH: MEASURE_UNIT, // Displayed height 
			interval: 150, // Switch frames every xxx ms
			useTimer: false, // Rely on requestAnimFrame to update frames instead of setInterval
			postInitCallback: function() {
				loadSpriteP.start('idle');
			}
		}
	);

	soundManager.setup({
        url: 'src/swf/',
        onready: function () {
		//when soundmanager is set up, create sounds
			//all sounds accessible through SOUNDS
			SOUNDS = new Soundloader();
        }
    });
	
	//behavior globals
		MOVEB = new MoveBehavior();
		CHASEB = new ChaseBehavior();
}

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
    
    //adjust player position
    /*if ('undefined' !== typeof mainGuy) {
        //new pos = currentPos/OLD_MEASURE_UNIT * NEW_MEASURE_UNIT
        mainGuy.p.pos[0] = Math.floor((mainGuy.p.pos[0]/oldUnit) * MEASURE_UNIT);
        mainGuy.p.pos[1] = Math.floor((mainGuy.p.pos[1]/oldUnit) * MEASURE_UNIT);
       // add new resized player collion 
       
       mainGuy.Resize();
        
    }


    if('undefined' !== typeof levelBox)
    {
        levelBox.resizeLevel();
        
    }
  //*/

    
    //need to adjust enemy position too
    /*if ('undefined' !== typeof thisLevel) {
        for (var i = 0; i < thisLevel.currentRoom.enemies.length; i++) {
            thisLevel.currentRoom.enemies[i].posX = Math.floor((thisLevel.currentRoom.enemies[i].posX/oldUnit) * MEASURE_UNIT);
            thisLevel.currentRoom.enemies[i].posY = Math.floor((thisLevel.currentRoom.enemies[i].posY/oldUnit) * MEASURE_UNIT);
            
          //if('undefined' !== typeof currentRoom)
          //{  
     
            if('undefined' !== typeof thisLevel.currentRoom.enemies[i])
            {
            // how to get the list of all enemys 
            //console.log("entered undefiend enemies %%%%%%");
            // enemies draw from - AllTiles: this.enterence, Level: level(3, )
              thisLevel.currentRoom.enemies[i].Resize();      // ????????? STILL NEEDS TO  RESIZE  ??/??????????????

            }
          //}
            
        }
    }*/

}

function initGame() {
    //this is where we make sure the images and sounds have loaded, so we can safely use them!

    
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


}

//main update loop, called at regular intervals
function draw() {
    window.requestAnimationFrame(draw);


    //draw each canvas one at a time
    //don't forget to clear the canvas before drawing the next frame
    
    ctxWorld.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    
	if (mainGuy.hp <= 0) { // Player is dead, show game over screen
		ctxDark.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
		ctxDark.drawImage(gameOver, 0, 0, GAME_WIDTH * 0.85, GAME_HEIGHT);
	}
	else { // Draw as normal
		//draw room
		thisLevel.currentRoom.draw();
		
		 //for debugging collisions
		//collisionWorld.DrawDebugData();

		 
		//the player should be drawn here, on top of the world
		//player drawing and updates:
		//mainGuy.draw(ctxWorld);
		//mainGuy.update();
		entityManager.drawAllEntities();

		// Comment the line below to remove the darkness layer.

	   ctxDark.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
		
		//only draw if not lit
		if (!thisLevel.currentRoom.isLit) {
			// Coordinates for the center of the circle of light, aka the tip of the arc.
			//var 
			centerX = mainGuy.p.pos[0] + (.3*MEASURE_UNIT);
			//var 
			centerY = mainGuy.p.pos[1] + (.8*MEASURE_UNIT);
			// Draw the field of darkness.
			ctxDark.fillStyle = 'black';
			ctxDark.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
			// Set transparency using the "xor" operation.
			ctxDark.globalCompositeOperation = 'xor';
			// Set the black background to not be completely transparent.
			ctxDark.globalAlpha = 0.96;
			// Draw the white arc to represent the light from the character's lantern.
			if (mainGuy.light > 0) { //only draw the flashlight if you have lantern light
				ctxDark.fillStyle = 'white';
				ctxDark.beginPath();
				//ctxDark.moveTo(centerX+x, centerY+y);
				var r = MEASURE_UNIT*4;   
				ctxDark.arc(centerX+x, centerY+y, r, arcStart, arcEnd, true);
				ctxDark.lineTo(centerX+x, centerY+y);
				ctxDark.fill();
			}
		
		// draw a png via alpha
		// OR (easy) draw dim arcs to make flashlight bigger
		}
		
		// ui
		//directly draw the UI, asking for player resources with accessors
		//no need for a subclass unless we want to animate the gauges
		//this needs to be moved, and only update when the UI changes
		ctxUI.clearRect(0, 0, GAME_WIDTH*.15, GAME_HEIGHT); 
		draw_ui();
		
		collisionWorld.Step((0),0,0);
		
		collisionDetection.collisionContact();
		
		collisionWorld.ClearForces();
		
		//This part below has been moved to Collisions.js
		//also when the lights come on, the enemies in the current room need to be removed:
		//entityManager.clearEnemies();
		
		//}
		
		//hacks
		mainGuy.posY = mainGuy.p.pos[1];
	}
}

// UI stuff - not sure where to put it!

this.light = new SpriteMap('assets/ui/light_sheet.png',//image
			{ //anim sequences
				full: {startRow: 0, startCol: 0, endRow: 0, endCol: 0},
				first_use: {startRow: 0, startCol: 1, endRow: 0, endCol: 1},
				second_use: {startRow: 0, startCol: 2, endRow: 0, endCol: 2},
				third_use: {startRow: 0, startCol: 3, endRow: 0, endCol: 3},
				fourth_use: {startRow: 0, startCol: 4, endRow: 0, endCol: 4},
				fifth_use: {startRow: 0, startCol: 5, endRow: 0, endCol: 5},
				empty: {startRow: 0, startCol: 6, endRow: 0, endCol: 6}
				//walkLeft: {startRow: 1, startCol: 6, endRow: 1, endCol: 8},
				//walkRight: {startRow: 2, startCol: 6, endRow: 2, endCol: 8},
				//walkUp: {startRow: 3, startCol: 6, endRow: 3, endCol: 8}
			}, { //options
				frameW: 128, // Width of each frame of the animation in pixels
				frameH: 256, // Height of each frame of the animation in pixels
				projectedW: 1024, // Displayed width
				projectedH: 256, // Displayed height 
				interval: 150, // Switch frames every xxx ms
				useTimer: true, // Rely on requestAnimFrame to update frames instead of setInterval
				postInitCallback: function() {
					this.light.start('full');//start the idle anim
					//when/where you want to switch anim sequences, use sprite.use(stringAnimName);
				}
	});
	
	this.health = new SpriteMap('assets/ui/heart_sheet.png',//image
			{ //anim sequences
				full: {startRow: 0, startCol: 0, endRow: 0, endCol: 0},
				one: {startRow: 0, startCol: 1, endRow: 0, endCol: 1},
				two: {startRow: 0, startCol: 2, endRow: 0, endCol: 2},
				three: {startRow: 0, startCol: 3, endRow: 0, endCol: 3},
				four: {startRow: 0, startCol: 4, endRow: 0, endCol: 4},
				five: {startRow: 0, startCol: 5, endRow: 0, endCol: 5},
				empty: {startRow: 0, startCol: 6, endRow: 0, endCol: 6}
				//walkLeft: {startRow: 1, startCol: 6, endRow: 1, endCol: 8},
				//walkRight: {startRow: 2, startCol: 6, endRow: 2, endCol: 8},
				//walkUp: {startRow: 3, startCol: 6, endRow: 3, endCol: 8}
			}, { //options
				frameW: 128, // Width of each frame of the animation in pixels
				frameH: 256, // Height of each frame of the animation in pixels
				projectedW: 1024, // Displayed width
				projectedH: 256, // Displayed height 
				interval: 150, // Switch frames every xxx ms
				useTimer: true, // Rely on requestAnimFrame to update frames instead of setInterval
				postInitCallback: function() {
					this.health.start('full');//start the idle anim
					//when/where you want to switch anim sequences, use sprite.use(stringAnimName);
				}
	});

function draw_ui() {
	
	var lmeter, hmeter = '';
	var UIHeight = GAME_HEIGHT;
	var UIWidth = GAME_WIDTH * 0.15;
	ctxUI.drawImage(pole, 0, 0, UIWidth, UIHeight);// MEASURE_UNIT * 2.25, MEASURE_UNIT * 11);	
	
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
				
	this.light.use(lmeter);
	this.light.draw(ctxUI, (0.129 * UIWidth), (0.048 * UIHeight), MEASURE_UNIT * 1.25, MEASURE_UNIT * 2.5);
	
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
	
	this.health.use(hmeter);
	this.health.draw(ctxUI, (0.540 * UIWidth), (0.128 * UIHeight), MEASURE_UNIT * 1.25, MEASURE_UNIT * 2.5);
}

// end UI

function initDrawUpdate() {
    //size the window:
    resizeScreen();
    
    //set up contexts:
    ctxWorld = document.getElementById('world').getContext('2d');
    ctxDark = document.getElementById('dark').getContext('2d');
    ctxUI = document.getElementById('ui').getContext('2d');
    
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

//account for user resizing the window
//window.addEventListener('resize', resizeScreen, false);
//no

// for the movement control
window.addEventListener('keyup', function(event) { controls.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { controls.onKeydown(event); }, false);