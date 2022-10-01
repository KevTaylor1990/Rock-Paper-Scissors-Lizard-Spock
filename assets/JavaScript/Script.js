var computerChoiceDisplay = document.getElementById("computer-choice");
//var yourChoiceDisplay = document.getElementById("your-choice");
var resultsDisplay = document.getElementById("results");
var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

var yourChoice;
var computersChoice;
var results;



//window.onload = function() {
    //for(let i = 0; i < 5; i++) {
        //let choice = document.getElementById('buttons');
       // choice.id = choices[i];
       // choice.addEventListener('click', selectChoice);
    //}
//}

function selectChoice(id) {
    let choice = document.getElementById(id).innerHTML;
    console.log('you clicked a button'+ choice);
}

function generateComputerChoice() {
    let randomNumber = choices[Math.floor(Math.random() * 5) +1];
    document.getElementById('buttons');
    console.log('computer selection');

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
    if (computersChoice === yourChoice) {
      results = 'its a draw!';
    } else if (computersChoice === 'rock' && yourChoice === "paper"); {
      results = 'you win!';
    } if (computersChoice === 'rock' && yourChoice === "spock") {
        results = 'you win!';
    }  else if (computersChoice === 'scissors' && yourChoice === "spock") {
        results = 'you win!';
    }  else if (computersChoice === 'scissors' && yourChoice === "rock") {
        results = 'you win!';
    }  else if (computersChoice === 'paper' && yourChoice === "lizard") {
        results = 'you win!';
    }  else if (computersChoice === 'paper' && yourChoice === "scissors") {
        results = 'you win!';
    }  else if (computersChoice === 'lizard' && yourChoice === "rock") {
        results = 'you win!';
    }  else if (computersChoice === 'lizard' && yourChoice === "scissors") {
        results = 'you win!';
    }  else if (computersChoice === 'spock' && yourChoice === "lizard") {
        results = 'you win!';
    }  else if (computersChoice === 'spock' && yourChoice === "paper") {
        results = 'you win!';
    }  else if (computersChoice === 'rock' && yourChoice === 'scissors'){
        results = 'you lose!';
    }  else if (computersChoice === 'rock' && yourChoice === 'lizard') {
        results = 'you lose!';
    }  else if (computersChoice === 'paper' && yourChoice === 'rock') {
        results = 'you lose!';
    }  else if (computersChoice === 'paper' && yourChoice === 'spock') {
        results = 'you lose!';
    }  else if (computersChoice === 'scissors' && yourChoice === 'lizard') {
        results = 'you lose!';
    }  else if (computersChoice === 'scissors' && yourChoice === 'paper') {
        results = 'you lose!';
    }  else if (computersChoice === 'lizard' && yourChoice === 'paper') {
        results = 'you lose!';
    }  else if (computersChoice === 'lizard' && yourChoice === 'spock') {
        results = 'you lose!';
    }  else if (computersChoice === 'spock' && yourChoice === 'scissors') {
        results = 'you lose!';
    }  else if (computersChoice === 'spock' && yourChoice === 'rock') {
        results = 'you lose!';
    }

    resultsDisplay.innerHTML = results;
}