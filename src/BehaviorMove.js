var MoveBehavior = function(){

	this.wander = function(actor) {
		
		if(Math.floor(actor.positions.pos[0]) < Math.floor(actor.targetPosX)){
			actor.xdelta += actor.speed;
		} else {
			actor.xdelta -= actor.speed;
		}
		if(Math.floor(actor.positions.pos[1]) < Math.floor(actor.targetPosY)){
			actor.ydelta += actor.speed;
		} else {
			actor.ydelta -= actor.speed;
		}
		
		if( actor.entityBehavior.distanceToTarget() < (MEASURE_UNIT/2)) {
			actor.newTarget();
		}
	};

	this.move = function(movetype, actor) {
		if(movetype == "wander") {
			this.wander(actor);
		}
		
		else {}  //if any invalid type is given, don't act
	};
};