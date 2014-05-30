function Bug() {
	Critter.call(this);
	
	this.sprite = loadSpriteBug;

	this.speed = MEASURE_UNIT * .03;
	this.aquisitionRange = MEASURE_UNIT * 0;
	this.escapeSpeed = MEASURE_UNIT * 0;
	this.attackRange = MEASURE_UNIT * 0;
	
	this.size = .3;
	
	this.entityBehavior = new Behavior(this, 'ortho', 'none', 'none', 'none', 'none', 'none');
}

Bug.prototype = Object.create(Critter.prototype);
Bug.prototype.constructor = Bug;