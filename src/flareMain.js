//global variables
var ctxWorld;
var ctxDark;
var ctxUI;

function init() {
	ctxWorld = document.getElementById('world').getContext('2d');
	ctxDark = document.getElementById('dark').getContext('2d');
	ctxUI = document.getElementById('ui').getContext('2d');
	return setInterval(function(){draw()}, 30);//ms between updates
}

//main update loop, called at regular intervals
function draw() {
	//draw each canvas one at a time
	ctxWorld.fillStyle = "purple";
	ctxWorld.beginPath();
	ctxWorld.rect(100, 100, 10, 10); 
	ctxWorld.closePath();
	ctxWorld.fill();
	
	ctxDark.fillStyle = "blue";
	ctxDark.beginPath();
	ctxDark.rect(105, 105, 20, 10); 
	ctxDark.closePath();
	ctxDark.fill();
}

window.addEventListener("load", init, false);