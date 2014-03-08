function EntityManager() {

	//list of all entities, including the player
	//only list the enemies from the current room!
	//be sure to clear it on room load
	this.entities = new Array();
	//use functions to add to and clear the array

	this.addEntity = function(entity) {
		this.entities.push(entity);
		//console.log("entity pushed");
	};
	
	this.reorderEntities = function() {
		this.entities.sort(function(a,b) {
			console.log("sorting");
			return a.posY - b.posY;
		});
	};

	//to be called in main draw
	//draws each entity in the surrent draw order
	this.drawAllEntities = function() {
		this.reorderEntities();//not getting pushed?
		//console.log("entities "+this.entities.length);
		for (var i = 0; i < this.entities.length; i++) {
			this.entities[i].draw();
		}
	};
	
	this.clear = function() {
		this.entities.length = 0;
	};
	
	//for erasing enemies when the lights go on or the room is switched
	this.clearEnemies = function() {
		for (var i = 0;i<this.entities.length;i++) {
			if (this.entities[i] instanceof Player) {
				this.entities[0] = this.entities[i];
				this.entities.splice(1, this.entities.length);
			}
		}
	}

}