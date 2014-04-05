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
	this.playerBoundBox.SetUserData( {id: "player", health: 6, BoundSize: ((((MEASURE_UNIT/30)*.23)*30)*2), pos: this.p.pos} );
	this.p.I.src = "assets/Character.png";
	this.light = 5;
	this.movespeed = 0.04;
	
	//for sorting:
	this.posY = this.p.pos[1];
  
	//player animation set up
	this.pSprite = loadSpriteP;
	//this.lSprite = loadSpriteLantern;
	
	//for iframes:
	this.invul = false;
	this.frameCount = 0;

	//Resize:
	this.Resize = function()
	{
		var newfix = new b2FixtureDef; 
 
		var resizeC = newfix.shape = new b2CircleShape; //b2PolygonShape; 
	
		this.playerBoundBox.DestroyFixture( this.pFix ); //oldFix); 
  
		 resizeC.SetRadius(((MEASURE_UNIT)/30)*(.23));
  
		this.pFix = this.playerBoundBox.CreateFixture(newfix);
		
		// health: 100
	  this.playerBoundBox.SetUserData( {id: "player", health: 6, BoundSize: ((((MEASURE_UNIT/30)*.23)*30)*2), pos: this.p.pos} );

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
		
		//updated to consider invulnerability time
		if (!this.invul) {
			//use sprite draw method
			this.pSprite.draw(ctxWorld, this.p.pos[0], this.p.pos[1]);
			
			if (this.light > 0 && !thisLevel.currentRoom.isLit) { //only draw the flashlight if you have lantern light
				ctxDark.fillStyle = 'white';
				ctxDark.beginPath();
				var r = MEASURE_UNIT*4;   
				ctxDark.arc(centerX+x, centerY+y, r, arcStart, arcEnd, true);
				ctxDark.lineTo(centerX+x, centerY+y);
				ctxDark.fill();
				
				//replace block above with:
				//var shiftY = MEASURE_UNIT*1; //adjustment needed
				//this.lSprite.draw(ctxWorld, this.p.pos[0], this.p.pos[1]+shiftY);
			}
			
			this.frameCount = 0;
		}
		else { //flicker player sprite and lantern
			this.frameCount++;
			var frame = this.frameCount % 8;
			if (frame == 0 || frame == 1 || frame == 2 || frame == 3) {//play with this to change flicker speed
				this.pSprite.draw(ctxWorld, this.p.pos[0], this.p.pos[1]);
				//---
				if (this.light > 0 && !thisLevel.currentRoom.isLit) { //only draw the flashlight if you have lantern light
				ctxDark.fillStyle = 'white';
				ctxDark.beginPath();
				var r = MEASURE_UNIT*4;   
				ctxDark.arc(centerX+x, centerY+y, r, arcStart, arcEnd, true);
				ctxDark.lineTo(centerX+x, centerY+y);
				ctxDark.fill();
				//replace block above with:
				//var shiftY = MEASURE_UNIT*1; //adjustment needed
				//this.lSprite.draw(ctxWorld, this.p.pos[0], this.p.pos[1]+shiftY);
				}
			}
		}
		
		
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
  
		if ('undefined' != typeof loadSpriteP) {
			if (!controls.isDown(controls.LEFT) &&
				!controls.isDown(controls.RIGHT) &&
				!controls.isDown(controls.UP) &&
				!controls.isDown(controls.DOWN)){
					loadSpriteP.use('idle');
				}
		}
		
		mainGuy.posY = mainGuy.p.pos[1];
	};

	//movement now also rotates lantern
	this.moveLeft = function()
	{
		arcStart = Math.PI*9/8;
		arcEnd = Math.PI*7/8;
		this.p.pos[0] -= MEASURE_UNIT*this.movespeed;
		loadSpriteP.use('walkLeft');
		if(soundManager.getSoundById('footstep').playState == 0) {soundManager.play('footstep');}		//loadSpriteP.stop();//for now		//checkBounds(this.p);
		//console.log("^^^^^^ PLAYER POS ^^^^^^^" + this.p.pos[0] + " , " + this.p.pos[1]);
  
	};

	this.moveRight = function() 
	{
		arcStart = Math.PI*1/8;
		arcEnd = Math.PI*15/8;
		this.p.pos[0]  +=  MEASURE_UNIT*this.movespeed;
		loadSpriteP.use('walkRight');
		if(soundManager.getSoundById('footstep').playState == 0) {soundManager.play('footstep');}
		//checkBounds(this.p);
	//console.log("^^^^^^ PLAYER POS ^^^^^^^" + this.p.pos[0] + " , " + this.p.pos[1]);
  
	};
	this.moveUp = function() 
	{
		arcStart = Math.PI*13/8;
		arcEnd = Math.PI*11/8;
		this.p.pos[1] -=  MEASURE_UNIT*this.movespeed;
		loadSpriteP.use('walkUp');
		if(soundManager.getSoundById('footstep').playState == 0) {soundManager.play('footstep');}		//loadSpriteP.stop();//for now		//checkBounds(this.p);
		//console.log("^^^^^^ PLAYER POS ^^^^^^^" + this.p.pos[0] + " , " + this.p.pos[1]);
		
	};
	this.moveDown = function()
	{
		arcStart = Math.PI*5/8;
		arcEnd = Math.PI*3/8;
		this.p.pos[1] +=  MEASURE_UNIT*this.movespeed;
		loadSpriteP.use('walkDown');
		if(soundManager.getSoundById('footstep').playState == 0) {soundManager.play('footstep');}
		//checkBounds(this.p);
		//console.log("^^^^^^ PLAYER POS ^^^^^^^" + this.p.pos[0] + " , " + this.p.pos[1]);
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