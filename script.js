const maxChoices = 3;
let playerWins = 0;
let computerWins = 0;

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * maxChoices);
    switch(randomNumber){
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


function getPlayerChoice(){
    let valid = false;
    while(valid === false){
        let playerInput = prompt("Let's play Rock Paper Scissors! What is your chioce?");
        playerInput = playerInput.toLowerCase();

        if(playerInput === 'rock'){
            valid = true;
            return 'rock';
        }
        else if(playerInput === 'paper'){
            valid = true;
            return 'paper';
        }
        else if(playerInput === 'scissors'){
            valid = true;
            return 'scissors';
        }
        else{
            //Continue prompting for 
            console.log("Error. Please choose a valid option...");
        }
    }
    


}


function playRound(){
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    if(computerChoice === playerChoice){
        return "It's a tie!";
    }
    else if(computerChoice === 'rock'){
        if(playerChoice === 'paper'){
            playerWins++;
            return "You win!";
        }
        else if(playerChoice === 'scissors'){
            computerWins++;
            return "You lose!";
        }
        else{
            return "Error";
        }
    }
    else if(computerChoice === 'paper'){
        if(playerChoice === 'scissors'){
            playerWins++;
            return "You win!";
        }
        else if(playerChoice === 'rock'){
            computerWins++;
            return "You lose!";
        }
        else{
            return "Error";
        }
    }
    else if(computerChoice === 'scissors'){
        if(playerChoice === 'rock'){
            playerWins++;
            return "You win!";
        }
        else if(playerChoice === 'paper'){
            computerWins++;
            return "You lose!";
        }
        else{
            return "Error";
        }
    }
    else{
        return "Error";
    }
}


while((playerWins - computerWins) < 2 && (computerWins - playerWins) < 2){
    console.log(playRound());
    console.log("Player wins: "+playerWins);
    console.log("Computer wins: "+computerWins);
}


if(computerWins>playerWins){
    console.log("Computer is the ultimate winner!");
}
else if(playerWins>computerWins){
    console.log("You are the ultimate winner!");
}
else{
    console.log("Error");
}
