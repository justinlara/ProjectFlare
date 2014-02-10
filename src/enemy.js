function Enemy() {
	//enemy base object
	//all enemies should collide with walls
	//all enemies should have some AI framework
	this.image = new Image();
	this.image.src = "assets/Miles_Enemy1.png";
	
	this.posX =50;
    this.posY =50;
    
  var fix = new b2FixtureDef;
  var bod = new b2BodyDef;
  
  this.enemyfix = this.fixture;
  this.enemybox = this.body;
  
  this.enemybox.position.x = this.posX/30+1;//MEASURE_UNIT;
  this.enemybox.position.y = this.posY/30+1;
  
   this.enemyfix.shape.SetAsBox((30/MEASURE_UNIT),  ( 30/MEASURE_UNIT ));
  
  this.enemyboundBox = collisionWorld.CreateBody(this.enemybox);
  this.enemyboundBox.CreateFixture(this.enemyfix);
  
	
	
	
}

//carry over position and image properties
//this should take care of collision, assuming collision is on entities
Enemy.prototype = new Entity();
	
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
	ctxWorld.drawImage(this.image, this.posX, this.posY, MEASURE_UNIT, MEASURE_UNIT);
//offset =new b2Vec2((centerX - this.p.pos[0]),  Math.abs(centerY  - this.p.pos[1]));
  
  //var sx = offset.x ;//* MEASURE_UNIT;    
  //var sy = offset.y ;//* MEASURE_UNIT;  
  //w.drawImage(this.p.I, this.p.pos[0], this.p.pos[1], pw, ph);
  this.enemyboundBox.SetPosition(new b2Vec2( (this.posX/30+1), (this.posY/30+1)));
     //console.log("x   y " + this.enemyboundBox.GetPosition().x + " , " + this.enemyboundBox.GetPosition().y + " -- " + this.posX+ " & " + this.posY);


};