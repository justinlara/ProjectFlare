var MoveBehavior = function(){

	this.wander = function(actor) {
		//console.log("move behavior: wander");
		actor.posX += actor.speed;
		actor.posY += actor.speed;
	};
	
	this.none = function(actor) {};

};