function Lamp(posX, posY) {
	//lamp base object
	this.image = new Image();
	this.image.src = "assets/Lamp1.png";
	
	this.posX =posY * GAME_WIDTH/15;
    this.posY =posX * GAME_HEIGHT/11;
    
   this.lampfix = new b2FixtureDef;
   this.lampbox = new b2BodyDef;
  
  this.lampfix = this.fixture;
  this.lampbox = this.body;
  
  this.lampbox.type = b2Body.b2_dynamicBody;
  this.lampfix.shape = new b2PolygonShape;

  //this.lampbox.position.x = posX * GAME_WIDTH/15;
  //this.lampbox.position.y = posY * GAME_HEIGHT/11;
  this.lampbox.position.x = 5/30;
  this.lampbox.position.y = 5/30;
  
  
   //
   //this.lampfix.shape.SetAsBox((30/MEASURE_UNIT),  ( 30/MEASURE_UNIT ));
   this.lampfix.shape.SetAsBox((MEASURE_UNIT/30),  ( MEASURE_UNIT/30 ));
   
   
  
  this.lampbox.active = false;
  
  this.lampboundBox = collisionWorld.CreateBody(this.lampbox);
  this.lFix = this.lampboundBox.CreateFixture(this.lampfix);
  
  
  this.lampboundBox.SetUserData( {type: 'lamp', id: "l", pX:this.lampbox.position.x, pY: this.lampbox.position.y } );
  	
	
}

//carry over position and image properties
//this should take care of collision, assuming collision is on entities
Lamp.prototype = new Entity();

Lamp.prototype.Resize = function()
{

   var newfix = new b2FixtureDef; 
 
   var resizeC = newfix.shape = new b2PolygonShape; 
  
  this.lampboundBox.DestroyFixture( this.lFix );
  
  //add new fixture and body     
  newfix.shape.SetAsBox((MEASURE_UNIT/30)/3,  ( MEASURE_UNIT/30 )/3);  
  
  this.lFix = this.lampboundBox.CreateFixture(newfix);  
  
};

	
//draw the enemy on ctxWorld
Lamp.prototype.draw = function() 
{
    this.lampboundBox.SetActive(true);
    this.lampboundBox.SetAwake(false); //this makes it awake (counter-intuitive)
    
	ctxWorld.drawImage(this.image, this.posX, this.posY, MEASURE_UNIT, MEASURE_UNIT);
  
  //var sx = offset.x ;//* MEASURE_UNIT;    
  //var sy = offset.y ;//* MEASURE_UNIT;  
  //w.drawImage(this.p.I, this.p.pos[0], this.p.pos[1], pw, ph);
  this.lampboundBox.SetPosition(new b2Vec2( (this.posX/30+1), (this.posY/30+1)));  
  

};