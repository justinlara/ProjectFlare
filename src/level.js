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
	////

	// Randomly generated structure from RandomLevelGeneratorAlgorithm.js
	//var generator = new RandomLevelGeneratorAlgorithm();
	//var structure = generator.createRandomLevel(this.nRooms);
	
	var structure = createRandomLevel(this.nRooms);
	drawLevelToConsole();


    // Height and width of the 2D array will be dependent on the numberOfRooms.
    //var levelHeight = structure.height;
    //var levelWidth = structure.width;
    
    // Make a 2D array to represent the rooms of the level.
    //var levelArray = new Array(structure.height);
    layout = new Array(structure.height);
    for (var r = 0; r < structure.height; r++)
    {
        layout[r] = new Array(structure.width);
    }

// Use below sample code from Katie to give each active room its room layout and doors.
    for (var r = 0; r < structure.height; r++)
    {
        for (var c = 0; c < structure.width; c++)
        {
            // If this room is an active room...
            if (structure.level[r][c].indexOf(structure.activeRoom) != -1 || structure.level[r][c].indexOf(structure.startingRoom) != -1)
            {
		// Give this room its room layout.
		var tileGrid = ALLTILES.entrance; //ALLTILES.getRandom(); //or ALLTILES.entrance when you want that specifically
		var newRoom = new Room(tileGrid);
		
		// Set this room to have that room layout.
		layout[r][c] = newRoom;
		
		// Set the setLit to be true for this room.
		if (tileGrid == ALLTILES.entrance) {
			newRoom.setLit(true);
		}
		
		// If this is the starting room, set it to the currentRoom (denoted by $ as the first char)
             	if (structure.level[r][c].indexOf(structure.startingRoom) != -1){
			this.currentRoom = layout[r][c];
		}
		
		// Give this room its doors.
		for (i = 1; i < structure.level[r][c].length; i++)
		{	
			var door = structure.level[r][c].substring(i, i+1); //can be n, s, e, w
			layout[r][c].setDoor(door);
		}
            }
        }
    }

////
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