//room object
function Room() {
	//list of valid entities, tracked even when you leave the room

	//booleans, for lit, and is exit on that side (for door drawing)
	this.isLit = false;
	this.exitN;
	this.exitS;
	this.exitE;
	this.exitW;
	
	//2D grid part, 15x11
	//take info from json data passed in and create tiles
	//if this is the entrance room, set isLit to true
	

	//draw function
	Room.prototype.draw = function() {
		//for each tile, draw it onto world
	};
}