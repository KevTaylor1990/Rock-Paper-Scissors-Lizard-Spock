document.addEventListener ("DOMContentLoaded", function{
    let buttons = this.getElementById('button');
})

buttons.addEventListener('click')

let gameRules = {
    Rock: {
        Rock: 'Draw',
        Paper: 'Lose',
        Scissors: 'Win',
        Lizard: 'Win',
        Spock: 'Lose'
    },

    Paper: {
        Rock: 'Win',
        Paper: 'Draw',
        Scissors: 'Lose',
        Lizard: 'Lose',
        Spock: 'Win'
    },

    Scissors:{
        Rock: 'Lose',
        Paper: 'Win',
        Scissors: 'Draw',
        Lizard: 'win',
        Spock: 'Lose'
    },

    Lizard: {
        Rock: 'Lose',
        Paper: 'Win',
        Scissors: 'Lose',
        Lizard: 'Draw',
        Spock: 'Win'
    },

    Spock: {
        Rock: 'Lose',
        Paper: 'Win',
        Scissors: 'Lose',
        Lizard: 'Lose',
        Spock: 'Draw'
    },
}

function runGame {

};

function displayYourChoice {



};

function displayComputerChoice {

};

function displayYourScore {

};

function displayComputerScore{

};

function displayResults {

};