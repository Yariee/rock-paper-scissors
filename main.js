console.log("Hello, World!"); /* test to make sure I linked javascript to HTML file correctly! */ 


/* Function to get a random string */
function getComputerChoice() {
    let randomString = ["Rock", "Paper", "Scissors"];
    let returnString = randomString[Math.floor(Math.random() * randomString.length)];
    return returnString;
}

/* Testing to make sure we get random string of rock, paper, or scissors */
console.log(getComputerChoice()); 