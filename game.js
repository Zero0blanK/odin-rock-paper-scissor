let CScore = 0;
let PScore = 0;

let computerScore = document.getElementById('botScore');
let playerScore = document.getElementById('playerScore');
let result = document.querySelector('#result');

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

computerScore.textContent = CScore;
playerScore.textContent = PScore;


function playRound(humanChoice, computerChoice){
    if (PScore == 5 || CScore ==5){
        return 0;
    }
    const log = document.createElement('div');
    log.classList.add('result-log');

    if (computerChoice == 'rock' && humanChoice == 'scissor' 
            || computerChoice == 'paper' && humanChoice == 'rock' 
            || computerChoice == 'scissor' && humanChoice == 'paper'){

        log.textContent = (`You lose! [computer] ${computerChoice} beats [player] ${humanChoice}`);
        result.appendChild(log);
        CScore++
        computerScore.textContent = CScore;
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissor' 
                || humanChoice == 'paper' && computerChoice == 'rock' 
                || humanChoice == 'scissor' && computerChoice == 'paper'){
        log.textContent = `You won! [player] ${humanChoice} beats [computer] ${computerChoice}`;
        result.appendChild(log);
        PScore++;
        playerScore.textContent = PScore;
    }
    else{
        computerScore.textContent = CScore;
        playerScore.textContent = PScore;
        log.textContent = `It's a TIE! [player] ${humanChoice} is equal to [computer] ${computerChoice}`;
        result.appendChild(log);

    }
    if (PScore == 5 || CScore == 5){
        let winner = PScore > CScore ? `Congrats, You've won!` : `You've lost, what a loser!`;
        result.textContent = winner;
    }
}

function getComputerChoice(){
    const random = Math.floor(Math.random()*3 + 1);
    if (random == 1) return 'rock';
    if (random == 2) return 'scissor';
    if (random == 3) return 'paper';
}

rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
paper.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissor.addEventListener('click', () => playRound('scissor', getComputerChoice()));
