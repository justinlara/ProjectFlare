var x = 10;
var y = 10;
var testImg;

function initGame() {
	//this is where we make sure the images and sounds have loaded, so we can safely use them!

	//generate the level
	
	//create a player instance
	testImg = new Image();
	testImg.src = "assets/testkitteh.png";
}

//main update loop, called at regular intervals
function draw() {
	window.requestAnimationFrame(draw);
	
	//draw each canvas one at a time
	// call the level draw method, which will draw the room and then all entities in it
	//don't forget to clear the canvas before drawing the next frame
	ctxWorld.clearRect(0, 0, 800, 600);
	
	ctxWorld.fillStyle = "white";
	ctxWorld.beginPath();
	ctxWorld.rect(0, 0, 800,600); 
	ctxWorld.closePath();
	ctxWorld.fill();
	ctxWorld.drawImage(testImg, 600, 10);
	
	//directly draw darkness, accessing player position
	//this is only an example
	ctxDark.clearRect(0, 0, 800, 600);
	
	ctxDark.fillStyle = "blue";
	ctxDark.beginPath();
	ctxDark.rect(x, y, 20, 10); 
	ctxDark.closePath();
	ctxDark.fill();
	if (y<500) {
		x++;
		y++; 
	}
	
	//directly draw the UI, asking for player resources with accessors
	//no need for a subclass unless we want to animate the gauges
}

function initDrawUpdate() {
	//set up contexts:
	ctxWorld = document.getElementById('world').getContext('2d');
	ctxDark = document.getElementById('dark').getContext('2d');
	ctxUI = document.getElementById('ui').getContext('2d');
	
	//set up gameplay elements
	initGame();
	
	//return setInterval(function(){draw()}, 30);//ms between updates
	//more efficient version using requestAnimationFrame:
	draw();
}

window.addEventListener("load", initDrawUpdate, false);