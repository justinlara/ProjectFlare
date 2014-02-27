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
 
       
      if(contactA.id === "wall" && contactB.type === "enemy" ||
          contactB.id === "wall" && contactA.type === "enemy")
      { 
          console.log("WALL ...");
          
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
          
          console.log(contact.GetFixtureB().GetUserData());  

          
          

          
          switch(wallContact.fixID)
          {
              case"RightWall":
              {
                
                  enemy.pX <= enemy.pX;
                
                 
                
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
               
               //console.log("** BEFORE POSITON ** ply " + x2 +" , " + y2 + " enemy " + x1 + " , " + y1);
               //console.log(plx + " ,  " + ply);
               
               
                              
                 d = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2 - y1),2)); 
                 r = ((1*MEASURE_UNIT)) / d;                        

                xmove = r * x2 + (1 - r) * x1;  
                ymove = r * y2 + (1 - r) * y1;  
                 
               contactB.pos[0] = xmove;
               contactB.pos[1] = ymove;
               

               console.log(contactB);
               console.log(contactA);
               
             
               
                 
               //console.log("** AFTER POSITON **  r " + r + " d " + d + " ply new " + xmove + " , " + ymove); 
              
               
               
               
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
      
     if(contactA.id === "wall" && contactB.id === "player")
     {
         
         man = contact.GetManifold();
         
         
         console.log("^^^^^^ I'M IN ^^^^^^^^^^^^^^^^^");
         
       
         
         wallPoints = man.m_localPoint;
         
         console.log( man.m_localPoint);
         wp = wallPoints[0]*30;
         console.log("player pos before === " + contactB.pos[0] + " wall " + wp);
        
      //   px = contactB.pos[0];
     //   py = contactB.pos[1];
         
         
         
     //    contactB.pos[0] = wp;
         
     //    console.log( contactB.pos[0]);
         
         //contactB.pos[1] <= py;   
            
     }
     else if(contactB.id === "wall" && contactA.id === "player")   
     {
          console.log("^^^^^^ I'M IN ^^^^^^^^^^^^^^^^^");                    
         px = contactA.pos[0];
         py = contactA.pos[1];
         
         contactA.pos[0] = px;
         contactA.pos[1] = py;
         
     }
               
     
      if(contactA.type === "lamp" && contactB.id === "player" )
      {
          thisLevel.currentRoom.setLit(true);
          entityManager.clearEnemies();
      }
      
 
       
  }  
