var ChaseBehavior = function() {

	this.follow = function(actor) {
		var targetX = mainGuy.p.pos[0];
		var targetY = mainGuy.p.pos[1];
/*  CHAGE BACK
		if (targetX > actor.posX) {
			actor.posX += actor.speed;
		} else {
			actor.posX -= actor.speed;
		}
		if (targetY > actor.posY) {
			actor.posY += actor.speed;
		} else {
			actor.posY -= actor.speed;
		}
*/
       if (targetX > actor.positions.pos[0]) {
            actor.positions.pos[0] += actor.speed;
        } else {
            actor.positions.pos[0] -= actor.speed;
        }
        if (targetY > actor.positions.pos[1]) {
            actor.positions.pos[1] += actor.speed;
        } else {
            actor.positions.pos[1] -= actor.speed;
        }

   		
	};
	
	this.none = function(actor) {};
}