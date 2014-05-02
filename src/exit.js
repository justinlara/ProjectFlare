function Exit(posX, posY) {
	//exit base object
	this.image = new Image();
	this.image.src = "assets/Exit.png";
	
	this.posX = posX * MEASURE_UNIT;
    this.posY =posY * MEASURE_UNIT;
    
   this.exitfix = new b2FixtureDef;
   this.exitbox = new b2BodyDef;
  
  this.exitfix = this.fixture;
  this.exitbox = this.body;
  
  this.exitbox.type = b2Body.b2_dynamicBody;
  this.exitfix.shape = new b2PolygonShape;

  //this.exitbox.position.x = posX * GAME_WIDTH/15;
  //this.exitbox.position.y = posY * GAME_HEIGHT/11;
  this.exitbox.position.x = 5/30;
  this.exitbox.position.y = 5/30;
  
  
   //
   //this.exitfix.shape.SetAsBox((30/MEASURE_UNIT),  ( 30/MEASURE_UNIT ));
   this.exitfix.shape.SetAsBox((MEASURE_UNIT/30/2),  ( MEASURE_UNIT/30/2 ));
   
   
  
  this.exitbox.active = true;
  
  this.exitboundBox = collisionWorld.CreateBody(this.exitbox);
  this.eFix = this.exitboundBox.CreateFixture(this.exitfix);
  
  
  this.exitboundBox.SetUserData( {type: 'exit', id: "l", 
                                  bodyPos: this.exitboundBox.GetPosition, 
                                  active: this.exitbox.active, wPx:this.posX, wPy:this.posY,  
                                  size: [((((MEASURE_UNIT/30)/2)*30)*2), ((((MEASURE_UNIT/30)/2)*30)*2)]} );
  	
	
}

//carry over position and image properties
//this should take care of collision, assuming collision is on entities
Exit.prototype = new Entity();

Exit.prototype.Resize = function()
{

   var newfix = new b2FixtureDef; 
 
   var resizeC = newfix.shape = new b2PolygonShape; 
  
  this.exitboundBox.DestroyFixture( this.eFix );
  
  //add new fixture and body     
  newfix.shape.SetAsBox((MEASURE_UNIT/30)/3,  ( MEASURE_UNIT/30 )/3);  
  
  this.eFix = this.exitboundBox.CreateFixture(newfix);  
  
};

	
//draw the enemy on ctxWorld
Exit.prototype.draw = function() 
{
    this.exitboundBox.SetActive(true);
    this.exitboundBox.SetAwake(false); //this makes it awake (counter-intuitive)
    
	ctxWorld.drawImage(this.image, this.posX, this.posY, MEASURE_UNIT, MEASURE_UNIT);
  
  //var sx = offset.x ;//* MEASURE_UNIT;    
  //var sy = offset.y ;//* MEASURE_UNIT;  
  //w.drawImage(this.p.I, this.p.pos[0], this.p.pos[1], pw, ph);
  this.exitboundBox.SetPosition(new b2Vec2( (1.07*this.posX/30), (1.1*this.posY/30)));  
  

};