function Enemy() {
	//enemy base object
	//all enemies should collide with walls
	//all enemies should have some AI framework
	this.image.src = "assets/Miles_Enemy1.png";
}

//carry over position and image properties
//this should take care of collision, assuming collision is on entities
Enemy.prototype = new Entity();
	
//the basic AI which tells the enemy how to move
//overwrite in subtypes
Enemy.prototype.move = function() {
	//per frame movement if we call .move in main draw
	//I'm thinking we should have an enemy controller which calls each active enemy'smove function on a setInterval timer
	this.posX += MEASURE_UNIT*.01;
	this.posY += MEASURE_UNIT*.01;
}
	
//draw the enemy on ctxWorld
Enemy.prototype.draw = function() {
	ctxWorld.drawImage(this.image, this.posX, this.posY, MEASURE_UNIT, MEASURE_UNIT);
}