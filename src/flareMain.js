var currentRoom; //move this to level object, shouldn't be a main thing
var ALLTILES = new AllTiles();

/*function loadAssets() {
	//uncommenting this breaks things
	//I will add the loading function here
)*/

var x = 0;
var y = 0;

function resizeScreen() {
	//thanks to Gopherwood studios on html5rocks.com on how to do this
	var screen = document.getElementById('gameScreen');
	var gameAspectRatio = 4/3;
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
	worldC.width = newWidth;
	worldC.height = newHeight;
	var darkC = document.getElementById('dark');
	darkC.width = newWidth;
	darkC.height = newHeight;
	/*var uiC = document.getElementById('ui');
	darkC.width = newWidth;
	darkC.height = newHeight;*/
	
	//set the global width and height:
	GAME_WIDTH = newWidth;
	GAME_HEIGHT = newHeight;
	//set the unit size in pixels
	//assuming one unit will be one tiles width
	//6.6% is ~15 tiles
	MEASURE_UNIT = Math.floor(newWidth * .066);
}

function initGame() {
	//this is where we make sure the images and sounds have loaded, so we can safely use them!

	//generate the level
	//init the first current room (level.currentRoom)
	//this block of room code should probably go into the level when its ready
	//var thisLevel = new Level(1, 1); //when the level is ready
	var thisRoom = ALLTILES.entrance;
	currentRoom = new Room(thisRoom);
	
	//create a player instance
    mainGuy =  new Player();
    
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
	
	//only draw if lit
	//if (!thisLevel.currentRoom.isLit)
	// Coordinates for the center of the circle of light, aka the tip of the arc.
	var centerX = 250;
	var centerY = 200;
	// Draw the field of darkness.
	ctxDark.fillStyle = 'black';
	ctxDark.fillRect(100, 100, 300, 300);
	// Set transparency using the "xor" operation.
	ctxDark.globalCompositeOperation = 'xor';
	// Set the black background to not be completely transparent.
	ctxDark.globalAlpha = 0.95;
	// Draw the white arc to represent the light from the character's lantern.
	ctxDark.fillStyle = 'white';
	ctxDark.beginPath();
	ctxDark.moveTo(centerX+x, centerY+y);
	ctxDark.arc(centerX+x, centerY+y, 80, Math.PI*3/4, Math.PI*1/4, true);
	ctxDark.lineTo(centerX+x, centerY+y);
	ctxDark.fill();
	ctxDark.close();

	
	//directly draw the UI, asking for player resources with accessors
	//no need for a subclass unless we want to animate the gauges
	//ctxUI.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT); 
	
}

function initDrawUpdate() {
	//size the window:
	resizeScreen();
	
	//set up contexts:
	ctxWorld = document.getElementById('world').getContext('2d');
	ctxDark = document.getElementById('dark').getContext('2d');
	//ctxUI = document.getElementById('ui').getContext('2d');
	
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