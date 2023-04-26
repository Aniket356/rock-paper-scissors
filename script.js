/* 

1) get a random choice from the computer
2) get a choice from the user
3) rock beats scissor; scissor beats paper; paper beats rock
4) determine if the player lost or won

*/

const randomNumber = Math.floor(Math.random() * 3) + 1;

let computerSelection;

if(randomNumber === 1){
    computerSelection = "rock";
}
if(randomNumber === 2){
    computerSelection = "paper";
}
if(randomNumber === 3){
    computerSelection = "scissors";
}

let userSelection = prompt("Enter your move [rock, paper or scissors]").toLowerCase();

while(userSelection !== "rock" && userSelection !== "paper" && userSelection !== "scissors"){
    userSelection = prompt("Please enter you choice again [rock, paper or scissors]")
}
