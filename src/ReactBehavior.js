var ReactBehavior = function() {
	this.freeze = function(actor) {
		actor.hitLight.hit = false;
		actor.enemyBehavior.reacting = false;
	};
	
	this.run = function(actor) {
		actor.speed = actor.escapeSpeed;
		
		if (mainGuy.p.pos[0] > actor.positions.pos[0]) {
            actor.xdelta -= actor.speed;
        } else {
            actor.xdelta += actor.speed;
        }
        if (mainGuy.p.pos[1] > actor.positions.pos[1]) {
            actor.ydelta -= actor.speed;
        } else {
            actor.ydelta += actor.speed;
        }
		
		if(actor.enemyBehavior.distanceToPlayer() > actor.escapeRange) {
			actor.hitLight.hit = false;
			actor.enemyBehavior.reacting = false;
			actor.speed = actor.normalSpeed;
			actor.newTarget();
		}
	};
	
	this.chase = function(actor) {
		CHASEB.move(actor.enemyBehavior.cStr, actor);
		actor.hitLight.hit = false;
		actor.enemyBehavior.reacting = false;
	};
	
	this.move = function(movetype, actor) {
		if(movetype == "freeze") {
			this.freeze(actor);
		}
		else if(movetype == "run") {
			this.run(actor);
		}
		else if(movetype == "chase") {
			this.chase(actor);
		}
		else if(movetype == "attack") {

		}
		else { MOVEB.move(actor.enemyBehavior.mStr, actor); } //if any invalid type is given, don't act
	};
}