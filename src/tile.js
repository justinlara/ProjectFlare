//generic tile object

function Tile(i, t) {
	this.image = i;
	 this.type = t; //acceptable types: floor, wall, lamp
	
	//methods
	Tile.porototype.getType = function() 
	{
		return this.type;
	};
	
	Tile.porototype.getImage = function() 
	{
		return this.image;
	};
}