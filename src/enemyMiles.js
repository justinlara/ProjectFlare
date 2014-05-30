function Miles() {
	Enemy.call(this);
	
	//this.sprite = loadSpriteMiles;
	this.attackSound = 'miles_attack';
	this.deathSound = 'miles_death';
	
	this.sprite = new SpriteMap("assets/enemies/miles_test_sheet.png",
        {
             idle: {startRow: 0, startCol: 0, endRow: 0, endCol: 1},
            death: {startRow: 0, startCol: 0, endRow: 0, endCol: 1},
           
            attack:{startRow: 1, startCol: 0, endRow: 1, endCol: 0}
        },
        {
            frameW: 128, // Width of each frame of the animation in pixels
            frameH: 128, // Height of each frame of the animation in pixels
            projectedW: MEASURE_UNIT, // Displayed width
            projectedH: MEASURE_UNIT, // Displayed height 
            interval: 150, // Switch frames every xxx ms
            useTimer: false, // Rely on requestAnimFrame to update frames instead of setInterval
            postInitCallback: function() {
                //this.sprite.start('idle');
            }
        }
    );
	
	
	this.normalSpeed = MEASURE_UNIT * .015;
	this.aquisitionRange = MEASURE_UNIT * 1.5;
	this.escapeSpeed = MEASURE_UNIT * .015;
	this.escapeRange = MEASURE_UNIT * 3;
	this.attackRange = MEASURE_UNIT * 1.5; //0;
	
	this.speed = this.normalSpeed;
	
	this.entityBehavior = new Behavior(this, 'wander', 'follow', 'none', 'chase', 'none', 'none');
}

Miles.prototype = Object.create(Enemy.prototype);
Miles.prototype.constructor = Miles;