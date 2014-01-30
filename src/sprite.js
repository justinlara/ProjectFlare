(function() 
{
    function Sprite(url, pos, size, speed, frames ) 
    {
        this.url = url;
        this.pos = pos;
        this.size = size;
        this.speed = speed;        
        this.frames = frames;
        this._index = 0;

        //this.speed = typeof speed === 'number' ? speed: 0;
     
    }

 
 
  Sprite.prototype.update = function() //(lastUpdate) 
  {  

                                 // time passed since last update -> (dt)
      this._index += this.speed; //* lastUpdate;
  };

  Sprite.prototype.draw = function(ctx) 
  {
        var frame;
    
        if(this.speed > 0) 
        {
            var max = this.frames.length;
            var idx = Math.floor(this._index);
            frame = this.frames[idx % max];
         
        }
        else 
        {
            frame = 0;
        }
    
    
        var x = this.pos[0];
        var y = this.pos[1];
        
    
    
            x += frame * this.size[0];
        ctx.drawImage(
                       loader.get(this.url),
                      x, y, this.size[0], this.size[1],
                      0, 0, this.size[0], this.size[1]);
                                            
                      
  };
   
  Sprite.prototype.backToIdol = function()
  {
  
      this._index = 0;
      
  };     
        
     

    window.Sprite = Sprite;
}());