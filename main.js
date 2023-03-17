// Function to get a random string 
function getComputerChoice() {
    let randomString = ["Rock", "Paper", "Scissors"];
    let returnString = randomString[Math.floor(Math.random() * randomString.length)];
    return returnString;
}

function playRound(playerSelection, computerSelection) {
    // Code goes here
    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            return "The game is a tie!";
        } else if (computerSelection == "Paper") {
            return "Sorry, you have lost!";
        } else {    // Scissors outcome
            return "You have won the game!";
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            return "You have won the game!";
        } else if (computerSelection == "Paper") {
            return "The game is a tie!";
        } else {    // Scissors outcome
            return "Sorry, you have lost the game!";
        }
    } else {    // If playerSelection is scissors
        if (computerSelection == "Rock") {
            return "Sorry, you have lost the game!";
        } else if (computerSelection == "Paper") {
            return "You have won the game!";
        } else {
            return "The game is tied!";
        }
    }
}


// Testing to make sure we're playing the game correctly with hardcode input of playerSelection
const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));