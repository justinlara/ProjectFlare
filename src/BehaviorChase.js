var ChaseBehavior = function() {

	this.follow = function(actor) {
       if (mainGuy.p.pos[0] > actor.positions.pos[0]) {
            actor.xdelta += actor.speed;
        } else {
            actor.xdelta -= actor.speed;
        }
        if (mainGuy.p.pos[1] > actor.positions.pos[1]) {
			actor.ydelta += actor.speed;
        } else {
			actor.ydelta -= actor.speed;
        }
	};
	
	this.move = function(movetype, actor) {
		if(movetype == "follow") {
			this.follow(actor);
		}
		else { MOVEB.move(actor.entityBehavior.mStr, actor); } //if any invalid type is given, don't act
	};
}