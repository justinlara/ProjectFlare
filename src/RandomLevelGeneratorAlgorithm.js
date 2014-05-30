// RandomLevelGeneratorAlgorithm.js
// Open RandomLevelGeneratorTest.html in a browser for quick look at what the ouput of
// a randomly generated level layout would look like.  Refresh for different output.
//
// Richard Nguyen
// South-Facing Windows
// ICS 169A, Winter 2014


// Fields needed to generate the level.
//function RandomLevelGeneratorAlgorithm() {
    //code

var numberOfRooms;
var height;
var width;
var level;
var roomCount;

// Characters that correspond to the types of rooms (starting room counts as an active room).
const inactiveRoom = "\u00A0"; // this is a space, e.g. " "
const activeRoom = "O";
const startingRoom = "$";
const exitRoom = "X";
const reverseRoom = "R";
//}

function createRandomLevel(nRooms, numberOfReverseRooms)
//RandomLevelGeneratorAlgorithm.prototype.createRandomLevel = function(nRooms) {
{
    numberOfRooms = nRooms;
    // Currently, grab the number from the form.
    //numberOfRooms = levelGeneratorForm.rooms.value;
    // numberOfRooms = 10;
    
    // Height and width of the 2D array will be dependent on the numberOfRooms.
    height = Math.ceil(Math.sqrt(numberOfRooms)) * 2;
    width = Math.ceil(Math.sqrt(numberOfRooms)) * 2;
    
    // Make a 2D array to represent the rooms of the level.
    level = new Array(height);
    for (var r = 0; r < height; r++)
    {
        level[r] = new Array(width);
    }
    
    // Initialize all rooms to be inactive rooms.
    for (var r = 0; r < height; r++)
    {
        for (var c = 0; c < width; c++)
        {
            level[r][c] = inactiveRoom;
        }
    }
    
    // Randomly pick coordinates for the starting room.
    startRow = Math.floor((Math.random()*height));
    startCol = Math.floor((Math.random()*width));
    
    // Make this location the startingRoom of the level
    level[startRow][startCol] = startingRoom;
    
    // Keep track of number of rooms generated so far.
    roomCount = 1;
    
    // Generate rooms until desired number reached.
    while (roomCount < numberOfRooms)
    {
        // Pick a random room.
        var pick = pickRoom(roomCount);
        
        // If there is an inactive room adjacent to this randomly picked room...
        if(pickNextRoom(pick))
        {
            roomCount++;
        }
    }
    
    // Make an exit room for this level.
    makeExitRoom();
    
    // Make reverse room(s).
    for (var i = 0; i < numberOfReverseRooms; i++)
    {
	makeReverseRoom();
    }
    
    // Draw the level.
    //drawLevel();
    
    return {level: level,
            height: height,
            width: width,
            activeRoom: activeRoom,
            inactiveRoom: inactiveRoom,
            startingRoom: startingRoom,
            exitRoom: exitRoom,
            reverseRoom: reverseRoom};
}



//adding special function to make the last level structure
function createLastLevel() {
	numberOfRooms = 3;
	height = 3;
    width = 1;
    
    // Make a 2D array to represent the rooms of the level.
    level = new Array(height);
    for (var r = 0; r < height; r++)
    {
        level[r] = new Array(width);
    }
    
    // Initialize all rooms to be inactive rooms.
    for (var r = 0; r < height; r++)
    {
        for (var c = 0; c < width; c++)
        {
            level[r][c] = inactiveRoom;
        }
    }
    
    startRow = 2;
    startCol = 0;
    
    // Make this location the startingRoom of the level
    level[startRow][startCol] = startingRoom;
    
    // Keep track of number of rooms generated so far.
    roomCount = 1;
    
    // Generate rooms until desired number reached.
    while (roomCount < numberOfRooms)
    {
        // Pick a random room.
        var pick = pickRoom(roomCount);
        
        // If there is an inactive room adjacent to this randomly picked room...
        if(pickNextRoom(pick))
        {
            roomCount++;
        }
    }

	return {level: level,
            height: height,
            width: width,
            activeRoom: activeRoom,
            inactiveRoom: inactiveRoom,
            startingRoom: startingRoom,
            exitRoom: exitRoom,
            reverseRoom: reverseRoom};
}


