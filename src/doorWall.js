function DoorWall(doorWallSide) {
    //doorWall base object
    
	// "side" can be one of: n, e, s, w
	this.side = doorWallSide;
	
	this.image = new Image();
	
	
	// Sam, fix these values if you can
	//      - Richard
	if (this.side == "n")
	{
		this.posX = 5.5 * GAME_WIDTH/15;	//(((((MEASURE_UNIT))/2))*30)*2;
		this.posY = -0.4 * GAME_HEIGHT/11;	//((MEASURE_UNIT*.55));
	}
	else if (this.side == "e")
	{
		this.posX = 11.1 * GAME_WIDTH/15;    //((0.97*MEASURE_UNIT/2));
		this.posY = 4.8 * GAME_HEIGHT/11;
	}
	else if (this.side == "s")
	{	
		this.posX = 5.5 * GAME_WIDTH/15;
		this.posY = 9.5 * GAME_HEIGHT/11;
	}
	else if (this.side == "w")
	{	
		this.posX = -0.2 * GAME_WIDTH/15;
		this.posY = 5 * GAME_HEIGHT/11;
	}
	
    
   this.doorWallfix = new b2FixtureDef;
   this.doorWallbox = new b2BodyDef;
  
  this.doorWallfix = this.fixture;
  this.doorWallbox = this.body;
  
  this.doorWallbox.type = b2Body.b2_staticBody; //b2_dynamicBody;
  this.doorWallfix.shape = new b2PolygonShape;

  //this.doorWallbox.position.x = posX * GAME_WIDTH/15;
  //this.doorWallbox.position.y = posY * GAME_HEIGHT/11;
  this.doorWallbox.position.x = 5/30;
  this.doorWallbox.position.y = 5/30;
  
  
   //this.doorWallfix.shape.SetAsBox((MEASURE_UNIT/30/3),  ( MEASURE_UNIT/30/3 ));
 
   this.doorWallfix.shape.SetAsBox((MEASURE_UNIT/30/2),  ( MEASURE_UNIT/30/2));
   
   
  
  this.doorWallbox.active = true;
  
  this.doorWallboundBox = collisionWorld.CreateBody(this.doorWallbox);
  this.dwFix = this.doorWallboundBox.CreateFixture(this.doorWallfix);
  

  
	
	if (this.side == "n")
	{
		this.doorWallboundBox.SetUserData( {type: 'doorWall', id: "dw",
				fixID: "UpWall",
                                bodyPos: this.doorWallboundBox.GetPosition, 
                                active: this.doorWallbox.active, wPx:this.posX, wPy:this.posY,  
                                size: [((((MEASURE_UNIT/30)/2)*30)*2), ((((MEASURE_UNIT/30)/2)*30)*2)]} );
	}
	else if (this.side == "e")
	{
		this.doorWallboundBox.SetUserData( {type: 'doorWall', id: "dw",
				fixID: "RightWall",
                                bodyPos: this.doorWallboundBox.GetPosition, 
                                active: this.doorWallbox.active, wPx:this.posX, wPy:this.posY,  
                                size: [((((MEASURE_UNIT/30)/2)*30)*2), ((((MEASURE_UNIT/30)/2)*30)*2)]} );
	}
	else if (this.side == "s")
	{	
		this.doorWallboundBox.SetUserData( {type: 'doorWall', id: "dw",
				fixID: "DownWall",
                                bodyPos: this.doorWallboundBox.GetPosition, 
                                active: this.doorWallbox.active, wPx:this.posX, wPy:this.posY,  
                                size: [((((MEASURE_UNIT/30)/2)*30)*2), ((((MEASURE_UNIT/30)/2)*30)*2)]} );
	}
	else if (this.side == "w")
	{	
		this.doorWallboundBox.SetUserData( {type: 'doorWall', id: "dw",
				fixID: "LeftWall",
                                bodyPos: this.doorWallboundBox.GetPosition, 
                                active: this.doorWallbox.active, wPx:this.posX, wPy:this.posY,  
                                size: [((((MEASURE_UNIT/30)/2)*30)*2), ((((MEASURE_UNIT/30)/2)*30)*2)]} );
	}
    
}

