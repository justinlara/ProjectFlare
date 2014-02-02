var currentRoom; //move this to level object, shouldn't be a main thing
var ALLTILES = new AllTiles();
//variables for drawing lantern light
var arcStart = Math.PI*3/4;
var arcEnd = Math.PI*1/4;
var x = 0;
var y = 0;


function loadAssets() {

	// just have to list everything like so
	// when we put this on a website, we can simplify this with PHP
	var images = new Array();
	var imgNumber = 6;
	for (var i = 0; i < imgNumber; i++) {
		images[i] = new Image();
	}
	images[0].src = "assets/Character.png";
	images[1].src = "assets/errorTile.png";
	images[2].src = "assets/Lamp1.png";
	images[3].src = "assets/tempfloor.png";
	images[4].src = "assets/tempwall.png";
	images[5].src = "assets/Miles_Enemy1.png";
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
	if ('undefined' !== typeof mainGuy) {
		//new pos = currentPos/OLD_MEASURE_UNIT * NEW_MEASURE_UNIT
		mainGuy.p.pos[0] = Math.floor((mainGuy.p.pos[0]/oldUnit) * MEASURE_UNIT);
		mainGuy.p.pos[1] = Math.floor((mainGuy.p.pos[1]/oldUnit) * MEASURE_UNIT);
	}
}

function initGame() {
	//this is where we make sure the images and sounds have loaded, so we can safely use them!

	//generate the level
	//init the first current room (level.currentRoom)
	//this block of room code should probably go into the level when its ready
	//var thisLevel = new Level(1, 1); //when the level is ready
	
	// Use the algorithm to generate the randomly generated 2D array of the level.
	
	var thisRoom = ALLTILES.entrance;
	currentRoom = new Room(thisRoom);
	
	//create a player instance
    mainGuy =  new Player();

    //setup of the sound manager
    soundManager.setup({
        url: 'src/swf/',
        onready: function () {
            var music1 = soundManager.createSound({
                id: 'spookyMusic',
                url: './assets/spookyMusic.mp3',
                autoLoad: true,
                autoPlay: true,
                stream: true
            });
        }
    });
}

//main update loop, called at regular intervals
function draw() {
	window.requestAnimationFrame(draw);

	//draw each canvas one at a time
	//don't forget to clear the canvas before drawing the next frame
	
	ctxWorld.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	
	//draw room
	/*thisLevel.*/currentRoom.draw();
	 
	//the player should be drawn here, on top of the world
	//player drawing and updates:
    mainGuy.draw(ctxWorld);

	mainGuy.update();

	
	//directly draw darkness, accessing player position
	ctxDark.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	
	//only draw if not lit
	//if (!thisLevel.currentRoom.isLit)
	// Coordinates for the center of the circle of light, aka the tip of the arc.
	var centerX = mainGuy.p.pos[0] + (.3*MEASURE_UNIT);
	var centerY = mainGuy.p.pos[1] + (.8*MEASURE_UNIT);
	// Draw the field of darkness.
	ctxDark.fillStyle = 'black';
	ctxDark.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	// Set transparency using the "xor" operation.
	ctxDark.globalCompositeOperation = 'xor';
	// Set the black background to not be completely transparent.
	ctxDark.globalAlpha = 0.95;
	// Draw the white arc to represent the light from the character's lantern.
	ctxDark.fillStyle = 'white';
	ctxDark.beginPath();
	//ctxDark.moveTo(centerX+x, centerY+y);
	var r = MEASURE_UNIT*1.5;	
	ctxDark.arc(centerX+x, centerY+y, r, arcStart, arcEnd, true);
	ctxDark.lineTo(centerX+x, centerY+y);
	ctxDark.fill();

	
	//directly draw the UI, asking for player resources with accessors
	//no need for a subclass unless we want to animate the gauges
	//this needs to be moved, and only update when the UI changes
	ctxUI.clearRect(0, 0, GAME_WIDTH*.15, GAME_HEIGHT); 
	ctxUI.fillStyle = 'white';
	ctxUI.fillRect(0, 0, GAME_WIDTH*.15, GAME_HEIGHT);
	
}

function initDrawUpdate() {
	//size the window:
	resizeScreen();
	
	//set up contexts:
	ctxWorld = document.getElementById('world').getContext('2d');
	ctxDark = document.getElementById('dark').getContext('2d');
	ctxUI = document.getElementById('ui').getContext('2d');
	
	//load images
	loadAssets();
	
	//set up gameplay elements
	initGame();
	
	//return setInterval(function(){draw()}, 30);//ms between updates
	//more efficient version using requestAnimationFrame:
	draw();
}

window.addEventListener("load", initDrawUpdate, false);

//account for user resizing the window
window.addEventListener('resize', resizeScreen, false);

// for the movement control
window.addEventListener('keyup', function(event) { controls.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { controls.onKeydown(event); }, false);