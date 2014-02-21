function EntityManager() {

	//list of all entities, including the player
	//only list the enemies from the current room!
	//be sure to clear it on room load
	this.entities = new Array();
	//use functions to add to and clear the array

	this.addEntity = function(entity) {
		this.entities.push(entity);
	}
	
	this.reorderEntities = function() {
		this.entities.sort(function(a,b) {
			if (a.y < b.y)
				return -1; //negative numbers get sorted to a smaller index (ie draw first)
			else if (a.y > b.y) //those with greater y values are lower, and draw last
				return 1;
			else return 0;
		});
	}

	//to be called in main draw
	//draws each entity in the surrent draw order
	this.drawAllEntities = function() {
		this.reorderEntities();
		for (var i = 0; i < this.entities.length; i++) {
			this.entities[i].draw();
		}
	}
	
	//to be called in resize (main)
	//should update the positions and collision boxes of all entities
	this.resizeAll = function() {
		for (var i = 0; i < this.entities.length; i++) {
		
		}
	}
	
	this.clear = function() {
		this.entities.length = 0;
	}

}