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
}

Behavior.prototype.distanceToPlayer = function() {
 return Math.sqrt(
        Math.pow((this.actor.positions.pos[0] - mainGuy.p.pos[0]), 2)
            +
        Math.pow((this.actor.positions.pos[1] - mainGuy.p.pos[1]), 2)
    );
}

Behavior.prototype.distanceToTarget = function() {
 return Math.sqrt(
        Math.pow((this.actor.positions.pos[0] - this.actor.targetPosX), 2)
            +
        Math.pow((this.actor.positions.pos[1] - this.actor.targetPosY), 2)
    );
}

Behavior.prototype.move = function() {

	var dist = this.distanceToPlayer();
	this.actor.xdelta = 0;
	this.actor.ydelta = 0;
	
	if(this.actor.hitLight.hit == true) {
		this.reacting = true;
		REACTB.move(this.rStr, this.actor);
	}
	else if(this.reacting == false) {
		if( dist < this.actor.aquisitionRange) {
		
			CHASEB.move(this.cStr, this.actor);
			
			if( dist < this.actor.attackRange) {
				
			}
		}
		else
		{
			MOVEB.move(this.mStr, this.actor);
		}
	}
	
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
	
	this.actor.hitSomething.hitLR = false;
	this.actor.hitSomething.hitUD = false;
};