function Collisions()
{
 
  this.listener = new b2ContactListener; 
    
}


Collisions.prototype.collisionContact = function()
{

// -- list method ----------------------------------------------------------
/* 
  console.log(" LIST ");

 list = collisionWorld.GetContactList();
 
 if(list !== null)
 {
     
     contactA = list.GetFixtureA().GetBody().GetUserData(); // other (enemies, walls,...)
    console.log(list.GetFixtureA().GetBody().GetUserData());
   
    contactB = list.GetFixtureB().GetBody().GetUserData();  // player 
     console.log(list.GetFixtureB().GetBody().GetUserData());
 
       ...
*/       
//// -- list method END ---------------------------------------------------------------------------------
     
 ///*   
    this.listener.BeginContact = function(contact) 
    { 
  
       // console.log(" ---  BeginContact ------");

      
     // console.log(contact.GetFixtureA().GetBody().GetUserData());  
      //console.log(contact.GetFixtureB().GetBody().GetUserData()); 

      
      if(contact.GetFixtureA().GetBody().GetUserData() !== null || contact.GetFixtureB().GetBody().GetUserData() !== null)
      {
       contactA = contact.GetFixtureA().GetBody().GetUserData();   // other (enemies, walls,...)
       contactB = contact.GetFixtureB().GetBody().GetUserData();  // player 
      }

      if(contactA.type === "enemy" && contactB.id === "player")
      {
          switch(contactA.id)
          {
            case "e1":
            {
			  if (!mainGuy.invul) { //added check for iframes
               contactB.health -= contactA.damage;  
             
               //two point method to move player when enemy hits:
               // use x,y of enemy and x,y of player to determine a line
               // move across that line to a little further away and move
               // player there.
                 
               x1= contactA.xy.pos[0]; //pX;
               y1 = contactA.xy.pos[1]; //pY;

               x2 = contactB.pos[0]; 
               y2 = contactB.pos[1];

                              
                 d = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2 - y1),2)); 
                
                 r = ((2*MEASURE_UNIT)) / d; // r: amount knocked back                        

                xmove = r * x2 + (1 - r) * x1;  
                ymove = r * y2 + (1 - r) * y1;  
                
				//uncomment for knockback
              // contactB.pos[0] = xmove;
              // contactB.pos[1] = ymove;
               
               mainGuy.hp = contactB.health;
			   SOUNDS.playRandomGrunt();

              // console.log(contactB);
               //console.log(contactA);
			   
			   //set timer for iframes
			   mainGuy.invul = true;
			   setTimeout(function() {
				mainGuy.invul = false;
			   }, 600);
			  }
              break;  
            }
            case "e2":
            {
                
                break;
            }
            
            
            
            
            default:
            break;
          
          }
          
      }
                   
      if(contactA.type === "lamp" && contactB.id === "player" )
      {
	    if (mainGuy.light>0 && !thisLevel.currentRoom.isLit) {
               //setTimeout(function(){thisLevel.currentRoom.setLit(true)}, 1000);
			   thisLevel.currentRoom.setLit(true);
			   lightlampEffect(thisLevel.currentRoom.lamp.posX, thisLevel.currentRoom.lamp.posY);
               entityManager.clearEnemies();
               //thisLevel.currentRoom.killEnemies();
               mainGuy.light--;
               thisLevel.lightsLit++;

			   // Lamp counter increases
			   lampsLit++;
			   
				//play sound
				soundManager.play('lamplight');
	      }
      }
      
      if (contactA.type == "exit" && contactB.id == "player")
      {
        // Player gains health points relative to how many lamps lit this level.
        var currentHealth = contactB.health;
        var lightsLit = thisLevel.lightsLit;
        
        var newHealth = currentHealth + lightsLit;
        if (newHealth > 6) newHealth = 6;
		
		// Level counter increases
		levelsTraversed++;
        
        //entityManager.clear()
        entityManager.clearEnemies();

        collisionWorld = new b2World( new b2Vec2(0,0), true); 
        levelBox = new levelBarrier();
        collisionDetection = new Collisions(); 
	collisionWorld.SetDebugDraw(debugDraw);
        
        //thisLevel = new Level(thisLevel.nRooms+1, thisLevel.floorNumber+1);
		//room number = 10 + floornumber (linear)
        thisLevel = new Level(thisLevel.nRooms+thisLevel.floorNumber, thisLevel.floorNumber+1);
        
        //mainGuy = new Player();
        //mainGuy.hp = currentHealth;
        //entityManager.addEntity(mainGuy);
  //mainGuy.playerbox.position.x = 1120/MEASURE_UNIT;
  //mainGuy.playerbox.position.y = 150/MEASURE_UNIT; GetFixtureB().GetBody().GetUserData();
  mainGuy.p.pos = [(GAME_WIDTH/2), (GAME_HEIGHT/2)];
  mainGuy.giveCollisionBox(newHealth);
  //mainGuy.playerBoundBox = collisionWorld.CreateBody(this.playerbox);
  GetFixtureB().GetBody().GetUserData();
      }
      
      if(contactA.type === "door" && contactB.id === "player" )
      {
      //  console.log(contactA.side);
        if (contactA.side == "n")
        {
          thisLevel.goToNorthRoom();
        }
        
        else if (contactA.side == "e")
        {
          thisLevel.goToEastRoom();
        }
        
        else if (contactA.side == "s")
        {
          thisLevel.goToSouthRoom();
        }
        
        else if (contactA.side == "w")
        {
          thisLevel.goToWestRoom();
        }
      }
  };
  
  this.listener.PostSolve = function(contact)
  {
            console.log(" ____ PostSolve _____");

  };
  
  
  this.listener.PreSolve = function(contact)
  {
//      console.log(" ---  PreSolve ------");

      
      if(contact.GetFixtureA().GetBody().GetUserData() !== null || contact.GetFixtureB().GetBody().GetUserData() !== null)
      {
       contactA = contact.GetFixtureA().GetBody().GetUserData();   
       contactB = contact.GetFixtureB().GetBody().GetUserData();  
      
      }
      
      
     if(contactA.id === "wall" && contactB.id === "player")
     {

        wallContact = contact.GetFixtureA().GetUserData();
        
       if(wallContact !== null)     
       {     
          switch(wallContact.fixID)
          {
            case"RightWall":
            {
                       
             man = contact.GetManifold();
                      
             wallPoints = man.m_localPoint;
             
             wp = wallPoints.x*30;
                                      
           newMove = Math.abs(Math.abs(wp-((MEASURE_UNIT/2)))- contactB.BoundSize/2);
                    
             if(contactB.pos[0] > newMove  && man.m_pointCount !==0)
             {
                 
                 contactB.pos[0] = (newMove); 
             }
                     
            break;  
           }
          
           case "LeftWall":
           {
               man = contact.GetManifold();
                              
             wallPoints = man.m_localPoint;

             wp = wallPoints.x*30;
          
           newMove = Math.abs(wp- (contactB.BoundSize/1.458)); 
            
             if(contactB.pos[0] < newMove && man.m_pointCount !==0)
             {
                 
                 contactB.pos[0] = newMove;  
             }
             
               
               break; 
           }
           case "UpWall":
           {
                man = contact.GetManifold();
                              
             wallPoints = man.m_localPoint;

             wp = wallPoints.y*30;
             
           newMove = Math.abs(wp- (contactB.BoundSize/0.69)); 
            
             if(contactB.pos[1] < newMove && man.m_pointCount !==0)
             {
                 
                 contactB.pos[1] = newMove;  
             }
                
              break; 
           }
           case "DownWall":
           {
              man = contact.GetManifold();
                              
             wallPoints = man.m_localPoint;
             
    //         console.log( man.m_localPoint);
    //         console.log(wallPoints.x);
             wp = wallPoints.y*30;
                          
    //         console.log(contactB.BoundSize);
             
//             console.log("player pos before (DOWN) === " + contactB.pos[1] +" PT COUNT>>> " +man.m_pointCount + " wall " + wp);
          
           newMove = Math.abs(wp- (contactB.BoundSize/0.435)); //Math.abs(wp- (contactB.BoundSize/2));
            
             if(contactB.pos[1] > newMove && man.m_pointCount !==0)
             {
                 
                 contactB.pos[1] = newMove;  
             }
             
//             console.log("player pos AFTER (DOWN) === " + contactB.pos[1] + " newMove -- " + newMove + "\n"); 
       
               
               break;
           }
                
          } // switch End
         } // if wallContact null End
     }
    
      if(contactB.id === "wall" && contactA.type === "enemy")  // contactA.id === "wall" && contactB.type === "enemy" ||
      { 
        

          wallContact = contact.GetFixtureB().GetUserData();
          wMan = new b2WorldManifold;
          
          
          //wallContact = contact.GetFixtureA().GetUserData();
        
       if(wallContact !== null)     
       {     
          switch(wallContact.fixID)
          {
            case"RightWall":
            {
                       
             man = contact.GetManifold();
             //contact.GetWorldManifold(wMan); 
                      
             //wallPoints = man.m_localPoint;
    
             //wp = wallPoints.x*30;
             //wp = wMan.m_points[1].x*30;
                   
           //newMove = Math.abs(wp-(contactA.BoundSize[0]/2));
           
          //console.log(" \nRIGHT WALL POS: "); 
          // console.log(wallContact);
            newMove = Math.abs(wallContact.wallpos[0] - (wallContact.sizeWH[0]*3) );  
                    
             if(contactA.xy.pos[0] > newMove  && man.m_pointCount !==0)
             {
                 
                 contactA.xy.pos[0] = (newMove); 
             }
                     
            break;  
           }
          
           case "LeftWall":
           {
               man = contact.GetManifold();
             
           
           newMove = Math.abs(wallContact.wallpos[0] + (wallContact.sizeWH[0]) );
            
             if(contactA.xy.pos[0] < newMove && man.m_pointCount !==0)
             {
                 
                 contactA.xy.pos[0] = newMove;  
             }
             
               
               break; 
           }
           case "UpWall":
           {
                man = contact.GetManifold();
             
            
            newMove = Math.abs(wallContact.wallpos[1] + (wallContact.sizeWH[1]) );
            
            
             if(contactA.xy.pos[1] < newMove && man.m_pointCount !==0)
             {
                 
                 contactA.xy.pos[1] = newMove;  
             }
                
              break; 
           }
           case "DownWall":
           {
              man = contact.GetManifold();
               
          
           newMove = Math.abs(wallContact.wallpos[1] - (wallContact.sizeWH[1]*3) ); // 
          
          
          //console.log(" Enemy Pos: X " + contactA.pX + " , " + contactA.pY + " wall " + wp + " NEWMove " + newMove + " man.m_pointCount " + man.m_pointCount);
            
             if(contactA.xy.pos[1] > newMove && man.m_pointCount !==0)
             {
                 
                 contactA.xy.pos[1]  = newMove;  
             }
             
           //console.log("player pos AFTER (DOWN) === " + contactA.pY + " newMove -- " + newMove + "\n"); 
       
               
               break;
           }
                
          } // switch End
         } // if wallContact null End
          
      }
     
     if(contactA.type === "lamp" && contactB.id === "player")
     {
         man = contact.GetManifold();
         
         if(contactA.active === false && man.m_pointCount !==0)
         {
           wX = contactA.wPx;
           wY = contactA.wPy;
           sX = contactA.size[0];
           sY = contactA.size[1];
         
           normals = man.m_localPlaneNormal;
                
                //--------------------------
                
                //** FOUND PROBLEM: THE +1 IN LAMP draw()  setPosition doesn't scale correctly
                // take size and divide by some number to place it correctly 
                
                wallPoints = man.m_localPoint;
    
                wp = wallPoints.x*30;

              
              
               //LEFT SIDE                              //*.8 or / 5/4 reciprical of fraction form  NOTE: smaller screen boxes wX front side, larger wX middle
               
                            //** want to use MEASURE_UNIT to have boundSize scale with large and small windows
               if(contactB.pos[0] > (wX-((contactB.BoundSize)/(5/4))) && normals.x <= -1) 
               
               //if(contactB.pos[0] > (contactA.L) && normals.x <= -1)
               {
                   
                   
                   
                                                        //*.8 or 4/5
                   contactB.pos[0] = (wX-((contactB.BoundSize)/(5/4)));
                  // contactB.pos[0] = (contact.L);
                   
                   //console.log("\n AFTER MOVE play posX: " + contactB.pos[0] + " > value " + (wX-(contactB.BoundSize/(4/5))));
                   //console.log(" L ");
               }    
               // RIGHT SIDE
               else if(contactB.pos[0] < ((wX+sX) - (contactB.BoundSize/2))&& normals.x >= 1)
               {
                   //console.log(" R ");
                   contactB.pos[0] = ((wX+sX) - (contactB.BoundSize/2)); 
               }
               // TOP SIDE                                           //*.2
               else if(contactB.pos[1] > ((wY-sY)) && normals.y <= -1)
               {
                   //console.log(" U ");
                   contactB.pos[1] = (((wY-sY))); 
               }
               // BOTTOM SIDE
               else if(contactB.pos[1] < ((wY) + (contactB.BoundSize/2)) && normals.y >= 1)
               {
                   //console.log(" D ");
                   contactB.pos[1] = ((wY) + (contactB.BoundSize/2)); 
               }
                     
           
        }
        
        
     }
  ///*
  
  
  ///
  if(contactA.type === "doorWall" && contactB.id === "player")
     {
         //console.log("YES " + contactA.active);
        
         
         man = contact.GetManifold();
         
         if( man.m_pointCount !==0)
         {
       
           wX = contactA.wPx;
           wY = contactA.wPy;
           sX = contactA.size[0];
           sY = contactA.size[1];
         
           normals = man.m_localPlaneNormal;
            
              
   //console.log("\n IN OBST/PLAYER pos x,y: " + contactB.pos[0] + " , " + contactB.pos[1] + " wX " + wX+ " sX " + sX+ " wY " + wY + " sY " + sY +   " boundSize(player) " + contactB.BoundSize + " BSz/ " + contactB.BoundSize/(5/4));

               //LEFT SIDE                            
               
               if(contactB.pos[0] > ((wX- (sX/2))- contactB.BoundSize/2) && normals.x <= -1)
               {
                   contactB.pos[0] = ((wX- (sX/2))- contactB.BoundSize/2);
                   
                   //console.log("\n AFTER MOVE play posX: " + contactB.pos[0] + " > value " + (wX-(contactB.BoundSize/(5/4))));
                   console.log(" Ob-L ");
               }    
               // RIGHT SIDE
               else if(contactB.pos[0] < ((wX +(sX/2)) + (contactB.BoundSize/2))&& normals.x >= 1)
               {
                   console.log(" Ob-R ");
                   contactB.pos[0] = ((wX + (sX/2)) + (contactB.BoundSize/2)); 
               }
               // TOP SIDE
               //else if(contactB.pos[1] > ((wY-sY) - contactB.BoundSize/2) && normals.y <= -1)
               else if(contactB.pos[1] >= ((wY- (sY+2.5))) && normals.y <= -1)
               {
                   console.log(" Ob-U ");
                   contactB.pos[1] = ((wY- (sY+2.5))); 
               }
               // BOTTOM SIDE
               else if(contactB.pos[1] < ((wY) + (contactB.BoundSize/2)) && normals.y >= 1)
               {
                   console.log(" Ob-D ");
                   contactB.pos[1] = ((wY) + (contactB.BoundSize/2)); 
               }
                     
         
        }
        
        
     }
  
  
     if(contactA.type === "obstacle" && contactB.id === "player")
     {
         
        
         
         man = contact.GetManifold();
         
         if( man.m_pointCount !==0)
         {
              //console.log(" HIT OBST" );
       
           wX = contactA.wPx;
           wY = contactA.wPy;
           sX = contactA.size[0];
           sY = contactA.size[1];
         
           normals = man.m_localPlaneNormal;
            
              
   //console.log("\n IN OBST/PLAYER pos x,y: " + contactB.pos[0] + " , " + contactB.pos[1] + " wX " + wX+ " sX " + sX+ " wY " + wY + " sY " + sY +   " boundSize(player) " + contactB.BoundSize + " BSz/ " + contactB.BoundSize/(5/4));

               //LEFT SIDE                            
               
               if(contactB.pos[0] > ((wX- (sX/2))- contactB.BoundSize/2) && normals.x <= -1)
               {
                   contactB.pos[0] = ((wX- (sX/2))- contactB.BoundSize/2);
                   
                   //console.log("\n AFTER MOVE play posX: " + contactB.pos[0] + " > value " + (wX-(contactB.BoundSize/(5/4))));
                   //console.log(" Ob-L ");
               }    
               // RIGHT SIDE
               else if(contactB.pos[0] < ((wX +(sX/2)) + (contactB.BoundSize/2))&& normals.x >= 1)
               {
                   //console.log(" Ob-R ");
                   contactB.pos[0] = ((wX + (sX/2)) + (contactB.BoundSize/2)); 
               }
               // TOP SIDE
               //else if(contactB.pos[1] > ((wY-sY) - contactB.BoundSize/2) && normals.y <= -1)
               else if(contactB.pos[1] >= ((wY- (sY+2.5))) && normals.y <= -1)
               {
                   //console.log(" Ob-U ");
                   contactB.pos[1] = ((wY- (sY+2.5))); 
               }
               // BOTTOM SIDE
               else if(contactB.pos[1] < ((wY) + (contactB.BoundSize/2)) && normals.y >= 1)
               {
                   //console.log(" Ob-D ");
                   contactB.pos[1] = ((wY) + (contactB.BoundSize/2)); 
               }
                     
         
        }
        
        
     }
     
     
     if(contactA.type === "enemy" && contactB.type === "lamp")
     {
        
         
       ///*  
         man = contact.GetManifold();
         
         if( man.m_pointCount !==0)
         {
             //lamp
           wX = contactB.wPx;
           wY = contactB.wPy;
           sX = contactB.size[0];
           sY = contactB.size[1];
         
           normals = man.m_localPlaneNormal;
                
                //--------------------------
                
                // FOUND PROBLEM: THE +1 IN LAMP draw()  setPosition doesn't scale correctly
                // take size and divide by some number to place it correctly 
                
                wallPoints = man.m_localPoint;
    
                wp = wallPoints.x*30;

              
               //LEFT SIDE                              // *.8 or / 5/4 reciprical of fraction form  NOTE: smaller screen boxes wX front side, larger wX middle
                                        //
               if(contactA.xy.pos[0] > (wX-(sX)) && normals.x >= .99) // works with: (wX-((contactA.BoundSize[0]/(5/4)))) && normals.x >= -.99)
               
               //if(contactB.pos[0] > (contactA.L) && normals.x <= -1)
               {
                             //        
                   contactA.xy.pos[0] = (wX)-(sX) ;
                  // contactB.pos[0] = (contact.L);
                   
                   //console.log("\n AFTER MOVE play posX: " + contactA.pos[0] + " > value " + (wX-(contactA.BoundSize/(4/5))));
                  // console.log(" E-L ");
               }    
               // RIGHT SIDE
               else if(contactA.xy.pos[0] < ((wX+sX))&& normals.x <= -.99)  // ((wX+sX) - (contactA.BoundSize[0]/2))&& normals.x <= -.99)
               {
                  // console.log(" E-R ");
                   contactA.xy.pos[0] = ((wX+sX)); 
               }
               // TOP SIDE                       //      // //*.2
               else if(contactA.xy.pos[1] > ((wY-sY)) && normals.y >= .99)
               {
                   //console.log(" E-U ");
                                              //  // //*.2
                   contactA.xy.pos[1] = (((wY-sY))); 
               }
               // BOTTOM SIDE
               else if(contactA.xy.pos[1] < ((wY+sY)) && normals.y <= -.99) // ((wY) + (contactA.BoundSize[1]/2)) && normals.y <= -.99)
               {
                 // console.log(" E-D ");
                   contactA.xy.pos[1] = ((wY+sY)); 
               }
                     
           
        }
        
       //*/ 
     }
     
     
     
     if(contactA.type === "enemy" &&  contactB.type === "enemy" )
     {
        
             
         //console.log("<<<<<<<<<<<<< E & E >>>>>>>>>>>>>");
                
               //two point method to move player when enemy hits:
               // use x,y of enemy and x,y of player to determine a line
               // move across that line to a little further away and move
               // player there.
                 
               x1= contactA.xy.pos[0]; //pX;
               y1 = contactA.xy.pos[1]; //pY;

               x2 = contactB.xy.pos[0]; 
               y2 = contactB.xy.pos[1];

                              
                 d = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2 - y1),2)); 
                
                 r = ((MEASURE_UNIT)) / d; // r: amount knocked back                        

                xmove = r * x2 + (1 - r) * x1;  
                ymove = r * y2 + (1 - r) * y1;  
                 
               contactB.xy.pos[0] = xmove;
               contactB.xy.pos[1] = ymove;
               
              
              // console.log(contactB);
               //console.log(contactA);
               
              
           
     }
    
    if((contactA.type === "enemy" &&  contactB.type === "obstacle" )) 
     {
          
         man = contact.GetManifold();
         
         if( man.m_pointCount !==0)
         {
              //console.log("  enemy HIT OBST" );
       
           wX = contactB.wPx;
           wY = contactB.wPy;
           sX = contactB.size[0];
           sY = contactB.size[1];
         
           normals = man.m_localPlaneNormal;
            
              
   //console.log("\n IN obst/ enemyPos x: " + contactA.xy.pos[0] + " , y: " + contactA.xy.pos[1] +" wX " + wX+ " sX " + sX+  " sx/2 " + sX/2+ " wY " + wY + " sY " + sY +   " boundSize(player) " );
   //console.log(" contactA.BoundSize "+ contactA.BoundSize  + " contactA.BoundSize[0]/2 " + contactA.BoundSize[0]/2 + " contactA.BoundSize[1]/2 " + contactA.BoundSize[1]/2);
   //console.log(normals); 
               //LEFT SIDE                            
                                           //-sX/2))- contactA.BoundSize[0]/2
               if(contactA.xy.pos[0] > (wX- (sX) ) && normals.x >= .99) //-1
               {
                                    //- (sX/2))- contactA.BoundSize[0]/2)
                   contactA.xy.pos[0] = wX-(sX);
                   
                   //console.log(" E-- Ob-L ");
               }    
               // RIGHT SIDE
                                          //+(sX/2)) + (contactA.BoundSize[0]/2)
               else if(contactA.xy.pos[0] < (wX+sX)&& normals.x <= -.99) //1
               {
                   //console.log(" E-- Ob-R ");
                                        //+ (sX/2)) + (contactA.BoundSize[0]/2)
                   contactA.xy.pos[0] = (wX+sX); 
               }
               // TOP SIDE
                                    //- (sY/1.5))- contactA.BoundSize[1]/2
               else if(contactA.xy.pos[1] > (wY-sY+5) && normals.y >= .99)
               {
                   //console.log(" E-- Ob-U ");
                                      //- (sY/1.5))- contactA.BoundSize[1]/2
                   contactA.xy.pos[1] = (wY-(sY+5)); 
               }
               // BOTTOM SIDE
                                          //+ (contactA.BoundSize[1]/2)
               else if(contactA.xy.pos[1] < ((wY +sY) ) && normals.y <= -.99)  
               {
                   //console.log(" E-- Ob-D ");
                                        // + (contactA.BoundSize[1]/2)
                   contactA.xy.pos[1] = ((wY+sY)); 
               }
                     
         
        }
               
     }
     
     //if(contactA.id === "light" &&  contactB.type === "enemy" ) // for square rect. shapes
     if( (contactB.id === "light" &&  contactA.type === "enemy" ) || (contactA.id === "light" &&  contactB.type === "enemy" ))// for circle shapes
     {  
        
        if(contactA.type === "enemy" )
        {
            enemy = contactA;
        }
        else
        {
            enemy = contactB;
        }
               //contactA.id
        switch(enemy.id)
          {
            case "e1":
            {        
                
                
                
                 // normals = man.m_localPlaneNormal;
                    
                   // console.log("\n???????????  NORMALS ");
                   // console.log(normals);  
                      
            //--------- TEST IF INSIDE COLLISION BOX  --------------------------------------------------------------------------
                 //lightFix=contact.GetFixtureB();
                 // enemyFix = contact.GetFixtureA();
                
                 //enemyBody= enemyFix.GetBody();
                 //ls= lightFix.GetShape();
                
                //console.log(" IS ENEMY INSIDE LIGHT BOUND ? " );
               
                //console.log("\n");
                //console.log(ls.TestPoint(enemyBody.GetTransform() , new b2Vec2(contactA.xy.pos[0],contactA.xy.pos[1])));
            //--------- TEST IF INSIDE COLLISION BOX (END) --------------------------------------------------------------------------
               
                  man = contact.GetManifold();
             //console.log(" MAN COUNT:::: " );
             //console.log(man);
             //if( man.m_pointCount !==0)
             //{
                 console.log(" \nbefore HIT WISE ");
                 console.log(enemy.hitLight.hit[0]);
                   
                   //(enemy.hitLight.hit[0] == 0)
                if((enemy.hitLight.hit[0] === 0)) 
                {
                    //enemy.hitLight.hit[0] = 1;
                    enemy.hitLight.hit[0] = 1;
                }
                
                console.log(" \nafter HIT WISE ");
                 console.log(enemy.hitLight.hit[0]);
                
                /*      
                   x1= contactB.lightPos[0];//+ contactB.BoundSize; //pX;
                   y1 = contactB.lightPos[1];//+ contactB.BoundSize; //pY;
    
                   x2 = contactA.xy.pos[0]; 
                   y2 = contactA.xy.pos[1];
    
                                  
                     d = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2 - y1),2)); 
                    
                     r = (1.2*(MEASURE_UNIT)) / d; // r: amount knocked back                        
    
                    xmove = r * x2 + (1 - r) * x1;  
                    ymove = r * y2 + (1 - r) * y1;  
                     
                   contactA.xy.pos[0] = xmove;
                   contactA.xy.pos[1] = ymove;
                     
                    // console.log("\n  =======>: enemyX " + x1+ " enemyY " + y1 + " lightX " + x2 + " lightY " + y2 +  " d " + d + " r " + r
                    //             + " newMove(x,y) " + xmove+ " , " + ymove );
                */
           
            //}
            /*  =-=-=-=-=-  TEMP -=-=-=-=-=-=-=
                if(contactA.type === "enemy" && contactB.id === "player")
      {
          switch(contactA.id)
          {
            case "e1":
            {
                 
               x1= contactA.xy.pos[0]; //pX;
               y1 = contactA.xy.pos[1]; //pY;

               x2 = contactB.pos[0]; 
               y2 = contactB.pos[1];

                              
                 d = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2 - y1),2)); 
                
                 r = ((2*MEASURE_UNIT)) / d; // r: amount knocked back                        

                xmove = r * x2 + (1 - r) * x1;  
                ymove = r * y2 + (1 - r) * y1;  
                 
               contactB.pos[0] = xmove;
               contactB.pos[1] = ymove;
               
            
            
            */
            
            
            
                 
            // */    
                 
                  //console.log("  enemy HIT OBST" );
                 //console.log("\n???????????  contactA.angle ");
                    //console.log(contactA.angle);
            
            
            
            /*        
                   wX = contactA.lightPos[0];
                   wY = contactA.lightPos[1];
                   sX = contactA.BoundSize[0];
                   sY = contactA.BoundSize[1];
                 
                   normals = man.m_localPlaneNormal;
                    
                    console.log("\n  =======>: wX " + wX+ " wY " + wY + " sX " + sX + " sY " + sY);
                    console.log("\n???????????  NORMALS ");
                    console.log(normals);     
                    
                    
                // if lightbox is horizontally long
             
              if(contactA.angle === 4.7) 
              {
                   wX = contactA.lightPos[0];
                   wY = contactA.lightPos[1];
                   sX = contactA.BoundSize[1];
                   sY = contactA.BoundSize[0];
                 
                   normals = man.m_localPlaneNormal;
                    
                    console.log("\nANGLE 4.7: SIZES =======>: wX " + wX+ " wY " + wY + " sX " + sX + " sY " + sY);
                    console.log("\n???????????  NORMALS ");
                    console.log(normals);
                  
             }
             else if(contactA.angle === 0) 
             {
                 
                wX = contactA.lightPos[0];
                wY = contactA.lightPos[1];
                sX = contactA.BoundSize[0];
                sY = contactA.BoundSize[1];
             
                normals = man.m_localPlaneNormal;
                
                
                 console.log("\nANGLE 0: SIZES =======>: wX " + wX+ " wY " + wY + " sX " + sX + " sY " + sY);
                 console.log("\n???????????  NORMALS ");
                 console.log(normals); 
               
            
            
            }      
                   
                 
               // LEFT                              
                                              // - (sX/2))- contactA.BoundSize[0]/2)     
               if(contactB.xy.pos[0] > (wX- (sX) ) && normals.x <= -.99) //-1
               {
                                    //- (sX/2))- contactA.BoundSize[0]/2)
                   contactB.xy.pos[0] = wX-(sX);
                   
                   console.log(" light-- Ob-L ");
               }    
               // RIGHT SIDE
                                          //+(sX/2)) + (contactA.BoundSize[0]/2)
               else if(contactB.xy.pos[0] < (wX+sX)&& normals.x >= .99) //1
               {
                   console.log(" light-- Ob-R ");
                                        //+ (sX/2)) + (contactA.BoundSize[0]/2)
                   contactB.xy.pos[0] = (wX+sX); 
               }
               // TOP SIDE
                                    //- (sY/1.5))- contactA.BoundSize[1]/2
               else if(contactB.xy.pos[1] > (wY-sY+5) && normals.y <= -.99)
               {
                   console.log(" light-- Ob-U ");
                                      //- (sY/1.5))- contactA.BoundSize[1]/2
                   contactB.xy.pos[1] = (wY-(sY+5)); 
               }
               // BOTTOM SIDE
                                          //+ (contactA.BoundSize[1]/2)
               else if(contactB.xy.pos[1] < ((wY +sY) ) && normals.y >= .99)  // BOTTOM WORKS (CONTACT AT HALF WAYS OF OBSTACLE)
               {
                   console.log(" light-- Ob-D ");
                                        // + (contactA.BoundSize[1]/2)
                   contactB.xy.pos[1] = ((wY+sY)); 
               }
             
            */
           
             
           //}
            
            break;
          }
          
          case "e2":
          {        
          
           break;
          }    
        
        
        
        }
     }
     
     
  }; 
  
    collisionWorld.SetContactListener(this.listener);
    
};
