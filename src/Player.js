function Player() 
{
  arcStart = Math.PI*5/8;
  arcEnd = Math.PI*3/8;

  this.playerfix = this.fixture;
  this.playerbox = this.body;
  
  var circleBox = this.playerfix.shape = new b2CircleShape; 
  this.playerbox.type = b2Body.b2_dynamicBody;   //b2_kinematicBody;
  this.playerbox.awake = false;
  
  this.playerbox.position.x = 1120/MEASURE_UNIT;
  this.playerbox.position.y = 150/MEASURE_UNIT;
  
   //this.playerfix.shape.SetAsBox((MEASURE_UNIT/30)/3,  ( MEASURE_UNIT/30 )/3);
  circleBox.SetRadius(((MEASURE_UNIT)/30)*(.23));
   this.playerfix.shape.Set(circleBox);
  
  this.playerBoundBox = collisionWorld.CreateBody(this.playerbox);
  this.pFix = this.playerBoundBox.CreateFixture(this.playerfix);
  
  
  this.playerBoundBox.SetSleepingAllowed(false);
    
  this.p = {  playerBody: this.playerBoundBox,  
              pos: [(GAME_WIDTH/2), (GAME_HEIGHT/2)], 
              
                         //  url    pos(x,y)     size of     speed       frames  
                        //          in           keyframe    frame/      index of
                       //           sprite       sprite       sec        animation
  //sprite: new Sprite(images[0],    [0,0],    [30, 30],     0.25,       [0,1,2]  )
           
           I: new Image()
           };
	this.playerBoundBox.SetUserData( {id: "player", health: 100, BoundSize: ((((MEASURE_UNIT/30)*.23)*30)*2), pos: this.p.pos} );
	this.p.I.src = "assets/Character.png";
	this.light = 5;
  
	//player animation set up
	this.pSprite = new SpriteMap('assets/player/Walk_Forward.png',//image
			{ //anim sequences
				idle: {startRow: 0, startCol: 0, endRow: 0, endCol: 0},
				walkDown: {startRow: 0, startCol: 0, endRow: 0, endCol: 3}
				//walkLeft: {startRow: 1, startCol: 6, endRow: 1, endCol: 8},
				//walkRight: {startRow: 2, startCol: 6, endRow: 2, endCol: 8},
				//walkUp: {startRow: 3, startCol: 6, endRow: 3, endCol: 8}
			}, { //options
				frameW: 64, // Width of each frame of the animation in pixels
				frameH: 64, // Height of each frame of the animation in pixels
				projectedW: 100, // Displayed width
				projectedH: 100, // Displayed height 
				interval: 150, // Switch frames every xxx ms
				useTimer: false, // Rely on requestAnimFrame to update frames instead of setInterval
				postInitCallback: function() {
					this.pSprite.start('idle');//start the idle anim
					//when/where you want to switch anim sequences, use sprite.use(stringAnimName);
				}
	});

	//Resize:
	this.Resize = function()
	{
		var newfix = new b2FixtureDef; 
 
		var resizeC = newfix.shape = new b2CircleShape; //b2PolygonShape; 
	
		this.playerBoundBox.DestroyFixture( this.pFix ); //oldFix); 
  
		 resizeC.SetRadius(((MEASURE_UNIT)/30)*(.23));
  
		this.pFix = this.playerBoundBox.CreateFixture(newfix);
		
	  this.playerBoundBox.SetUserData( {id: "player", health: 100, BoundSize: ((((MEASURE_UNIT/30)*.23)*30)*2), pos: this.p.pos} );

	};
	
	//draw, overwrites entity draw
	this.draw = function(w) 
	{
		this.update();
	
		var playerScale = 1;
		var pw = MEASURE_UNIT * playerScale;
		var ph = MEASURE_UNIT * playerScale;
	
		//Collision:
		//var c = this.playerfix.shape = new b2CircleShape; 
		//var r=c.GetRadius();
		//var offset =new  b2Vec2(Math.abs(centerX - this.p.pos[0]),  Math.abs(centerY  - this.p.pos[1]));  
		//var sx = offset.x; 
		//var sy = offset.y; 
		
		this.p.playerBody.SetPositionAndAngle(new b2Vec2( ((this.p.pos[0]+(0.5*MEASURE_UNIT))/30), ((this.p.pos[1]+(0.87*MEASURE_UNIT))/30) ), arcEnd  );  
	
		//old draw:
		//w.drawImage(this.p.I, this.p.pos[0], this.p.pos[1], pw, ph);
	
		//use sprite draw method
		this.pSprite.draw(ctxWorld, this.p.pos[0], this.p.pos[1], pw, ph);
		
		
	};
	
	this.update = function() 
	{
		//if (controls.isDown(controls.UP)) this.moveUp();
		//if (controls.isDown(controls.LEFT)) this.moveLeft();
		//if (controls.isDown(controls.DOWN)) this.moveDown();
		//if (controls.isDown(controls.RIGHT)) this.moveRight();
  
		if (controls.isDown(controls.UP)) this.moveUp();
		else if (controls.isDown(controls.DOWN)) this.moveDown();
	
		if (controls.isDown(controls.LEFT)) this.moveLeft();
		else if (controls.isDown(controls.RIGHT)) this.moveRight();
		
		
		if (controls.isDown(controls.PGU))
		{
		  thisLevel.goToNorthRoom();
		}
  		if (controls.isDown(controls.PGD))
		{
		  thisLevel.goToSouthRoom();
		}
  		if (controls.isDown(controls.END))
		{
		  thisLevel.goToEastRoom();
		}
		if (controls.isDown(controls.HOME))
		{
		  thisLevel.goToWestRoom();
		}
  
		if ('undefined' != typeof this.pSprite) {
			if (!controls.isDown(controls.LEFT) &&
				!controls.isDown(controls.RIGHT) &&
				!controls.isDown(controls.UP) &&
				!controls.isDown(controls.DOWN)){
					this.pSprite.use('idle');
				}
		}
	};

	//movement now also rotates lantern
	this.moveLeft = function()
	{
		arcStart = Math.PI*9/8;
		arcEnd = Math.PI*7/8;
		this.p.pos[0] -= MEASURE_UNIT*.07;
		//checkBounds(this.p);
  
	};

	this.moveRight = function() 
	{
		arcStart = Math.PI*1/8;
		arcEnd = Math.PI*15/8;
		this.p.pos[0]  +=  MEASURE_UNIT*.07;
		//checkBounds(this.p);
//	console.log("^^^^^^ PLAYER POS ^^^^^^^" + this.p.pos[0] + " , " + this.p.pos[1]);
  
	};
	this.moveUp = function() 
	{
		arcStart = Math.PI*13/8;
		arcEnd = Math.PI*11/8;
		this.p.pos[1] -=  MEASURE_UNIT*.07;
		//checkBounds(this.p);
		
	};
	this.moveDown = function()
	{
		arcStart = Math.PI*5/8;
		arcEnd = Math.PI*3/8;
		this.p.pos[1] +=  MEASURE_UNIT*.07;
		this.pSprite.use('walkDown');
		//checkBounds(this.p);
	};
} //end constructor


//Inheritance from entity class
Player.prototype = new Entity;

checkBounds = function(p)  
{    
/*    
    if(p.pos[0] < ((MEASURE_UNIT* 22)/30))
    {
        p.pos[0] = ((MEASURE_UNIT*22)/30); 
         
    }
*/    
/*    
    //else 
    if(p.pos[0] > (Math.abs(GAME_WIDTH/30 - (14* MEASURE_UNIT))/30)*30)
    {
        p.pos[0] = ((Math.abs(GAME_WIDTH/30 - (14* MEASURE_UNIT))/30)*30);
       
    }
*/
    //else
/*     
    if(p.pos[1] < (MEASURE_UNIT* 4)/30)
    {
        p.pos[1] =  ((MEASURE_UNIT* 4)/30);
    }
*/    
    //else 
/*    
    if(p.pos[1] > (Math.abs(GAME_HEIGHT/30 - (9.4* MEASURE_UNIT))/30)*30)
    {
        p.pos[1] = ((Math.abs(GAME_HEIGHT/30 - (9.4* MEASURE_UNIT))/30)*30);
    }
*/ 
};