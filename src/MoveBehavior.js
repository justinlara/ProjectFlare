var MoveBehavior = function(){

	this.wander = function(actor) {
		
		if(Math.floor(actor.positions.pos[0]) < Math.floor(actor.targetPosX)){
			actor.positions.pos[0] += actor.speed;
		} else {
			actor.positions.pos[0] -= actor.speed;
		}
		if(Math.floor(actor.positions.pos[1]) < Math.floor(actor.targetPosY)){
			actor.positions.pos[1] += actor.speed;
		} else {
			actor.positions.pos[1] -= actor.speed;
		}
		
		if( (Math.floor(actor.positions.pos[1]) == Math.floor(actor.targetPosY)) || (Math.floor(actor.positions.pos[0]) == Math.floor(actor.targetPosX)) ) {
			actor.newTarget();
		}
	};

	this.move = function(movetype, actor) {
		if(movetype == "wander") {
			this.wander(actor);
		}
		
		else { } //if any invalid type is given, don't act
	};
};