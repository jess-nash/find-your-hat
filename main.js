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

  updateFieldArray(x, y) {
    if (y >= this.height || y < 0) {
      currentlyPlaying = false;
    } else {
      this.field[y][x] = pathCharacter;
    }
  }

  static generateField(height, width, percentageHoles) {
    // This method should at least take arguments for height and width of the field, and it should return a randomized two-dimensional array representing the field with a hat and one or more holes.
    return new Field([])
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
function updateLocation(field) {
  const userInput = prompt('Which way? ');
  let currentLocation = field.field[posY][posX];

  if (userInput === 'u' && currentLocation !== fieldCharacter || userInput === 'l' && currentLocation !== fieldCharacter) {
    console.log("Out of bounds instructions. Try again.");
    currentlyPlaying = false;
  }

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

    updateLocation(field);

    if (posY >= field.height || posX >= field.width) {
      console.log("Out of bounds instructions. Try again.")
      currentlyPlaying = false;
    } else {
      let newLocation = field.field[posY][posX];
      getStatus(newLocation);
    }

    //update the field with the user's new move
    field.updateFieldArray(posX, posY);
  }
}

const myField = new Field([
  ['*', '░', '░'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

playGame(myField);
