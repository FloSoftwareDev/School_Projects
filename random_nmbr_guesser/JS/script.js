let randomNumber;
let attempts = 0;
const maxAttempts = 10;
let wins = 0;
let losses = 0;
let forfeits = 0;

const guessButton = document.getElementById('guessButton');
const guessInput = document.getElementById('guessInput');
const messageElement = document.getElementById('message');
const guessCountElement = document.getElementById('guessCount');
const winsElement = document.getElementById('wins');
const lossesElement = document.getElementById('losses');
const forfeitsElement = document.getElementById('forfeits');
const resetButton = document.getElementById('resetButton');
const difficultySelect = document.getElementById('difficulty');

function getDifficultyRange() {
    return parseInt(difficultySelect.value, 10);
}

function generateRandomNumber() {
    const range = getDifficultyRange();
    return Math.floor(Math.random() * range) + 1;
}

function checkGuess() {
    const userGuess = parseInt(guessInput.value, 10);
    attempts++;
    guessCountElement.textContent = `Number of guesses: ${attempts}`;

    if (userGuess > randomNumber) {
        messageElement.textContent = "Your guess is too high!";
        messageElement.style.color = 'red';
    } else if (userGuess < randomNumber) {
        messageElement.textContent = "Your guess is too low!";
        messageElement.style.color = 'red';
    } else {
        messageElement.textContent = "Congratulations! You've guessed the correct number!";
        messageElement.style.color = 'green';
        guessButton.disabled = true;
        wins++;
        updateScoreboard();
        alert(`Congratulations! You've guessed the correct number! It took you ${attempts} attempts.`);
        resetGame();
        return;
    }

    if (attempts >= maxAttempts) {
        messageElement.textContent = `Game over! The correct number was ${randomNumber}.`;
        guessButton.disabled = true;
        losses++;
        updateScoreboard();
        alert(`Game over! The correct number was ${randomNumber}.`);
        resetGame();
    }
}

function updateScoreboard() {
    winsElement.textContent = `Wins: ${wins}`;
    lossesElement.textContent = `Losses: ${losses}`;
    forfeitsElement.textContent = `Forfeits: ${forfeits}`;
}

    randomNumber = generateRandomNumber();
    attempts = 0;
    guessCountElement.textContent = 'Number of guesses: 0';
    guessInput.value = 1;
    guessButton.disabled = false;
    messageElement.textContent = '';
    updateScoreboard();
}

function initializeGame() {
    randomNumber = generateRandomNumber();
    updateScoreboard();
}

guessButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', resetGame);
difficultySelect.addEventListener('change', function() {
    resetGame();
    initializeGame();
});

initializeGame();
