rockBtn = document.getElementById('rockBtn');
paperBtn = document.getElementById('paperBtn');
scissorBtn = document.getElementById('scissorBtn');
playerDisplay = document.getElementById('playerDisplay');
computerDisplay = document.getElementById('computerDisplay');
resultDisplay = document.getElementById('resultDisplay');
playerScore = document.getElementById('playerScore');
computerScore = document.getElementById('computerScore');

rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorBtn.addEventListener('click', () => playGame('scissor'));

const choices = ['rock', 'paper', 'scissor'];
const computerWin = "COMPUTER WIN";
const userWin = "USER WIN"
let userCount = 0;
let computerCount = 0;

function playGame(user) {
    computerChoice = getcomputerChoice();
    playerDisplay.textContent = `PLAYER:${user}`
    computerDisplay.textContent = `COMPUTER:${computerChoice}`

    if (user === computerChoice) {
        resultDisplay.textContent = "ITS A TIE";
    }
    else {
        if (user === 'rock') {
            if (computerChoice === 'paper') {
                resultDisplay.textContent = computerWin;
                computerCount++;
            }
            else {
                resultDisplay.textContent = userWin;
                userCount++;
            }
        }
        else if (user === 'paper') {
            if (computerChoice === 'scissor') {
                resultDisplay.textContent = computerWin;
                computerCount++;

            }
            else {
                resultDisplay.textContent = userWin;
                userCount++;

            }
        }
        else if (user === 'scissor') {
            if (computerChoice === 'rock') {
                resultDisplay.textContent = computerWin;
                computerCount++;
            }
            else {
                resultDisplay.textContent = userWin;
                userCount++;

            }
        }

    }

    playerScore.textContent = `Player Score ${userCount}`;
    computerScore.textContent = `Computer Score ${computerCount}`;
    resultDisplay.classList.remove('greenText','redText');

    switch (resultDisplay.textContent) {
        case computerWin:
            resultDisplay.classList.add('redText');
            break;
        case userWin:
            resultDisplay.classList.add('greenText');

    }

};

function getcomputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}