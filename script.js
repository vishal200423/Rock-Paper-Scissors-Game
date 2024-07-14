// Get the buttons, result element, and score elements
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultElement = document.querySelector('.result');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const restartBtn = document.getElementById('restart');

// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Function to generate a random choice (rock, paper, or scissors)
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Tie!';
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
               (userChoice === 'paper' && computerChoice === 'rock') ||
               (userChoice === 'scissors' && computerChoice === 'paper')) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

// Function to update scores
function updateScores(winner) {
    if (winner === 'You win!') {
        playerScore++;
    } else if (winner === 'Computer wins!') {
        computerScore++;
    }
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    checkForWin();
}

// Function to check for win condition
function checkForWin() {
    if (playerScore >= 3) {
        resultElement.textContent = 'You win the game!';
        disableButtons();
        restartBtn.style.display = 'block';
    } else if (computerScore >= 3) {
        resultElement.textContent = 'Computer wins the game!';
        disableButtons();
        restartBtn.style.display = 'block';
    }
}

// Function to disable buttons
function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

// Function to enable buttons
function enableButtons() {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}

// Function to restart the game
function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    resultElement.textContent = '';
    enableButtons();
    restartBtn.style.display = 'none';
}

// Add event listeners to the buttons
rockBtn.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('rock', computerChoice);
    resultElement.textContent = `You chose rock. Computer chose ${computerChoice}. ${result}`;
    updateScores(result);
});

paperBtn.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('paper', computerChoice);
    resultElement.textContent = `You chose paper. Computer chose ${computerChoice}. ${result}`;
    updateScores(result);
});

scissorsBtn.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner('scissors', computerChoice);
    resultElement.textContent = `You chose scissors. Computer chose ${computerChoice}. ${result}`;
    updateScores(result);
});

// Add event listener for restart button
restartBtn.addEventListener('click', restartGame);