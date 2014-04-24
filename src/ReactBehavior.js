var ReactBehavior = function() {
	this.freeze = function(actor) {
		actor.hitLight.hit = false;
		actor.enemyBehavior.reacting = false;
	};
	
	this.run = function(actor) {
		actor.speed = actor.escapeSpeed;
		
		if (mainGuy.p.pos[0] > actor.positions.pos[0]) {
            actor.positions.pos[0] -= actor.speed;
        } else {
            actor.positions.pos[0] += actor.speed;
        }
        if (mainGuy.p.pos[1] > actor.positions.pos[1]) {
            actor.positions.pos[1] -= actor.speed;
        } else {
            actor.positions.pos[1] += actor.speed;
        }
		
		if(actor.enemyBehavior.distanceToPlayer() > actor.escapeRange) {
			console.log("Escaped");
			actor.hitLight.hit = false;
			actor.enemyBehavior.reacting = false;
			actor.speed = actor.normalSpeed;
			actor.newTarget();
		}
	};
	
	this.move = function(movetype, actor) {
		if(movetype == "freeze") {
			this.freeze(actor);
		}
		else if(movetype == "run") {
			this.run(actor);
		}
		else if(movetype == "chase") {
			CHASEB.move(actor.enemyBehavior.cStr, actor);
		}
		else if(movetype == "attack") {

		}
		else { MOVEB.move(actor.enemyBehavior.mStr, actor); } //if any invalid type is given, don't act
	};
}