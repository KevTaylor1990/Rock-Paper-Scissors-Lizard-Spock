var computerChoiceDisplay = document.getElementById("computer-choice");
var yourChoiceDisplay = document.getElementById("your-choice");
var resultsDisplay = document.getElementById("results");
var choices = document.querySelectorAll("button");

var yourChoice;
var computersChoice;
var results;

choices.forEach(choices => choices.addEventListener('click', (e) => {
    yourChoice = e.target.id;
    yourChoiceDisplay.innerHTML = yourChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 5) +1;

    if (randomNumber === 1); {
        computersChoice = "Rock";
    } if (randomNumber === 2) {
        computersChoice = "Paper";
    } else if (randomNumber === 3) {
        computersChoice = "Scissors";
    } else if (randomNumber === 4) {
        computersChoice = "Lizard";
    } else if (randomNumber === 5); {
        computersChoice = "Spock";
    }

    computerChoiceDisplay.innerHTML = computersChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
      result = 'its a draw!'
    } else if (computerChoice === 'rock' && yourChoice === "paper") {
      result = 'you win!'
    } else if (computerChoice === 'rock' && yourChoice === "spock") {
        result = 'you win!'
    }  else if (computerChoice === 'scissors' && yourChoice === "spock") {
        result = 'you win!'
    }  else if (computerChoice === 'scissors' && yourChoice === "rock") {
        result = 'you win!'
    }  else if (computerChoice === 'paper' && yourChoice === "lizard") {
        result = 'you win!'
    }  else if (computerChoice === 'paper' && yourChoice === "scissors") {
        result = 'you win!'
    }  else if (computerChoice === 'lizard' && yourChoice === "rock") {
        result = 'you win!'
    }  else if (computerChoice === 'lizard' && yourChoice === "scissors") {
        result = 'you win!'
    }  else if (computerChoice === 'spock' && yourChoice === "lizard") {
        result = 'you win!'
    }  else if (computerChoice === 'spock' && yourChoice === "paper") {
        result = 'you win!'
    }
}