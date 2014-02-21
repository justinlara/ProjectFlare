function Enemy() {
	//enemy base object
	//all enemies should collide with walls
	//all enemies should have some AI framework
	this.image = new Image();
	this.image.src = "assets/Miles_Enemy1.png";
	
	//this.posX =50;
    //this.posY =50;
    
   this.enemyfix = new b2FixtureDef;
   this.enemybox = new b2BodyDef;
  
  this.enemyfix = this.fixture;
  this.enemybox = this.body;
  
  this.enemybox.type = b2Body.b2_dynamicBody;
  this.enemyfix.shape = new b2PolygonShape;
  
  min = 50;
  max = 100;
  
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
  
  
  this.enemyboundBox.SetUserData( {type: 'enemy', id: "e1", damage: 5, pX:this.enemybox.position.x, pY: this.enemybox.position.y } );
  	
	
}

//carry over position and image properties
//this should take care of collision, assuming collision is on entities
Enemy.prototype = new Entity();

Enemy.prototype.Resize = function()
{

   var newfix = new b2FixtureDef; 
 
   var resizeC = newfix.shape = new b2PolygonShape; 
  
  this.enemyboundBox.DestroyFixture( this.eFix );
  
  //add new fixture and body     
  newfix.shape.SetAsBox((MEASURE_UNIT/30)/4,  ( MEASURE_UNIT/30 )/5);  
  
  this.eFix = this.enemyboundBox.CreateFixture(newfix);  
  
};


	
//the basic AI which tells the enemy how to move
//overwrite in subtypes
Enemy.prototype.move = function () {
    //per frame movement if we call .move in main draw
    //I'm thinking we should have an enemy controller which calls each active enemy'smove function on a setInterval timer

    var targetX = mainGuy.p.pos[0];
    var targetY = mainGuy.p.pos[1];

    if (targetX > this.posX) {
        this.posX += MEASURE_UNIT * .01;
    } else {
        this.posX -= MEASURE_UNIT * .01;
    }
    if (targetY > this.posY) {
        this.posY += MEASURE_UNIT * .01;
    } else {
        this.posY -= MEASURE_UNIT * .01;
    }
    /* default
    this.posX += MEASURE_UNIT*.01;
    this.posY += MEASURE_UNIT*.01;
    */
};
	
//draw the enemy on ctxWorld
Enemy.prototype.draw = function() 
{ 
    this.enemyboundBox.SetActive(true);
    this.enemyboundBox.SetAwake(false); //this makes it awake (counter-intuitive)
    
	ctxWorld.drawImage(this.image, this.posX, this.posY, MEASURE_UNIT, MEASURE_UNIT);
  
  //var sx = offset.x ;//* MEASURE_UNIT;    
  //var sy = offset.y ;//* MEASURE_UNIT;  
  //w.drawImage(this.p.I, this.p.pos[0], this.p.pos[1], pw, ph);
  this.enemyboundBox.SetPosition(new b2Vec2( ((this.posX+ (0.5*MEASURE_UNIT))/30), ((this.posY+ (0.85*MEASURE_UNIT))/30))); 
  
  //console.log("MU " + MEASURE_UNIT + " enemy pos: " + this.posX + " , " + this.posY + " boundbox: " +
   //                ((this.posX+ (0.5*MEASURE_UNIT))/30) +" , " + ((this.posY+ (0.5*MEASURE_UNIT))/30)); 
  

};