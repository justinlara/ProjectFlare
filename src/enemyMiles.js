function Miles() {
	Enemy.call(this);
	
	this.sprite = loadSpriteMiles;
	this.attackSound = 'miles_attack';
	this.deathSound = 'miles_death';
	
	this.normalSpeed = MEASURE_UNIT * .01;
	this.aquisitionRange = MEASURE_UNIT * 1.5;
	this.escapeSpeed = MEASURE_UNIT * .015;
	this.escapeRange = MEASURE_UNIT * 3;
	this.attackRange = MEASURE_UNIT * 1.5; //0;
	
	this.speed = this.normalSpeed;
	
	this.entityBehavior = new Behavior(this, 'wander', 'follow', 'none', 'chase', 'none', 'none');
}

Miles.prototype = Object.create(Enemy.prototype);
Miles.prototype.constructor = Miles;