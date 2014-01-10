//global variables


function init() {
	ctxWorld = document.getElementById('world').getContext('2d');
	ctxDark = document.getElementById('dark').getContext('2d');
	ctxUI = document.getElementById('ui').getContext('2d');
	return setInterval(function(){draw()}, 30);//ms between updates
}

//main update loop, called at regular intervals
function draw() {
	//draw each canvas one at a time
}

window.addEventListener("load", init, false);