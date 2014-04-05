function Obstacles(posX, posY) {
    //obstacle base object
    this.image = new Image();
    var variance = Math.floor((Math.random()*9) + 1);
	this.image.src = "assets/tiles/block_castle_" + variance + ".png";
    
    this.posX = posX * MEASURE_UNIT;
    this.posY =posY * MEASURE_UNIT;
    
   this.obstaclefix = new b2FixtureDef;
   this.obstaclebox = new b2BodyDef;
  
  this.obstaclefix = this.fixture;
  this.obstaclebox = this.body;
  
  this.obstaclebox.type = b2Body.b2_staticBody; //b2_dynamicBody;
  this.obstaclefix.shape = new b2PolygonShape;

  //this.obstaclebox.position.x = posX * GAME_WIDTH/15;
  //this.obstaclebox.position.y = posY * GAME_HEIGHT/11;
  this.obstaclebox.position.x = 5/30;
  this.obstaclebox.position.y = 5/30;
  
  
   //this.obstaclefix.shape.SetAsBox((MEASURE_UNIT/30/3),  ( MEASURE_UNIT/30/3 ));
 
   this.obstaclefix.shape.SetAsBox((MEASURE_UNIT/30/2),  ( MEASURE_UNIT/30/2));
   
   
  
  this.obstaclebox.active = false;
  
  this.obstacleboundBox = collisionWorld.CreateBody(this.obstaclebox);
  this.oFix = this.obstacleboundBox.CreateFixture(this.obstaclefix);
  
  
  this.obstacleboundBox.SetUserData( {type: 'obstacle', id: "Ob1", 
                                  bodyPos: this.obstacleboundBox.GetPosition, 
                                  active: this.obstaclebox.active, wPx:this.posX, wPy:this.posY,  
                                  size: [((((MEASURE_UNIT/30)/2)*30)*2), ((((MEASURE_UNIT/30)/2)*30)*2)]} );

    
}

//carry over position and image properties
//this should take care of collision, assuming collision is on entities
Obstacles.prototype = new Entity();
/*
obstacles.prototype.Resize = function()
{

   var newfix = new b2FixtureDef; 
 
   var resizeC = newfix.shape = new b2PolygonShape; 
  
  this.obstacleboundBox.DestroyFixture( this.lFix );
  
  //add new fixture and body     
  newfix.shape.SetAsBox((MEASURE_UNIT/30)/3,  ( MEASURE_UNIT/30 )/3);  
  
  this.lFix = this.obstacleboundBox.CreateFixture(newfix);  
  
};
*/
///*    
//draw the enemy on ctxWorld
Obstacles.prototype.setBox = function() 
{
    this.obstacleboundBox.SetActive(true);
    this.obstacleboundBox.SetAwake(false); //this makes it awake (counter-intuitive)
    
   // ctxWorld.drawImage(this.image, this.posX, this.posY, MEASURE_UNIT, MEASURE_UNIT);
  
  //var sx = offset.x ;//* MEASURE_UNIT;    
  //var sy = offset.y ;//* MEASURE_UNIT;  
  //w.drawImage(this.p.I, this.p.pos[0], this.p.pos[1], pw, ph);
  this.obstacleboundBox.SetPosition(new b2Vec2( ((this.posX/30)+ (MEASURE_UNIT/30/2)), ((this.posY/30)+(MEASURE_UNIT/30/2))));  
  
this.obstacleboundBox.SetUserData( {type: 'obstacle', id: "Ob1", 
                                  bodyPos: this.obstacleboundBox.GetPosition, 
                                  active: this.obstaclebox.active, wPx:this.posX, wPy:this.posY,  
                                  size: [((((MEASURE_UNIT/30)/2)*30)*2), ((((MEASURE_UNIT/30)/2)*30)*2)]} );

};

Obstacles.prototype.draw = function() {
	ctxWorld.drawImage(this.image, this.posX, this.posY, MEASURE_UNIT, MEASURE_UNIT);
}

//*/