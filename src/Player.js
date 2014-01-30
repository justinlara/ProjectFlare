function Player() 
{
   //updated initial xy position to the middle of the screen
  this.p = { pos: [(GAME_WIDTH/2),(GAME_HEIGHT/2)], I: new Image()};
  this.p.I.src = "assets/Character.png";
}

Player.prototype.draw = function(w) 
{
	var playerScale = 1;
	var pw = MEASURE_UNIT * playerScale;
	var ph = MEASURE_UNIT * playerScale;
  w.drawImage(this.p.I, this.p.pos[0], this.p.pos[1], pw, ph);
  //I.src = im;
  
};

//movement now also rotates lantern
Player.prototype.moveLeft = function()
 {
  arcStart = Math.PI*5/4;
  arcEnd = Math.PI*3/4;
  this.p.pos[0] -= MEASURE_UNIT*.07;
};

Player.prototype.moveRight = function() 
{
  arcStart = Math.PI*1/4;
  arcEnd = Math.PI*7/4;
  this.p.pos[0]  +=  MEASURE_UNIT*.07;
};

Player.prototype.moveUp = function() 
{
  arcStart = Math.PI*7/4;
  arcEnd = Math.PI*5/4;
  this.p.pos[1] -=  MEASURE_UNIT*.07;
};

Player.prototype.moveDown = function()
{
  arcStart = Math.PI*3/4;
  arcEnd = Math.PI*1/4;
  this.p.pos[1] +=  MEASURE_UNIT*.07;
};

Player.prototype.update = function() 
{
  if (controls.isDown(controls.UP)) this.moveUp();
  if (controls.isDown(controls.LEFT)) this.moveLeft();
  if (controls.isDown(controls.DOWN)) this.moveDown();
  if (controls.isDown(controls.RIGHT)) this.moveRight();
};