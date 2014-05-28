function LastLevel(numberOfRooms, floorNumber) {
	this.nRooms = numberOfRooms;
	this.floorNumber = floorNumber;
	//this.layout = new Array();
	this.currentRoom;
	this.currentX = -1;
	this.currentY = -1;
	mainGuy.light = maxLight;
	
	this.lightsLit = 0;
	this.lightsTotal = 0;
	
	this.turnOffPreviousDoors = false;
	this.previousX = -1;
	this.previousY = -1;
	
	this.doorWalls = new Array();
	this.doorWalls.push(new DoorWall("n"));
	this.doorWalls.push(new DoorWall("e"));
	this.doorWalls.push(new DoorWall("s"));
	this.doorWalls.push(new DoorWall("w"));
	////

	// Randomly generated structure from RandomLevelGeneratorAlgorithm.js
	//var generator = new RandomLevelGeneratorAlgorithm();
	//var structure = generator.createRandomLevel(this.nRooms);
	
	this.structure = createLastLevel();//createRandomLevel(this.nRooms);
	drawLevelToConsole();
	//levelWidth = structure.


    // Height and width of the 2D array will be dependent on the numberOfRooms.
    //var levelHeight = structure.height;
    //var levelWidth = structure.width;
    
	/*var height = 3;
	var width = 1;
    this.layout = new Array(3);
    for (var r = 0; r < height; r++)
    {
        this.layout[r] = new Array(width);
    }
	
	//create each room individually
	var newRoom = new Room(ALLTILES.end1);
	this.layout[0][0] = newRoom;
	this.layout[0][0].setDoor('n');*/
	
    // Make a 2D array to represent the rooms of the level.
    //var levelArray = new Array(structure.height);
    this.layout = new Array(this.structure.height);
    for (var r = 0; r < this.structure.height; r++)
    {
        this.layout[r] = new Array(this.structure.width);
    }

// Use below sample code from Katie to give each active room its room layout and doors.
	var number = 3;
    for (var r = 0; r < this.structure.height; r++)
    {
        for (var c = 0; c < this.structure.width; c++)
        {
            // If this room is an active room...
            if (this.structure.level[r][c].indexOf(this.structure.activeRoom) != -1 || this.structure.level[r][c].indexOf(this.structure.startingRoom) != -1
			|| this.structure.level[r][c].indexOf(this.structure.exitRoom) != -1 || this.structure.level[r][c].indexOf(this.structure.reverseRoom) != -1)
            {
				console.log("number = " + number);
				if (number == 3) {
					var tileGrid = ALLTILES.end3;
					var newRoom = new Room(tileGrid);
					newRoom.EndRoom = true;
					newRoom.FINALroom = true;
				}
				else if (number == 2) {
					var tileGrid = ALLTILES.end2;
					var newRoom = new Room(tileGrid);
					newRoom.EndRoom = true;
				}
				else if (number == 1) {
					var tileGrid = ALLTILES.end1;
					var newRoom = new Room(tileGrid);
					newRoom.EndRoom = true;
					newRoom.escapeRoom = true;
				}
				number--;
				
				// Set this room to have that room layout.
				this.layout[r][c] = newRoom;
				this.lightsTotal++;

				// If this is the starting room, set it to the currentRoom (denoted by $ as the first char)
				if (this.structure.level[r][c].indexOf(this.structure.startingRoom) != -1)
				{
					var tileGrid = ALLTILES.end1; //end1 for last level entrance
					
					var newRoom = new Room(tileGrid);
					
					newRoom.isEntrance = true;
					//newRoom.lamp = new lightSource(2, 2);
					
					// Set this room to have that room layout.
					this.layout[r][c] = newRoom;
					
					// Set the setLit to be true for this room.
					newRoom.setLit(true);
					
					this.currentRoom = this.layout[r][c];
					this.currentX = c;
					this.currentY = r;
				}
				
				// If this is the exit room, set it as an exit room(denoted by X as the first char)
				if (this.structure.level[r][c].indexOf(this.structure.exitRoom) != -1)
				{
					var tileGrid = ALLTILES.exit1;
					
					var newRoom = new Room(tileGrid);
					
					newRoom.isExit = true;
					
					// Set this room to have that room layout.
					this.layout[r][c] = newRoom;
					
					// Set the setLit to be true for this room.
					newRoom.setLit(false);
				}
				
				if (this.structure.level[r][c].indexOf(this.structure.reverseRoom) != -1)
				{
					var tileGrid = ALLTILES.reverseStart;
					
					var newRoom = new Room(tileGrid);
					
					newRoom.isReverseDarkness = true;
					
					//newRoom.isLit = true;
					
					// Set this room to have that room layout.
					this.layout[r][c] = newRoom;
					
					// Set the setLit to be true for this room.
					newRoom.setLit(true);
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
    
    this.checkDoorWalls(this);
    this.checkLitDoors(this);
    
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

//Level.proto


//function roomNorthExists(){
//	return this.structure.level[this.currentY-1][this.currentX].indexOf(this.structure.activeRoom) != -1 ||
//		   this.structure.level[this.currentY-1][this.currentX].indexOf(this.structure.startingRoom) != -1;
//}



//Level.prototype.roomNorthExists = function() {
function roomNorthExists(level){
	if (level.currentY > 0)
	{
		var currentRoom = level.layout[level.currentY][level.currentX];
		
		for (i = 0; i < currentRoom.doors.length; i++)
		{
			if (currentRoom.doors[i].side == "n")
			{
				return true;
			}
		}
		
		//if (level.structure.level[level.currentY-1][level.currentX].indexOf(level.structure.activeRoom) != -1 ||
		//	   level.structure.level[level.currentY-1][level.currentX].indexOf(level.structure.startingRoom) != -1)
		//		return true;
	}
	
	return false;
}

//Level.prototype.roomEastExists = function() {
function roomEastExists(level){
	if (level.currentX < level.structure.width-1)
	{
		var currentRoom = level.layout[level.currentY][level.currentX];
		
		for (i = 0; i < currentRoom.doors.length; i++)
		{
			if (currentRoom.doors[i].side == "e")
			{
				return true;
			}
		}
		
		//if(level.structure.level[level.currentY][level.currentX+1].indexOf(level.structure.activeRoom) != -1 ||
		//   level.structure.level[level.currentY][level.currentX+1].indexOf(level.structure.startingRoom) != -1)
		//		return true;
	}
	
	return false;
}

//Level.prototype.roomSouthExists = function() {
function roomSouthExists(level){
	if (level.currentY < level.structure.height-1)
	{
		var currentRoom = level.layout[level.currentY][level.currentX];
		
		for (i = 0; i < currentRoom.doors.length; i++)
		{
			if (currentRoom.doors[i].side == "s")
			{
				return true;
			}
		}
		
		//if(level.structure.level[level.currentY+1][level.currentX].indexOf(level.structure.activeRoom) != -1 ||
		//   level.structure.level[level.currentY+1][level.currentX].indexOf(level.structure.startingRoom) != -1)
		//		return true;
	}
	
	return false;
}

//Level.prototype.roomWestExists = function() {
function roomWestExists(level){
	if (level.currentX > 0)
	{
		var currentRoom = level.layout[level.currentY][level.currentX];
		
		for (i = 0; i < currentRoom.doors.length; i++)
		{
			if (currentRoom.doors[i].side == "w")
			{
				return true;
			}
		}
		
		//if(level.structure.level[level.currentY][level.currentX-1].indexOf(level.structure.activeRoom) != -1 ||
		//   level.structure.level[level.currentY][level.currentX-1].indexOf(level.structure.startingRoom) != -1)
		//		return true;
	}
	
	return false;
}


//Level.prototype.isRoomNorthLit = function() {
function isRoomNorthLit(level){
	return level.layout[level.currentY-1][level.currentX].isLit;
}

//Level.prototype.isRoomEastLit = function() {
function isRoomEastLit(level){
	return level.layout[level.currentY][level.currentX+1].isLit;
}

//Level.prototype.isRoomSouthLit = function() {
function isRoomSouthLit(level){
	return level.layout[level.currentY+1][level.currentX].isLit;
}

//Level.prototype.isRoomWestLit = function() {
function isRoomWestLit(level){
	return level.layout[level.currentY][level.currentX-1].isLit;
}

LastLevel.prototype.goToNorthRoom = function() {
	if (this.currentY > 0)
	{
		if(this.structure.level[this.currentY-1][this.currentX].indexOf(this.structure.activeRoom) != -1 ||
		   this.structure.level[this.currentY-1][this.currentX].indexOf(this.structure.startingRoom) != -1 ||
		   this.structure.level[this.currentY-1][this.currentX].indexOf(this.structure.exitRoom) != -1 ||
		   this.structure.level[this.currentY-1][this.currentX].indexOf(this.structure.reverseRoom) != -1)
		{
			this.turnOffHitboxesForCurrentRoom();
			
			mainGuy.p.pos[1] = 8 * GAME_HEIGHT/11;
			
			this.currentY--;
			this.currentRoom = this.layout[this.currentY][this.currentX];
			//need to add enemies to the manager!
			entityManager.clearEnemies();
			for (var i = 0; i<this.currentRoom.enemies.length; i++) {
				//console.log("going to push enemy");
				entityManager.addEntity(this.currentRoom.enemies[i]);
			}
			
			// Gives full light meter if the entered room is the starting room.
			this.giveLightMeter();
			
			// Check the entered room's walls to create doorWall hitboxes or not.
			this.checkDoorWalls(this);
			
			// Check if adjacent doors are lit.
			this.checkLitDoors(this);
			
			// Fade animation to transition between rooms.
			this.fade();
		}
	}
}
LastLevel.prototype.goToEastRoom = function() {
	//if (this.currentX < 3)
	if (this.currentX < this.structure.width-1)
	{
		if(this.structure.level[this.currentY][this.currentX+1].indexOf(this.structure.activeRoom) != -1 ||
		   this.structure.level[this.currentY][this.currentX+1].indexOf(this.structure.startingRoom) != -1 ||
		   this.structure.level[this.currentY][this.currentX+1].indexOf(this.structure.exitRoom) != -1 ||
		   this.structure.level[this.currentY][this.currentX+1].indexOf(this.structure.reverseRoom) != -1)
		{
			this.turnOffHitboxesForCurrentRoom();
			
			mainGuy.p.pos[0] = 1 * GAME_WIDTH/15;
			
			this.currentX++;
			this.currentRoom = this.layout[this.currentY][this.currentX];
			//need to add enemies to the manager!
			entityManager.clearEnemies();
			for (var i = 0; i<this.currentRoom.enemies.length; i++) {
				//console.log("going to push enemy");
				entityManager.addEntity(this.currentRoom.enemies[i]);
			}
			
			// Gives full light meter if the entered room is the starting room.
			this.giveLightMeter();
			
			// Check the entered room's walls to create doorWall hitboxes or not.
			this.checkDoorWalls(this);
			
			// Check if adjacent doors are lit.
			this.checkLitDoors(this);
			
			// Fade animation to transition between rooms.
			this.fade();
		}
	}
}
LastLevel.prototype.goToSouthRoom = function() {
	//if (this.currentY < 3)
	if (this.currentY < this.structure.height-1)
	{
		if(this.structure.level[this.currentY+1][this.currentX].indexOf(this.structure.activeRoom) != -1 ||
		   this.structure.level[this.currentY+1][this.currentX].indexOf(this.structure.startingRoom) != -1 ||
		   this.structure.level[this.currentY+1][this.currentX].indexOf(this.structure.exitRoom) != -1 ||
		   this.structure.level[this.currentY+1][this.currentX].indexOf(this.structure.reverseRoom) != -1)
		{
			this.turnOffHitboxesForCurrentRoom();
			
			mainGuy.p.pos[1] = 1 * GAME_HEIGHT/11;
			
			this.currentY++;
			this.currentRoom = this.layout[this.currentY][this.currentX];
			//need to add enemies to the manager!
			entityManager.clearEnemies();
			for (var i = 0; i<this.currentRoom.enemies.length; i++) {
				//console.log("going to push enemy");
				entityManager.addEntity(this.currentRoom.enemies[i]);
			}
			
			// Gives full light meter if the entered room is the starting room.
			this.giveLightMeter();
			
			// Check the entered room's walls to create doorWall hitboxes or not.
			this.checkDoorWalls(this);
			
			// Check if adjacent doors are lit.
			this.checkLitDoors(this);
			
			// Fade animation to transition between rooms.
			this.fade();
		}
	}
}
LastLevel.prototype.goToWestRoom = function() {
	if (this.currentX > 0)
	{
		if(this.structure.level[this.currentY][this.currentX-1].indexOf(this.structure.activeRoom) != -1 ||
		   this.structure.level[this.currentY][this.currentX-1].indexOf(this.structure.startingRoom) != -1 ||
		   this.structure.level[this.currentY][this.currentX-1].indexOf(this.structure.exitRoom) != -1 ||
		   this.structure.level[this.currentY][this.currentX-1].indexOf(this.structure.reverseRoom) != -1)
		{
			this.turnOffHitboxesForCurrentRoom();
			
			mainGuy.p.pos[0] = 10 * GAME_WIDTH/15;
			
			this.currentX--;
			this.currentRoom = this.layout[this.currentY][this.currentX];
			//need to add enemies to the manager!
			entityManager.clearEnemies();
			for (var i = 0; i<this.currentRoom.enemies.length; i++) {
				//console.log("going to push enemy");
				entityManager.addEntity(this.currentRoom.enemies[i]);
			}
			
			// Gives full light meter if the entered room is the starting room.
			this.giveLightMeter();
			
			// Check the entered room's walls to create doorWall hitboxes or not.
			this.checkDoorWalls(this);
			
			// Check if adjacent doors are lit.
			this.checkLitDoors(this);
			
			// Fade animation to transition between rooms.
			this.fade();
		}
	}
}

LastLevel.prototype.turnOffHitboxesForCurrentRoom = function()
{
	// Turn off the door hitboxes for the current room.
	//for (var i = 0; i < this.layout[this.currentY][this.currentX].doors.length; i++)
	//{
	//	this.layout[this.currentY][this.currentX].doors[i].doorboundBox.SetActive(false);
	//}
	this.turnOffPreviousDoors = true;
	this.previousX = this.currentX;
	this.previousY = this.currentY;
	
	//if (this.layout[this.currentY][this.currentX].isReverseDarkness == true) {
	//	console.log("hi");
	//	this.layout[this.currentY][this.currentX].killEnemies();
	//	entityManager.clearEnemies();
	//}
	
	// Turn off the enemies hitboxes for the current room.
	for (var i = 0; i < this.layout[this.currentY][this.currentX].enemies.length; i++)
	{
		this.layout[this.currentY][this.currentX].enemies[i].enemyboundBox.SetActive(false);
	}
	
	// Turn off the lamp hitboxes for the current room.
	if (this.layout[this.currentY][this.currentX].lamp != null)
		this.layout[this.currentY][this.currentX].lamp.lampboundBox.SetActive(false);
		
	// Turn off the exit hitbox for the current room.
	if (this.layout[this.currentY][this.currentX].exit != null)
		this.layout[this.currentY][this.currentX].exit.exitboundBox.SetActive(false);
		
	
	
	for (var i = 0; i < this.layout[this.currentY][this.currentX].obstacles.length; ++i)
	{
	    this.layout[this.currentY][this.currentX].obstacles[i].obstacleboundBox.SetActive(false);
	}
}

LastLevel.prototype.checkDoorWalls = function(level)
//function checkDoorWalls()
{
	if (roomNorthExists(level))
		this.doorWalls[0].doorWallboundBox.SetActive(false);
	else
		this.doorWalls[0].doorWallboundBox.SetActive(true);
	
	if (roomEastExists(level))
		this.doorWalls[1].doorWallboundBox.SetActive(false)
	else
		this.doorWalls[1].doorWallboundBox.SetActive(true);
	
	if (roomSouthExists(level))
		this.doorWalls[2].doorWallboundBox.SetActive(false);
	else
		this.doorWalls[2].doorWallboundBox.SetActive(true);
	
	if (roomWestExists(level))
		this.doorWalls[3].doorWallboundBox.SetActive(false);
	else
		this.doorWalls[3].doorWallboundBox.SetActive(true);
	
}

LastLevel.prototype.checkLitDoors = function(level)
//function checkLitDoors()
{
	//drawLevelToConsole();
	//if (roomNorthExists(level))
	//{
	//	if (isRoomNorthLit(level))
	//	{
	//		this.layout[this.currentY][this.currentX].setDoorAsLit("n");
	//		console.log("north room is lit");
	//	}
	//	else
	//	{
	//		console.log("north room is not lit");
	//	}
	//}
	//else
	//{
	//	console.log("north room does not exist");
	//}
	
	if (roomNorthExists(level))
	{
		if (isRoomNorthLit(level))
		{
			this.layout[this.currentY][this.currentX].setDoorAsLit("n");
		}
		else
		{
			this.layout[this.currentY][this.currentX].setDoorAsNotLit("n");
		}
	}
	
	if (roomEastExists(level))
	{
		if (isRoomEastLit(level))
		{
			this.layout[this.currentY][this.currentX].setDoorAsLit("e");
		}
		else
		{
			this.layout[this.currentY][this.currentX].setDoorAsNotLit("e");
		}
	}
	
	if (roomSouthExists(level))
	{
		if (isRoomSouthLit(level))
		{
			this.layout[this.currentY][this.currentX].setDoorAsLit("s");
		}
		else
		{
			this.layout[this.currentY][this.currentX].setDoorAsNotLit("s");
		}
	}
	
	if (roomWestExists(level))
	{
		if (isRoomWestLit(level))
		{
			this.layout[this.currentY][this.currentX].setDoorAsLit("w");
		}
		else
		{
			this.layout[this.currentY][this.currentX].setDoorAsNotLit("w");
		}
	}
}

LastLevel.prototype.giveLightMeter = function()
{
	//if (this.structure[this.currentY][this.currentX].indexOf(this.structure.startingRoom) != -1) {
	if (this.currentRoom.isEntrance) {
		mainGuy.light = maxLight;
	}
}

LastLevel.prototype.fade = function()
{
	gameState = 7;
}

var interval;
// scripted sequences for final level
LastLevel.prototype.darkRaitoAttack = function() {
	/*var dR = new darkRaito();
	dR.positions.pos[0] = MEASURE_UNIT * 7;
	dR.positions.pos[1] = MEASURE_UNIT * 3;
	entityManager.addEntity(dR);*/
	
	setTimeout( function() { //knocks the lantern away
		flagEndSequenceInitiated = true;
		//mainGuy.light = 0;
	}, 2000);
	
	/*setTimeout(function() { //stop raito drawing
		clearInterval(sequence);
	}, 4500);*/
}
LastLevel.prototype.roomFleeingSetup = function() {
	//spawn in enemies at top doorway
	//clear enemies
	if ('undefined' != typeof interval) clearInterval(interval);
	entityManager.clearEnemies();
	//spawn new enemies
	setTimeout(function() {
		//console.log("timeout fleeing ttriggered");
		interval = setInterval(function() {
			var spawnIn = new RedMiles();
			spawnIn.positions.pos[0] = MEASURE_UNIT * 7;
			spawnIn.positions.pos[1] = MEASURE_UNIT * 1;
			//add to entitymanager
			entityManager.addEntity(spawnIn);
			//console.log("spawnd miles");
		}, 2000);
	}, 1000);
}