*/     
//// -- list method END ---------------------------------------------------------------------------------
     
 ///*   
    this.listener.BeginContact = function(contact) 
    { 
  
        console.log(" ---  BeginContact ------");

      
      console.log(contact.GetFixtureA().GetBody().GetUserData());  
      console.log(contact.GetFixtureB().GetBody().GetUserData()); 

      
      if(contact.GetFixtureA().GetBody().GetUserData() !== null || contact.GetFixtureB().GetBody().GetUserData() !== null)
      {
       contactA = contact.GetFixtureA().GetBody().GetUserData();   // other (enemies, walls,...)
       contactB = contact.GetFixtureB().GetBody().GetUserData();  // player 
      }
      
    
 
       
      if(contactA.id === "wall" && contactB.type === "enemy" ||
          contactB.id === "wall" && contactA.type === "enemy")
      { 
          console.log("WALL ...");
          
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
          
          console.log(contact.GetFixtureB().GetUserData());  

          
          

          
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
               
               //console.log("** BEFORE POSITON ** ply " + x2 +" , " + y2 + " enemy " + x1 + " , " + y1);
               //console.log(plx + " ,  " + ply);
               
               
                              
                 d = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2 - y1),2)); 
                 r = ((1*MEASURE_UNIT)) / d;                        

                xmove = r * x2 + (1 - r) * x1;  
                ymove = r * y2 + (1 - r) * y1;  
                 
               contactB.pos[0] = xmove;
               contactB.pos[1] = ymove;
               

               console.log(contactB);
               console.log(contactA);
               
             
               
                 
               //console.log("** AFTER POSITON **  r " + r + " d " + d + " ply new " + xmove + " , " + ymove); 
              
               
               
               
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
/*      
     if(contactA.id === "wall" && contactB.id === "player")
     {
         
         man = contact.GetManifold();
         
         
         console.log("^^^^^^ I'M IN ^^^^^^^^^^^^^^^^^");
         
       
         
         wallPoints = man.m_localPoint;
         
         console.log( man.m_localPoint);
         wp = wallPoints[0]*30;
         console.log("player pos before === " + contactB.pos[0] + " wall " + wp);
        
      //   px = contactB.pos[0];
     //   py = contactB.pos[1];
         
         
         
     //    contactB.pos[0] = wp;
         
     //    console.log( contactB.pos[0]);
         
         //contactB.pos[1] <= py;   
            
     }
     else if(contactB.id === "wall" && contactA.id === "player")   
     {
          console.log("^^^^^^ I'M IN ^^^^^^^^^^^^^^^^^");                    
         px = contactA.pos[0];
         py = contactA.pos[1];
         
         contactA.pos[0] = px;
         contactA.pos[1] = py;
         
     }
*/               
     
      if(contactA.type === "lamp" && contactB.id === "player" )
      {
	    if (mainGuy.light>0 && !thisLevel.currentRoom.isLit) {
          thisLevel.currentRoom.setLit(true);
          entityManager.clearEnemies();
		  thisLevel.currentRoom.killEnemies();
		  mainGuy.light--;
		}
      }
      
 
                              
  };
  
  this.listener.PostSolve = function(contact)
  {
            console.log(" ____ PostSolve _____");

  };
  
  
  this.listener.PreSolve = function(contact)
  {
      console.log(" ---  PreSolve ------");
     
     
      //console.log(contact.GetFixtureA().GetBody().GetUserData());  
     // console.log(contact.GetFixtureB().GetBody().GetUserData()); 

      
      if(contact.GetFixtureA().GetBody().GetUserData() !== null || contact.GetFixtureB().GetBody().GetUserData() !== null)
      {
       contactA = contact.GetFixtureA().GetBody().GetUserData();   // other (enemies, walls,...)
       contactB = contact.GetFixtureB().GetBody().GetUserData();  // player 
      }
      
      
     if(contactA.id === "wall" && contactB.id === "player")
     {
         console.log("^^^^^^ I'M IN 1 ^^^^^^^^^^^^^^^^^"); 
            
        // px = contactB.pos[0];
        // py = contactB.pos[1];
         
        // contactB.pos[0] = px;
        // contactB.pos[1] = py;
         
         
      ///*   
         man = contact.GetManifold();
                  
       
         
         wallPoints = man.m_localPoint;
         
         console.log( man.m_localPoint);
         console.log(wallPoints.x);
         wp = wallPoints.x*30;
         console.log("player pos before === " + contactB.pos[0] + " wall " + wp);
      //*/
       newMove = (wp-((MEASURE_UNIT/2))- contactB.BoundSize/2);
         px = contactB.pos[0];
        //py = contactB.pos[1];
         
         if(contactB.pos[0] > newMove && wp !== 0)
         {
             //this one just for rightwall
             // (can add invisable collision for a little bit with deacitvate for one frame )
            // contactB.pos[0] = newMove;  
         }
         
         //contactB.pos[0] = wp;
         
         console.log("player pos AFTER === " + contactB.pos[0]); 
         //contactB.pos[1] <= py;   
            
     }
     else if(contactB.id === "wall" && contactA.id === "player")   
     {
          console.log("^^^^^^ I'M IN 2^^^^^^^^^^^^^^^^^");                    
         px = contactA.pos[0];
         py = contactA.pos[1];
         
         contactA.pos[0] = px;
         contactA.pos[1] = py;
         
     }

      
  }; 
  
  
  
  
 //*/
/*   
   if (callbacks.EndContact)
   {
     listener.EndContact = function(contact)
     {
        callbacks.EndContact(contact.GetFixtureA().GetBody().GetUserData(),
                             contact.GetFixtureB().GetBody().GetUserData());
                             console.log("listening ----- 2.1 ----");
    };
   };
*/   
     /* 
      if (callbacks.PostSolve) listener.PostSolve = function(contact) {
        callbacks.PostSolve(contact.GetFixtureA().GetBody().GetUserData(),
                             contact.GetFixtureB().GetBody().GetUserData()
                             );
    };
     */
    collisionWorld.SetContactListener(this.listener);
    
};
