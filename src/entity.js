//entity object
//things to be placed in levels, but not actually a tile

function Entity() 
{
	this.position = {
		x:0, y:0
	};
	this.image = new Image();

  this.fixture = new b2FixtureDef;
  
  //disabling physics
  this.fixture.density = 0;
  this.fixture.friction = 0;
  this.fixture.restitution = 0;
  
  this.body = new b2BodyDef;
  //this.body.type = b2Body.b2_dynamicBody;
  
  //this.fixture.shape = new b2PolygonShape; //b2PolygonShape;
  
	this.setImageSrc = function(source) {
		this.image.src = source;
	}

	this.draw = function() {
		ctxWorld.draw(this.image, this.position[x], this.position[y]);
	}//Empty cuz Katie said so
}