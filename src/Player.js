function Player() 
{
    
      //Entity.call(this);  
  /*
  this.fixture = new b2FixtureDef;
  
  this.fixture.density = 1;
  this.fixture.friction = 1;
  this.fixture.restitution = 1;
  
  this.body = new b2BodyDef;
  this.body.type = b2Body.b2_dynamicBody;
  this.body.position.x = (GAME_WIDTH/2)/30;
  this.body.position.y = (GAME_HEIGHT/2)/30;
   //this.body.userData = "assets/Character.png";
  this.fixture.shape = new b2PolygonShape; //b2PolygonShape;
  
  this.fixture.shape.SetAsBox((MEASURE_UNIT/30)/2,  ( MEASURE_UNIT/30 )/2);
 

  this.playerBody = collisionWorld.CreateBody(this.body);
  this.playerBody.CreateFixture(this.fixture);
  */
 ///*
  var fix = new b2FixtureDef;
  var bod = new b2BodyDef;
  
  this.playerfix = this.fixture;
  this.playerbox = this.body;
  
  this.playerbox.position.x = 120/MEASURE_UNIT;
  this.playerbox.position.y = 50/MEASURE_UNIT;
  
   this.playerfix.shape.SetAsBox((30/MEASURE_UNIT),  ( 30/MEASURE_UNIT ));
  
  this.playerBoundBox = collisionWorld.CreateBody(this.playerbox);
  this.playerBoundBox.CreateFixture(this.playerfix);
  
  
  //*/
    

  this.p = {  playerBody: this.playerBoundBox,  
              pos: [(GAME_WIDTH/2), (GAME_HEIGHT/2)], 
              
                         //  url    pos(x,y)     size of     speed       frames  
                        //          in           keyframe    frame/      index of
                       //           sprite       sprite       sec        animation
  //sprite: new Sprite(images[0],    [0,0],    [30, 30],     0.25,       [0,1,2]  )
           
           I: new Image()
           };
    
    
    
    
   //updated initial xy position to the middle of the screen
  //this.p = { pos: [(GAME_WIDTH/2),(GAME_HEIGHT/2)], I: new Image()};
  this.p.I.src = "assets/Character.png";
}

//Inheritance from entity class
Player.prototype = new Entity;


Player.prototype.draw = function(w) 
{
	var playerScale = 1;
	var pw = MEASURE_UNIT * playerScale;
	var ph = MEASURE_UNIT * playerScale;
	
// -------- my method for drawing sprite ---------------	
  /*
  w.save();
  w.translate(this.p.pos[0], this.p.pos[1]);

  //this.p.sprite.draw(w);
  w.restore();
  */
// -------- my method for drawing sprite END ---------------    
offset =new b2Vec2((centerX - this.p.pos[0]),  Math.abs(centerY  - this.p.pos[1]));
  
  var sx = offset.x ;//* MEASURE_UNIT;
  var sy = offset.y ;//* MEASURE_UNIT;
  w.drawImage(this.p.I, this.p.pos[0], this.p.pos[1], pw, ph);
  this.p.playerBody.SetPosition(new b2Vec2( ((this.p.pos[0]+sx)/30), ((this.p.pos[1]+sy)/30) ));
  
  //console.log("p[0]- " + (this.p.playerBody.GetPosition().x) + " & p[1]- " + (this.p.playerBody.GetPosition().y ) );

  
  
  //console.log("IMAGE ### p[0]- " + (this.p.pos[0]) + " & IMAGE ### p[1]- " + (this.p.pos[1]));

  I.src = im;
  
};



//movement now also rotates lantern
Player.prototype.moveLeft = function()
 {
  arcStart = Math.PI*5/4;
  arcEnd = Math.PI*3/4;
  this.p.pos[0] -= MEASURE_UNIT*.07;
  checkBounds(this.p);
};

Player.prototype.moveRight = function() 
{
  arcStart = Math.PI*1/4;
  arcEnd = Math.PI*7/4;
  this.p.pos[0]  +=  MEASURE_UNIT*.07;
  checkBounds(this.p);
};

Player.prototype.moveUp = function() 
{
  arcStart = Math.PI*7/4;
  arcEnd = Math.PI*5/4;
  this.p.pos[1] -=  MEASURE_UNIT*.07;
  checkBounds(this.p);
};

Player.prototype.moveDown = function()
{
  arcStart = Math.PI*3/4;
  arcEnd = Math.PI*1/4;
  this.p.pos[1] +=  MEASURE_UNIT*.07;
  checkBounds(this.p);
};
///*
function checkBounds(p)  
 {
     //console.log("play pos x,y " + p.pos[0] + " , " + p.pos[1]+ "  GH  " + GAME_HEIGHT + "  32*MU  "+  32* MEASURE_UNIT + " MU " + MEASURE_UNIT);
     offsetH = Math.floor(GAME_HEIGHT * .0575);
     //console.log(" " + offsetH + " GH - 32*OffS " + Math.abs(GAME_HEIGHT - (32* offsetH)));
    if(p.pos[0] < MEASURE_UNIT) 
    {
        p.pos[0] = MEASURE_UNIT;  
    }
    
    else if(p.pos[0] > Math.abs(GAME_WIDTH - (32* MEASURE_UNIT)))  
    {
        p.pos[0] = Math.abs(GAME_WIDTH - (32*MEASURE_UNIT)); 
    }

    else if(p.pos[1] < MEASURE_UNIT-centerY)
    {
        p.pos[1] =  MEASURE_UNIT-centerY;
    }
    else if(p.pos[1] > Math.abs(GAME_HEIGHT - (32* offsetH))) 
    {
        p.pos[1] = Math.abs(GAME_HEIGHT - (32* offsetH));
    }
 
}
//*/
/*
var controls = 
{
  _pressed: {},

  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  
  isDown: function(keyCode) 
  {
    return this._pressed[keyCode];
  },
  
  onKeydown: function(event) 
  {
    this._pressed[event.keyCode] = true;
  },
  
  onKeyup: function(event) 
  {
      //p.sprite.backToIdol(this.world);
    delete this._pressed[event.keyCode];
  }
};

*/
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