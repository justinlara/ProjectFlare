function Behavior(actor, MoveType, ChaseType, AttackType, ReactType, RunType, SpecialType) {

	console.log("creation success");
	
	this.actor = actor;
	
	this.inRange = false;
	
	this.mStr = MoveType;
	this.cStr = ChaseType;
	this.aStr = AttackType;
	this.rStr = ReactType;
	this.runStr = RunType;
	this.sStr = SpecialType;
	
	this.react = function(){};
}

Behavior.prototype.distanceToPlayer = function() {
	var targetX = mainGuy.p.pos[0];
	var targetY = mainGuy.p.pos[1];
 
 /* CHANGE BACK
	return Math.sqrt(
		Math.pow((this.actor.posX - targetX), 2)
			+
		Math.pow((this.actor.posY - targetY), 2)
	);
 */

 return Math.sqrt(
        Math.pow((this.actor.positions.pos[0] - targetX), 2)
            +
        Math.pow((this.actor.positions.pos[1] - targetY), 2)
    );

}

Behavior.prototype.move = function() {

	var dist = this.distanceToPlayer();
	
	if(dist < this.actor.aquisitionRange) {
		this.inRange = true;
	} else {
		this.inRange = false;
	}

	if(this.inRange) {
		if( dist < this.actor.attackRange) {
		
		} else {
			CHASEB.move(this.cStr, this.actor);
		}
	} else {
		MOVEB.move(this.mStr, this.actor);
	}
};