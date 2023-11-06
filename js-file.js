const container = document.querySelector('#container');
const resultsContent = document.createElement('p');
container.appendChild(resultsContent);

const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click', () => {
    playerSelection = "rock"
    gameRPS();
});
const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', () => {
    playerSelection = "paper"
    gameRPS();
});
const btnScissor = document.querySelector('#btnScissor');
btnScissor.addEventListener('click', () => {
    playerSelection = "scissors"
    gameRPS();
});


let timesWon = 0;
let timesCompWon = 0;
    function getComputerChoice(){
        return Math.floor(Math.random()*3);
    }
    function playRound(playerSelection,computerSelection) {
     
     playerSelection = playerSelection.toUpperCase();
     if (playerSelection === 'ROCK'|| playerSelection === "PAPER"||playerSelection == "SCISSORS"){
        if (computerSelection == 0 && playerSelection == "ROCK"){
            resultsContent.textContent = "Tie";
        } else if (computerSelection == 0 && playerSelection == "PAPER"){
            resultsContent.textContent = "Loss";
            return timesCompWon++;
        } else if (computerSelection == 1 && playerSelection == "PAPER"){
            resultsContent.textContent = "Tie";
        } else if (computerSelection == 1 && playerSelection == "SCISSORS"){
            resultsContent.textContent = "Loss";
            return timesCompWon++;
        } else if (computerSelection == 2 && playerSelection == "SCISSORS"){
            resultsContent.textContent = "Tie";
        } else if (computerSelection == 2 && playerSelection == "ROCK"){
            resultsContent.textContent = "Loss";
            return timesCompWon++;
        } else {    
            resultsContent.textContent = "Won";

            return timesWon++;
        }
    }
    }
    function gameRPS(){
            computerSelection = getComputerChoice();
            playRound(playerSelection,computerSelection);
            resultsContent.textContent += ("You have won "+timesWon+ " times.");
            resultsContent.textContent += ("The Computer has won "+timesCompWon+ " times.");
            if(timesWon == 5){
                alert("You won!");
                timesWon = 0;
                timesCompWon = 0;
            } else if (timesCompWon == 5){
                alert("Computer Won!");
                timesWon = 0;
                timesCompWon = 0;
            }

    }


