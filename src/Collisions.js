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
     
      if(contactA.id === "wall" && contactB.type === "enemy" ||
          contactB.id === "wall" && contactA.type === "enemy")
      { 
         // console.log("WALL ...");
          
          if(contactA.id === "wall" && contactB.type === "enemy")
          {
            wallContact = contact.GetFixtureA().GetUserData();
            enemy = contactB;
             //EnemyposX = contactB.pX; 
             //EnemyposY = contactB.pY;
          }
          else if(contactB.id === "wall" && contactA.type === "enemy")
          {
              wallContact = contact.GetFixtureB().GetUserData();
              enemy = contactA;
          }
          
         // console.log(contact.GetFixtureB().GetUserData());  

          
          switch(wallContact.fixID)
          {
              case"RightWall":
              {
                
                 
                 break;    
              }
              case"LeftWall":
              {
                
                
                 break;
              }
              case"UpWall":
              {
                  
                 break;
              }
              case"DownWall":
              {
                  
                break;   
              }
              
          }
          
      }
   
      if(contactA.type === "enemy" && contactB.id === "player")
      {
          switch(contactA.id)
          {
            case "e1":
            {
               contactB.health -= contactA.damage;  
             
               //two point method to move player when enemy hits:
               // use x,y of enemy and x,y of player to determine a line
               // move across that line to a little further away and move
               // player there.
                 
               x1= contactA.pX;
               y1 = contactA.pY;

               x2 = contactB.pos[0]; 
               y2 = contactB.pos[1];

                              
                 d = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2 - y1),2)); 
                
                 r = ((1*MEASURE_UNIT)) / d; // r: amount knocked back                        

                xmove = r * x2 + (1 - r) * x1;  
                ymove = r * y2 + (1 - r) * y1;  
                 
               contactB.pos[0] = xmove;
               contactB.pos[1] = ymove;
               
               mainGuy.hp = contactB.health;
			   SOUNDS.playRandomGrunt();

              // console.log(contactB);
               //console.log(contactA);

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
               thisLevel.currentRoom.setLit(true);
               entityManager.clearEnemies();
               //thisLevel.currentRoom.killEnemies();
               mainGuy.light--;
	      }
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

                
               if(contactB.pos[0] > (wX-contactB.BoundSize*.8) && normals.x <= -1) 
               {
                   contactB.pos[0] = (wX-contactB.BoundSize*.8);
               }    
               else if(contactB.pos[0] < ((wX+sX) - (contactB.BoundSize/2))&& normals.x >= 1)
               {
                   
                   contactB.pos[0] = ((wX+sX) - (contactB.BoundSize/2)); 
               }
               else if(contactB.pos[1] > ((wY-sY) - contactB.BoundSize*.2) && normals.y <= -1)
               {
                   
                   contactB.pos[1] = (((wY-sY) - contactB.BoundSize*.2)); 
               }
               else if(contactB.pos[1] < ((wY) + (contactB.BoundSize/2)) && normals.y >= 1)
               {
                 
                   contactB.pos[1] = ((wY) + (contactB.BoundSize/2)); 
               }
                     
           
        }
        
        
     }
     
      
  }; 
  
    collisionWorld.SetContactListener(this.listener);
    
};
