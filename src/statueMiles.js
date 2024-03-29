function statueMiles()
{   
    Enemy.call(this);
    
    //this.sprite = // load in statueMiles sprite;
    
    this.sprite  = new SpriteMap("assets/enemies/Enemy3.png",
        {
            idle: {startRow: 1, startCol: 0, endRow: 1, endCol: 3},
            death: {startRow: 0, startCol: 0, endRow: 0, endCol: 1},
            
            attack:{startRow: 2, startCol: 0, endRow: 2, endCol: 3}
        },
        {
            frameW: 64, // Width of each frame of the animation in pixels
            frameH: 64, // Height of each frame of the animation in pixels
            projectedW: MEASURE_UNIT, // Displayed width
            projectedH: MEASURE_UNIT, // Displayed height 
            interval: 150, // Switch frames every xxx ms
            useTimer: false, // Rely on requestAnimFrame to update frames instead of setInterval
            postInitCallback: function() {
                //loadSpriteMiles.start('idle');
            }
        }
    );
    
    this.normalSpeed = MEASURE_UNIT * .023;
    this.aquisitionRange = MEASURE_UNIT * 3;
    this.escapeSpeed = MEASURE_UNIT * .015;
    this.escapeRange = MEASURE_UNIT * 3;
    this.attackRange = MEASURE_UNIT * 1.35; //1.4;

    this.speed = this.normalSpeed;
    
    this.entityBehavior = new Behavior(this, 'wander', 'follow', 'none', 'chase', 'none', 'none');
}

statueMiles.prototype = Object.create(Enemy.prototype);
statueMiles.prototype.constructor = statueMiles;
   
statueMiles.prototype.move = function () {
    //per frame movement if we call .move in main draw
    //I'm thinking we should have an enemy controller which calls each active enemy's move function on a setInterval timer
    
    if(this.entityBehavior.distanceToPlayer() < this.attackRange)
    this.entityBehavior.move();
    SOUNDS.playAtRandomChance(SOUNDS.playRandomSnarl);
};   
   
// / *
   
   
 statueMiles.prototype.render = function() {
///*    
    if (!this.dying)
    {
        if(!this.entityBehavior.attacking)
        {
            this.sprite.use("idle");
        }
        else
        {
            
            this.sprite.use("attack");
        //ctxWorld.drawImage(this.image, this.posX, this.posY, MEASURE_UNIT, MEASURE_UNIT);
        }
        
    }
    else
    {
        this.sprite.use("death");
        //this.sprite.draw(ctxWorld, this.posX, this.posY, MEASURE_UNIT, MEASURE_UNIT);
    }
    

    this.sprite.draw(ctxWorld, this.positions.pos[0], this.positions.pos[1], MEASURE_UNIT, MEASURE_UNIT);
    this.entityBehavior.attacking = false;
    
};

 
 statueMiles.prototype.update = function() 
 {
    if (!this.dying ) {
        this.move();
        
        this.enemyboundBox.SetActive(true);
        //this.enemyboundBox.SetAwake(false); //this makes it awake (counter-intuitive)
        
        //this.enemyboundBox.SetPosition(new b2Vec2( ((this.posX+ (0.5*MEASURE_UNIT))/30), ((this.posY+ (0.85*MEASURE_UNIT))/30))); 
        
        
        this.enemyboundBox.SetPosition(new b2Vec2( ((this.positions.pos[0]+ (0.5*MEASURE_UNIT))/30), ((this.positions.pos[1]+ (0.85*MEASURE_UNIT))/30)));                                  
        
        this.enemyboundBox.SetUserData( { type: 'enemy', id: "e1", damage: 1, xy: this.positions , pX: this.posX, pY: this.posY, 
                                    BoundSize: [((((MEASURE_UNIT/30)/4)*30)*2),  (((( MEASURE_UNIT/30 )/5)*30)*2)],
                                    hitLight: this.hitLight,
                                    hitSomething: this.hitSomething,  
                                    attack: this.attack,
                    flying: this.flying} ); 
    }
    
    this.posX = this.positions.pos[0];
    this.posY = this.positions.pos[1];

};
 
