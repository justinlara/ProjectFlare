function AllTiles() {
	this.entrance = new Array(); //empty room, for entrance only and for templating
	this.entrance[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.entrance[1] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.entrance[2] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.entrance[3] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.entrance[4] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.entrance[5] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.entrance[6] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.entrance[7] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.entrance[8] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.entrance[9] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.entrance[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.r1 = new Array();//an open room with a lamp in the center, guarded by mileses
	this.r1[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r1[1] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r1[2] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r1[3] = new Array(1,2,2,2,2,2,2,5,2,2,2,2,2,2,1);
	this.r1[4] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r1[5] = new Array(1,2,2,2,2,5,2,3,2,5,2,2,2,2,1);
	this.r1[6] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r1[7] = new Array(1,2,2,2,2,2,2,5,2,2,2,2,2,2,1);
	this.r1[8] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r1[9] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r1[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.r2 = new Array(); // open room with lamp in center, 4miles in the corners
	this.r2[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r2[1] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r2[2] = new Array(1,2,5,2,2,2,2,2,2,2,2,2,5,2,1);
	this.r2[3] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r2[4] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r2[5] = new Array(1,2,2,2,2,2,2,3,2,2,2,2,2,2,1);
	this.r2[6] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r2[7] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r2[8] = new Array(1,2,5,2,2,2,2,2,2,2,2,2,5,2,1);
	this.r2[9] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r2[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.r3 = new Array(); //3 miles maze
	this.r3[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r3[1] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r3[2] = new Array(1,2,2,2,2,2,4,4,4,2,2,2,2,2,1);
	this.r3[3] = new Array(1,2,2,4,4,2,4,3,4,2,4,4,2,2,1);
	this.r3[4] = new Array(1,2,2,4,2,2,2,2,2,2,2,4,2,2,1);
	this.r3[5] = new Array(1,2,2,2,2,5,4,4,4,5,2,2,2,2,1);
	this.r3[6] = new Array(1,2,2,2,2,2,4,5,4,2,2,2,2,2,1);
	this.r3[7] = new Array(1,2,4,2,2,4,4,2,4,4,2,2,4,2,1);
	this.r3[8] = new Array(1,2,4,4,2,2,2,2,2,2,2,4,4,2,1);
	this.r3[9] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r3[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.r4 = new Array(); //easy munge room
	this.r4[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r4[1] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r4[2] = new Array(1,2,4,4,2,2,2,2,2,2,2,4,4,2,1);
	this.r4[3] = new Array(1,2,2,2,2,4,4,2,4,4,2,2,2,2,1);
	this.r4[4] = new Array(1,2,2,2,2,4,6,2,2,4,2,2,2,2,1);
	this.r4[5] = new Array(1,2,2,2,2,2,2,3,2,2,2,2,2,2,1);
	this.r4[6] = new Array(1,2,2,2,2,4,2,2,6,4,2,2,2,2,1);
	this.r4[7] = new Array(1,2,2,2,2,4,4,2,4,4,2,2,2,2,1);
	this.r4[8] = new Array(1,2,4,4,2,2,2,2,2,2,2,4,4,2,1);
	this.r4[9] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r4[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.r5 = new Array(); //no lamp room w/ miles and munge
	this.r5[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r5[1] = new Array(1,2,2,2,4,2,2,2,2,2,4,2,2,2,1);
	this.r5[2] = new Array(1,2,5,2,4,2,2,2,2,2,4,2,5,2,1);
	this.r5[3] = new Array(1,2,2,2,4,2,2,2,2,2,4,2,2,2,1);
	this.r5[4] = new Array(1,2,4,2,4,2,2,2,2,2,4,2,4,2,1);
	this.r5[5] = new Array(1,2,4,2,4,2,2,6,2,2,4,2,4,2,1);
	this.r5[6] = new Array(1,2,4,2,2,2,2,2,2,2,2,2,4,2,1);
	this.r5[7] = new Array(1,2,4,4,4,4,4,4,4,2,2,2,4,2,1);
	this.r5[8] = new Array(1,2,4,2,2,2,2,2,2,2,2,2,4,2,1);
	this.r5[9] = new Array(1,2,4,2,2,2,2,2,2,2,2,2,4,2,1);
	this.r5[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.r6 = new Array(); //serious munge maze
	this.r6[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r6[1] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r6[2] = new Array(1,2,4,4,4,4,4,2,4,4,4,4,4,2,1);
	this.r6[3] = new Array(1,2,4,2,2,2,2,2,2,2,2,2,4,2,1);
	this.r6[4] = new Array(1,2,4,2,4,2,4,4,4,2,4,2,4,2,1);
	this.r6[5] = new Array(1,2,2,2,4,6,2,3,2,6,4,2,2,2,1);
	this.r6[6] = new Array(1,2,4,2,4,2,4,4,4,2,4,2,4,2,1);
	this.r6[7] = new Array(1,2,4,2,2,2,2,2,2,2,2,2,4,2,1);
	this.r6[8] = new Array(1,2,4,4,4,4,4,2,4,4,4,4,4,2,1);
	this.r6[9] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r6[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.r7 = new Array(); //miles hallway, no lamp
	this.r7[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r7[1] = new Array(1,2,2,2,2,4,2,2,2,4,2,2,2,2,1);
	this.r7[2] = new Array(1,2,2,2,2,4,2,2,2,4,2,2,2,2,1);
	this.r7[3] = new Array(1,4,4,4,4,4,2,2,2,4,4,4,4,4,1);
	this.r7[4] = new Array(1,2,2,2,2,2,5,2,5,2,2,2,2,2,1);
	this.r7[5] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r7[6] = new Array(1,2,2,2,2,2,5,2,5,2,2,2,2,2,1);
	this.r7[7] = new Array(1,4,4,4,4,4,2,2,2,4,4,4,4,4,1);
	this.r7[8] = new Array(1,2,2,2,2,4,2,2,2,4,2,2,2,2,1);
	this.r7[9] = new Array(1,2,2,2,2,4,2,2,2,4,2,2,2,2,1);
	this.r7[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r8 = new Array(); //miles hallway, lamp 1
	this.r8[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r8[1] = new Array(1,2,2,2,2,4,2,2,2,4,2,2,2,2,1);
	this.r8[2] = new Array(1,2,2,2,2,4,2,2,2,4,2,2,2,2,1);
	this.r8[3] = new Array(1,4,4,4,4,4,2,2,2,4,4,4,4,4,1);
	this.r8[4] = new Array(1,2,2,2,2,2,5,2,5,2,2,2,2,2,1);
	this.r8[5] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r8[6] = new Array(1,2,2,2,2,2,5,2,5,2,2,2,2,2,1);
	this.r8[7] = new Array(1,4,4,4,4,4,2,2,2,4,4,2,4,4,1);
	this.r8[8] = new Array(1,2,2,2,2,4,2,2,2,4,4,2,4,2,1);
	this.r8[9] = new Array(1,2,2,2,2,4,2,2,2,4,4,3,4,2,1);
	this.r8[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r9 = new Array(); //miles hallway, lamp 2
	this.r9[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r9[1] = new Array(1,2,4,3,4,4,2,2,2,4,2,2,2,2,1);
	this.r9[2] = new Array(1,2,4,2,4,4,2,2,2,4,2,2,2,2,1);
	this.r9[3] = new Array(1,4,4,2,4,4,2,2,2,4,4,4,4,4,1);
	this.r9[4] = new Array(1,2,2,2,2,2,5,2,5,2,2,2,2,2,1);
	this.r9[5] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r9[6] = new Array(1,2,2,2,2,2,5,2,5,2,2,2,2,2,1);
	this.r9[7] = new Array(1,4,4,4,4,4,2,2,2,4,4,4,4,4,1);
	this.r9[8] = new Array(1,2,2,2,2,4,2,2,2,4,2,2,2,2,1);
	this.r9[9] = new Array(1,2,2,2,2,4,2,2,2,4,2,2,2,2,1);
	this.r9[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.r10 = new Array();
	this.r10[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r10[1] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r10[2] = new Array(1,2,2,5,2,2,2,2,2,2,2,2,5,2,1);
	this.r10[3] = new Array(1,2,2,2,2,2,2,2,2,2,2,5,2,2,1);
	this.r10[4] = new Array(1,2,2,2,2,2,2,5,2,2,2,2,2,2,1);
	this.r10[5] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r10[6] = new Array(1,2,2,2,2,5,2,2,2,2,2,2,2,2,1);
	this.r10[7] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,3,2,1);
	this.r10[8] = new Array(1,2,5,2,2,2,2,2,2,2,2,2,5,2,1);
	this.r10[9] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r10[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.r11 = new Array();
	this.r11[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r11[1] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r11[2] = new Array(1,2,3,2,5,2,2,2,2,2,2,2,5,2,1);
	this.r11[3] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r11[4] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r11[5] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r11[6] = new Array(1,2,2,2,2,2,2,2,2,2,5,2,2,2,1);
	this.r11[7] = new Array(1,2,2,2,2,2,2,5,2,2,2,2,2,2,1);
	this.r11[8] = new Array(1,2,2,5,2,2,2,2,2,2,2,2,5,2,1);
	this.r11[9] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r11[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	//define arrays of easy/med/hard rooms
	//one room can show up in multiple difficulties, but I've already accounted for that in getWeighted
	//also listing the same room more than once skews the randomness.  dont do that
	this.easyRooms = new Array();
		this.easyRooms.push(this.r1, this.r2, this.r3, this.r8, this.r9, this.r10, this.r11);
	this.medRooms = new Array();
		this.medRooms.push(this.r4, this.r5, this.r6, this.r7);
	this.hardRooms = new Array();
		this.hardRooms.push(this.r1, this.r2);
}

//methods to return room arrays
//for use in level generation

//picks a completely random room
AllTiles.prototype.getRandom = function() {
	console.log("RANDOM ROOM");
	var r = Math.floor((Math.random()*4) + 1);
	if (r == 1) return this.r1;
	else if (r==2) return this.r2;
	else if (r==3) return this.r3;
	else if (r==4) return this.r4;
};

AllTiles.prototype.getEasy = function() {
	console.log("EASY ROOM");
	var r = Math.floor((Math.random()*this.easyRooms.length));
	return this.easyRooms[r];
};

AllTiles.prototype.getMedium = function() {
	console.log("MEDIUM ROOM");
	var r = Math.floor((Math.random()*this.medRooms.length));
	return this.medRooms[r];
};

AllTiles.prototype.getHard = function() {
	console.log("HARD ROOM");
	var r = Math.floor((Math.random()*this.hardRooms.length));
	return this.hardRooms[r];
};

//pick a random room weighted in difficulty based on the given floor
//I imagine this is what we'll use most often
AllTiles.prototype.getWeighted = function(floor) {
	//formula explained:
	//floor * something is the % chance of getting a hard room, so it gradually increases
	//no hard rooms should roll on floors <5, no easy rooms 10+
	
	if (floor < 5) //easy floors 1-4
	{
		//get easy or medium
		var medChance = floor*10;
		var r = Math.floor((Math.random()*100));
		if (r<medChance) {
			return this.getMedium();
		}
		else {
			return this.getEasy();
		}
	}
	else if (floor >= 5 && floor < 10) { //medium floors 5-9
		var hardChance = floor*3;
		var medChance = floor*10; //this is actually the chance of medium OR hard
		//easy chance at least 10
		var r = Math.floor((Math.random()*100));
		if (r<hardChance) {
			return this.getHard();
		}
		else if (r < medChance) {
			return this.getMedium();
		}
		else {
			return this.getEasy();
		}
	}
	else if (floor >= 10){//hard 10+
		//floor 9 had a 27% chance of hard room
		//start at 10 with 30%
		var hardChance = floor*3;
		var r = Math.floor((Math.random()*100));
		if (r<hardChance) {
			return this.getHard();
		}
		else {
			return this.getMedium();
		}
	}
	else { return this.getRandom(); }//failsafe
	
};