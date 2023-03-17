// Function to get a random string 
function getComputerChoice() {
    let randomString = ["rock", "paper", "scissors"];
    let returnString = randomString[Math.floor(Math.random() * randomString.length)];
    return returnString;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "Tie";
        } else if (computerSelection == "paper") {
            return "Lost";
        } else {    // Scissors outcome
            return "Win";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "Win";
        } else if (computerSelection == "paper") {
            return "Tie";
        } else {    // Scissors outcome
            return "Lost";
        }
    } else {    // If playerSelection is scissors
        if (computerSelection == "rock") {
            return "Lost";
        } else if (computerSelection == "paper") {
            return "Win";
        } else {
            return "Tie";
        }
    }
}

function game() {
    let win = 0;
    let lost = 0;
    let tie = 0;

    for (let i = 0; i < 5; i++) {
        let choice = prompt("Would you like to be Rock, Paper, or Scissors?");
        // Helps lowercase all lets in case of caps error
        let playerSelection = choice.toLowerCase();

        if (playRound(playerSelection, getComputerChoice()) == "Win") {
            win += 1;
        } else if (playRound(playerSelection, getComputerChoice()) == "Lost") {
            lost += 1;
        } else {    // Tie Scenario
            tie += 1;
        }
    }
    console.log("Here are your wins: " + win);
    console.log("Here are your losses: " + lost);
    console.log("Here are your ties: " + tie);
}

console.log(game());