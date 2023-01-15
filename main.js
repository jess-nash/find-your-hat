const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

let currentlyPlaying = true;

let posX = 0;
let posY = 0;

class Field {
  constructor(field) {
    this.field = field
    this.height = this.field.length;
    this.width = this.field[0].length
  }

  print() {
    console.log(this.field.map(a=>a.join("")).join("\n"))
  }

  updateFieldArray(row, col) {
    this.field[col][row] = pathCharacter;
  }

  static generateField(height, width) {
    // This method should at least take arguments for height and width of the field, and it should return a randomized two-dimensional array representing the field with a hat and one or more holes. In our solution, we added a third percentage argument used to determine what percent of the field should be covered in holes.

    // As you build .generateField(), think about edge cases to avoid. What if the hat is placed at the same point as the player should start (field[0][0])?
  }
}


// --Methods to test whether the current location results in win (user is on the hat) or a loss (user is on a hole or out-of-bounds).
function getStatus(location){
  if (location === hat) {
    console.log("Congrats! You found your hat. 🎩");
    currentlyPlaying = false;
  } else if (location === hole) {
    console.log("Ooops! You fell in a hole! O_O'");
    currentlyPlaying = false;
  }
}

// --A method to handle asking and accepting user input, and updating the current location.
function updateLocation() {
  const userInput = prompt('Which way? ');

  switch (userInput) {
    case 'u': posY--;
    case 'd': posY++;
    case 'l': posX--;
    case 'r': posX++;
    break
    default: console.log("Out of bounds instructions. Try again.");
  }
}

// --A method to run the main game loop until the game is won or lost.
function playGame(field) {
  const instructions = "Find your hat by moving around! \n Left - l \n Right - r \n Up - u \n Down - d \n"
  console.log(instructions)

  while (currentlyPlaying) {
    field.print();

    updateLocation();

    // if the new location is the same as the old location(current location), then it's out of bounds

    let currentLocation = field.field[posY][posX];
    getStatus(currentLocation);

    //update the field with the user's new move
    field.updateFieldArray(posX, posY);
  }
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

playGame(myField);
