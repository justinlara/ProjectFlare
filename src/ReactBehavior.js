var ReactBehavior = function() {
	this.freeze = function(actor) {
		
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