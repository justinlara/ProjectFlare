var MoveBehavior = function(){

	this.wander = function(actor) {
		//console.log("move behavior: wander");
	
	/* CHANGE BACK	
		actor.posX += actor.speed;
		actor.posY += actor.speed;
	*/	
		actor.positions.pos[0] += actor.speed;
        actor.positions.pos[1] += actor.speed;
	};
	
	this.none = function(actor) {};

};