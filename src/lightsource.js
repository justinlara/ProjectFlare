function lightSource(posX, posY) {
	
	this.sprite = lsSprite;
	
	/*this.posX = posX * MEASURE_UNIT;
    this.posY =posY * MEASURE_UNIT;
    
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
   this.lampfix.shape.SetAsBox((MEASURE_UNIT/30/3),  ( MEASURE_UNIT/30/2 ));
                                                                 //was --> /3
   
  
  this.lampbox.active = false;
  
  this.lampboundBox = collisionWorld.CreateBody(this.lampbox);
  this.lFix = this.lampboundBox.CreateFixture(this.lampfix);
  
  
  this.lampboundBox.SetUserData( {type: 'lamp', id: "l", 
                                  bodyPos: this.lampboundBox.GetPosition(), 
                                  
                                  active: this.lampbox.active, wPx:this.posX, wPy:this.posY,  
                                  size: [((((MEASURE_UNIT/30)/3)*30)*2), ((((MEASURE_UNIT/30)/2)*30)*2)]} );
	 */
}

lightSource.prototype.draw = function() {
	//this.lampboundBox.SetActive(true);
    //this.lampboundBox.SetAwake(false); //this makes it awake (counter-intuitive)
    
  lsSprite.draw(ctxWorld, MEASURE_UNIT*7, MEASURE_UNIT*4, MEASURE_UNIT, MEASURE_UNIT);
  
  //this.lampboundBox.SetPosition(new b2Vec2( (this.posX/30)+ (MEASURE_UNIT/30/2), (this.posY/30)+ (MEASURE_UNIT/30/2)));  
}