// *** FUNCTIONS ***

// Randomly pick a random active room of the level.
// Returns an array of two values (pickedRow, pickedCol).
function pickRoom()
{
    // "choose" = random integer between 1 and roomCount.
    var choose = Math.floor((Math.random()*roomCount) + 1);
    
    // "count" = counter for when the choose'th active room is selected.
    var count = 0;
    
    // Iterate to find the chosen active room.
    for (var r = 0; r < height; r++)
    {
        for (var c = 0; c < width; c++)
        {
            // If this room is an active room...
            //if(level[r][c] == activeRoom || level[r][c] == startingRoom)
            if (level[r][c].indexOf(activeRoom) != -1 || level[r][c].indexOf(startingRoom) != -1)
            {
                // Increment the counter.
                count++;
                
                // When the choose'th room is selected...
                if (count == choose)
                {
                    // Return the coordinates for this random active room.
                    return {pickedRow: r,
                            pickedCol: c};
                }
            }
        }
    }
    
    // This value should never return.
    return -1;
}

// Randomly picking an open side of a picked room to be the next room
// Returns true if the given room has an adjacent inactive room.
// Returns false if not.
function pickNextRoom(picked)
{
    // This variable is to hold which sides of the room that are inactive rooms.
    // This function will pick one of these sides to be the next generated room.
    var openSides = "";
    
    // Shorten the parameter's variable names for simplicity.
    var pr = picked.pickedRow;
    var pc = picked.pickedCol;
    // Check room NORTH of this room.
    if (pr > 0)
    {
            // If the NORTH room is an inactive room...
            if(level[pr-1][pc] == inactiveRoom)
            {
                openSides += "N";
            }
    }
    // Check room SOUTH of this room.
    if (pr < height-1)
    {
            // If the SOUTH room is an inactive room...
            if(level[pr+1][pc] == inactiveRoom)
            {
                openSides += "S";
            }
    }
    // Check room EAST of this room.
    if (pc < width-1)
    {
            // If the EAST room is an inactive room...
            if(level[pr][pc+1] == inactiveRoom)
            {
                openSides += "E";
            }
    }
    // Check room WEST of this room.
    if (pc > 0)
    {
            // If the WEST room is an active room...
            if(level[pr][pc-1] == inactiveRoom)
            {
                openSides += "W";
            }
    }
    
    // Randomly pick a side.
    if (openSides.length > 0)
    {
        // "chooseSide" = random integer between 1 and length of openSides.
        var chooseSide = Math.floor((Math.random()*openSides.length) + 1);
        
        // Pick one of the sides based on the above random number.
        var pickedSide = openSides.substring(chooseSide-1, chooseSide);
        
        // For the side picked, make it an active room and add a door in the
        // opposite direction.
        // Then, go to the door picked and add the door.
        if (pickedSide == "N")
        {
            level[pr-1][pc] = activeRoom + "s";
            level[pr][pc] += "n";
        }
        else if (pickedSide == "S")
        {
            level[pr+1][pc] = activeRoom + "n";
            level[pr][pc] += "s";
        }
        else if (pickedSide == "E")
        {
            level[pr][pc+1] = activeRoom + "w";
            level[pr][pc] += "e";
        }
        else if (pickedSide == "W")
        {
            level[pr][pc-1] = activeRoom + "e";
            level[pr][pc] += "w";
        }
        
        return true;
    }
    // If this side did not have an adjacent inactive room, return false
    // which will not increment the counter for the number of rooms added.
    else
    {
        return false;
    }
}

