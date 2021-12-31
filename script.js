const buttons = document.querySelector(".buttons");
const btn = buttons.querySelectorAll("img");

btn.forEach((button) => {
  button.addEventListener("click", picks);
});
let personScore = 0;
let computerScore = 0;

function picks() {
    document.getElementById("instruction").style.display ='none';
  const personInput = this.attributes[1].textContent;
  const computerOptions = ["rock", "paper", "scissors"];
  const computerChoice = Math.floor(Math.random() * computerOptions.length);
  const computerInput = computerOptions[computerChoice];

  comparePicks(personInput, computerInput);
    updateScore();
    getWinner();
    
}

// IF YOU DECLARE THE SCORE VARIABLES INSIDE THE COMPAREPICKS FUNCTION, 
// EVERYTIME THE FUNCTIONS RUNS I.E EVERYTIME SOMEONE CLICKS THE BUTTONS THE SCORE VARIABLES START AT 0,
// SO IT IS BEST TO DECLARE IT AS A GLOBAL VARIABLE SO WHEN A PLAYER CLICKS THE BUTTONS IT STARTS AT THE LAST NUMBER I.E LAST UPDATED SCORE



function comparePicks(personInput, computerInput) {
  let won;

  if (personInput == "rock" && computerInput == "scissors") {
    won = "You won, rock breaks scissors";
    personScore++;
  }

  if (computerInput == "rock" && personInput == "scissors") {
    won = "The Computer won, rock breaks scissors";
    computerScore++;
  }

  if (personInput == "rock" && computerInput == "rock") {
    won = "It is a tie! You both picked rock";
  }

  if (personInput == "rock" && computerInput == "paper") {
    won = "The Computer won, paper wraps rock";
    computerScore++;
  }

  if (personInput == "paper" && computerInput == "rock") {
    won = "You won, paper wraps rock";
    personScore++;
  }

  if (personInput == "paper" && computerInput == "paper") {
    won = "It is a tie! You both picked paper";
  }
  if (personInput == "paper" && computerInput == "scissors") {
    won = "The Computer won, scissors cuts paper";
    computerScore++;
  }
  if (personInput == "scissors" && computerInput == "scissors") {
    won = "It is a tie! You both picked scissors";
  }
  if (personInput == "scissors" && computerInput == "paper") {
    won = "You won, scissors cuts paper";
    personScore++;
  }
  document.getElementById("won").innerHTML = won;
}

function updateScore() {
  document.getElementById("personScore").innerHTML = personScore;
  document.getElementById("computerScore").innerHTML = computerScore;
}

function getWinner() {
    if (personScore === 5 || computerScore === 5) {
        const winner = personScore === 5 ? 'You won the game' : 'The Computer won this time, you can try again'
        alert(winner)
        personScore = 0;
        computerScore = 0;
        updateScore();
    }
}