function RedMiles() {
	Miles.call(this);
	
	this.sprite = loadSpriteRMiles;
	
	this.normalSpeed = MEASURE_UNIT * .02;
	this.aquisitionRange = MEASURE_UNIT * 3;
	this.escapeSpeed = MEASURE_UNIT * .015;
	this.escapeRange = MEASURE_UNIT * 3;
	this.attackRange = MEASURE_UNIT * 2; //0;
	
	this.speed = this.normalSpeed;
	
	this.entityBehavior = new Behavior(this, 'wander', 'follow', 'none', 'chase', 'none', 'none');
}

RedMiles.prototype = Object.create(Miles.prototype);
RedMiles.prototype.constructor = RedMiles;