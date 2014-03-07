var ChaseBehavior = function() {

	this.follow = function(actor) {
		var targetX = mainGuy.p.pos[0];
		var targetY = mainGuy.p.pos[1];

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
	};
	
	this.none = function(actor) {};
}