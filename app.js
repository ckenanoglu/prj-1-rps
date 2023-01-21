//setting up basic properties
let playerScore = 0;
let computerScore = 0;
let draws = 0;
const choices = ["rock", "paper", "scissors",];

//setting up computer choice
const computerSelection = choices[Math.floor(Math.random()*choices.length)];
       console.log("pc chose " + `${computerSelection}`);     


//setting up player choice
const playerSelection = prompt('What would you like to pick').toLowerCase()
       if (playerSelection === "paper" || playerSelection === "rock" || playerSelection === "scissors") {
       } else {
              console.log("Error! Try again!");
       }
       console.log("You chose " + `${playerSelection}`);


// setting up the  match up, also setting up round scoring
let pwr ="Player wins the round.";
let cwr ="Computer wins the round.";
let draw = "It's a draw!";
let pw = "Player WINS";
let cw = "Computer WINS";
function playRound(playerSelection, computerSelection) {              
       if (playerSelection === computerSelection) {
           console.log("it's a tie");
       } else if (playerSelection === "rock" && computerSelection === "paper"){
              console.log('you lost! rock beats paper')
              return cwr;
       } else if (playerSelection === "rock" && computerSelection === "scissors"){
              console.log('you win! rock beats scissors')
              return pwr;
       }else if (playerSelection === "paper" && computerSelection === "rock"){
              console.log('you win! paper beats rock')
              return pwr;
       } else if (playerSelection === "paper" && computerSelection === "scissors"){
              console.log('you lost! scissors beats paper')
              return cwr;
       } else if (playerSelection === "scissors" && computerSelection === "rock"){
              console.log('you lost! rock beats scissors')
              return cwr;
       } else if (playerSelection === "scissors" && computerSelection === "paper"){
              console.log('you win! scissors beats paper')
              return pwr;
       }
}
const winner = playRound(playerSelection, computerSelection);
