// RandomLevelGeneratorAlgorithm.js
// Open RandomLevelGeneratorTest.html in a browser for quick look at what the ouput of
// a randomly generated level layout would look like.  Refresh for different output.
//
// Richard Nguyen
// South-Facing Windows
// ICS 169A, Winter 2014

    
// Define the number of rooms of the level.
const numberOfRooms = 15;

// Height and width of the 2D array will be dependent on the numberOfRooms.
const height = Math.ceil(Math.sqrt(numberOfRooms)) * 2;
const width = Math.ceil(Math.sqrt(numberOfRooms)) * 2;

// Characters that correspond to the types of rooms (starting room counts as an active room).
const inactiveRoom = "-";
const activeRoom = "O";
const startingRoom = "$";

// Print for debugging purposes.
document.write("Number of Rooms:  " + numberOfRooms + "<br>" +
               "Width:  " + width + "<br>" +
               "Height:  " + height + "<br><br>" +
               "$ = Starting Position<br>" +
               "O = Active Room<br>" +
               "- = Inactive Room<br><br>");



// Make a 2D array to represent the rooms of the level.
var level = new Array(height);
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
var roomCount = 1;

// Generate rooms until desired number reached.
while (roomCount < numberOfRooms)
{
    // Pick a random room.
    var pick = pickRoom();
    
    // If there is an inactive room adjacent to this randomly picked room...
    if(pickNextRoom(pick))
    {
        roomCount++;
    }
}

// Draw the level.
drawLevel();









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
            if(level[r][c] == activeRoom || level[r][c] == startingRoom)
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
                openSides += startingRoom;
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
        
        var pickedSide = openSides.substring(chooseSide-1, chooseSide);
        if (pickedSide == "N")
        {
            level[pr-1][pc] = activeRoom
        }
        else if (pickedSide == startingRoom)
        {
            level[pr+1][pc] = activeRoom
        }
        else if (pickedSide == "E")
        {
            level[pr][pc+1] = activeRoom
        }
        else if (pickedSide == "W")
        {
            level[pr][pc-1] = activeRoom
        }
        
        return true;
    }
    
    return false;
}

// Ghetto text representation of the level.
function drawLevel()
{
    // Use Consolas, a fixed-width font.
    document.write("<font face=\"Consolas\">");
    
    // For each row of the level...
    for (var r = 0; r < height; r++)
    {
        // Print the row and then a line break.
        document.write(level[r].join(" ") + "<br>");
    }
    
    // Close tag for the Consolas font.
    document.write("</font>");
}




