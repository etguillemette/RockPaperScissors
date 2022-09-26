const maxChoices = 3;
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * maxChoices);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors'
            break;
        default:
            return 'error';
            break;
    }
}


function updateResult(resultStr){
    const output = document.querySelector('.output');
    output.textContent = resultStr;
}

function playRound(playerChoice) {
    
    let computerChoice = getComputerChoice();

    if (computerChoice === playerChoice) {
        return "It's a tie!";
    }
    else if (computerChoice === 'rock') {
        if (playerChoice === 'paper') {
            playerWins++;
            return "You win!";
        }
        else if (playerChoice === 'scissors') {
            computerWins++;
            return "You lose!";
        }
        else {
            return "Error";
        }
    }
    else if (computerChoice === 'paper') {
        if (playerChoice === 'scissors') {
            playerWins++;
            return "You win!";
        }
        else if (playerChoice === 'rock') {
            computerWins++;
            return "You lose!";
        }
        else {
            return "Error";
        }
    }
    else if (computerChoice === 'scissors') {
        if (playerChoice === 'rock') {
            playerWins++;
            return "You win!";
        }
        else if (playerChoice === 'paper') {
            computerWins++;
            return "You lose!";
        }
        else {
            return "Error";
        }
    }
    else {
        return "Error";
    }
}

//const choices = document.querySelectorAll('.choice');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click',function() {updateResult(playRound('rock'));});
paper.addEventListener('click',function() {updateResult(playRound('paper'));});
scissors.addEventListener('click',function() {updateResult(playRound('scissors'));});





