function TMunge() {
	Enemy.call(this);
	
	this.sprite = loadSpriteTMunge;
	
	this.image = new Image();
	this.image.src = "assets/Miles_Enemy1.png";
	this.imageDying = new Image();
	this.imageDying.src = "assets/Miles_Enemy_Dying.png";
	
	this.speed = MEASURE_UNIT * .01;
	this.aquisitionRange = MEASURE_UNIT * 5;
	this.escapeSpeed = MEASURE_UNIT * .02;
	this.attackRange = MEASURE_UNIT * 0;
	
	this.enemyBehavior = new Behavior(this, 'wander', 'follow', 'none', 'none', 'none', 'none');
	/*this.setSprite = function() {
		
	}*/
}

TMunge.prototype = Object.create(Enemy.prototype);
TMunge.prototype.constructor = TMunge;