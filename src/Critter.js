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

	this.update();
	this.render();
};

Critter.prototype.render = function() {

	this.sprite.use("idle");
	this.sprite.draw(ctxWorld, this.positions.pos[0], this.positions.pos[1], MEASURE_UNIT, MEASURE_UNIT);	
}

Critter.prototype.update = function() {

	this.move();
	
	this.posX = this.positions.pos[0];
	this.posY = this.positions.pos[1];
}