function Player() 
{
  arcStart = Math.PI*5/8;
  arcEnd = Math.PI*3/8;
  
  this.lantern = {
	currentLightSprite: SpriteNoOil,
	shiftX: 0,
	shiftY: 0,
	width: MEASURE_UNIT-7,
	height: MEASURE_UNIT-7
  };
  
  this.playerfix = this.fixture;
  this.playerbox = this.body;
  
  this.lightfix = new b2FixtureDef;
  this.lightbox = new b2BodyDef;
  
  var circleBox = this.playerfix.shape = new b2CircleShape; 
  this.playerbox.type = b2Body.b2_dynamicBody;   //b2_kinematicBody;
  
  this.lightfix.shape =  new b2PolygonShape;  // new b2CircleShape;
  this.lightbox.type = b2Body.b2_dynamicBody;
  
  this.playerbox.awake = false;
  //this.lightbox.awake = false;
  
  this.playerbox.position.x = 1120/MEASURE_UNIT;
  this.playerbox.position.y = 150/MEASURE_UNIT;
  
  this.lightbox.position.x = 50/MEASURE_UNIT;
  this.lightbox.position.y = 70/MEASURE_UNIT;
  
  this.lightShiftX = 0;
  this.lightShiftY = 0;
  
  // REPLACED W/ HORZ AND VERT MOVE BOOLS
  this.rotateLightBox = false;
  
 
   circleBox.SetRadius(((MEASURE_UNIT)/30)*(.23));
   this.playerfix.shape.Set(circleBox);
  
         // RECTALGE BOUND BOX
       this.lightfix.shape.SetAsBox(((MEASURE_UNIT/30)*.7),  ( (MEASURE_UNIT/30)*1.2 )); 
       //this.lightfix.shape.Set();
     
   
 
       
        
       
       this.lightBoundBox = collisionWorld.CreateBody(this.lightbox);
       this.lFix = this.lightBoundBox.CreateFixture(this.lightfix);
       
  
  this.playerBoundBox = collisionWorld.CreateBody(this.playerbox);
  this.pFix = this.playerBoundBox.CreateFixture(this.playerfix);
  
  this.playerBoundBox.SetSleepingAllowed(false);
    
  
  this.p = {  playerBody: this.playerBoundBox, playerLight: this.lightBoundBox, 
              pos: [(GAME_WIDTH/2), (GAME_HEIGHT/2)], 
              
                         //  url    pos(x,y)     size of     speed       frames  
                        //          in           keyframe    frame/      index of
                       //           sprite       sprite       sec        animation
  //sprite: new Sprite(images[0],    [0,0],    [30, 30],     0.25,       [0,1,2]  )
           
           I: new Image()
           };

           
	this.playerBoundBox.SetUserData( {id: "player", health: 6, BoundSize: ((((MEASURE_UNIT/30)*.23)*30)*2), pos: this.p.pos} );
	
	this.lightBoundBox.SetUserData({id: "light", lightPos:  [(((this.p.pos[0]+((this.lightShiftX )+  (this.lantern.width)/2 )))),
                                                             (((this.p.pos[1]+((this.lightShiftY )+  (this.lantern.height)/2)))) ] , 
	                                             BoundSize:  [(((MEASURE_UNIT/30)*.7)*30)*2,  (((MEASURE_UNIT/30)*1.2 )*30)*2], // circle bound -((((MEASURE_UNIT)/30)*(.8))*30 )*2
	                                             angle:     this.p.playerLight.GetAngle() 
	                                             });
	
	this.p.I.src = "assets/Character.png";
	
	this.hp = 6;
	this.light = 5;
	this.movespeed = 0.04;
	
	//for sorting:
	this.posY = this.p.pos[1];
  
	//player animation set up
	this.pSprite = loadSpriteP;
	
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
		
		this.p.playerBody.SetPosition(new b2Vec2( 
		    ((this.p.pos[0]+(0.5*MEASURE_UNIT))/30), ((this.p.pos[1]+(0.87*MEASURE_UNIT))/30) ));  
		
		this.p.playerLight.SetPosition(new b2Vec2(
		                      // this.lantern.shiftX- 20  
             ((this.p.pos[0]+((this.lightShiftX )+  (this.lantern.width)/2 )))/30, 
             ((this.p.pos[1]+((this.lightShiftY )+  (this.lantern.height)/2)))/30 ) ); //flip it 90 degrees: 4.7
		
		this.lightBoundBox.SetUserData({id: "light", lightPos:  [(((this.p.pos[0]+((this.lightShiftX )+  (this.lantern.width)/2 )))),
                                                             (((this.p.pos[1]+((this.lightShiftY )+  (this.lantern.height)/2)))) ] , 
                                                 BoundSize:  [(((MEASURE_UNIT/30)*.7)*30)*2,  (((MEASURE_UNIT/30)*1.2 )*30)*2],  // circle bound -- ((((MEASURE_UNIT)/30)*(.8))*30 )*2,
                                                 //angle:     this.p.playerLight.GetAngle() 
                                                 });
		
		
		//old draw:
		//w.drawImage(this.p.I, this.p.pos[0], this.p.pos[1], pw, ph);
		
		//updated to consider invulnerability time
		if (!this.invul) {
			//use sprite draw method
			this.pSprite.draw(ctxWorld, this.p.pos[0], this.p.pos[1]);
			
			if (!thisLevel.currentRoom.isLit) { //only draw the flashlight if you have lantern light
				if (this.light > 0) {
					ctxDark.globalCompositeOperation = 'xor';
					ctxDark.fillRect(this.p.pos[0]+this.lantern.shiftX+5, this.p.pos[1]+this.lantern.shiftY+5, 
						this.lantern.width-7, this.lantern.height-7);
					  
					  // ****COMMENTED FOR DEBUGGING
					ctxDark.globalCompositeOperation = 'source-over';
					this.lantern.currentLightSprite.draw(ctxDark, this.p.pos[0]+this.lantern.shiftX, this.p.pos[1]+this.lantern.shiftY);

					//erase edges and redraw them
					ctxDark.clearRect(0,0,MEASURE_UNIT,GAME_HEIGHT);
					ctxDark.globalAlpha = 0.90;
					ctxDark.fillRect(0,0,MEASURE_UNIT,GAME_HEIGHT);
					
					//test- yes
					//ctxDark.globalCompositeOperation = 'xor';
					//ctxDark.drawImage(imgtest, 300, 0);
				}
				//no light, draw base circle
				else if (this.light <= 0) {
					ctxDark.globalCompositeOperation = 'xor';
					ctxDark.fillRect(this.p.pos[0]+5, this.p.pos[1]+5, MEASURE_UNIT-7, MEASURE_UNIT-7);
					
					 // ****COMMENTED FOR DEBUGGING
					ctxDark.globalCompositeOperation = 'source-over';
					this.lantern.currentLightSprite.draw(ctxDark, this.p.pos[0], this.p.pos[1]);
				}
			}
			
			this.frameCount = 0;
		}
		else { //flicker player sprite and lantern
			this.frameCount++;
			var frame = this.frameCount % 10;
			if (frame <= 5) {//play with this to change flicker speed
				this.pSprite.draw(ctxWorld, this.p.pos[0], this.p.pos[1]);
				//---
				if (!thisLevel.currentRoom.isLit) { //only draw the flashlight if you have lantern light
				if (this.light > 0) {
					ctxDark.globalCompositeOperation = 'xor';
					ctxDark.fillRect(this.p.pos[0]+this.lantern.shiftX+5, this.p.pos[1]+this.lantern.shiftY+5, 
						this.lantern.width-7, this.lantern.height-7);
					ctxDark.globalCompositeOperation = 'source-over';
					this.lantern.currentLightSprite.draw(ctxDark, this.p.pos[0]+this.lantern.shiftX, this.p.pos[1]+this.lantern.shiftY);
				}
				//no light, draw base circle
				else if (this.light <= 0) {
					var shiftX = 0; 
					var shiftY = 0; //adjustment needed
					ctxDark.globalCompositeOperation = 'xor';
					ctxDark.fillRect(this.p.pos[0]+shiftX+5, this.p.pos[1]+shiftY+5, MEASURE_UNIT-7, MEASURE_UNIT-7);
					ctxDark.globalCompositeOperation = 'source-over';
					this.currentLightSprite.draw(ctxDark, this.p.pos[0]+shiftX, this.p.pos[1]+shiftY);
				}
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
	    
        if(!this.rotateLightBox)
        { 
          this.p.playerLight.SetAngle(4.7);
            this.rotateLightBox  = true;
        }
	    
	   
	   /*
	  
	     //console.log(" rotateLightBox--- L --- " + this.horizSetBox);
	   */
	  
		this.lantern.currentLightSprite = SpriteLanternLEFT;
		this.lantern.shiftX = -MEASURE_UNIT*4.5;
		this.lantern.shiftY = -MEASURE_UNIT*2;
		this.lantern.width = MEASURE_UNIT*6*scaleLight;
		this.lantern.height = MEASURE_UNIT*5*scaleLight;
		
		//this.lightShiftX = this.lantern.shiftX+10;
        this.lightShiftX = this.lantern.shiftX*.99;
        this.lightShiftY = this.lantern.shiftY;
		
		this.p.pos[0] -= MEASURE_UNIT*this.movespeed;
		loadSpriteP.use('walkLeft');
		SOUNDS.playRandomFootstep();		
		//checkBounds(this.p);
		//console.log("^^^^^^ PLAYER POS ^^^^^^^" + this.p.pos[0] + " , " + this.p.pos[1]);
  
	};
	this.moveRight = function() 
	{
	    if(!this.rotateLightBox)
        { 
           this.p.playerLight.SetAngle(4.7);
            this.rotateLightBox  = true;
        }
	    
	   
	   /*
	   
        //console.log(" rotateLightBox--- R --- " + this.horizSetBox);
	  */
		
		this.lantern.currentLightSprite = SpriteLanternRIGHT;
		this.lantern.shiftX = -MEASURE_UNIT*.5;
		this.lantern.shiftY = -MEASURE_UNIT*2;
		this.lantern.width = MEASURE_UNIT*6*scaleLight;
		this.lantern.height = MEASURE_UNIT*5*scaleLight;
		                                    // -10
		this.lightShiftX = this.lantern.shiftX*1.3;
        this.lightShiftY = this.lantern.shiftY;
		
		this.p.pos[0]  +=  MEASURE_UNIT*this.movespeed;
		loadSpriteP.use('walkRight');
		SOUNDS.playRandomFootstep();
		//checkBounds(this.p);
	//console.log("^^^^^^ PLAYER POS ^^^^^^^" + this.p.pos[0] + " , " + this.p.pos[1]);
  
	};
	this.moveUp = function() 
	{
	    if(this.rotateLightBox)
        { 
          this.p.playerLight.SetAngle(0);
            this.rotateLightBox  = false;
        }
	    
	    
	    //console.log(" rotateLightBox--- U --- " + this.vertSetBox);
	    
		this.lantern.currentLightSprite = SpriteLanternUP;
		this.lantern.shiftX = -MEASURE_UNIT*2;
		this.lantern.shiftY = -MEASURE_UNIT*4.5;
		this.lantern.width = MEASURE_UNIT*5*scaleLight;
		this.lantern.height = MEASURE_UNIT*6*scaleLight;
		
		this.lightShiftX = this.lantern.shiftX;
        this.lightShiftY = this.lantern.shiftY*.87;
		
		this.p.pos[1] -=  MEASURE_UNIT*this.movespeed;
		loadSpriteP.use('walkUp');
		SOUNDS.playRandomFootstep();		//loadSpriteP.stop();//for now		//checkBounds(this.p);
		//console.log("^^^^^^ PLAYER POS ^^^^^^^" + this.p.pos[0] + " , " + this.p.pos[1]);
		
	};
	this.moveDown = function()
	{
	    if(this.rotateLightBox)
        { 
            this.p.playerLight.SetAngle(0);
            this.rotateLightBox  = false;
        }
	    
	   
	   /*
	    
        
       // console.log(" rotateLightBox--- D --- " + this.vertSetBox);
	  */
	 
	    
		this.lantern.currentLightSprite = SpriteLanternDOWN;
		this.lantern.shiftX = -MEASURE_UNIT*2;
		this.lantern.shiftY = -MEASURE_UNIT*.5;
		this.lantern.width = MEASURE_UNIT*5*scaleLight;
		this.lantern.height = MEASURE_UNIT*6*scaleLight;
		
		this.lightShiftX = this.lantern.shiftX;
        this.lightShiftY = this.lantern.shiftY*.65;
		
		this.p.pos[1] +=  MEASURE_UNIT*this.movespeed;
		loadSpriteP.use('walkDown');
		SOUNDS.playRandomFootstep();
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
}

Player.prototype.giveCollisionBox = function(newHealth)
{
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
	this.playerBoundBox.SetUserData( {id: "player", health: newHealth, BoundSize: ((((MEASURE_UNIT/30)*.23)*30)*2), pos: this.p.pos} );
	
	this.hp = newHealth;
}


;