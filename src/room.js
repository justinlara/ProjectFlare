//room object
function Room(gridObj) {
	//just pass the json object of the room you will build
	//list of valid entities, tracked even when you leave the room
var testbool = true;
	//booleans, for lit
	this.isLit = false;
	
	this.northLit = false;
	this.southLit = false;
	this.eastLit = false;
	this.westLit = false;
	
	this.isEntrance = false;
	this.isExit = false;
	this.exitEffectplayed = false;
	this.EndRoom = false;
	this.FINALroom = false;
	this.escapeRoom = false;
	this.setup = false;
	
	this.isReverseDarkness = false;
	this.setNewGrid = false;
	
	//array of enemy objects present in the room
	//this remains constant once set
	this.enemies = new Array();
	this.critters = new Array();
	this.enemyFadeTimer = 0;
	this.enemyFadeDuration = 50;
	//var count = 0;
	this.doors = new Array();
	this.lamp;

	this.exit;
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
						
						                          //*** COMMENT FOR DEBUGGING (PLACE BACK INTO Tile("")) *****
						                          //
						else this.grid[i][j] = new Tile("assets/tiles/wall_castle_1.png", "wall"); //top row
					}
					else if (i==10) {
						if (j==0) this.grid[i][j] = new Tile("assets/tiles/wall_castle_8.png", "wall"); //lowerleft
						else if (j==14) this.grid[i][j] = new Tile("assets/tiles/wall_castle_7.png", "wall"); //lowerright
						
						                      //*** COMMENT FOR DEBUGGING (PLACE BACK INTO Tile("")) *****
						                      //
						else this.grid[i][j] = new Tile("assets/tiles/wall_castle_3.png", "wall"); //bottom row
					}
					else if (j==0) {//left side
					                          
					                          //*** COMMENT FOR DEBUGGING (PLACE BACK INTO Tile("")) ***** 
					                          //
						this.grid[i][j] = new Tile("assets/tiles/wall_castle_4.png", "wall");
					}
					else if (j==14) {//right side
					                           
					                           //*** COMMENT FOR DEBUGGING (PLACE BACK INTO Tile("")) *****
					                           //
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
					//this.grid[i][j] = new TileBlock();
					this.grid[i][j] = new TileFloor();
					//count = count+1;
					 this.obstacles.push( new Obstacles(j,i));
					 
					 //this.ob = new Obstacles(j,i);
					 
				//	console.log("OBST -SIZE::::::::::::::::::::::::::::::=> "+this.obstacles.length+ " i " + i + " j " + j);
					break;
				case 5: //example enemy case, add a floor tile and make a new enemy
					this.grid[i][j] = new TileFloor();
					var miles = new Miles();
					// random chance of spawning a red miles:
					var r = Math.floor((Math.random()*100));
					if (r > redEnemyThreshhold) {
						miles = new RedMiles();
					}
                
                	miles.posX = (MEASURE_UNIT * j);
					miles.posY = (MEASURE_UNIT * i);
			    
					miles.positions.pos[0] = (MEASURE_UNIT * j);
                    miles.positions.pos[1] = (MEASURE_UNIT * i);
					
					this.enemies.push(miles);
					
					//console.log("size of enemy's is:  "+this.enemies.size());
					break;
				case 6:
					this.grid[i][j] = new TileFloor();
					var trombulentMunge = new TMunge();
					//random chance of spawning a brown munge:
					var r = Math.floor((Math.random()*100));
					if (r > redEnemyThreshhold) {
						trombulentMunge = new RTMunge();
					}
					
					trombulentMunge.posX = (MEASURE_UNIT * j);
					trombulentMunge.posY = (MEASURE_UNIT * i);
					trombulentMunge.positions.pos[0] = (MEASURE_UNIT * j);
                    trombulentMunge.positions.pos[1] = (MEASURE_UNIT * i);
					this.enemies.push(trombulentMunge);
					break;
				case 7:
					this.grid[i][j] = new TileFloor();
					this.exit = new Exit(j,i);
					break;
				case 8:
					// This is the "Reverse Darkness" type of room.
					this.isReverseDarkness = true;
					
					this.grid[i][j] = new TileFloor();
					this.lamp = new Lamp(j,i);
					//this.lamp = new lightSource(j,i);
					break;
				case 9:
					//reserved for critter spawners!
					this.grid[i][j] = new TileFloor();
					var r = Math.floor((Math.random()*100));
					if (r < 10) { //%chance of mouse appearing
						var mouse = new Mouse();
						mouse.posX = (MEASURE_UNIT * j);
						mouse.posY = (MEASURE_UNIT * i);
						mouse.positions.pos[0] = (MEASURE_UNIT * j);
						mouse.positions.pos[1] = (MEASURE_UNIT * i);
						this.critters.push(mouse);
						//console.log("mice! "+ this.critters.length);
					}
					else if (r > 90) { //%chance of bug appearing
						var bug = new Bug();
						bug.posX = (MEASURE_UNIT * j);
						bug.posY = (MEASURE_UNIT * i);
						bug.positions.pos[0] = (MEASURE_UNIT * j);
						bug.positions.pos[1] = (MEASURE_UNIT * i);
						this.critters.push(bug);
					}
					break;
				case 10: //special dark raito
					this.grid[i][j] = new TileFloor();
					var dr = new darkRaito();
					dr.positions.pos[0] = (MEASURE_UNIT * j);
                    dr.positions.pos[1] = (MEASURE_UNIT * i);
					this.enemies.push(dr);
					break;
				
			
			    case 11:
			    {
			      this.grid[i][j] = new TileFloor();
                    
                    var statMiles = new statueMiles();
                    
                    statMiles.posX = (MEASURE_UNIT * j);
                    statMiles.posY = (MEASURE_UNIT * i);
                
                    statMiles.positions.pos[0] = (MEASURE_UNIT * j);
                    statMiles.positions.pos[1] = (MEASURE_UNIT * i);
                    
                    this.enemies.push(statMiles);
			        
			        break;
			    }
			    default:
					this.grid[i][j] = new Tile("assets/tiles/errorTile.png", "error");
			}
		}		
	}
	//end grid construction

	//draw function
	//parameters: tile width and height
	this.draw = function() {
		
	    
	           //**** -- DEBUGGING --
	      //collisionWorld.DrawDebugData();
	           
	    //using this as an update block
		if (this.setNewGrid)
		{
			var newTileGrid = ALLTILES.getReverse();
			if (thisLevel.floorNumber == 1) newTileGrid = ALLTILES.reverseEasy; //level 1 reverse room force roll
			this.changeRoomGrid(newTileGrid);
			this.setNewGrid = false;
		}
		if (this.isExit || this.EndRoom) {
			this.isLit = true;
		}
		if (flagEndSequenceInitiated) {
			this.isLit = false;
			if (!finalsetup) {
				finalsetup = true;
				thisLevel.roomFleeingSetup();
			}
		}
		if (this.FINALroom) {
			thisLevel.darkRaitoAttack();
		}
		if (this.escapeRoom && flagEndSequenceInitiated && !this.setup) {
			var newTileGrid = ALLTILES.exit1;
			this.changeRoomGrid(newTileGrid);
			this.setup = true;
		}
		//end update
		
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
		
		//draw critters:
		
		for (var i = 0; i < this.critters.length; i++) {
			//console.log("critter length: "+this.critters.length);
			//console.log(" calling on critter draw");
			this.critters[i].draw();
		}

		// Draw the doors.
		for (var i = 0; i < this.doors.length; i++)
		{
			this.doors[i].draw();
		}
		
		var doorWalls = thisLevel.doorWalls;
		for (var i = 0; i < doorWalls.length; i++)
		{
			doorWalls[i].draw();
		}
		
		for (var i = 0; i < this.obstacles.length; ++i)
		{
			this.obstacles[i].setBox();
			this.obstacles[i].draw();
		}
		
		//draw lamp
		if ('undefined' != typeof this.lamp) {
			this.lamp.draw();
		}
			
		if (this.isEntrance) { //if entrance, draw lamp, controls
			//lsSprite.draw(ctxWorld, MEASURE_UNIT*7, MEASURE_UNIT*4, MEASURE_UNIT, MEASURE_UNIT);
			if (thisLevel.floorNumber == 1) {
				ctxWorld.drawImage(controlsImg, MEASURE_UNIT*5, MEASURE_UNIT*3.5, MEASURE_UNIT*5, MEASURE_UNIT*4);
			}
			drawTorches();
		}
		if (this.isExit || this.EndRoom) {
			var flag;
			if (!this.exitEffectplayed) {
				flag = setInterval(function() {
					flagTorchlightEffect = true;
				}, 50);
				setTimeout(function() {
					clearInterval(flag);
					effectR = MEASURE_UNIT*.5;
					flagTorchlightEffect = false;
					if (this.EndRoom) this.isLit = true;
				}, 1500);
				this.exitEffectplayed = true;
			}
			if (!flagEndSequenceInitiated) drawTorches();
		}
		
		//draw exit
		if ('undefined' != typeof this.exit)
			this.exit.draw();
			
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
		} else if (this.enemyFadeTimer >= this.enemyFadeDuration && !this.isReverseDarkness) {
			this.killEnemies();
		}
		
		// Turn off door hitboxes for previous room. Must be done due to 2D box's collision system (aka should not
		// set the thing that collided to inactive on the same frame as the collision).
		if (thisLevel.turnOffPreviousDoors)
		{
			for (var i = 0; i < thisLevel.layout[thisLevel.previousY][thisLevel.previousX].doors.length; i++)
			{
				thisLevel.layout[thisLevel.previousY][thisLevel.previousX].doors[i].doorboundBox.SetActive(false);
			}
			
			thisLevel.turnOffPreviousDoors = false;
		}
	};
	
	this.drawOverlays = function() {
		//lit overlays:
		if (!this.isLit) {
			ctxDark.globalCompositeOperation = 'destination-out';
			if (this.northLit) {
				SpriteDoorOverN.draw(ctxDark, MEASURE_UNIT*6.5, 0);
			}
			if (this.southLit) {
				SpriteDoorOverS.draw(ctxDark, MEASURE_UNIT*6.5, MEASURE_UNIT*9);
			}
			if (this.eastLit) {
				SpriteDoorOverE.draw(ctxDark, MEASURE_UNIT*13, MEASURE_UNIT*4.5);
			}
			if (this.westLit) {
				SpriteDoorOverW.draw(ctxDark, 0, MEASURE_UNIT*4.5);
			}
			ctxDark.globalCompositeOperation = 'source-over';
		}
	}
	
	this.setDoor = function(door) {
	//change the correct tile in the grid to a door
		switch (door) {
			case "n"://change from generic tile to door type; assign the correctly flipped image
				                        //
				this.grid[0][7] = new Tile("assets/tiles/door_castle_1.png", "door"); //i'm sorry for hardcoding this...
				break;
			case "s":
			                            // 
				this.grid[10][7] = new Tile("assets/tiles/door_castle_3.png", "door");
				break;
			case "e":
			                             //
				this.grid[5][14] = new Tile("assets/tiles/door_castle_2.png", "door");
				break;
			case "w":
			                          // 
				this.grid[5][0] = new Tile("assets/tiles/door_castle_4.png", "door");
				break;
			default:
		}
		
		var newDoor = new Door(door);
		this.doors.push(newDoor);
	};
	
	this.setDoorAsLit = function(door) {
		//change the correct tile in the grid to a door
		switch (door) {
			case "n"://change from generic tile to door type; assign the correctly flipped image
				this.grid[0][7].image.src = "assets/tiles/door_castle_5.png";
				this.northLit = true;
				break;
			case "s":
				this.grid[10][7].image.src = "assets/tiles/door_castle_7.png";
				this.southLit = true;
				break;
			case "e":
				this.grid[5][14].image.src = "assets/tiles/door_castle_6.png";
				this.eastLit = true;
				break;
			case "w":
				this.grid[5][0].image.src = "assets/tiles/door_castle_8.png";
				this.westLit = true;
				break;
			default:
		}
	};
	
	this.setDoorAsNotLit = function(door) {
		//change the correct tile in the grid to a door
		switch (door) {
			case "n"://change from generic tile to door type; assign the correctly flipped image
				this.grid[0][7].image.src = "assets/tiles/door_castle_1.png";
				this.northLit = false;
				break;
			case "s":
				this.grid[10][7].image.src = "assets/tiles/door_castle_3.png";
				this.southLit = false;
				break;
			case "e":
				this.grid[5][14].image.src = "assets/tiles/door_castle_2.png";
				this.eastLit = false;
				break;
			case "w":
				this.grid[5][0].image.src = "assets/tiles/door_castle_4.png";
				this.westLit = false;
				break;
			default:
		}
	};
	
	this.setLit = function(lit) {
		this.isLit = lit; 
		
		if (lit == true)
		{
			if (this.lamp != null)
			{
				this.lamp.image.src = "assets/Lamp1_Lit.png";
			}
			
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

Room.prototype.changeRoomGrid = function(gridObj) {
	//2D grid part, 15x11
	//take info from 2d array passed in and create tiles
	//if this is the entrance room, set isLit to true
	//this.grid = new Array();
	for (var i = 0; i < gridObj.length; i++) {
		//this.grid[i] = new Array();
		for (var j = 0; j<gridObj[i].length; j++) {
			switch (gridObj[i][j]) {
				case 1:
					break;
				////uncomment for sweet wall flipping
				//	if (i==0) { //if corner, generic tile with appropriate corner
				//		if (j==0) this.grid[i][j] = new Tile("assets/tiles/wall_castle_5.png", "wall"); //upperleft
				//		else if (j==14) this.grid[i][j] = new Tile("assets/tiles/wall_castle_6.png", "wall"); //upperright
				//		
				//		                          //*** COMMENT FOR DEBUGGING (PLACE BACK INTO Tile("")) *****
				//		                          //
				//		else this.grid[i][j] = new Tile("assets/tiles/wall_castle_1.png", "wall"); //top row
				//	}
				//	else if (i==10) {
				//		if (j==0) this.grid[i][j] = new Tile("assets/tiles/wall_castle_8.png", "wall"); //lowerleft
				//		else if (j==14) this.grid[i][j] = new Tile("assets/tiles/wall_castle_7.png", "wall"); //lowerright
				//		
				//		                      //*** COMMENT FOR DEBUGGING (PLACE BACK INTO Tile("")) *****
				//		                      //
				//		else this.grid[i][j] = new Tile("assets/tiles/wall_castle_3.png", "wall"); //bottom row
				//	}
				//	else if (j==0) {//left side
				//	                          
				//	                          //*** COMMENT FOR DEBUGGING (PLACE BACK INTO Tile("")) ***** 
				//	                          //
				//		this.grid[i][j] = new Tile("assets/tiles/wall_castle_4.png", "wall");
				//	}
				//	else if (j==14) {//right side
				//	                           
				//	                           //*** COMMENT FOR DEBUGGING (PLACE BACK INTO Tile("")) *****
				//	                           //
				//		this.grid[i][j] = new Tile("assets/tiles/wall_castle_2.png", "wall");
				//	}
				//	else this.grid[i][j] = new Tile("assets/tiles/errorTile.png", "error");
				//	break;
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
					//this.grid[i][j] = new TileBlock();
					this.grid[i][j] = new TileFloor();
					//count = count+1;
					 this.obstacles.push( new Obstacles(j,i));
					 
					 //this.ob = new Obstacles(j,i);
					 
				//	console.log("OBST -SIZE::::::::::::::::::::::::::::::=> "+this.obstacles.length+ " i " + i + " j " + j);
					break;
				case 5: //example enemy case, add a floor tile and make a new enemy
					this.grid[i][j] = new TileFloor();
					var miles = new Miles();
					// console.log(" created ENEMY --------------------------------------------------------  ");
                
                	miles.posX = (MEASURE_UNIT * j);
					miles.posY = (MEASURE_UNIT * i);
			    
					miles.positions.pos[0] = (MEASURE_UNIT * j);
                    miles.positions.pos[1] = (MEASURE_UNIT * i);
					//console.log("before: " + this.enemies.length);
					this.enemies.push(miles);
					//console.log("after: " + this.enemies.length);
					//console.log(this.enemies[0]);
					//this.enemies[0].draw();
					//entityManager.addEntity(miles);
					//console.log("size of enemy's is:  "+this.enemies.size());
					break;
				case 6:
					this.grid[i][j] = new TileFloor();
					var trombulentMunge = new TMunge();
					// console.log(" created ENEMY2 --------------------------------------------------------  ");
					trombulentMunge.posX = (MEASURE_UNIT * j);
					trombulentMunge.posY = (MEASURE_UNIT * i);
					trombulentMunge.positions.pos[0] = (MEASURE_UNIT * j);
                    trombulentMunge.positions.pos[1] = (MEASURE_UNIT * i);
					this.enemies.push(trombulentMunge);
					//entityManager.addEntity(trombulentMunge);
					break;
				case 7:
					this.grid[i][j] = new TileFloor();
					this.exit = new Exit(j,i);
					break;
				case 8:
					// This is the "Reverse Darkness" type of room.
					this.isReverseDarkness = true;
					
					this.grid[i][j] = new TileFloor();
					this.lamp = new Lamp(j,i);
					break;
				case 9:
					//reserved for critter spawners!
					this.grid[i][j] = new TileFloor();
					var r = Math.floor((Math.random()*100));
					if (r < 10) { //%chance of mouse appearing
						var mouse = new Mouse();
						mouse.posX = (MEASURE_UNIT * j);
						mouse.posY = (MEASURE_UNIT * i);
						mouse.positions.pos[0] = (MEASURE_UNIT * j);
						mouse.positions.pos[1] = (MEASURE_UNIT * i);
						this.critters.push(mouse);
						
					}
					break;
					
				case 11:
                {
                  this.grid[i][j] = new TileFloor();
                    
                    var statMiles = new statueMiles();
                    
                    statMiles.posX = (MEASURE_UNIT * j);
                    statMiles.posY = (MEASURE_UNIT * i);
                
                    statMiles.positions.pos[0] = (MEASURE_UNIT * j);
                    statMiles.positions.pos[1] = (MEASURE_UNIT * i);
                    
                    this.enemies.push(statMiles);
                    
                    break;
                }
                
				default:
					this.grid[i][j] = new Tile("assets/tiles/errorTile.png", "error");
			}
		}		
	}
	for (var i = 0; i<this.enemies.length; i++) {
		//console.log("going to push enemy");
		entityManager.addEntity(this.enemies[i]);
	}
	/*for (var i = 0; i<this.critters.length; i++) {
		//console.log("going to push enemy");
		entityManager.addEntity(this.critters[i]);
	}*/
}