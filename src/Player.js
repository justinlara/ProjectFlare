function Player(spriteImage) 
{
   
  p = { pos: [0,0], I: new Image()};
  p.I.src = "assets/testkitteh.png";
}

Player.prototype.draw = function(w) 
{

  w.drawImage(p.I, p.pos[0], p.pos[1]);
  //I.src = im;
  
};

Player.prototype.moveLeft = function()
 {
  p.pos[0] -=2;
};

Player.prototype.moveRight = function() 
{
  p.pos[0]  += 2;
};

Player.prototype.moveUp = function() 
{
  p.pos[1] -= 2;
};

Player.prototype.moveDown = function()
{
  p.pos[1] += 2;
};

Player.prototype.update = function() 
{
  if (controls.isDown(controls.UP)) this.moveUp();
  if (controls.isDown(controls.LEFT)) this.moveLeft();
  if (controls.isDown(controls.DOWN)) this.moveDown();
  if (controls.isDown(controls.RIGHT)) this.moveRight();
};