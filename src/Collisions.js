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
    //console.log(list.GetFixtureA().GetBody().GetUserData());
   
    contactB = list.GetFixtureB().GetBody().GetUserData();  // player 
     //console.log(list.GetFixtureB().GetBody().GetUserData());
 }
     
   if(contactA.type === "enemy" && contactB.id === "p")
      {
          switch(contactA.id)
          {
            case "e1":
            {
               contactB.health -= contactA.damage;  
               console.log(contactB);
              break;  
            }
           }
       }  
*/     
//// -- list method END ----------------------------------------------------------
     
     
     
    this.listener.BeginContact = function(contact) 
    {
        console.log("listening --- HIT !!! ------");


      //console.log(contact.GetFixtureA().GetBody().GetUserData());  
      //console.log(contact.GetFixtureB().GetBody().GetUserData()); 

      
      contactA = contact.GetFixtureA().GetBody().GetUserData();   // other (enemies, walls,...)
      contactB = contact.GetFixtureB().GetBody().GetUserData();  // player 
 /*   
      if(contactA.id === "wall" && contactB.id === "p")
      {
          stopX = contactB.pos[0];
          stopY = contactB.pos[1];
          
          if(contactB.pos[0] <= stopX)
          {
            contactB.pos[0] = stopX;
            contactB.pos[1] = stopY;
          }
       console.log(contactB);   
      }
*/    
      if(contactA.type === "enemy" && contactB.id === "player")
      {
          switch(contactA.id)
          {
            case "e1":
            {
               contactB.health -= contactA.damage;  
               
               console.log(contactB);
               console.log(contactA);
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
      
      if(contactA.id === "lamp" && contactB.id === "player" )
      {
          
          
          
      }
      
//*/                              
    };
   //}; 
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
