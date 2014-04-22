function levelBarrier()
{
    //this is the boundry box for the level (four boxes suround room)
    
    //one body for the 4 walls
    this.LBody = new b2BodyDef;
   
   // the four box fixtures
   this.Llevelfix = new b2FixtureDef;
   this.L2levelfix = new b2FixtureDef;
   
   this.Rlevelfix = new b2FixtureDef;
   this.R2levelfix = new b2FixtureDef;
   
   this.Ulevelfix = new b2FixtureDef;
   this.U2levelfix = new b2FixtureDef;
   
   this.Dlevelfix = new b2FixtureDef;
   this.D2levelfix = new b2FixtureDef;
  
  this.LBody.type = b2Body.b2_staticBody;//b2_dynamicBody;
  
  this.Llevelfix.shape = new b2PolygonShape;
  this.L2levelfix.shape = new b2PolygonShape;
  
  this.Rlevelfix.shape = new b2PolygonShape;
  this.R2levelfix.shape = new b2PolygonShape;
  
  this.Ulevelfix.shape = new b2PolygonShape;
  this.U2levelfix.shape = new b2PolygonShape;
  
  this.Dlevelfix.shape = new b2PolygonShape;
  this.D2levelfix.shape = new b2PolygonShape;

  // wall positions
   var LBoxX = ((1.05*MEASURE_UNIT/2)/30); 
   var LBoxY =  ((GAME_HEIGHT/2)/30); 
 
  var RBoxX = 0.97*MEASURE_UNIT/2; 
  var RBoxY = LBoxY;
  
  var UBoxX = ((GAME_WIDTH/2)/30); 
  var UBoxY = ((MEASURE_UNIT*.55)/30);
  
  var DBoxX = ((((MEASURE_UNIT))/2)/30);//UBoxX; 
  var DBoxY = (MEASURE_UNIT*.355);
  
  console.log("WALLS ::::: MU = " + MEASURE_UNIT, " GH " + GAME_HEIGHT + " GW " + GAME_WIDTH);
   console.log("L " + LBoxX +  " , " + LBoxY);
   console.log("R " + RBoxX +  " , " + RBoxY);
   console.log("U " + UBoxX +  " , " + UBoxY);
   console.log("D " + DBoxX +  " , " + DBoxY);
 
 console.log("D/2 " + (DBoxX)/3);
 
 
 
    
 
 
///* 
 
                   
   //build the walls                        
   
   //ORIGINAL:   this.Llevelfix.shape.SetAsOrientedBox(((MEASURE_UNIT/30)/2),  ( GAME_HEIGHT/MEASURE_UNIT ),
   //                                    new b2Vec2(LBoxX, LBoxY), 0);
  
   this.Llevelfix.shape.SetAsOrientedBox(((MEASURE_UNIT/30)/2),  ( (((MEASURE_UNIT)*.183) -((1.1*MEASURE_UNIT/30))) ),
                                       new b2Vec2(LBoxX, ((((MEASURE_UNIT))/2)/30)), 0);
  
  this.L2levelfix.shape.SetAsOrientedBox(((MEASURE_UNIT/30)/2),  ( (((MEASURE_UNIT)*.183) -((1.1*MEASURE_UNIT/30))) ),
                                       new b2Vec2(LBoxX, ((((MEASURE_UNIT))*10.5)/30)), 0);
  
  
  // ORIGINAL:  this.Rlevelfix.shape.SetAsOrientedBox(((MEASURE_UNIT/30)/2),  ( GAME_HEIGHT/MEASURE_UNIT ),
  //                                     new b2Vec2(RBoxX, RBoxY), 0);
  
  this.Rlevelfix.shape.SetAsOrientedBox(((MEASURE_UNIT/30)/2),  ( (((MEASURE_UNIT)*.183) -((1.1*MEASURE_UNIT/30))) ),
                                       new b2Vec2(RBoxX, ((((MEASURE_UNIT))/2)/30)), 0);
   
   this.R2levelfix.shape.SetAsOrientedBox(((MEASURE_UNIT/30)/2),  ( (((MEASURE_UNIT)*.183) -((1.1*MEASURE_UNIT/30))) ),
                                       new b2Vec2(RBoxX, ((((MEASURE_UNIT))*10.5)/30)), 0);
   
   
  //ORIGINAL:  this.Ulevelfix.shape.SetAsOrientedBox(( GAME_WIDTH/MEASURE_UNIT ), ((MEASURE_UNIT/30)/4),
  //                                     new b2Vec2(UBoxX, UBoxY), 0);
  
  this.Ulevelfix.shape.SetAsOrientedBox((((MEASURE_UNIT)/4) -((1.1*MEASURE_UNIT/30))), ((MEASURE_UNIT/30)/4),
                                       new b2Vec2(DBoxX, UBoxY), 0);
  
  this.U2levelfix.shape.SetAsOrientedBox( (((MEASURE_UNIT)/4)-((1.1*MEASURE_UNIT/30))), ((MEASURE_UNIT/30)/4),
                                       new b2Vec2((((((MEASURE_UNIT))*14.5)/30)) , UBoxY), 0);
  
  
//ORIGINAL:  this.Dlevelfix.shape.SetAsOrientedBox( ( GAME_WIDTH/MEASURE_UNIT ),  ((MEASURE_UNIT/30)*.55),  
//                                       new b2Vec2(DBoxX, DBoxY), 0);
                                                            
                                                            //
 this.Dlevelfix.shape.SetAsOrientedBox( (((MEASURE_UNIT)/4) -((1.1*MEASURE_UNIT/30))),  ((MEASURE_UNIT/30)*.55),  
                                       new b2Vec2(DBoxX, DBoxY), 0);   
                                       
 this.D2levelfix.shape.SetAsOrientedBox( (((MEASURE_UNIT)/4)-((1.1*MEASURE_UNIT/30)) ),  ((MEASURE_UNIT/30)*.55),  
                                       new b2Vec2((((((MEASURE_UNIT))*14.5)/30)) , DBoxY), 0);
  
  console.log("d y lenght: " + (((MEASURE_UNIT)/4) -((MEASURE_UNIT/30))) + " y center :" + ((((MEASURE_UNIT))/2)/30) );
  
//*/  
  
  //m_body1.Split(function(fixture:b2Fixture):Boolean
  // {return fixture != m_piece1;} );
  
  
  
  //define body in world
  this.levelBody = collisionWorld.CreateBody(this.LBody);
  
  //attach to body
  this.LFix = this.levelBody.CreateFixture(this.Llevelfix);
  this.L2Fix = this.levelBody.CreateFixture(this.L2levelfix);
  
  this.RFix = this.levelBody.CreateFixture(this.Rlevelfix); 
  this.R2Fix = this.levelBody.CreateFixture(this.R2levelfix);
   
  this.UFix = this.levelBody.CreateFixture(this.Ulevelfix);  
  this.U2Fix = this.levelBody.CreateFixture(this.U2levelfix);
  
  this.DFix = this.levelBody.CreateFixture(this.Dlevelfix);  
  this.D2Fix = this.levelBody.CreateFixture(this.D2levelfix);
    
    
    //*** FIX THE USERDATA for these
    
    this.LFix.SetUserData({fixID: "LeftWall", wallpos: [LBoxX*30, LBoxY*30], sizeWH: [((MEASURE_UNIT/30)/2)*30, ( GAME_HEIGHT/MEASURE_UNIT )*30]});
    this.L2Fix.SetUserData({fixID: "LeftWall", wallpos: [LBoxX*30, LBoxY*30], sizeWH: [((MEASURE_UNIT/30)/2)*30, ( GAME_HEIGHT/MEASURE_UNIT )*30]});
    
    this.RFix.SetUserData({fixID: "RightWall", wallpos: [RBoxX*30, RBoxY*30], sizeWH: [((MEASURE_UNIT/30)/2)*30, (GAME_HEIGHT/MEASURE_UNIT)*30] });
    this.R2Fix.SetUserData({fixID: "RightWall", wallpos: [RBoxX*30, RBoxY*30], sizeWH: [((MEASURE_UNIT/30)/2)*30, (GAME_HEIGHT/MEASURE_UNIT)*30] });
    
    this.UFix.SetUserData({fixID: "UpWall", wallpos: [UBoxX*30, UBoxY*30], sizeWH: [( GAME_WIDTH/MEASURE_UNIT )*30, ((MEASURE_UNIT/30)/4)*30 ] });
    this.U2Fix.SetUserData({fixID: "UpWall", wallpos: [UBoxX*30, UBoxY*30], sizeWH: [( GAME_WIDTH/MEASURE_UNIT )*30, ((MEASURE_UNIT/30)/4)*30 ] });
    
    this.DFix.SetUserData({fixID: "DownWall", wallpos: [((GAME_WIDTH/2)/30)*30, (MEASURE_UNIT*.355)*30 ], sizeWH: [( GAME_WIDTH/MEASURE_UNIT )*30,  ((MEASURE_UNIT/30)*.55)*30]});
    this.D2Fix.SetUserData({fixID: "DownWall", wallpos: [((GAME_WIDTH/2)/30)*30, (MEASURE_UNIT*.355)*30 ], sizeWH: [( GAME_WIDTH/MEASURE_UNIT )*30,  ((MEASURE_UNIT/30)*.55)*30]});
  
  this.levelBody.SetUserData( {id: "wall"} );  
    
    
}

