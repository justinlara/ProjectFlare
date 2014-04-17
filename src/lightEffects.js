//file for temporary effects that draw on the dark canvas

var lightlampEffect = function(lampX, lampY) {
	//draw an expanding circle of black, xor composite
	var lx = lampX + MEASURE_UNIT/2;
	var ly = lampY + MEASURE_UNIT/2;
	var r = MEASURE_UNIT;
	var e = setInterval(function() {
		//ctxDark.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
		ctxDark.globalCompositeOperation = 'source-over';
		//ctxDark.globalAlpha = 1;
		ctxDark.fillStyle = 'black';
		ctxDark.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
		//ctxDark.globalCompositeOperation = 'xor';
		ctxDark.beginPath();
		ctxDark.arc(200,200,50, 0, Math.PI*2);
		ctxDark.fill();
		r+=10;
		//console.log("lighttest");
	}, 300);
	setTimeout(function() {
		clearInterval(e);
	}, 1000);
};

var lightning = function() {

};