function darkRaito() {
	Enemy.call(this);
	
	this.sprite = dRaito;
	
	this.normalSpeed = MEASURE_UNIT * .02;
	this.aquisitionRange = MEASURE_UNIT * 3;
	this.escapeSpeed = MEASURE_UNIT * .015;
	this.escapeRange = MEASURE_UNIT * 3;
	this.attackRange = MEASURE_UNIT * 2; //0;
	
	this.speed = this.normalSpeed;
	
	this.entityBehavior = new Behavior(this, 'none', 'none', 'none', 'none', 'none', 'none');
}

darkRaito.prototype = Object.create(Enemy.prototype);
darkRaito.prototype.constructor = darkRaito;