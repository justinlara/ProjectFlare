//generic tile object

function Tile(i, t) {
	var image = i;
	var type = t; //acceptable types: floor, wall, lamp
	
	//methods
	getType() {
		return type;
	}
	
	getImage() {
		return image;
	}
}