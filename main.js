// function Shape(name, sides, sideLength) {
//     this.name = name;
//     this.sides = sides;
//     this.sideLength = sideLength;
// }

// // Write your code below here

// Shape.prototype.calcPerimeter = function(){
//     console.log(this.sides + this.sideLength)
// }

// const square = new Shape('square',4,5)

// square.calcPerimeter()

// const triangle = new Shape('triangle',3,3)

// triangle.calcPerimeter()

class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    console.log(this.sides + this.sideLength);
  }
}

const firstShape = new Shape("square", 4, 5);

firstShape.calcPerimeter();

const secondShape = new Shape("triangle", 3, 3);

secondShape.calcPerimeter();


//ROCK, PAPER, SCISSOR GAME

function personChoice() {
  const personInput = this.attributes[1].textContent;
  console.log(personInput);
}

computerChoice();

function computerChoice() {
  const choices = ["rock", "paper", "scissors"];

  const choicesIndex = Math.floor(Math.random() * choices.length);

  console.log(choicesIndex);
}