function Enemy() {
	//enemy base object
	Entity.call(this);
	//all enemies should collide with walls
	//all enemies should have some AI framework

	//this.behavior = new Behavior(this);
    //this.image = new Image();
	//this.imageDying = new Image();
	this.dying = false;
	
   this.enemyfix = new b2FixtureDef;
   this.enemybox = new b2BodyDef;
  
  this.enemyfix = this.fixture;
  this.enemybox = this.body;
  
  this.enemybox.type = b2Body.b2_dynamicBody;
  this.enemyfix.shape = new b2PolygonShape;
  
	var min = 50;
	var max = 100;
  
	function randomIntFromInterval(min,max)
	{
		return Math.floor(Math.random()*(max-min+1)+min);
	}
  //(collision debugging) randomly disperse enemies to see how much enemies are created at a time  
  this.enemybox.position.x = (randomIntFromInterval(min,max))/30+1;  
  this.enemybox.position.y = (randomIntFromInterval(min,max))/30+1; 
  
   this.enemyfix.shape.SetAsBox((MEASURE_UNIT/30)/4,  ( MEASURE_UNIT/30 )/5);
   

  this.enemybox.active = false;
  
  this.enemyboundBox = collisionWorld.CreateBody(this.enemybox);
  this.eFix = this.enemyboundBox.CreateFixture(this.enemyfix);
  
  this.positions = { pos: [this.posX, this.posY]};
  
  // damage: 5
  this.enemyboundBox.SetUserData( {type: 'enemy', id: "e1", damage: 1, xy: this.positions , pX: this.posX, pY: this.posY, BoundSize: [((((MEASURE_UNIT/30)/4)*30)*2),  (((( MEASURE_UNIT/30 )/5)*30)*2)] } ); 
  //this.enemybox.position.y  	
	
	//sprite defaults:
	this.sprite = loadSpriteMiles;
	
}
//carry over position and image properties
//this should take care of collision, assuming collision is on entities
Enemy.prototype = Object.create(Entity.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.Resize = function()
{

   var newfix = new b2FixtureDef; 
 
   var resizeC = newfix.shape = new b2PolygonShape; 
  
  this.enemyboundBox.DestroyFixture( this.eFix );
  
  //add new fixture and body     
  newfix.shape.SetAsBox((MEASURE_UNIT/30)/4,  ( MEASURE_UNIT/30 )/5);  
  
  this.eFix = this.enemyboundBox.CreateFixture(newfix);  
  
  //update position!
};

//the basic AI which tells the enemy how to move
//overwrite in subtypes
Enemy.prototype.move = function () {
    //per frame movement if we call .move in main draw
    //I'm thinking we should have an enemy controller which calls each active enemy'smove function on a setInterval timer
	this.enemyBehavior.move();
};
	
//draw the enemy on ctxWorld
Enemy.prototype.draw = function() { 
	if (!this.dying)
	{
		this.move();
		
		this.enemyboundBox.SetActive(true);
		//this.enemyboundBox.SetAwake(false); //this makes it awake (counter-intuitive)
	
		this.sprite.use("idle");
		this.sprite.draw(ctxWorld, this.positions.pos[0], this.positions.pos[1], MEASURE_UNIT, MEASURE_UNIT);
		//ctxWorld.drawImage(this.image, this.posX, this.posY, MEASURE_UNIT, MEASURE_UNIT);
		//this.enemyboundBox.SetPosition(new b2Vec2( ((this.posX+ (0.5*MEASURE_UNIT))/30), ((this.posY+ (0.85*MEASURE_UNIT))/30))); 
		
		this.enemyboundBox.SetPosition(new b2Vec2( ((this.positions.pos[0]+ (0.5*MEASURE_UNIT))/30), ((this.positions.pos[1]+ (0.85*MEASURE_UNIT))/30)));
		                                  
		
		this.enemyboundBox.SetUserData( {type: 'enemy', id: "e1", damage: 1, xy: this.positions ,  pX: this.posX , pY: this.posY,  boxPos: this.enemyboundBox.GetPosition(), BoundSize: [((((MEASURE_UNIT/30)/4)*30)*2),  (((( MEASURE_UNIT/30 )/5)*30)*2)] } );
	
	   
	}
	else if (this.dying)
	{
		this.sprite.use("death");
		//this.sprite.draw(ctxWorld, this.posX, this.posY, MEASURE_UNIT, MEASURE_UNIT);
		
		this.sprite.draw(ctxWorld, this.positions.pos[0], this.positions.pos[1], MEASURE_UNIT, MEASURE_UNIT);
		
	}
	
  //console.log(">>>>  CHECK POS OF ENEMY CHANGES " + this.posX + " , " + this.posY );
  //console.log(">>>>  CHECK POS OF ENEMY CHANGES " + this.positions.pos[0] + " , " + this.positions.pos[1] );
};