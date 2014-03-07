function Door(doorSide) {
	//door base object
	
	// "side" can be one of: n, e, s, w
	this.side = doorSide;
	
	this.image = new Image();
	
	if (this.side == "n")
	{
		this.posX = 5.5 * GAME_WIDTH/15;
		this.posY = 0 * GAME_HEIGHT/11;
	}
	else if (this.side == "e")
	{
		this.posX = 11 * GAME_WIDTH/15;
		this.posY = 5 * GAME_HEIGHT/11;
	}
	else if (this.side == "s")
	{	
		this.posX = 5.5 * GAME_WIDTH/15;
		this.posY = 9.5 * GAME_HEIGHT/11;
	}
	else if (this.side == "w")
	{	
		this.posX = 0;//GAME_WIDTH/15;//0.5 * GAME_WIDTH/15;
		this.posY = 5 * GAME_HEIGHT/11;
	}
	
	
	//this.posX = 8 * GAME_WIDTH/15;
	//this.posY = 6 * GAME_HEIGHT/11;
    
   this.doorfix = new b2FixtureDef;
   this.doorbox = new b2BodyDef;
  
  this.doorfix = this.fixture;
  this.doorbox = this.body;
  
  this.doorbox.type = b2Body.b2_dynamicBody;
  this.doorfix.shape = new b2PolygonShape;

  //this.doorbox.position.x = posX * GAME_WIDTH/15;
  //this.doorbox.position.y = posY * GAME_HEIGHT/11;
  this.doorbox.position.x = 5/30;
  this.doorbox.position.y = 5/30;
  
  
   //
   //this.doorfix.shape.SetAsBox((30/MEASURE_UNIT),  ( 30/MEASURE_UNIT ));
   this.doorfix.shape.SetAsBox((MEASURE_UNIT/30/2),  ( MEASURE_UNIT/30/2 ));
   
   
  
  this.doorbox.active = false;
  
  this.doorboundBox = collisionWorld.CreateBody(this.doorbox);
  this.bFix = this.doorboundBox.CreateFixture(this.doorfix);
  
  
  this.doorboundBox.SetUserData( {type: 'door', id: "d", side: this.side, pX:this.doorbox.position.x, pY: this.doorbox.position.y } );
  	
	
	
	
}

//carry over position and image properties
//this should take care of collision, assuming collision is on entities
Door.prototype = new Entity();

Door.prototype.Resize = function()
{

   var newfix = new b2FixtureDef; 
 
   var resizeC = newfix.shape = new b2PolygonShape; 
  
  this.doorboundBox.DestroyFixture( this.bFix );
  
  //add new fixture and body     
  newfix.shape.SetAsBox((MEASURE_UNIT/30)/3,  ( MEASURE_UNIT/30 )/3);  
  
  this.bFix = this.doorboundBox.CreateFixture(newfix);  
  
};

	
//draw the enemy on ctxWorld
Door.prototype.draw = function() 
{
    this.doorboundBox.SetActive(true);
    this.doorboundBox.SetAwake(false); //this makes it awake (counter-intuitive)
    
	ctxWorld.drawImage(this.image, this.posX, this.posY, MEASURE_UNIT, MEASURE_UNIT);
  
  //var sx = offset.x ;//* MEASURE_UNIT;    
  //var sy = offset.y ;//* MEASURE_UNIT;  
  //w.drawImage(this.p.I, this.p.pos[0], this.p.pos[1], pw, ph);
  this.doorboundBox.SetPosition(new b2Vec2( (this.posX/30+1), (this.posY/30+1)));  
  

};