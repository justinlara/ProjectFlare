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
  circleBox.SetRadius(((MEASURE_UNIT)/30)*(13/30));
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
   this.playerBoundBox.SetUserData( {id: "player", health: 100, pos: this.p.pos} );
  this.p.I.src = "assets/Character.png";
}

//Inheritance from entity class
Player.prototype = new Entity;

Player.prototype.Resize = function()
{

   var newfix = new b2FixtureDef; 
 
   var resizeC = newfix.shape = new b2CircleShape; //b2PolygonShape; 
  
  this.playerBoundBox.DestroyFixture( this.pFix ); //oldFix); 
  
   resizeC.SetRadius(((MEASURE_UNIT)/30)*(13/30));
  
  this.pFix = this.playerBoundBox.CreateFixture(newfix);  
  
};


Player.prototype.draw = function(w) 
{
  // -------- my method for drawing sprite ---------------	
  /*
  w.save();
  w.translate(this.p.pos[0], this.p.pos[1]);

  //this.p.sprite.draw(w);
  w.restore();
  */
// -------- my method for drawing sprite END ---------------
	
	var playerScale = 1;
	var pw = MEASURE_UNIT * playerScale;
	var ph = MEASURE_UNIT * playerScale;
	
	
	var c = this.playerfix.shape = new b2CircleShape; 
    var r=c.GetRadius();
    
var offset =new  b2Vec2(Math.abs(centerX - this.p.pos[0]),  Math.abs(centerY  - this.p.pos[1]));  
  
  
  var sx = offset.x; 
  var sy = offset.y; 
                                                        
  this.p.playerBody.SetPosition(new b2Vec2( ((this.p.pos[0]+(.5*MEASURE_UNIT))/30), ((this.p.pos[1]+sy)/30) )); 
  w.drawImage(this.p.I, this.p.pos[0], this.p.pos[1], pw, ph);
  

  I.src = im;
  
};



//movement now also rotates lantern
Player.prototype.moveLeft = function()
 {
  arcStart = Math.PI*9/8;
  arcEnd = Math.PI*7/8;
  this.p.pos[0] -= MEASURE_UNIT*.07;
  checkBounds(this.p);
  
};

Player.prototype.moveRight = function() 
{
  arcStart = Math.PI*1/8;
  arcEnd = Math.PI*15/8;
  this.p.pos[0]  +=  MEASURE_UNIT*.07;
  checkBounds(this.p);

  
};

Player.prototype.moveUp = function() 
{
  arcStart = Math.PI*13/8;
  arcEnd = Math.PI*11/8;
  this.p.pos[1] -=  MEASURE_UNIT*.07;
  checkBounds(this.p);
};

Player.prototype.moveDown = function()
{
  arcStart = Math.PI*5/8;
  arcEnd = Math.PI*3/8;
  this.p.pos[1] +=  MEASURE_UNIT*.07;
  checkBounds(this.p);
};

function checkBounds(p)  
 {

    
    if(p.pos[0] < ((MEASURE_UNIT* 25)/30))
    {
        p.pos[0] = ((MEASURE_UNIT*25)/30);  
    }
    
    else if(p.pos[0] > (Math.abs(GAME_WIDTH/30 - (14* MEASURE_UNIT))/30)*30)
    {
        p.pos[0] = ((Math.abs(GAME_WIDTH/30 - (14* MEASURE_UNIT))/30)*30);
       
    }

    else if(p.pos[1] < (MEASURE_UNIT* 4)/30)
    {
        p.pos[1] =  ((MEASURE_UNIT* 4)/30);
    }
    else if(p.pos[1] > (Math.abs(GAME_HEIGHT/30 - (9.4* MEASURE_UNIT))/30)*30)
    {
        p.pos[1] = ((Math.abs(GAME_HEIGHT/30 - (9.4* MEASURE_UNIT))/30)*30);
    }
 
}




Player.prototype.update = function() 
{
  //if (controls.isDown(controls.UP)) this.moveUp();
  //if (controls.isDown(controls.LEFT)) this.moveLeft();
  //if (controls.isDown(controls.DOWN)) this.moveDown();
  //if (controls.isDown(controls.RIGHT)) this.moveRight();
  
  if (controls.isDown(controls.UP)) this.moveUp();
  else if (controls.isDown(controls.DOWN)) this.moveDown();
  
  if (controls.isDown(controls.LEFT)) this.moveLeft();
  else if (controls.isDown(controls.RIGHT)) this.moveRight();
};