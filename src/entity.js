//entity object
//things to be placed in levels, but not actually a tile

function Entity() 
{
	this.posX = 0;
	this.posY = 0;
	this.image = new Image();

	 this.collisionWorld;// = colWorld;
	//move method, should take some movement input and update position
	
	//some method to check if its colliding with anything
	
	//draw method, to be called by the main draw
}


/*
Entity.prototype.addContactListener = function(callbacks) 
{
    //console.log(callbacks);
    var listener = new b2ContactListener;
    
    if (callbacks.BeginContact) listener.BeginContact = function(contact) 
    {
        callbacks.BeginContact(contact.GetFixtureA().GetBody().GetUserData(),
                               contact.GetFixtureB().GetBody().GetUserData());
                               console.log("listening --- 1 ------");
    };
    
    if (callbacks.EndContact) listener.EndContact = function(contact)
     {
        callbacks.EndContact(contact.GetFixtureA().GetBody().GetUserData(),
                             contact.GetFixtureB().GetBody().GetUserData());
                             console.log("listening ----- 2 ----");
    };
    
    if (callbacks.PostSolve) listener.PostSolve = function(contact, impulse)
     {
        callbacks.PostSolve(contact.GetFixtureA().GetBody().GetUserData(),
                             contact.GetFixtureB().GetBody().GetUserData(),
                             impulse.normalImpulses[0]);
                             console.log("listening ----- 3 ----");
    };
    
    collisionWorld.SetContactListener(listener);
};

*/