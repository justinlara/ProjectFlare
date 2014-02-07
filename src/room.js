//room object
function Room(gridObj) {
	//just pass the json object of the room you will build
	//list of valid entities, tracked even when you leave the room

	//booleans, for lit
	this.isLit = false;
	
	//array of enemy objects present in the room
	this.enemies = new Array();
	
	//2D grid part, 15x11
	//take info from 2d array passed in and create tiles
	//if this is the entrance room, set isLit to true
	this.grid = new Array();
	for (var i = 0; i < gridObj.length; i++) {
		this.grid[i] = new Array();
		for (var j = 0; j<gridObj[i].length; j++) {
			var img;
			var type;
			switch (gridObj[i][j]) {
				case 1:
					type = "wall";
					img = "assets/tempwall.png";
					break;
				case 2:
					type = "floor";
					img = "assets/tempfloor.png";
					break;
				case 3:
					type = "lamp";
					img = "assets/Lamp1.png";
					break;
				case 4:
					type = "block";
					img = "assets/errorTile.png";;
					break;
				case 5: //example enemy case, add a floor tile and make a new enemy
					type = "floor";
					img = "assets/tempfloor.png";
					var miles = new Enemy();
					miles.posX = (MEASURE_UNIT * j);
					miles.posY = (MEASURE_UNIT * i);
					this.enemies.push(miles);
					break;
				default:
					type = "error";
					img = "assets/errorTile.png";
			}
			this.grid[i][j] = new Tile(img, type);
		}
	}
}	

//draw function
//parameters: tile width and height
Room.prototype.draw = function() {	
	//for each tile, draw it onto world
	var gx = 0;
	var gy = 0;
	var gw = MEASURE_UNIT; //change if we want tiles larger/smaller than 1 unit
	var gh = MEASURE_UNIT;
	for (var i = 0; i<this.grid.length; i++) {
		for (var j = 0; j<this.grid[i].length; j++) {
		
			ctxWorld.drawImage(this.grid[i][j].image, gx, gy, gw, gh);
			gx += gw; //update draw position
		}
		gy += gh;
		gx = 0;
	}
	
	//also handle enemies if the room is not lit
	if (!this.isLit) {
		for (var i = 0; i < this.enemies.length; i++) {
			this.enemies[i].move(); //may want to move this update to an enemy controller object
			this.enemies[i].draw();
		} 
	}
};
	
Room.prototype.setDoor = function(door) {
	//change the correct tile in the grid to a door
	switch (door) {
		case "n":
			this.grid[0][7] = new Tile("assets/errorTile.png", "door"); //i'm sorry for hardcoding this...
			break;
		case "s":
			this.grid[10][7] = new Tile("assets/errorTile.png", "door");
			break;
		case "e":
			this.grid[5][14] = new Tile("assets/errorTile.png", "door");
			break;
		case "w":
			this.grid[5][0] = new Tile("assets/errorTile.png", "door");
			break;
		default:
	}
};
	
Room.prototype.setLit = function(lit) {
	if (lit) { 
		isLit = true; }
	else isLit = false;
}