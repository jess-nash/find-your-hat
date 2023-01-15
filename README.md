# Find Your Hat 
### Codecademy Challenege Project from Full Stack Engineering Course
> This project involves the use of Javascript to create a maze run with node.js.

![find-your-hat-demo](https://user-images.githubusercontent.com/97200803/212532746-452c026b-611d-430f-9546-ef51fb012c6c.gif)


## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Usage](#usage)
* [Project Status](#project-status)
* [Acknowledgements](#acknowledgements)


## General Information
- an in-terminal maze game run with Node
- to challenge my Javascript knowledge and use of Node
- practice building Javascript classes and problem-solving


## Technologies Used
- Javascript
- Node.js


## Usage
You can fork this repository. In the project's directory, run
### `node main.js` 
to start the game.

 - Find Your Hat runs with Node!
 - A 2d array is used to play the game.
 - You can use a the static method, generateField(width, height, percentHoles), to have a field generated. 
 - This creates a field with the desired width and height, as well as how many holes you cant the field to have. 
 - If you land on a hole, it's game over!
 
Create a new instance of the static method generateField. Example: * const newGameBoard = Field.generateField(5, 5, 30); *
Create a new instance of the class Field, passing in the variable storing the field you generated. Example: * const gameTime = new Field(newGameBoard); *
Run the playGame method. Example: * * gameTime.playGame(); * *


## Project Status
Project is: in progress


## Acknowledgements
- README inspired by [@flynerdpl](https://www.flynerd.pl/)
