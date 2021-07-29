let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, compGuess, secretTarget) {
  if (humanGuess === secretTarget) {
    return true;
  } else if (compGuess === secretTarget) {
    return false;
  }
}

function updateScore(winner) {
  if (winner === "human") {
    humanScore += 1;
  }
  computerScore += 1;
}

function advanceRound() {
  currentRoundNumber += 1;
}
