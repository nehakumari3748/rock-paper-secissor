const choices = ['rock', 'paper', 'scissors'];
const playerChoiceText = document.getElementById('player-choice');
const computerChoiceText = document.getElementById('computer-choice');
const winnerText = document.getElementById('winner');
const messageText = document.getElementById('message');
const resetButton = document.getElementById('reset');
const buttons = document.querySelectorAll('.choice');

const sounds = {
    rock: new Audio('rock-sound.mp3'),
    paper: new Audio('paper-sound.mp3'),
    scissors: new Audio('scissors-sound.mp3'),
    win: new Audio('win-sound.mp3'),
    lose: new Audio('lose-sound.mp3'),
    draw: new Audio('draw-sound.mp3')
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        // Play sound for player's choice
        sounds[playerChoice].play();

        // Display choices
        playerChoiceText.textContent = playerChoice;
        computerChoiceText.textContent = computerChoice;

        // Determine winner
        const result = getWinner(playerChoice, computerChoice);
        winnerText.textContent = result;

        // Play result sound
        if (result === 'You win!') {
            sounds.win.play();
        } else if (result === 'You lose!') {
            sounds.lose.play();
        } else {
            sounds.draw.play();
        }
    });
});

resetButton.addEventListener('click', () => {
    playerChoiceText.textContent = '-';
    computerChoiceText.textContent = '-';
    winnerText.textContent = '-';
    messageText.textContent = 'Make your choice!';
});

function getWinner(player, computer) {
    if (player === computer) {
        return "It's a draw!";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}
