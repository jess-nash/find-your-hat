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
    console.log(field.join())
  }
}

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);