//carry over position and image properties
//this should take care of collision, assuming collision is on entities
DoorWall.prototype = new Entity();
/*
doorWalls.prototype.Resize = function()
{

   var newfix = new b2FixtureDef; 
 
   var resizeC = newfix.shape = new b2PolygonShape; 
  
  this.doorWallboundBox.DestroyFixture( this.lFix );
  
  //add new fixture and body     
  newfix.shape.SetAsBox((MEASURE_UNIT/30)/3,  ( MEASURE_UNIT/30 )/3);  
  
  this.lFix = this.doorWallboundBox.CreateFixture(newfix);  
  
};
*/
///*    
//draw the enemy on ctxWorld
//DoorWall.prototype.setBox = function() 
//{
//    this.doorWallboundBox.SetActive(true);
//    this.doorWallboundBox.SetAwake(false); //this makes it awake (counter-intuitive)
//    
//   // ctxWorld.drawImage(this.image, this.posX, this.posY, MEASURE_UNIT, MEASURE_UNIT);
//  
//  //var sx = offset.x ;//* MEASURE_UNIT;    
//  //var sy = offset.y ;//* MEASURE_UNIT;  
//  //w.drawImage(this.p.I, this.p.pos[0], this.p.pos[1], pw, ph);
//  this.doorWallboundBox.SetPosition(new b2Vec2( ((this.posX/30)+ (MEASURE_UNIT/30/2)), ((this.posY/30)+(MEASURE_UNIT/30/2))));  
//  
//this.doorWallboundBox.SetUserData( {type: 'doorWall', id: "Ob1", 
//                                  bodyPos: this.doorWallboundBox.GetPosition, 
//                                  active: this.doorWallbox.active, wPx:this.posX, wPy:this.posY,  
//                                  size: [((((MEASURE_UNIT/30)/2)*30)*2), ((((MEASURE_UNIT/30)/2)*30)*2)]} );
//
//};


//draw the enemy on ctxWorld
DoorWall.prototype.draw = function() 
{
    //this.doorWallboundBox.SetActive(true);
    //this.doorWallboundBox.SetAwake(false); //this makes it awake (counter-intuitive)
    
	ctxWorld.drawImage(this.image, this.posX, this.posY, MEASURE_UNIT, MEASURE_UNIT);
  
  //var sx = offset.x ;//* MEASURE_UNIT;    
  //var sy = offset.y ;//* MEASURE_UNIT;  
  //w.drawImage(this.p.I, this.p.pos[0], this.p.pos[1], pw, ph);
  this.doorWallboundBox.SetPosition(new b2Vec2( (this.posX/30+1), (this.posY/30+1)));  
  
  
	if (this.side == "n")
	{
		this.doorWallboundBox.SetUserData( {type: 'doorWall', id: "dw",
				fixID: "UpWall",
                                bodyPos: this.doorWallboundBox.GetPosition, 
                                active: this.doorWallbox.active, wPx:this.posX, wPy:this.posY,  
                                size: [((((MEASURE_UNIT/30)/2)*30)*2), ((((MEASURE_UNIT/30)/2)*30)*2)]} );
	}
	else if (this.side == "e")
	{
		this.doorWallboundBox.SetUserData( {type: 'doorWall', id: "dw",
				fixID: "RightWall",
                                bodyPos: this.doorWallboundBox.GetPosition, 
                                active: this.doorWallbox.active, wPx:this.posX, wPy:this.posY,  
                                size: [((((MEASURE_UNIT/30)/2)*30)*2), ((((MEASURE_UNIT/30)/2)*30)*2)]} );
	}
	else if (this.side == "s")
	{	
		this.doorWallboundBox.SetUserData( {type: 'doorWall', id: "dw",
				fixID: "DownWall",
                                bodyPos: this.doorWallboundBox.GetPosition, 
                                active: this.doorWallbox.active, wPx:this.posX, wPy:this.posY,  
                                size: [((((MEASURE_UNIT/30)/2)*30)*2), ((((MEASURE_UNIT/30)/2)*30)*2)]} );
	}
	else if (this.side == "w")
	{	
		this.doorWallboundBox.SetUserData( {type: 'doorWall', id: "dw",
				fixID: "LeftWall",
                                bodyPos: this.doorWallboundBox.GetPosition, 
                                active: this.doorWallbox.active, wPx:this.posX, wPy:this.posY,  
                                size: [((((MEASURE_UNIT/30)/2)*30)*2), ((((MEASURE_UNIT/30)/2)*30)*2)]} );
	}

};

//*/