function RedMiles() {
	Miles.call(this);
	
	//this.sprite = loadSpriteRMiles;
	
	this.sprite = new SpriteMap("assets/enemies/red_miles_sheet.png",
        {
            idle: {startRow: 0, startCol: 0, endRow: 0, endCol: 1},
            death: {startRow: 0, startCol: 0, endRow: 0, endCol: 1},
            // added this
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
                //loadSpriteRMiles.start('idle');
            }
        }
    );
	
	this.normalSpeed = MEASURE_UNIT * .021;
	this.aquisitionRange = MEASURE_UNIT * 4;
	this.escapeSpeed = MEASURE_UNIT * .015;
	this.escapeRange = MEASURE_UNIT * 3;
	this.attackRange = MEASURE_UNIT * 2; //0;
	
	this.speed = this.normalSpeed;
	
	this.entityBehavior = new Behavior(this, 'wander', 'follow', 'none', 'chase', 'none', 'none');
}

RedMiles.prototype = Object.create(Miles.prototype);
RedMiles.prototype.constructor = RedMiles;