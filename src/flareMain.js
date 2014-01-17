

function initGame() {
	//generate the level
	
	//create a player instance
}

function initDrawUpdate() {
	ctxWorld = document.getElementById('world').getContext('2d');
	ctxDark = document.getElementById('dark').getContext('2d');
	ctxUI = document.getElementById('ui').getContext('2d');
	
	initGame();
	
	return setInterval(function(){draw()}, 30);//ms between updates
}

//main update loop, called at regular intervals
function draw() {
	//draw each canvas one at a time
	// call the level draw method, which will draw the room and then all entities in it
	//don't forget to clear the canvas before drawing the next frame
	ctxWorld.fillStyle = "white";
	ctxWorld.beginPath();
	ctxWorld.rect(0, 0, 800,600); 
	ctxWorld.closePath();
	ctxWorld.fill();
	
	//directly draw darkness, accessing player position
	//this is only an example
	ctxDark.fillStyle = "blue";
	ctxDark.beginPath();
	ctxDark.rect(105, 105, 20, 10); 
	ctxDark.closePath();
	ctxDark.fill();
	
	//directly draw the UI, asking for player resources with accessors
	//no need for a subclass
}

window.addEventListener("load", initDrawUpdate, false);