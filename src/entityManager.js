function EntityManager() {

	//list of all entities, including the player
	//only list the enemies from the current room!
	//be sure to clear it on room load
	this.entities = new Array();
	//use functions to add to and clear the array

	this.addEntity = function(entity) {
		this.entities.push(entity);
	};
	
	this.reorderEntities = function() {
		this.entities.sort(function(a,b) {
			return a.posY - b.posY;
		});
	};

	//to be called in main draw
	//draws each entity in the surrent draw order
	this.drawAllEntities = function() {
		//this.reorderEntities();
		for (var i = 0; i < this.entities.length; i++) {
			this.entities[i].draw();
		}
	};
	
	//to be called in resize (main)
	//should update the positions and collision boxes of all entities
	this.resizeAll = function() {
		for (var i = 0; i < this.entities.length; i++) {
		
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
	
	this.enemyDeath = function() {
		for (var i = 0;i<this.entities.length;i++) {
			if (!this.entities[i] instanceof Player) {
				entities[i].sprite.use('death');
				entities[i].deathState = true;
			}
		}
		
		//this should lock enemies in a death state
		//when finished, clears them out
		setTimeout(function(){
			this.clearEnemies();
			thisLevel.currentRoom.killEnemies();
		},1000);
	}

}