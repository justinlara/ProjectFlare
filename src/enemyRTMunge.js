function RTMunge() {
	TMunge.call(this);
	
	this.sprite = loadSpriteRTMunge;
	
	this.normalSpeed = MEASURE_UNIT * 0.02;
	this.aquisitionRange = MEASURE_UNIT * 10;
	this.escapeSpeed = MEASURE_UNIT * 0.005;
	this.escapeRange = MEASURE_UNIT * 2;
	this.attackRange = MEASURE_UNIT * 0.01;
	
	this.speed = this.normalSpeed;
	
	this.entityBehavior = new Behavior(this, 'wander', 'follow', 'none', 'chase', 'run', 'none');
	/*this.setSprite = function() {
		
	}*/
}

RTMunge.prototype = Object.create(TMunge.prototype);
RTMunge.prototype.constructor = RTMunge;