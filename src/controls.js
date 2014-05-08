

var controls = 
{
  _pressed: {},

  TILDE: 192,
  ESC: 27,
  
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  
  PGU:  33,
  PGD:  34,
  END:  35,
  HOME: 36,
  
  SPACE:  32,
  
  isDown: function(keyCode) 
  {
      lastPressed = keyCode;
    return this._pressed[keyCode];
    
  },
  
  onKeydown: function(event) 
  {
    this._pressed[event.keyCode] = true;
    //console.log("pressing: ");
    //console.log(event.keyCode);
    currentPress = event.keyCode;
    
    
  },
  
  onKeyup: function(event) 
  {
    delete this._pressed[event.keyCode];
    currentPress = 0;
  }
};