levelBarrier.prototype.resizeLevel = function()
{
   
       var newLfix = new b2FixtureDef; 
       var newRfix = new b2FixtureDef;
       var newUfix = new b2FixtureDef;
       var newDfix = new b2FixtureDef;
        
   var resizeL = newLfix.shape = new b2PolygonShape; 
   var resizeR = newRfix.shape = new b2PolygonShape;
   var resizeU = newUfix.shape = new b2PolygonShape;
   var resizeD = newDfix.shape = new b2PolygonShape;
  
  this.levelBody.DestroyFixture( this.LFix );
  this.levelBody.DestroyFixture( this.RFix );  
  this.levelBody.DestroyFixture( this.UFix );  
  this.levelBody.DestroyFixture( this.DFix );   
  
  
   var LBoxX = ((1.05*MEASURE_UNIT/2)/30); //this.posX/30+1;//MEASURE_UNIT;
   var LBoxY =  ((GAME_HEIGHT/2)/30); //this.posY/30+1;
 
  var RBoxX = 0.97*MEASURE_UNIT/2; //Math.abs(GAME_WIDTH - (32* MEASURE_UNIT))/30;  //Math.abs(GAME_WIDTH - (MEASURE_UNIT) );
  var RBoxY = LBoxY;
  
  var UBoxX = ((GAME_WIDTH/2)/30); 
  var UBoxY = ((MEASURE_UNIT*.55)/30);
  
  var DBoxX = UBoxX; 
  var DBoxY = (MEASURE_UNIT*.355);  
                                       
   
   //build the walls                        
   resizeL.SetAsOrientedBox(((MEASURE_UNIT/30)/2),  ( GAME_HEIGHT/MEASURE_UNIT ),
                                       new b2Vec2(LBoxX, LBoxY), 0);
  
  resizeR.SetAsOrientedBox(((MEASURE_UNIT/30)/2),  ( GAME_HEIGHT/MEASURE_UNIT ),
                                       new b2Vec2(RBoxX, RBoxY), 0);
   
  resizeU.SetAsOrientedBox(( GAME_WIDTH/MEASURE_UNIT ), ((MEASURE_UNIT/30)/4),
                                       new b2Vec2(UBoxX, UBoxY), 0);
  
  resizeD.SetAsOrientedBox( ( GAME_WIDTH/MEASURE_UNIT ),  ((MEASURE_UNIT/30)*.55),  
                                       new b2Vec2(DBoxX, DBoxY), 0);   
                                       
   
  
  //add new fixture and body       
  this.LFix = this.levelBody.CreateFixture(newLfix);  
  this.RFix = this.levelBody.CreateFixture(newRfix); 
  this.UFix = this.levelBody.CreateFixture(newUfix); 
  this.DFix = this.levelBody.CreateFixture(newDfix);   
  
    this.LFix.SetUserData({fixID: "LeftWall", wallpos: [(1.05*MEASURE_UNIT/2)/30, ((GAME_HEIGHT/2)/30)]});
    this.RFix.SetUserData({fixID: "RightWall"});
    this.UFix.SetUserData({fixID: "UpWall"});
    this.DFix.SetUserData({fixID: "DownWall"});
    
  this.levelBody.SetUserData( {id: "wall"} );  
    
 
};
