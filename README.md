# Find Your Hat 
### Codecademy Challenege Project from Full Stack Engineering Course
> This project involves the use of Javascript to create a maze run with node.js.

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
<!-- * [Screenshots](#screenshots) -->
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
<!-- * [Room for Improvement](#room-for-improvement) -->
* [Acknowledgements](#acknowledgements)
<!-- * [Contact](#contact) -->
<!-- * [License](#license) -->


## General Information
- an in-terminal maze game run with Node
- to challenge my Javascript knowledge and use of Node
- practice building Javascript classes and problem-solving

## Technologies Used
- Javascript
- Node.js


## Features
List the ready features here:
- traverse a premade smaze to find your hat
- create your own maze 


<!-- ## Screenshots
![Example screenshot](./img/screenshot.png) -->


## Setup
What are the project requirements/dependencies? Where are they listed? A requirements.txt or a Pipfile.lock file perhaps? Where is it located?

Proceed to describe how to install / setup one's local environment / get started with the project.


## Usage
 Find Your Hat runs with Node. A 2d array is used to play the game.
 You can use a the static method, generateField(width, height, percentHoles), to have a field generated. This creates a field with the desired width and height, as well as how many holes you cant the field to have. If you land on a hole, it's game over!
 
Create a new instance of the static method generateField. Example: * const newGameBoard = Field.generateField(5, 5, 30); *
Create a new instance of the class Field, passing in the variable storing the field you generated. Example: * const gameTime = new Field(newGameBoard); *
Run the playGame method. Example: * * gameTime.playGame(); * *


## Project Status
Project is: _in progress_


<!-- ## Room for Improvement
Include areas you believe need improvement / could be improved. Also add TODOs for future development.

Room for improvement:
- Improvement to be done 1
- Improvement to be done 2

To do:
- Feature to be added 1
- Feature to be added 2 -->


## Acknowledgements
- README inspired by [@flynerdpl](https://www.flynerd.pl/)



<!-- ## Contact
Created by [@flynerdpl](https://www.flynerd.pl/) - feel free to contact me! -->

<!-- ## License -->
<!-- This project is open source and available under the [... License](). -->
