//room object
function Room(gridObj) {
	//just pass the json object of the room you will build
	//list of valid entities, tracked even when you leave the room

	//booleans, for lit
	this.isLit = false;
	
	//array of enemy objects present in the room
	//this remains constant once set
	this.enemies = new Array();
	this.enemyFadeTimer = 0;
	this.enemyFadeDuration = 30;
	//var count = 0;
	this.doors = new Array();
	this.lamp;
	this.obstacles = new Array();
	//this.ob;
	
	//2D grid part, 15x11
	//take info from 2d array passed in and create tiles
	//if this is the entrance room, set isLit to true
	this.grid = new Array();
	for (var i = 0; i < gridObj.length; i++) {
		this.grid[i] = new Array();
		for (var j = 0; j<gridObj[i].length; j++) {
			switch (gridObj[i][j]) {
				case 1:
				//uncomment for sweet wall flipping
					if (i==0) { //if corner, generic tile with appropriate corner
						if (j==0) this.grid[i][j] = new Tile("assets/tiles/wall_castle_5.png", "wall"); //upperleft
						else if (j==14) this.grid[i][j] = new Tile("assets/tiles/wall_castle_6.png", "wall"); //upperright
						else this.grid[i][j] = new Tile("assets/tiles/wall_castle_1.png", "wall"); //top row
					}
					else if (i==10) {
						if (j==0) this.grid[i][j] = new Tile("assets/tiles/wall_castle_8.png", "wall"); //lowerleft
						else if (j==14) this.grid[i][j] = new Tile("assets/tiles/wall_castle_7.png", "wall"); //lowerright
						else this.grid[i][j] = new Tile("assets/tiles/wall_castle_3.png", "wall"); //bottom row
					}
					else if (j==0) {//left side
						this.grid[i][j] = new Tile("assets/tiles/wall_castle_4.png", "wall");
					}
					else if (j==14) {//right side
						this.grid[i][j] = new Tile("assets/tiles/wall_castle_2.png", "wall");
					}
					else this.grid[i][j] = new Tile("assets/tiles/errorTile.png", "error");
					break;
				case 2:
					this.grid[i][j] = new TileFloor();
					break;
				case 3:
					//this.grid[i][j] = new TileLamp();
					this.grid[i][j] = new TileFloor();
					this.lamp = new Lamp(j,i);
					//console.log(" created LAMP --------------------------------------------------------  ");
					break;
				case 4:
					this.grid[i][j] = new TileBlock();
					//count = count+1;
					 this.obstacles.push( new Obstacles(j,i));
					 
					 //this.ob = new Obstacles(j,i);
					 
				//	console.log("OBST -SIZE::::::::::::::::::::::::::::::=> "+this.obstacles.length+ " i " + i + " j " + j);
					break;
				case 5: //example enemy case, add a floor tile and make a new enemy
					this.grid[i][j] = new TileFloor();
					var miles = new Miles();
					// console.log(" created ENEMY --------------------------------------------------------  ");
                
                /* CHANGE BACK
					miles.posX = (MEASURE_UNIT * j);
					miles.posY = (MEASURE_UNIT * i);
			    */
					miles.positions.pos[0] = (MEASURE_UNIT * j);
                    miles.positions.pos[1] = (MEASURE_UNIT * i);
					
					this.enemies.push(miles);
					
					//console.log("size of enemy's is:  "+this.enemies.size());
					break;
				case 6:
					this.grid[i][j] = new TileFloor();
					var trombulentMunge = new TMunge();
					// console.log(" created ENEMY2 --------------------------------------------------------  ");
					trombulentMunge.posX = (MEASURE_UNIT * j);
					trombulentMunge.posY = (MEASURE_UNIT * i);
					this.enemies.push(trombulentMunge);
					break;
				default:
					this.grid[i][j] = new Tile("assets/tiles/errorTile.png", "error");
			}
		}		
	}
	//end grid construction

	//draw function
	//parameters: tile width and height
	this.draw = function() {
	    
	           //collisionWorld.DrawDebugData();  //**** -- TEMP DEBUGGING --
	
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
		

		// Draw the doors.
		for (var i = 0; i < this.doors.length; i++)
		{
			this.doors[i].draw();
		}
		
		for (var i = 0; i < this.obstacles.length; ++i)
        {
            this.obstacles[i].setBox();
        }
		
		//draw lamp
		if ('undefined' != typeof this.lamp)
			this.lamp.draw();
			
		//room object draws dead enemies, entity manager draws them normally, for sorting
		// Fade animation for the 1 second after the room is lit.
		if (thisLevel.currentRoom.isLit && this.enemyFadeTimer < this.enemyFadeDuration)
		{
			var opacity = 1 - (this.enemyFadeTimer/this.enemyFadeDuration);
			
			ctxWorld.globalAlpha = opacity;
			for (var i = 0; i < this.enemies.length; i++)
			{
				this.enemies[i].draw();
			}	
			ctxWorld.globalAlpha = 1.0;
		
			this.enemyFadeTimer++;
		} else if (this.enemyFadeTimer >= this.enemyFadeDuration) {
			this.killEnemies();
		}
	};
	
	this.setDoor = function(door) {
	//change the correct tile in the grid to a door
		switch (door) {
			case "n"://change from generic tile to door type; assign the correctly flipped image
				this.grid[0][7] = new Tile("assets/tiles/door_castle_1.png", "door"); //i'm sorry for hardcoding this...
				break;
			case "s":
				this.grid[10][7] = new Tile("assets/tiles/door_castle_3.png", "door");
				break;
			case "e":
				this.grid[5][14] = new Tile("assets/tiles/door_castle_2.png", "door");
				break;
			case "w":
				this.grid[5][0] = new Tile("assets/tiles/door_castle_4.png", "door");
				break;
			default:
		}
		
		var newDoor = new Door(door);
		this.doors.push(newDoor);
	};
	
	this.setLit = function(lit) {
		this.isLit = lit; //disabled for debugging
		
		if (this.lamp != null)
		{
			this.lamp.image.src = "assets/Lamp1_Lit.png";
		}
		
		if (lit == true)
		{	
			for (var i = 0; i < this.enemies.length; i++)
			{
				this.enemies[i].enemyboundBox.SetActive(false);
				this.enemies[i].dying = true;
				//this.enemies[i].enemyboundBox.SetAwake(true);
			}
		}
	};
	
	this.killEnemies = function() {
		this.enemies.length = 0;
	}
}