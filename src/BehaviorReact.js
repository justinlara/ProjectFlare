var ReactBehavior = function() {
	this.freeze = function(actor) {
		actor.entityBehavior.reacting = false;
	};
	
	this.run = function(actor) {
		actor.speed = actor.escapeSpeed;
		
		//if ((mainGuy.p.pos[0] == actor.targetPosX && mainGuy.p.pos[1] == actor.targetPosY) && actor.hitLight.hit == false) {}
		//else
		//if the enemy is in range, and being hit by the light
		if ((actor.hitLight.hit == true) && (actor.entityBehavior.dist <= actor.escapeRange)) {
			//and the main guy is moving
			if ((mainGuy.p.pos[0] == actor.targetPosX && mainGuy.p.pos[1] == actor.targetPosY) || (mainGuy.facingChanged == false)) {
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
		}
		else {
			if(
				(mainGuy.facingDirection == "left" && (actor.positions.pos[0] > mainGuy.p.pos[0]))
				|| (mainGuy.facingDirection == "right" && (actor.positions.pos[0] < mainGuy.p.pos[0]))
				|| (mainGuy.facingDirection == "up" && (actor.positions.pos[1] > mainGuy.p.pos[1]))
				|| (mainGuy.facingDirection == "down" && (actor.positions.pos[1] < mainGuy.p.pos[1]))
				) //if condition end
			{
				actor.entityBehavior.reacting = false;
				actor.speed = actor.normalSpeed;				
			} //if end
		}
	};
	
	this.runFar = function(actor) {
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
		
		if(actor.entityBehavior.reactDist > actor.escapeRange) {
			actor.entityBehavior.reacting = false;
			actor.speed = actor.normalSpeed;
		}
	};
	
	this.chase = function(actor) {
		CHASEB.move(actor.entityBehavior.cStr, actor);
		actor.entityBehavior.reacting = false;
	};
	
	this.move = function(movetype, actor) {
		if(movetype == "freeze") {
			this.freeze(actor);
		}
		else if(movetype == "run") {
			this.run(actor);
		}
		else if(movetype == "runFar") {
			this.runFar(actor);
		}
		else if(movetype == "chase") {
			this.chase(actor);
		}
		else if(movetype == "attack") {

		}
		else { MOVEB.move(actor.entityBehavior.mStr, actor); } //if any invalid type is given, activate default movement
	};
}