// Randomly pick a random active room of the level.
// Returns an array of two values (pickedRow, pickedCol).
function makeExitRoom()
{
    // "choose" = random integer between 1 and roomCount-1.  Minus 1 to not count starting room.
    var choose = Math.floor((Math.random()*(roomCount-1)) + 1);
    
    // "count" = counter for when the choose'th active room is selected.
    var count = 0;
    
    // Have this variable because the exit room is only selectig end rooms (i.e. doors with one door) as a choice.
    // So, the algorithm will constantly cycle through all of the end rooms with the counter, which may need
    // more than one cycle.
    var isNotDone = true;
    
    while(isNotDone)
    {
        // Iterate to find the chosen active room.
        for (var r = 0; r < height; r++)
        {
            for (var c = 0; c < width; c++)
            {
                var rowDiff = Math.abs(r - startRow);
                var colDiff = Math.abs(c - startCol);
                
                // condition1 states that the exit room cannot be directly on top of or below the starting room.
                var condition1 = true;
                if (rowDiff == 1 && colDiff == 0)
                    condition1 = false;
                    
                // condition2 states that the exit room cannot be directly to the left or right of the starting room.
                var condition2 = true;
                if (colDiff == 1 && rowDiff == 0)
                    condition2 = false;
                
                // The four conditions are as follows:
                //      1.  Is an end room (i.e. have only one door)
                //      2.  Is an active room (i.e. NOT the starting the room)
                //      3.  Is not directly above or below the starting room
                //      4.  Is not directly to the left or right of the starting room
                if (level[r][c].length == 2 && level[r][c].indexOf(activeRoom) != -1 && condition1 && condition2)
                {
                    // Increment the counter.
                    count++;
                    
                    // When the choose'th room is selected...
                    if (count == choose)
                    {
                        
                        // Make this active room an ending room instead.
                        level[r][c] = level[r][c].replace(activeRoom, exitRoom);
                        isNotDone = false;
                        return -1;
                    }
                }
            }
        }
    }
    
    // This value should never return.
    return -1;
}


function makeReverseRoom()
{
    // "choose" = random integer between 1 and roomCount-2.  Minus 2 to not count starting & exit rooms.
    var choose = Math.floor((Math.random()*(roomCount-2)) + 1);
    
    // "count" = counter for when the choose'th active room is selected.
    var count = 0;
    
    // Iterate to find the chosen active room.
    for (var r = 0; r < height; r++)
    {
        for (var c = 0; c < width; c++)
        {
            if (level[r][c].indexOf(activeRoom) != -1)
            {
                // Increment the counter.
                count++;
                
                // When the choose'th room is selected...
                if (count == choose)
                {
                    
                    // Make this active room an ending room instead.
                    level[r][c] = level[r][c].replace(activeRoom, reverseRoom);
                    isNotDone = false;
                    return -1;
                }
            }
        }
    }
    
    // This value should never return.
    return -1;
}

//

// Ghetto text representation of the level.
function drawLevel()
{
    // Print for debugging purposes.
    document.write("1Number of Rooms:  " + numberOfRooms + "<br>" +
                   "Width:  " + width + "<br>" +
                   "Height:  " + height + "<br><br>" +
                   "$ = Starting Position<br>" +
                   "O = Active Room<br><br>" +
                   "n/w/e/s = what direction door the room has<br>" +
                   "(e.g. \"Onew\" means this is an active room with doors to the north, east, and west sides)<br><br>");
    
    // Use Consolas, a fixed-width font.
    document.write("<font face=\"Consolas\">");
    
    // For each row of the level...
    for (var r = 0; r < height; r++)
    {
        // Print the row and then a line break.
        //document.write(level[r].join(" ") + "<br>");
        
        for (var c = 0; c < width; c++)
        {
            // Make sure each index is a size of four for mono-width array.
            while (level[r][c].length < 5)
            {
                level[r][c] += "\u00A0"; // this is a space, e.g. " "
            }
            
            document.write(level[r][c] + " ");
        }
        document.write("<br>");
    }
    
    // Close tag for the Consolas font.
    document.write("</font>");
}

function drawLevelToConsole()
{
    console.log("HERE IS THE LEVEL:");
    // For each row of the level...
    for (var r = 0; r < height; r++)
    {
        // Print the row and then a line break.
        
        for (var c = 0; c < width; c++)
        {
            // Make sure each index is a size of four for mono-width array.
            while (level[r][c].length < 5)
            {
                level[r][c] += "\u00A0"; // this is a space, e.g. " "
            }
        }
        
        console.log(level[r].join(" "));
    }
}

