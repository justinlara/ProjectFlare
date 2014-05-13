function TMunge() {
	Enemy.call(this);
	
	this.sprite = loadSpriteTMunge;
	
	this.speed = MEASURE_UNIT * .01;
	this.aquisitionRange = MEASURE_UNIT * 5;
	this.escapeSpeed = MEASURE_UNIT * .02;
	this.attackRange = MEASURE_UNIT * 0;
	
	this.entityBehavior = new Behavior(this, 'wander', 'follow', 'none', 'chase', 'none', 'none');
	/*this.setSprite = function() {
		
	}*/
}

TMunge.prototype = Object.create(Enemy.prototype);
TMunge.prototype.constructor = TMunge;