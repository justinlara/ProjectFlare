//room object
function Room(gridObj) {
	//just pass the json object of the room you will build
	//list of valid entities, tracked even when you leave the room

	//booleans, for lit, and if exit on that side (for door drawing)
	this.isLit = false;
	this.exitN;
	this.exitS;
	this.exitE;
	this.exitW;
	
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
				default:
					type = "error";
					img = "assets/errorTile.png";
			}
			this.grid[i][j] = new Tile(img, type);
		}
	}
	

	//draw function
	//parameters: tile width and height
	Room.prototype.draw = function(gw, gh) {	
		//for each tile, draw it onto world
		var gx = 0;
		var gy = 0;
		for (var i = 0; i<this.grid.length; i++) {
			for (var j = 0; j<this.grid[i].length; j++) {
			
				ctxWorld.drawImage(this.grid[i][j].getImage(), gx, gy, gw, gh);
				gx += gw; //update draw position
			}
			gy += gh;
			gx = 0;
		}
		
		//draw doors
	};
}