function Behavior(actor, MoveType, ChaseType, AttackType, ReactType, RunType, SpecialType) {

	//console.log("creation success");
	
	this.actor = actor;
	
	this.inRange = false;
	
	this.mStr = MoveType;
	this.cStr = ChaseType;
	this.aStr = AttackType;
	this.rStr = ReactType;
	this.runStr = RunType;
	this.sStr = SpecialType;
	
	this.reacting = false;
	this.attacking = false;
	
	this.dist = 0;
	this.reactDist = 0;
	this.reactPosX = MEASURE_UNIT;
	this.reactPosY = MEASURE_UNIT;
}

Behavior.prototype.distanceToPlayer = function() {
	return this.distanceToPoint(this.actor.positions.pos[0], this.actor.positions.pos[1], mainGuy.p.pos[0], mainGuy.p.pos[1]);
}

Behavior.prototype.distanceToTarget = function() {
	return this.distanceToPoint(this.actor.positions.pos[0], this.actor.positions.pos[1], this.actor.targetPosX, this.actor.targetPosY);
}

Behavior.prototype.distanceToPoint = function (pos1x, pos1y, pos2x, pos2y) {
 return Math.sqrt(
        Math.pow((pos1x - pos2x), 2)
            +
        Math.pow((pos1y - pos2y), 2)
    );

}

Behavior.prototype.attackReaction = function(dist) {
	this.actor.targetPosX = mainGuy.p.pos[0];
	this.actor.targetPosY = mainGuy.p.pos[1];
	
	if( dist < this.actor.attackRange)
	{
		if(!this.attacking)
		{
			//change to initial attack sprite
			soundManager.play(this.actor.attackSound);
		}
		else
		{
			//change to continuing attack sprite
		}
		this.attacking = true;
	}
	else
	{
		//if not in attack range anymore, reset to normal sprite
		
		this.attacking = false;
	}
};

Behavior.prototype.move = function() {
	this.actor.xdelta = 0;
	this.actor.ydelta = 0;
	
	this.dist = this.distanceToPlayer()
	
	if(this.actor.hitLight.hit == true) {
		if(this.reacting == false) {
			this.reactPosX = this.actor.positions.pos[0];
			this.reactPosY = this.actor.positions.pos[1];
		}
		this.reactDist = this.distanceToPoint(this.actor.positions.pos[0], this.actor.positions.pos[1], this.reactPosX, this.reactPosY);
		this.reacting = true;
		REACTB.move(this.rStr, this.actor);
		
		if(this.rStr == 'attack' || this.rStr == 'chase') {
			this.attackReaction(this.dist);
		}
	}
	else if(this.reacting == false) {
		if( this.dist < this.actor.aquisitionRange) {
		
			CHASEB.move(this.cStr, this.actor);
			
			this.attackReaction(this.dist);
		}
		else
		{
			MOVEB.move(this.mStr, this.actor);
		}
	}
	
	//nullify further movement into an object when colliding.
	if(this.actor.hitSomething.hitLR == true || this.actor.hitSomething.hitUD == true) {
		if(this.actor.hitSomething.hitLR == true) {
			this.actor.targetPosX = this.actor.positions.pos[0];
			this.actor.positions.pos[1] += this.actor.ydelta;
		}
		
		if(this.actor.hitSomething.hitUD == true) {
			this.actor.targetPosY = this.actor.positions.pos[1];
			this.actor.positions.pos[0] += this.actor.xdelta;
		}
	} 
	else {
		this.actor.positions.pos[0] += this.actor.xdelta;
		this.actor.positions.pos[1] += this.actor.ydelta;
	}
	
	if ( this.dist >= this.actor.attackRange) this.attacking = false;
	this.actor.hitSomething.hitLR = false;
	this.actor.hitSomething.hitUD = false;
	//this.actor.hitLight.hit = false;
};