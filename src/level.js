//level object
//stores all rooms
//has current room for drawing

//constructed with the number of rooms to put in it
//also stores which floor it is
function Level(numberOfRooms, floorNumber) {
	this.nRooms = numberOfRooms;
	this.floorNumber = floorNumber;
	this.layout = new Array();
	this.currentRoom;
	
	//generate code goes here.  Store the layout in this.layout
	//code to create a new room:
/*	var tileGrid = ALLTILES.getRandom(); //or ALLTILES.entrance when you want that specifically
	var newRoom = new Room(tileGrid);
	if (tileGrid == ALLTILES.entrance) {
		newRoom.setLit(true);
	}
*/	
	//when you want to add a door:
	//var door = ""; //can be n, s, e, w
	//newRoom.setDoor(door);
}

//function for loading the next currentRoom
//determine the next room based on the door the player hit
Level.prototype.loadRoom = function() {
	var i=0;
	var j=0;
	var newRoom = layout[i][j];
	this.currentRoom = newRoom;
};