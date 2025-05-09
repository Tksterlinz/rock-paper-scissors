function getComputerChoice(){
  const randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice(){
  const userInput = prompt("Enter your choice(rock, paper or scissors):");
  return userInput.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
  const player = humanChoice.toLowerCase();


  if (player === computerChoice) {
    console.log("Its a tie");
  } else if (player === "rock" && computerChoice === "scissors" ||
    player === "paper" && computerChoice === "rock" ||
    player === "scissors" && computerChoice === "paper") 
  {
      console.log(`You WIN! ${player} beats ${computerChoice}`);
      humanScore++;
  } else {
    console.log(`You LOSE! ${computerChoice} beats ${player}`);
    computerScore++;
  }
      

  console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);