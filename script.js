function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;

    let computerChoice;  

    switch(x) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
    } 
    return computerChoice;
}

function playRound(playerSelection) {
    let cleanPlayerSelection = playerSelection.toLowerCase();

    computerSelection = getComputerChoice();

    if(cleanPlayerSelection == "rock") {
        switch(computerSelection) {
            case "Rock":
                return "No winner! You both chose rock!";
                break;
            case "Paper":
                return "You lose! Paper beats rock!";
                break;
            case "Scissors":
                return "You win! Rock beats scissors!";
                break;
        }
    }

    if(cleanPlayerSelection == "paper") {
        switch(computerSelection) {
            case "Paper":
                return "No winner! You both chose paper!";
                break;
            case "Scissors":
                return "You lose! Scissors beats paper!";
                break;
            case "Rock":
                return "You win! Paper beats rock!";
                break;
        }
    }

    if(cleanPlayerSelection == "scissors") {
        switch(computerSelection) {
            case "Scissors":
                return "No winner! You both chose scissors!";
                break;
            case "Rock":
                return "You lose! Rock beats scissors!";
                break;
            case "Paper":
                return "You win! Scissors beats paper!";
                break;
        }
    }
}

function game() {
    let scoreComputer = 0;
    let scorePlayer = 0;
    let roundCounter = 1;
    for (let i = 0; i < 5; i++) {
        alert(`Runda broj ${roundCounter}`);
        let x = playRound(prompt("Choose between rock, paper or scissors!"));
        alert(x);
        if(x == "You win! Rock beats scissors!" || x == "You win! Paper beats rock!" || x == "You win! Scissors beats paper!") {
            scorePlayer++;
            
        }

        if(x == "You lose! Rock beats scissors!" || x == "You lose! Paper beats rock!" || x == "You lose! Scissors beats paper!") {
            scoreComputer++;
        }

        alert(`Your score - ${scorePlayer}; Computer score - ${scoreComputer}`);
       

        if(roundCounter == 5) {
            if(scorePlayer > scoreComputer) {
                alert("Bravo princeza Emica!");
            }

            else if(scoreComputer > scorePlayer) {
                alert("Glupi kompjuter je pobijedio :( probaj opet princeza Emica!");
            }

            else {
                alert("Izjednačeno! Jako si bila blizu pobjedi, probaj opet!")
            }
        }

        roundCounter++;
    }
}

