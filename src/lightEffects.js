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
	ctxDark.arc(lx,ly, r, 0, Math.PI*2);
	ctxDark.fill();
	
	ctxDark.fillStyle = 'black';
};

var lightTorchEffect = function() {

	var lx1 = MEASURE_UNIT*2.5;
	var ly1 = MEASURE_UNIT/2;
	var lx2 = MEASURE_UNIT*11.5;
	var ly2 = MEASURE_UNIT/2;

	ctxDark.globalCompositeOperation = 'source-over';
	ctxDark.globalAlpha = 1;
	ctxDark.fillStyle = 'black';
	ctxDark.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	ctxDark.globalAlpha = .9;
	ctxDark.globalCompositeOperation = 'xor';
	ctxDark.fillStyle = 'white';
	ctxDark.beginPath();
	ctxDark.arc(lx1,ly1, effectR, 0, Math.PI*2);
	ctxDark.arc(lx2,ly2, effectR, 0, Math.PI*2);
	ctxDark.fill();
	
	ctxDark.fillStyle = 'black';
};

var drawTorches = function() {
	torchSprite.draw(ctxWorld, MEASURE_UNIT*3, MEASURE_UNIT*0, MEASURE_UNIT, MEASURE_UNIT);
	torchSprite.draw(ctxWorld, MEASURE_UNIT*11, MEASURE_UNIT*0, MEASURE_UNIT, MEASURE_UNIT);
};