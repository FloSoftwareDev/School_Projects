console.log("JavaScript file loaded!");

// Variables to store room and game state
let currentRoom = 0;
let inventory = [];
const rooms = [
    {
        title: "Room 1",
        description: "You are in a dark room. There's a door to the north that is locked and a door to the east that is not. On the table is a key, which door would that open? It doesnt work on the locked door in this room. You store the key in your inventory.",
        objective: "Find the locked door!",
        puzzleSolved: false
    },
    {
        title: "Room 2",
        description: "You are in a brightly lit room. There’s a door to the south and a locked box.",
        objective: "Solve the puzzle to unlock the box.",
        puzzleSolved: false
    },
    {
        title: "Room 3",
        description: "You have found the final room with an exit door.",
        objective: "Escape!",
        puzzleSolved: false
    }
];

// Update the room display
function updateRoom() {
    document.getElementById("room-title").textContent = rooms[currentRoom].title;
    document.getElementById("room-description").textContent = rooms[currentRoom].description;
    document.getElementById("objective").textContent = `Objective: ${rooms[currentRoom].objective}`;
    
    updateInventory();
}

// Move between rooms
function move(direction) {
    if (direction === 'north' && currentRoom === 0) {
        currentRoom = 1;
    } else if (direction === 'south' && currentRoom === 1) {
        currentRoom = 0;
    } else if (direction === 'north' && currentRoom === 1 && rooms[1].puzzleSolved) {
        currentRoom = 2;
    } else {
        alert("You can't go that way!");
    }
    updateRoom();
}
// Update inventory
function updateInventory() {
    document.getElementById("inventory-items").textContent = inventory.length > 0 ? inventory.join(", ") : "None";
}

// Solve objectives
function solveObjective() {
    if (currentRoom === 0 && !rooms[0].puzzleSolved) {
        alert("You found a key!");
        inventory.push("Key");
        rooms[0].puzzleSolved = true;
        updateRoom();
    } else if (currentRoom === 1 && inventory.includes("Key") && !rooms[1].puzzleSolved) {
        alert("You unlocked the box and found a map!");
        inventory.push("Map");
        rooms[1].puzzleSolved = true;
        updateRoom();
    } else if (currentRoom === 2 && inventory.includes("Map") && !rooms[2].puzzleSolved) {
        alert("You used the map to escape! You win!");
        rooms[2].puzzleSolved = true;
        updateRoom();
    } else {
        alert("There's nothing to solve here.");
    }
}

// Set up arrow buttons
document.getElementById("north-arrow").addEventListener("click", () => {
    console.log("North arrow clicked!");
    move('north');
});

document.getElementById("south-arrow").addEventListener("click", () => {
    console.log("South arrow clicked!");
    move('south');
});

document.getElementById("west-arrow").addEventListener("click", () => {
    console.log("West arrow clicked!");
    solveObjective();
});

document.getElementById("east-arrow").addEventListener("click", () => {
    console.log("East arrow clicked!");
    solveObjective();
});


// Initialize game
updateRoom();
