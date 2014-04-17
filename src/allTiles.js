function AllTiles() {
	this.entrance = new Array(); //empty room, for entrance only and for templating
	this.entrance[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.entrance[1] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.entrance[2] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.entrance[3] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.entrance[4] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.entrance[5] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.entrance[6] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.entrance[7] = new Array(1,2,2,2,2,2,2,7,2,2,2,2,2,2,1);
	this.entrance[8] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.entrance[9] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.entrance[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.exit1 = new Array();
	this.exit1[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.exit1[1] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.exit1[2] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.exit1[3] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.exit1[4] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.exit1[5] = new Array(1,2,2,2,2,2,2,7,2,2,2,2,2,2,1);
	this.exit1[6] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.exit1[7] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.exit1[8] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.exit1[9] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.exit1[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
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
	
	this.r12 = new Array();
	this.r12[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r12[1] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r12[2] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r12[3] = new Array(1,2,2,2,4,4,4,4,4,4,4,2,2,2,1);
	this.r12[4] = new Array(1,2,2,2,4,2,5,2,5,2,4,2,2,2,1);
	this.r12[5] = new Array(1,2,2,2,4,2,2,6,2,2,4,2,2,2,1);
	this.r12[6] = new Array(1,2,2,2,4,5,2,2,2,5,4,2,2,2,1);
	this.r12[7] = new Array(1,2,2,2,4,4,4,4,4,4,4,2,2,2,1);
	this.r12[8] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r12[9] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r12[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.r13 = new Array();
	this.r13[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r13[1] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r13[2] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,6,2,1);
	this.r13[3] = new Array(1,2,2,4,4,2,2,2,4,4,4,4,2,2,1);
	this.r13[4] = new Array(1,2,2,4,4,2,2,2,4,4,4,4,2,2,1);
	this.r13[5] = new Array(1,2,2,4,3,2,2,5,2,2,2,2,2,2,1);
	this.r13[6] = new Array(1,2,2,4,4,2,2,2,2,2,2,2,2,2,1);
	this.r13[7] = new Array(1,2,2,6,2,2,2,4,4,4,4,4,2,2,1);
	this.r13[8] = new Array(1,2,2,2,2,2,2,4,4,4,4,4,2,2,1);
	this.r13[9] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r13[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.r14 = new Array();
	this.r14[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r14[1] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r14[2] = new Array(1,2,2,5,2,2,2,2,2,2,2,5,2,2,1);
	this.r14[3] = new Array(1,2,2,2,4,4,4,4,4,4,4,2,2,2,1);
	this.r14[4] = new Array(1,2,2,2,4,2,2,2,2,2,4,2,2,2,1);
	this.r14[5] = new Array(1,2,2,2,4,2,2,2,2,2,4,2,2,2,1);
	this.r14[6] = new Array(1,2,2,2,4,2,2,2,2,2,4,2,2,2,1);
	this.r14[7] = new Array(1,2,2,2,4,4,4,4,4,4,4,2,2,2,1);
	this.r14[8] = new Array(1,2,2,5,2,2,2,2,2,2,2,5,2,2,1);
	this.r14[9] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r14[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);

	this.r15 = new Array();
	this.r15[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r15[1] = new Array(1,2,2,2,2,2,4,2,4,2,2,2,2,2,1);
	this.r15[2] = new Array(1,2,2,4,4,4,4,2,4,4,4,4,2,2,1);
	this.r15[3] = new Array(1,2,2,4,2,2,2,2,5,2,2,4,2,2,1);
	this.r15[4] = new Array(1,4,4,4,2,2,5,2,2,2,2,4,4,4,1);
	this.r15[5] = new Array(1,2,2,2,2,2,2,5,2,2,2,2,2,2,1);
	this.r15[6] = new Array(1,4,4,4,2,2,2,2,2,2,5,4,4,4,1);
	this.r15[7] = new Array(1,2,2,4,5,2,2,2,2,2,2,4,2,2,1);
	this.r15[8] = new Array(1,2,2,4,4,4,4,2,4,4,4,4,2,2,1);
	this.r15[9] = new Array(1,2,2,2,2,2,4,2,4,2,2,2,2,2,1);
	this.r15[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.r16 = new Array();
	this.r16[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r16[1] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r16[2] = new Array(1,2,6,2,4,4,4,4,4,4,4,2,6,2,1);
	this.r16[3] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r16[4] = new Array(1,2,2,2,2,2,4,6,4,2,2,2,2,2,1);
	this.r16[5] = new Array(1,2,2,4,2,2,4,2,4,2,2,4,2,2,1);
	this.r16[6] = new Array(1,2,2,4,2,2,4,3,4,2,2,4,2,2,1);
	this.r16[7] = new Array(1,2,2,4,2,2,4,4,4,2,2,4,2,2,1);
	this.r16[8] = new Array(1,2,2,4,2,2,2,2,2,2,2,4,2,2,1);
	this.r16[9] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r16[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);

	this.r17 = new Array();
	this.r17[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r17[1] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r17[2] = new Array(1,2,2,2,5,2,2,2,2,2,2,4,6,2,1);
	this.r17[3] = new Array(1,2,4,4,2,2,2,2,2,2,4,2,2,2,1);
	this.r17[4] = new Array(1,2,4,4,2,4,4,4,4,2,4,2,2,2,1);
	this.r17[5] = new Array(1,2,4,4,2,6,2,3,4,2,2,2,2,2,1);
	this.r17[6] = new Array(1,2,4,4,2,4,4,4,4,2,5,2,2,2,1);
	this.r17[7] = new Array(1,2,4,4,2,2,2,2,2,2,4,2,2,2,1);
	this.r17[8] = new Array(1,2,2,2,2,2,2,2,2,2,5,4,2,2,1);
	this.r17[9] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r17[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.r18 = new Array();
	this.r18[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r18[1] = new Array(1,6,4,2,2,2,2,2,2,2,2,2,4,6,1);
	this.r18[2] = new Array(1,2,4,2,4,4,4,4,4,4,4,2,4,2,1);
	this.r18[3] = new Array(1,2,4,2,2,2,2,4,4,4,4,4,4,2,1);
	this.r18[4] = new Array(1,2,4,2,2,2,2,2,2,2,4,3,4,2,1);
	this.r18[5] = new Array(1,2,4,2,5,2,2,5,2,2,4,2,4,2,1);
	this.r18[6] = new Array(1,2,4,2,2,5,2,2,2,2,2,2,4,2,1);
	this.r18[7] = new Array(1,2,4,2,2,2,2,2,2,2,4,4,4,2,1);
	this.r18[8] = new Array(1,2,2,2,4,4,4,4,4,4,4,2,2,2,1);
	this.r18[9] = new Array(1,6,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r18[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);

	this.r19 = new Array();
	this.r19[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r19[1] = new Array(1,6,4,2,2,2,2,2,2,2,2,2,4,6,1);
	this.r19[2] = new Array(1,2,4,2,4,4,4,4,4,4,4,2,4,2,1);
	this.r19[3] = new Array(1,2,4,2,2,4,2,5,2,2,4,4,4,2,1);
	this.r19[4] = new Array(1,2,4,2,2,4,4,4,4,4,4,3,4,2,1);
	this.r19[5] = new Array(1,2,4,2,2,2,2,2,2,2,4,2,4,2,1);
	this.r19[6] = new Array(1,2,4,2,2,2,2,2,2,2,2,6,4,2,1);
	this.r19[7] = new Array(1,2,4,2,2,2,2,2,2,2,4,4,4,2,1);
	this.r19[8] = new Array(1,2,4,2,4,4,4,4,4,4,4,2,2,2,1);
	this.r19[9] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r19[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.r20 = new Array();
	this.r20[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r20[1] = new Array(1,6,4,2,2,2,2,2,2,2,2,2,4,6,1);
	this.r20[2] = new Array(1,2,4,2,4,4,4,4,4,4,4,2,4,2,1);
	this.r20[3] = new Array(1,2,4,2,2,4,2,6,2,2,4,4,4,2,1);
	this.r20[4] = new Array(1,2,4,2,2,4,4,4,4,2,4,3,4,2,1);
	this.r20[5] = new Array(1,2,4,2,2,2,2,5,2,2,4,2,4,2,1);
	this.r20[6] = new Array(1,2,4,2,2,2,2,2,5,2,2,6,4,2,1);
	this.r20[7] = new Array(1,2,4,2,2,2,5,2,2,2,4,4,4,2,1);
	this.r20[8] = new Array(1,2,4,2,4,4,4,4,4,4,4,2,2,2,1);
	this.r20[9] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r20[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.r21 = new Array();
	this.r21[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r21[1] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r21[2] = new Array(1,2,2,2,2,4,4,2,2,2,2,2,2,2,1);
	this.r21[3] = new Array(1,2,4,4,2,2,2,2,2,2,2,4,4,2,1);
	this.r21[4] = new Array(1,2,4,4,2,2,4,4,4,2,2,4,4,2,1);
	this.r21[5] = new Array(1,2,4,4,5,2,4,3,4,2,5,4,2,2,1);
	this.r21[6] = new Array(1,2,4,4,2,2,4,6,4,2,2,4,4,2,1);
	this.r21[7] = new Array(1,2,4,4,2,2,2,2,2,2,2,4,4,2,1);
	this.r21[8] = new Array(1,2,2,4,4,4,4,4,4,4,4,4,2,2,1);
	this.r21[9] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r21[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.r22 = new Array();
	this.r22[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r22[1] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r22[2] = new Array(1,2,2,2,2,2,2,4,4,4,2,2,2,2,1);
	this.r22[3] = new Array(1,2,2,2,4,4,2,2,2,2,2,4,4,2,1);
	this.r22[4] = new Array(1,2,2,2,4,6,4,4,4,4,2,4,4,2,1);
	this.r22[5] = new Array(1,2,2,2,5,2,4,3,2,6,2,4,4,2,1);
	this.r22[6] = new Array(1,2,2,2,2,5,4,4,4,4,2,4,4,2,1);
	this.r22[7] = new Array(1,2,2,2,2,2,2,2,2,2,2,4,4,2,1);
	this.r22[8] = new Array(1,2,5,2,2,2,2,2,5,2,2,2,2,2,1);
	this.r22[9] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r22[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	//NOT DCUMENTED
	//variant of r17
	this.r23 = new Array();
	this.r23[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r23[1] = new Array(1,2,2,2,2,2,2,2,2,2,2,4,2,2,1);
	this.r23[2] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,4,2,1);
	this.r23[3] = new Array(1,2,4,4,2,2,2,2,6,2,2,2,2,4,1);
	this.r23[4] = new Array(1,2,4,4,2,4,4,4,4,2,5,2,2,2,1);
	this.r23[5] = new Array(1,2,4,4,2,6,2,3,4,2,2,2,2,2,1);
	this.r23[6] = new Array(1,2,4,4,2,4,4,4,4,2,5,2,2,2,1);
	this.r23[7] = new Array(1,2,4,4,2,2,2,2,6,2,2,4,4,2,1);
	this.r23[8] = new Array(1,2,2,2,2,2,2,2,2,2,2,4,4,2,1);
	this.r23[9] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r23[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.r24 = new Array();
	this.r24[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r24[1] = new Array(1,2,2,4,2,2,2,2,2,2,4,2,2,2,1);
	this.r24[2] = new Array(1,2,4,2,2,2,2,2,2,2,2,4,2,2,1);
	this.r24[3] = new Array(1,4,2,5,2,5,2,2,2,5,2,2,4,2,1);
	this.r24[4] = new Array(1,2,2,2,2,2,2,5,2,2,2,2,2,4,1);
	this.r24[5] = new Array(1,2,2,2,2,5,2,6,2,5,2,2,2,2,1);
	this.r24[6] = new Array(1,4,5,2,2,2,2,5,2,2,2,2,2,2,1);
	this.r24[7] = new Array(1,2,4,2,2,5,2,2,2,5,2,2,2,4,1);
	this.r24[8] = new Array(1,2,2,4,2,2,2,5,2,2,2,2,4,2,1);
	this.r24[9] = new Array(1,2,2,2,4,2,2,2,2,2,2,4,2,2,1);
	this.r24[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.r25 = new Array();
	this.r25[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r25[1] = new Array(1,2,2,4,2,2,2,2,2,2,4,2,2,2,1);
	this.r25[2] = new Array(1,2,4,2,2,5,2,2,2,2,2,4,2,2,1);
	this.r25[3] = new Array(1,4,2,5,2,2,2,2,2,2,2,2,4,2,1);
	this.r25[4] = new Array(1,2,2,2,2,2,2,6,2,5,2,2,2,4,1);
	this.r25[5] = new Array(1,2,2,2,2,6,2,2,2,6,2,2,2,2,1);
	this.r25[6] = new Array(1,4,2,2,2,5,2,6,2,2,2,2,2,2,1);
	this.r25[7] = new Array(1,2,4,2,2,2,2,2,2,2,2,2,2,4,1);
	this.r25[8] = new Array(1,2,2,4,2,2,2,2,2,2,2,5,4,2,1);
	this.r25[9] = new Array(1,2,2,2,4,2,2,2,2,2,2,4,2,2,1);
	this.r25[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.r26 = new Array();
	this.r26[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r26[1] = new Array(1,2,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r26[2] = new Array(1,2,2,4,2,2,2,2,2,2,2,2,6,2,1);
	this.r26[3] = new Array(1,2,2,2,4,2,6,2,4,4,3,4,2,2,1);
	this.r26[4] = new Array(1,2,2,2,4,2,2,2,4,4,4,4,2,2,1);
	this.r26[5] = new Array(1,2,2,4,2,2,2,6,2,2,2,2,2,2,1);
	this.r26[6] = new Array(1,2,2,4,4,2,2,2,4,2,2,2,2,2,1);
	this.r26[7] = new Array(1,2,2,6,2,2,2,4,2,4,4,4,2,2,1);
	this.r26[8] = new Array(1,2,2,2,2,2,2,4,2,4,4,4,2,2,1);
	this.r26[9] = new Array(1,2,2,2,2,2,2,2,2,2,4,2,2,2,1);
	this.r26[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.r27 = new Array();
	this.r27[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r27[1] = new Array(1,4,2,2,2,2,2,2,2,2,2,2,2,2,1);
	this.r27[2] = new Array(1,2,2,4,2,2,2,4,2,2,2,4,6,2,1);
	this.r27[3] = new Array(1,2,2,2,4,2,6,2,4,4,2,4,2,2,1);
	this.r27[4] = new Array(1,2,4,2,4,2,2,2,4,4,4,2,2,2,1);
	this.r27[5] = new Array(1,2,2,4,2,2,2,6,2,2,2,2,2,2,1);
	this.r27[6] = new Array(1,2,4,4,4,2,2,4,4,2,2,2,2,2,1);
	this.r27[7] = new Array(1,2,2,6,2,2,2,4,3,4,4,4,2,2,1);
	this.r27[8] = new Array(1,2,2,2,2,2,2,4,2,6,4,4,2,2,1);
	this.r27[9] = new Array(1,2,2,2,2,2,2,2,2,2,4,2,2,2,1);
	this.r27[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.r28 = new Array();
	this.r28[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r28[1] = new Array(1,2,2,4,2,2,2,2,2,2,2,4,2,2,1);
	this.r28[2] = new Array(1,2,4,2,2,2,2,4,2,2,2,2,4,2,1);
	this.r28[3] = new Array(1,4,5,2,2,2,4,4,4,2,5,2,2,4,1);
	this.r28[4] = new Array(1,2,2,2,2,4,4,4,4,4,2,2,2,2,1);
	this.r28[5] = new Array(1,2,2,2,4,4,2,3,2,4,4,2,2,2,1);
	this.r28[6] = new Array(1,2,2,2,2,4,2,4,6,2,2,5,2,2,1);
	this.r28[7] = new Array(1,4,2,2,2,2,4,4,4,2,2,2,2,4,1);
	this.r28[8] = new Array(1,2,4,5,2,2,2,4,2,2,5,2,4,2,1);
	this.r28[9] = new Array(1,2,2,4,2,2,2,2,2,2,2,4,2,2,1);
	this.r28[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	
	this.r29 = new Array();
	this.r29[0] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	this.r29[1] = new Array(1,2,2,4,2,2,2,2,2,2,2,4,2,2,1);
	this.r29[2] = new Array(1,2,4,2,2,2,2,2,2,2,2,2,4,2,1);
	this.r29[3] = new Array(1,4,2,2,2,2,2,6,2,2,2,2,2,4,1);
	this.r29[4] = new Array(1,2,2,2,2,2,6,5,6,2,2,2,2,2,1);
	this.r29[5] = new Array(1,2,2,2,2,6,2,3,2,6,2,2,2,2,1);
	this.r29[6] = new Array(1,2,2,2,2,2,6,5,6,2,2,2,2,2,1);
	this.r29[7] = new Array(1,4,2,2,2,2,2,6,2,2,2,2,2,4,1);
	this.r29[8] = new Array(1,2,4,2,2,2,2,2,2,2,2,2,4,2,1);
	this.r29[9] = new Array(1,2,2,4,2,2,2,2,2,2,2,4,2,2,1);
	this.r29[10] = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	//----end not documented

	//define arrays of easy/med/hard rooms
	//one room can show up in multiple difficulties, but I've already accounted for that in getWeighted
	//also listing the same room more than once skews the randomness.  dont do that
	this.easyRooms = new Array();
		this.easyRooms.push(this.r1, this.r2, this.r3, this.r8, this.r9, this.r10, this.r11, this.r14,
		this.r15);
	this.medRooms = new Array();
		this.medRooms.push(this.r4, this.r5, this.r6, this.r7, this.r12, this.r13, this.r16, this.r17, 
		this.r18, this.r21, this.r22, this.r28, this.r29);
	this.hardRooms = new Array();
		this.hardRooms.push(this.r19, this.r20, this.r23, this.r24, this.r25, this.r26, this.r27);
}

//methods to return room arrays
//for use in level generation

//picks a completely random room
AllTiles.prototype.getRandom = function() {
	//console.log("RANDOM ROOM");
	var r = Math.floor((Math.random()*4) + 1);
	if (r == 1) return this.r1;
	else if (r==2) return this.r2;
	else if (r==3) return this.r3;
	else if (r==4) return this.r4;
};

AllTiles.prototype.getEasy = function() {
	//console.log("EASY ROOM");
	var r = Math.floor((Math.random()*this.easyRooms.length));
	return this.easyRooms[r];
};

AllTiles.prototype.getMedium = function() {
	//console.log("MEDIUM ROOM");
	var r = Math.floor((Math.random()*this.medRooms.length));
	return this.medRooms[r];
};

AllTiles.prototype.getHard = function() {
	//console.log("HARD ROOM");
	var r = Math.floor((Math.random()*this.hardRooms.length));
	return this.hardRooms[r];
};

//pick a random room weighted in difficulty based on the given floor
//I imagine this is what we'll use most often
AllTiles.prototype.getWeighted = function(floor) {
	//formula explained:
	//floor * something is the % chance of getting a hard room, so it gradually increases
	//no hard rooms should roll on floors <5, no easy rooms 10+
	
	if (floor < 2) //easy floors 1-2
	{
		//get easy or medium
		var medChance = floor*15;
		var r = Math.floor((Math.random()*100));
		if (r<medChance) {
			return this.getMedium();
		}
		else {
			return this.getEasy();
		}
	}
	else if (floor >= 2 && floor < 5) { //medium floors 2-5
		var hardChance = floor*5;
		var medChance = floor*20; //this is actually the chance of medium OR hard
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
	else if (floor >= 6){//hard 6+
		//floor 5 had a 25% chance of hard room
		//start at 6 with 30%
		var hardChance = floor*5;
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