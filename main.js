const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this.field = field
  }

  print() {
    // needs to print in columns
    let fieldString = '' //initialize the field string (empty for now)

    for (let i=0; i < this.field.length; i++) {  // iterate through the array of arrays
      this.field[i].forEach(e => fieldString += e);  // iterate through each array to add each element to the field string
      fieldString += '\n'; // \n <-- special characters denoting the start of a new line
    }
    console.log(fieldString);
  }


// Methods to test whether the current location results in win (user is on the hat) or a loss (user is on a hole or out-of-bounds).
// A method to handle asking and accepting user input, and updating the current location.
// A method to run the main game loop until the game is won or lost.
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

myField.print();

const direction = prompt('Which way?');
console.log(`You chose ${direction}`);
