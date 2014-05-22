function TMunge() {
	Enemy.call(this);
	
	this.sprite = loadSpriteTMunge;
	this.flying = true; //red munge inherits
	
	this.normalSpeed = MEASURE_UNIT * 0.01;
	this.aquisitionRange = MEASURE_UNIT * 5;
	this.escapeSpeed = MEASURE_UNIT * 0.03;
	this.escapeRange = MEASURE_UNIT * 2;
	this.attackRange = MEASURE_UNIT * 0.01;
	
	this.speed = this.normalSpeed;
	
	this.entityBehavior = new Behavior(this, 'wander', 'follow', 'none', 'run', 'run', 'none');
	/*this.setSprite = function() {
		
	}*/
}

TMunge.prototype = Object.create(Enemy.prototype);
TMunge.prototype.constructor = TMunge;