var ReactBehavior = function() {
	this.freeze = function(actor) {
		actor.hitLight.hit = false;
		actor.entityBehavior.reacting = false;
	};
	
	this.run = function(actor) {
		actor.speed = actor.escapeSpeed;
		
		if (mainGuy.p.pos[0] == actor.targetPosX && mainGuy.p.pos[1] == actor.targetPosY) {
		
		}
		else {
			actor.targetPosX = mainGuy.p.pos[0];
			actor.targetPosY = mainGuy.p.pos[1];
			
			if (actor.targetPosX > actor.positions.pos[0]) {
				actor.xdelta -= actor.speed;
			} else {
				actor.xdelta += actor.speed;
			}
			if (actor.targetPosY > actor.positions.pos[1]) {
				actor.ydelta -= actor.speed;
			} else {
				actor.ydelta += actor.speed;
			}
		}
		
		if(actor.entityBehavior.dist > actor.escapeRange) {
			actor.hitLight.hit = false;
			actor.entityBehavior.reacting = false;
			actor.speed = actor.normalSpeed;
		}
	};
	
	this.chase = function(actor) {
		CHASEB.move(actor.entityBehavior.cStr, actor);
		actor.hitLight.hit = false;
		actor.entityBehavior.reacting = false;
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
		else { MOVEB.move(actor.entityBehavior.mStr, actor); } //if any invalid type is given, activate default movement
	};
}