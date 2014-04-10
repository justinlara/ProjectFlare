var MoveBehavior = function(){

	this.wander = function(actor) {
	console.log("TX:" + actor.targetPosX + " AX:" + actor.positions.pos[0] + " TY:" + actor.targetPosY + " AY:" + actor.positions.pos[1]);
		//console.log("move behavior: wander");
	
	/* CHANGE BACK	
		actor.posX += actor.speed;
		actor.posY += actor.speed;
	*/	
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
		
		if( (Math.floor(actor.positions.pos[1]) == Math.floor(actor.targetPosY)) || (Math.floor(actor.positions.pos[0]) < Math.floor(actor.targetPosX)) ) {
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