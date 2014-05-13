function Mouse() {
	Critter.call(this);
	
	this.sprite = loadSpriteMouse;

	this.speed = MEASURE_UNIT * .01;
	this.aquisitionRange = MEASURE_UNIT * 0;
	this.escapeSpeed = MEASURE_UNIT * 0;
	this.attackRange = MEASURE_UNIT * 0;
	
	this.entityBehavior = new Behavior(this, 'wander', 'none', 'none', 'none', 'none', 'none');
}

Mouse.prototype = Object.create(Critter.prototype);
Mouse.prototype.constructor = Mouse;