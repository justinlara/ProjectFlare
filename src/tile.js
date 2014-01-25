//generic tile object

function Tile(i, t) {
	this.image = new Image();
	this.image.src = i;
	this.type = t; //acceptable types: floor, wall, lamp
	
	//methods
	Tile.prototype.getType = function() 
	{
		return this.type;
	};
	
	Tile.prototype.getImage = function() 
	{
		return this.image;
	};
}