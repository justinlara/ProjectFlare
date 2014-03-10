//generic tile object

function Tile(i, t) {
	this.image = new Image();
	this.image.src = i;
	this.type = t; //acceptable types: floor, wall, lamp
}

//actual tile objects
//will be able to assign image from a list of acceptable images

//floor doesn't do anything
function TileFloor(setName) {
	this.image = new Image();
	
	//or if there are multiple images for the same set, make a random number generator
	var variance = Math.floor((Math.random()*3) + 1); //a set with 3 variations
	this.image.src = "assets/tiles/floor_castle_" + variance + ".png";
}

//wall needs collision
function TileWall() {
	this.image = new Image();
	this.image.src = "assets/tempwall.png";
}

//block are also collidable, but have different acceptable art
function TileBlock() {
	this.image = new Image();
	
	var variance = Math.floor((Math.random()*2) + 1);
	this.image.src = "assets/tiles/block_castle_" + variance + ".png";
	
	//collision stuff
}

function TileLamp() {
	this.image = new Image();
	this.image.src = "assets/tiles/lamp_castle_1.png";
	
	//when collided with by player, lamp lights
	//otherwise treat as a block; you and enemies can't pass through
}

function TileDoor() {
	this.image = new Image();
	this.image.src = "assets/tempfloor.png";
	
	//when collided with, player goes to the next room
}