function Miles() {
	Enemy.call(this);
	
	this.sprite = loadSpriteMiles;
	
	this.image = new Image();
	this.image.src = "assets/Miles_Enemy1.png";
	this.imageDying = new Image();
	this.imageDying.src = "assets/Miles_Enemy_Dying.png";
	
	this.speed = MEASURE_UNIT * .01;
	this.aquisitionRange = MEASURE_UNIT * 2;
	this.escapeSpeed = MEASURE_UNIT * .02;
	this.attackRange = MEASURE_UNIT * 0;
	
	this.enemyBehavior = new Behavior(this, 'wander', 'follow', 'none', 'none', 'none', 'none');
}

Miles.prototype = Object.create(Enemy.prototype);
Miles.prototype.constructor = Miles;