function Critter() {
	//critter base object
	Entity.call(this);
	
	this.randomIntFromInterval = function(min,max)
	{
		return Math.floor(Math.random()*(max-min+1)+min);
	};
	
  this.positions = { pos: [this.posX, this.posY]};
  this.xdelta = 0;
  this.ydelta = 0;
  
  this.targetPosX = this.randomIntFromInterval(1, 13) * MEASURE_UNIT;
  this.targetPosY = this.randomIntFromInterval(1, 9) * MEASURE_UNIT;
	
	this.hit = false;
	this.hitLight = {hit: this.hit };
	
	this.hitLR = false;
	this.hitUD = false;
	this.hitSomething = {hitLR: this.hitLR, hitUD: this.hitUD};
	
	//sprite defaults:
	this.sprite = loadSpriteMiles;
	
	this.direction = "down";
	this.directionChanged = false;
}

//carry over position and image properties
//this should take care of collision, assuming collision is on entities
Critter.prototype = Object.create(Entity.prototype);
Critter.prototype.constructor = Critter;

Critter.prototype.Resize = function()
{
};

//the basic AI which tells the critter how to move
Critter.prototype.move = function () {
    //per frame movement if we call .move in main draw
	this.entityBehavior.move();
};

Critter.prototype.newTarget = function() { 
	this.targetPosX = this.randomIntFromInterval(1, 13) * MEASURE_UNIT;
	this.targetPosY = this.randomIntFromInterval(1, 9) * MEASURE_UNIT;
};
	
//draw the critter on ctxWorld
Critter.prototype.draw = function() { 
	//console.log("critter being drawn");
	if (gameState != 6) this.update();
	this.render();
};

Critter.prototype.render = function() {
	this.sprite.draw(ctxWorld, this.positions.pos[0], this.positions.pos[1], MEASURE_UNIT*.4, MEASURE_UNIT*.4);	
}

Critter.prototype.update = function() {
	var prePosX = this.positions.pos[0];
	var prePosY = this.positions.pos[1];
	
	this.move();
	
	/*if (prePosX > this.positions.pos[0]) { //moving left
		if (this.sprite.activeLoop != "walkLeft") this.sprite.use("walkLeft");
	}
	else if (prePosX < this.positions.pos[0]) { //moving right
		if (this.sprite.activeLoop != "walkRight") this.sprite.use("walkRight");
	}
	else if (prePosX == this.positions.pos[0]) {
		if (prePosY > this.positions.pos[1]) { //moving up
			if (this.sprite.activeLoop != "walkUp") this.sprite.use("walkUp");
		}
		else if (prePosY < this.positions.pos[1]) { //moving down
			if (this.sprite.activeLoop != "walkDown") this.sprite.use("walkDown");
		}
	}*/
	
	/*if (this.directionchanged) {
		switch(this.direction) {
			case "down":
				this.sprite.use("walkDown");
				break;
			case "up":
				this.sprite.use("walkUp");
				break;
			case "right":
				this.sprite.use("walkRight");
				break;
			case "left":
				this.sprite.use("walkLeft");
				break;
			default:
				break;
		}
		this.directionChanged = false;
	}*/
	
	this.posX = this.positions.pos[0];
	this.posY = this.positions.pos[1];
}