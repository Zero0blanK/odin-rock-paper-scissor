let humanScore = 0;
let computerScore = 0;

playGame();

function playGame(){
    let i = 0;
    while(i < 5){
        let human = getHumanChoice();
        let computer = getComputerChoice();
        playRound(human, computer);
        i++
    }
    result = () => {
        if (humanScore == computerScore) {
            console.log(`It's a TIE\nHuman Score: ${humanScore} | Computer Score: ${computerScore}`);
        }
        else{
            let winner = humanScore > computerScore ? `Congrats! You've won\nHuman Score: ${humanScore} | Computer Score: ${computerScore}` : `You've lost, what a loser!\nHuman Score: ${humanScore} | Computer Score: ${computerScore}`;
            console.log(winner);
        }
    }
}   

function playRound(humanChoice, computerChoice){
    if (computerChoice == 'rock' && humanChoice == 'scissor' 
            || computerChoice == 'paper' && humanChoice == 'rock' 
            || computerChoice == 'scissor' && humanChoice == 'paper'){

        console.log(`You lose! [computer] ${computerChoice} beats [human] ${humanChoice}`);
        computerScore += 1;
    }
    else if (humanChoice == 'rock' && computerChoice == 'scissor' 
                || humanChoice == 'paper' && computerChoice == 'rock' 
                || humanChoice == 'scissor' && computerChoice == 'paper'){

        console.log(`You won! [human] ${humanChoice} beats [computer] ${computerChoice}`);
        humanScore += 1;
    }
    else{
        computerScore += 1;
        humanScore += 1;
        console.log(`It's a TIE! [human] ${humanChoice} is equal to [computer] ${computerChoice}`);
    }
    
}

function getComputerChoice(){
    const random = Math.floor(Math.random()*3 + 1);
    if (random == 1) return 'rock';
    if (random == 2) return 'scissor';
    if (random == 3) return 'paper';
}

function getHumanChoice(){
    const choice = window.prompt("Rock, Paper, or Scissor?").toLowerCase()
    if (choice === 'rock') return 'rock';
    if (choice === 'paper') return 'paper';
    if (choice === 'scissor') return 'scissor';
}