const choices = ["rock", "paper", "scissors",];
const computerSelection = choices[Math.floor(Math.random()*choices.length)];
       console.log("pc chose " + `${computerSelection}`);     

const playerSelection = prompt('What would you like to pick', )
       if (playerSelection === "paper" || playerSelection === "rock" || playerSelection === "scissors") {
       } else {
              console.log("Error! Try again!");
       }
       console.log("You chose " + `${playerSelection}`);

const winner = playRound(playerSelection, computerSelection);

function playRound(playerSelection, computerSelection) {              
       if (playerSelection === computerSelection) {
           console.log("it's a tie");
       } else if (playerSelection === "rock" && computerSelection === "paper"){
              console.log('you lost')
       } else if (playerSelection === "rock" && computerSelection === "scissors"){
             console.log('you win')
       }else if (playerSelection === "paper" && computerSelection === "rock"){
              console.log('you win')
       } else if (playerSelection === "paper" && computerSelection === "scissors"){
              console.log('you win')
       } else if (playerSelection === "scissors" && computerSelection === "rock"){
              console.log('you lost')
       } else if (playerSelection === "scissors" && computerSelection === "paper"){
              console.log('you win')
       }
}

