/* 

1) get a random choice from the computer
2) get a choice from the user
3) rock beats scissor; scissor beats paper; paper beats rock
4) determine if the player lost or won

*/

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

function game(){
    let userWinCount = 0;
    let computerWinCount = 0;
    for(let i = 0; i < 5; i++){
        
        const computerSelection = getComputerChoice();
        const userSelection = prompt("Enter your move [rock, paper or scissors]").toLowerCase();
    
        //if choice is invalid, ask again
        while(userSelection !== "rock" && userSelection !== "paper" && userSelection !== "scissors"){
            userSelection = prompt("Please enter you choice again [rock, paper or scissors]")
        }

        if(userSelection === computerSelection){
            console.log("It's a tie");
            continue;
        }
        else if(userWins(computerSelection, userSelection)){
            userWinCount++;
            console.log(`Computer chose ${computerSelection}, you won`);
        }
        else{
            computerWinCount++;
            console.log(`Computer chose ${computerSelection}, you lost`);
        }

        console.log(`Current score: You: ${userWinCount}, Computer: ${computerWinCount}`);
    }
    
    if(userWinCount > computerWinCount){
        console.log(`Congratulations! You won ${userWinCount} matches out of 5. You win!`);
    }
    else if(computerWinCount > userWinCount) {
        console.log(`Sorry... the computer won ${computerWinCount} matches out of 5. You lose.`);
    }
    else{
        console.log("Nobody wins! It's a tie!");
    }

}

game()