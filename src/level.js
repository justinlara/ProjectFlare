//level object
//stores all rooms
//has current room for drawing


//constructed with the number of rooms to put in it
//also stores which floor it is
function Level(numberOfRooms, floorNumber) {
	this.nRooms = numberOfRooms;
	this.floorNumber = floorNumber;
	//this.layout = new Array();
	this.currentRoom;
	this.currentX = -1;
	this.currentY = -1;
	////

	// Randomly generated structure from RandomLevelGeneratorAlgorithm.js
	//var generator = new RandomLevelGeneratorAlgorithm();
	//var structure = generator.createRandomLevel(this.nRooms);
	
	this.structure = createRandomLevel(this.nRooms);
	drawLevelToConsole();


    // Height and width of the 2D array will be dependent on the numberOfRooms.
    //var levelHeight = structure.height;
    //var levelWidth = structure.width;
    
    // Make a 2D array to represent the rooms of the level.
    //var levelArray = new Array(structure.height);
    this.layout = new Array(this.structure.height);
    for (var r = 0; r < this.structure.height; r++)
    {
        this.layout[r] = new Array(this.structure.width);
    }

// Use below sample code from Katie to give each active room its room layout and doors.
    for (var r = 0; r < this.structure.height; r++)
    {
        for (var c = 0; c < this.structure.width; c++)
        {
            // If this room is an active room...
            if (this.structure.level[r][c].indexOf(this.structure.activeRoom) != -1 || this.structure.level[r][c].indexOf(this.structure.startingRoom) != -1)
            {
		// Give this room its room layout.
		//var tileGrid = ALLTILES.entrance; //ALLTILES.getRandom(); //or ALLTILES.entrance when you want that specifically
		var tileGrid = ALLTILES.getWeighted(this.floorNumber);
		
		var newRoom = new Room(tileGrid);
		
		// Set this room to have that room layout.
		this.layout[r][c] = newRoom;
		
		// If this is the starting room, set it to the currentRoom (denoted by $ as the first char)
		if (this.structure.level[r][c].indexOf(this.structure.startingRoom) != -1)
		{
			var tileGrid = ALLTILES.entrance;
			
			var newRoom = new Room(tileGrid);
			
			// Set this room to have that room layout.
			this.layout[r][c] = newRoom;
			
			// Set the setLit to be true for this room.
			newRoom.setLit(true);
			
			this.currentRoom = this.layout[r][c];
			this.currentX = c;
			this.currentY = r;
		}
		
		// Give this room its doors.
		for (i = 1; i < this.structure.level[r][c].length; i++)
		{	
			var door = this.structure.level[r][c].substring(i, i+1); //can be n, s, e, w, or a space which represents no door
			
			// If this char is not a space...
			if (door != "\u00A0")
			{
				this.layout[r][c].setDoor(door);
			}
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
	
	//must add enemies to entity manager as well
	for (var i = 0; i<this.currentRoom.enemies.length; i++) {
		entityManager.addEntity(currentRoom.enemies[i]);
	}
};

Level.prototype.goToNorthRoom = function() {
	if (this.currentY > 0)
	{
		if(this.structure.level[this.currentY-1][this.currentX].indexOf(this.structure.activeRoom) != -1 ||
		   this.structure.level[this.currentY-1][this.currentX].indexOf(this.structure.startingRoom) != -1)
		{
			for (var i = 0; i < this.layout[this.currentY][this.currentX].doors.length; i++)
			{
				this.layout[this.currentY][this.currentX].doors[i].doorboundBox.SetActive(false);
			}
			
			mainGuy.p.pos[1] = 8 * GAME_HEIGHT/11;
			
			this.currentY--;
			this.currentRoom = this.layout[this.currentY][this.currentX];
		}
	}
}
Level.prototype.goToEastRoom = function() {
	if (this.currentX < 3)
	//if (this.currentX < this.structure.level.width-1)
	{
		if(this.structure.level[this.currentY][this.currentX+1].indexOf(this.structure.activeRoom) != -1 ||
		   this.structure.level[this.currentY][this.currentX+1].indexOf(this.structure.startingRoom) != -1)
		{
			for (var i = 0; i < this.layout[this.currentY][this.currentX].doors.length; i++)
			{
				this.layout[this.currentY][this.currentX].doors[i].doorboundBox.SetActive(false);
			}
			
			mainGuy.p.pos[0] = 1 * GAME_WIDTH/15;
			
			this.currentX++;
			this.currentRoom = this.layout[this.currentY][this.currentX];
		}
	}
}
Level.prototype.goToSouthRoom = function() {
	if (this.currentY < 3)
	//if (this.currentY < this.structure.level.height-1)
	{
		if(this.structure.level[this.currentY+1][this.currentX].indexOf(this.structure.activeRoom) != -1 ||
		   this.structure.level[this.currentY+1][this.currentX].indexOf(this.structure.startingRoom) != -1)
		{
			for (var i = 0; i < this.layout[this.currentY][this.currentX].doors.length; i++)
			{
				this.layout[this.currentY][this.currentX].doors[i].doorboundBox.SetActive(false);
			}
			
			mainGuy.p.pos[1] = 1 * GAME_HEIGHT/11;
			
			this.currentY++;
			this.currentRoom = this.layout[this.currentY][this.currentX];
		}
	}
}
Level.prototype.goToWestRoom = function() {
	if (this.currentX > 0)
	{
		if(this.structure.level[this.currentY][this.currentX-1].indexOf(this.structure.activeRoom) != -1 ||
		   this.structure.level[this.currentY][this.currentX-1].indexOf(this.structure.startingRoom) != -1)
		{
			for (var i = 0; i < this.layout[this.currentY][this.currentX].doors.length; i++)
			{
				this.layout[this.currentY][this.currentX].doors[i].doorboundBox.SetActive(false);
			}
			
			mainGuy.p.pos[0] = 10 * GAME_WIDTH/15;
			
			this.currentX--;
			this.currentRoom = this.layout[this.currentY][this.currentX];
		}
	}
}