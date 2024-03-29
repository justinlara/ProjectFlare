function Mouse() {
	Critter.call(this);
	
	this.sprite = loadSpriteMouse;

	this.speed = MEASURE_UNIT * .025;
	this.aquisitionRange = MEASURE_UNIT * 0;
	this.escapeSpeed = MEASURE_UNIT * 0;
	this.attackRange = MEASURE_UNIT * 0;
	
	this.size = .4;
	
	this.entityBehavior = new Behavior(this, 'ortho', 'none', 'none', 'none', 'none', 'none');
}

Mouse.prototype = Object.create(Critter.prototype);
Mouse.prototype.constructor = Mouse;