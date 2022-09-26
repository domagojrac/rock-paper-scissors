var buttons = document.querySelectorAll("button");
var results = document.querySelector(".results");

let userScore = document.getElementById("userScore").innerHTML;
let compScore = document.getElementById("compScore").innerHTML;

buttons.forEach(button => {
    button.addEventListener("click", (e) =>{
        const computerChoice = getComputerChoice();
        var result = playRound(button.id, computerChoice);
        
        if(result == "You win! Rock beats scissors!" || result == "You win! Paper beats rock!" || result == "You win! Scissors beats paper!") {
            userScore++;
            document.getElementById("userScore").innerHTML = userScore;    

        };

        if(result == "You lose! Rock beats scissors!" || result == "You lose! Paper beats rock!" || result == "You lose! Scissors beats paper!") {
            compScore++;
            document.getElementById("compScore").innerHTML = compScore;
        };

        document.getElementById("result").innerHTML = result;

        if(userScore == 5) {
            document.getElementById("result").innerHTML = "Bravooo!";
            document.getElementById("userScore").innerHTML = 0;
            document.getElementById("compScore").innerHTML = 0;
            userScore = 0;
            compScore = 0;
        }

        if(compScore == 5) {
            document.getElementById("result").innerHTML = "Neee, glupi kompjuter je pobijedio!!";
            document.getElementById("userScore").innerHTML = 0;
            document.getElementById("compScore").innerHTML = 0;
            userScore = 0;
            compScore = 0;
        }
    });
});





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

function playRound(playerSelection, computerSelection) {

    if(playerSelection == "Rock") {
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

    if(playerSelection == "Paper") {
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

    if(playerSelection == "Scissors") {
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

