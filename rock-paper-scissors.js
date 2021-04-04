function computerPlay() {
     let rps = Math.random()*10;
     if (rps<3.3) {
        return "Rock"; 
     } else if (rps<6.6) {
         return "Paper";
     } else {
         return "Scissors";
     }
}

function playRound(playerSelection, computerSelection) {

    playerSelectionAdj = playerSelection.toLowerCase();
    
    if (playerSelectionAdj === "rock") {

        if (computerSelection==="Rock") {
           return "It's a tie.";
        } else if (computerSelection==="Scissors") {
           return "You Won! Rock beats Scissors.";
        } else{
           return "You Lose! Paper beats Rock.";
        }

    } else if (playerSelectionAdj==="Scissors") {
        if (computerSelection==="Rock") {
            return "You Lose! Rock beats Scissors.";
        } else if (computerSelection==="Scissors") {
            return "It's a tie.";
        } else {
            return "You Won! Scissors beats Paper.";
        }
    }    
    else {
        if (computerSelection==="Rock") {
            return "You Won! Paper beats Rock.";
        } else if (computerSelection==="Scissors") {
            return "You Lose! Scissors beats Paper.";
        } else {
            return "It's a tie.";
        }
    }
}

 function game() {

     let playerScore=0;
     
     let computerScore=0;

    for (let i = 0; i < 5; i++) {
        
        const playerSelection = prompt("Make your choice! Rock, Paper or Scissors?");
        
        const computerSelection = computerPlay();

        const round = playRound(playerSelection, computerSelection);
        
        if (round.match(/You Won/)) {
            playerScore++;
        } else if (round.match(/You Lose/)) {
            computerScore++;
        } else{
            continue;
        }

    }

    function result () {
        if (playerScore > computerScore) {
            return `Congratz! You won. You: ${playerScore} Computer: ${computerScore}`
        } else if (playerScore < computerScore) {
            return `You Lost! You: ${playerScore} Computer: ${computerScore}`
        } else
            return `It's a tie. You: ${playerScore} Computer: ${computerScore}`
    }

    return result();
 }