function userWins(computerSelection, userSelection){
    //returns true if user wins else false
    if((computerSelection === "rock" && userSelection === "scissors") || (computerSelection === "paper" && userSelection == "rock") || (computerSelection === "scissors" && userSelection === "paper")){
        return false;
    }
    else if((computerSelection === "rock" && userSelection === "paper") || (computerSelection === "paper" && userSelection === "scissors") || (computerSelection === "scissors" && userSelection === "rock")){
        return true
    }
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    // 1 is rock; 2 is paper and 3 is scissors
    if(randomNumber === 1){
        return "rock"
    }
    if(randomNumber === 2){
        return "paper"
    }
    if(randomNumber === 3){
        return "scissors";
    }
}

let userWinCount = 0;
let computerWinCount = 0;

const userScore = document.querySelector('#user_score');
const computerScore = document.querySelector('#computer_score')

const selection = document.createElement('p');
const winner = document.createElement('p');

const buttons = document.querySelectorAll('.buttons>button');
buttons.forEach(button => {
    button.addEventListener('click', function(){

        //remove the winner text content if there is any after starting a new game
        winner.textContent = '';

        const userSelection = this.id;
        const computerSelection = getComputerChoice();

        if(userSelection === computerSelection){
            selection.textContent = "It's a tie."
        }
        else if(userWins(computerSelection, userSelection)){
            userWinCount++;
            selection.textContent = `Computer chose ${computerSelection}, you won.`
        }
        else{
            computerWinCount++;
            selection.textContent = `Computer chose ${computerSelection}, you lost`;
        }

        //show to the user what the computer selected and if they won or lost
        document.querySelector('.selections').appendChild(selection);

        //display the score
        userScore.innerHTML = `<b>Your score: </b>${userWinCount}`;
        computerScore.innerHTML = `<b>Computer's score: </b>${computerWinCount}`;

        //first to 5 points wins
        if(userWinCount === 5 || computerWinCount === 5){
            
            winner.textContent = userWinCount === 5 ? "You won 5 matches! You won the game!!" : "Computer won 5 matches! You lost the game.";
            
            //reset the counts and show to user who won
            userWinCount = 0;
            computerWinCount = 0;
            document.querySelector('.results').appendChild(winner);
        }
    })
})