const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

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

  }

  static generateField(height, width) {
    // This method should at least take arguments for height and width of the field, and it should return a randomized two-dimensional array representing the field with a hat and one or more holes. In our solution, we added a third percentage argument used to determine what percent of the field should be covered in holes.

    // As you build .generateField(), think about edge cases to avoid. What if the hat is placed at the same point as the player should start (field[0][0])?
  }
}


// Think about breaking down the necessary functionality into helper methods. In our solution, we approached this problem by creating:
// --Methods to test whether the current location results in win (user is on the hat) or a loss (user is on a hole or out-of-bounds).
// --A method to handle asking and accepting user input, and updating the current location.
// --A method to run the main game loop until the game is won or lost.
  // --Wins by finding their hat.
  // --Loses by landing on (and falling in) a hole.
  // --Attempts to move “outside” the field.
  // When any of the above occur, let the user know and end the game.



function playGame(field) {
  let gameOver = false
  let status = '';

  let rowIndex = 0;
  let columnIndex = 0;

  while (!gameOver) {
    field.print();

    const userInput = prompt('Which way?');

    if (userInput === 'u') {
      columnIndex--
    } else if (userInput === 'd') {
      columnIndex++
    }

    if (userInput === 'l') {
      rowIndex--
    } else if (userInput === 'r') {
      rowIndex++
    }

    //update the field with the user's new move
    // field.updateFieldArray(rowIndex, columnIndex);

    console.log("Your new position: " + field.field[columnIndex][rowIndex]);


    if (field.field[columnIndex][rowIndex] === '^') {
      status = 'win';
    } else if (field.field[columnIndex][rowIndex] === 'O') {
      status = 'fall';
    }
  }

  //thing to do once it's gameOver
  switch (status) {
    case 'win': console.log("Congrats! You found your hat. 🎩")
    case 'fall': console.log("Ooops! You fell in a hole! O_O'")
    case 'outbound': console.log("Out of bounds instructions. Try again.")
  }
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

playGame(myField);
