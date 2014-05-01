//file for temporary effects that draw on the dark canvas

var lightlampEffect = function(lampX, lampY, r) {
	//draw an expanding circle of black, xor composite
	var lx = lampX + MEASURE_UNIT/2;
	var ly = lampY + MEASURE_UNIT/2;

	ctxDark.globalCompositeOperation = 'source-over';
	ctxDark.globalAlpha = 1;
	ctxDark.fillStyle = 'black';
	ctxDark.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	ctxDark.globalAlpha = .9;
	ctxDark.globalCompositeOperation = 'xor';
	ctxDark.fillStyle = 'white';
	ctxDark.beginPath();
	ctxDark.arc(lx,ly,r, 0, Math.PI*2);
	ctxDark.fill();
};

var lightning = function() {

};