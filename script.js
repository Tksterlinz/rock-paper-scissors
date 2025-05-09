function playGame(){
  // Step 4: Declare score variables inside playGame
  let humanScore = 0;
  let computerScore = 0;

  // Step 2: Computer choice logic
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

  // Step 3: Human choice logic
  function getHumanChoice(){
    const userInput = prompt("Enter your choice(rock, paper or scissors):");
    return userInput.toLowerCase();
  }

  // Step 5: Play a single round and update scores
  function playRound(humanChoice, computerChoice){
  const player = humanChoice.toLowerCase();


  if (player === computerChoice) {
    console.log("Its a tie");
  } else if (
    (player === "rock" && computerChoice === "scissors") ||
    (player === "paper" && computerChoice === "rock") ||
    (player === "scissors" && computerChoice === "paper")
  ) {
      console.log(`You WIN! ${player} beats ${computerChoice}`);
      humanScore++;
  } else {
    console.log(`You LOSE! ${computerChoice} beats ${player}`);
    computerScore++;
  }
      
  console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
}
 
// Step 6: Play 5 rounds
for (let round = 1; round <= 5; round++) {
  console.log(`n--- Round ${round} ---`);
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

// Declare the final winner
console.log("\n--- Game Over ---");
if (humanScore > computerScore){
  console.log("You won the game!");
} else if (computerScore > humanScore){
  console.log("You lost the game!");
} else {
  console.log("It's a tie game!");
}
}

//Run the full game
playGame();


