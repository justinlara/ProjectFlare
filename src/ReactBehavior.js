var ReactBehavior = function() {
	this.freeze = function(actor) {
	};
	
	this.move = function(movetype, actor) {
		if(movetype == "freeze") {
			this.freeze(actor);
		}
		if(movetype == "run") {
			this.run(actor);
		}
		if(movetype == "chase") {

		}
		if(movetype == "attack") {

		}
		else { MOVEB.move(actor.enemyBehavior.mStr, actor); } //if any invalid type is given, don't act
	};
}