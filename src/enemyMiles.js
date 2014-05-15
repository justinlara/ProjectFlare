function Miles() {
	Enemy.call(this);
	
	this.sprite = loadSpriteMiles;
	
	this.image = new Image();
	this.image.src = "assets/Miles_Enemy1.png";
	this.imageDying = new Image();
	this.imageDying.src = "assets/Miles_Enemy_Dying.png";
	
	this.speed = MEASURE_UNIT * .01;
	this.normalSpeed = MEASURE_UNIT * .01;
	this.aquisitionRange = MEASURE_UNIT * 1.5;
	this.escapeSpeed = MEASURE_UNIT * .015;
	this.escapeRange = MEASURE_UNIT * 3;
	this.attackRange = MEASURE_UNIT * 1.5; //0;
	
	this.entityBehavior = new Behavior(this, 'wander', 'follow', 'none', 'chase', 'none', 'none');
}

Miles.prototype = Object.create(Enemy.prototype);
Miles.prototype.constructor = Miles;