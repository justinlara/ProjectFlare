function Enemy() {
	//enemy base object
	Entity.call(this);
	//all enemies should collide with walls
	//all enemies should have some AI framework

	//this.behavior = new Behavior(this);
    //this.image = new Image();
	//this.imageDying = new Image();
	this.dying = false;
	
	this.flying = false;
	
	this.damage = 15;
	
	
   this.enemyfix = new b2FixtureDef;
   this.enemybox = new b2BodyDef;
  
  this.enemyfix = this.fixture;
  this.enemybox = this.body;
  
  this.enemybox.type = b2Body.b2_dynamicBody;
  this.enemyfix.shape = new b2PolygonShape;
  
	var min = 50;
	var max = 100;
  
	this.randomIntFromInterval = function(min,max)
	{
		return Math.floor(Math.random()*(max-min+1)+min);
	};
	
  //(collision debugging) randomly disperse enemies to see how much enemies are created at a time  
  this.enemybox.position.x = (this.randomIntFromInterval(min,max))/30+1;  
  this.enemybox.position.y = (this.randomIntFromInterval(min,max))/30+1; 
  
   this.enemyfix.shape.SetAsBox((MEASURE_UNIT/30)/4,  ( MEASURE_UNIT/30 )/5);
   

  this.enemybox.active = false;
  
  
  this.enemyboundBox = collisionWorld.CreateBody(this.enemybox);
   //console.log("null? " + this.enemyboundBox);
  this.eFix = this.enemyboundBox.CreateFixture(this.enemyfix);
  
  this.positions = { pos: [this.posX, this.posY]};
  this.xdelta = 0;
  this.ydelta = 0;
  
  this.targetPosX = this.randomIntFromInterval(1, 13) * MEASURE_UNIT;
  this.targetPosY = this.randomIntFromInterval(1, 9) * MEASURE_UNIT;
	
	this.hit = false;
	this.hitLight = {hit: this.hit };
	
	this.attack1 = false;
	this.attack = {attack1: this.attack1 };
	
	this.hitLR = false;
	this.hitUD = false;
	this.hitSomething = {hitLR: this.hitLR, hitUD: this.hitUD};
	
  // damage: 5
  this.enemyboundBox.SetUserData( { type: 'enemy', id: "e1", damage: this.damage, xy: this.positions , pX: this.posX, pY: this.posY, 
                                    BoundSize: [((((MEASURE_UNIT/30)/4)*30)*2),  (((( MEASURE_UNIT/30 )/5)*30)*2)],
                                    hitLight: this.hitLight, 
                                    hitSomething: this.hitSomething, 
                                    attack: this.attack,
				    flying: this.flying} ); 
  //this.enemybox.position.y  	
	
	//sprite defaults:
	//this.sprite = loadSpriteMiles;
	
	this.sprite = new SpriteMap("assets/enemies/miles_test_sheet.png",
        {
            idle: {startRow: 0, startCol: 0, endRow: 0, endCol: 1},
            death: {startRow: 0, startCol: 0, endRow: 0, endCol: 1},
            // added this
            attack:{startRow: 1, startCol: 0, endRow: 1, endCol: 0}
        },
        {
            frameW: 128, // Width of each frame of the animation in pixels
            frameH: 128, // Height of each frame of the animation in pixels
            projectedW: MEASURE_UNIT, // Displayed width
            projectedH: MEASURE_UNIT, // Displayed height 
            interval: 150, // Switch frames every xxx ms
            useTimer: false, // Rely on requestAnimFrame to update frames instead of setInterval
            postInitCallback: function() {
                //this.sprite.start('idle');
            }
        }
    );
	
	
	
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
    //I'm thinking we should have an enemy controller which calls each active enemy's move function on a setInterval timer
	this.entityBehavior.move();
	SOUNDS.playAtRandomChance(SOUNDS.playRandomSnarl);
};

Enemy.prototype.newTarget = function() { 
	this.targetPosX = this.randomIntFromInterval(1, 13) * MEASURE_UNIT;
	this.targetPosY = this.randomIntFromInterval(1, 9) * MEASURE_UNIT;
  };
	
//draw the enemy on ctxWorld
Enemy.prototype.draw = function() {
	if (!mainGuy.dead) { this.update(); }
	this.render();
};

Enemy.prototype.render = function() {
	if (!this.dying)
	{
		if(!this.entityBehavior.attacking)
			this.sprite.use("idle");
		else
			this.sprite.use("attack");
		//ctxWorld.drawImage(this.image, this.posX, this.posY, MEASURE_UNIT, MEASURE_UNIT);
	}
	else
	{
	    
		this.sprite.use("death");
		SOUNDS.playSoundOnce(this.deathSound);
		//this.sprite.draw(ctxWorld, this.posX, this.posY, MEASURE_UNIT, MEASURE_UNIT);
	}
	this.sprite.draw(ctxWorld, this.positions.pos[0], this.positions.pos[1], MEASURE_UNIT, MEASURE_UNIT);
};

Enemy.prototype.update = function() {
	if (!this.dying) {
		this.move();
		
		this.enemyboundBox.SetActive(true);
		//this.enemyboundBox.SetAwake(false); //this makes it awake (counter-intuitive)
		
		//this.enemyboundBox.SetPosition(new b2Vec2( ((this.posX+ (0.5*MEASURE_UNIT))/30), ((this.posY+ (0.85*MEASURE_UNIT))/30))); 
		this.enemyboundBox.SetPosition(new b2Vec2( ((this.positions.pos[0]+ (0.5*MEASURE_UNIT))/30), ((this.positions.pos[1]+ (0.85*MEASURE_UNIT))/30)));                                  
		
		this.enemyboundBox.SetUserData( { type: 'enemy', id: "e1", damage: this.damage, xy: this.positions , pX: this.posX, pY: this.posY, 
                                    BoundSize: [((((MEASURE_UNIT/30)/4)*30)*2),  (((( MEASURE_UNIT/30 )/5)*30)*2)],
                                    hitLight: this.hitLight,
                                    hitSomething: this.hitSomething,  
                                    attack: this.attack,
				    flying: this.flying} ); 
	}
	
	this.posX = this.positions.pos[0];
	this.posY = this.positions.pos[1];
	
  //console.log(">>>>  CHECK POS OF ENEMY CHANGES " + this.posX + " , " + this.posY );
  //console.log(">>>>  CHECK POS OF ENEMY CHANGES " + this.positions.pos[0] + " , " + this.positions.pos[1] );
};











