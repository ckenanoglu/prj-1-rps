//setting up basic properties
let playerScore = 0;
let computerScore = 0;
let draws = 0;
const choices = ["rock", "paper", "scissors",];

//setting up computer choice
function computerPlay (){
       return choices[Math.floor(Math.random()*choices.length)];    
   }

const computerSelection = computerPlay();
//setting up player choice
const playerSelection = prompt('What would you like to pick').toLowerCase()
       if (playerSelection === "paper" || playerSelection === "rock" || playerSelection === "scissors") {
       } else {
              console.log("Error! Try again!");
       }
       console.log("You chose " + `${playerSelection}`);

//setting score building blocks
let pwr ="Player wins the round.";
let cwr ="Computer wins the round.";
let draw = "It's a draw!";
let pw = "Player WINS";
let cw = "Computer WINS";
// setting up the  match up, also setting up round scoring

function playRound(playerSelection, computerSelection) {              
       if (playerSelection.toLowerCase() === computerSelection) {
           console.log("it's a tie");
              return draw, draws++;
       } else if (playerSelection === "rock" && computerSelection === "paper"){
              console.log('you lost! rock beats paper'), computerScore++
              return cwr;
       } else if (playerSelection === "rock" && computerSelection === "scissors"){
              console.log('you win! rock beats scissors'), playerScore++
              return pwr;
       }else if (playerSelection === "paper" && computerSelection === "rock"){
              console.log('you win! paper beats rock'), playerScore++
              return pwr;
       } else if (playerSelection === "paper" && computerSelection === "scissors"){
              console.log('you lost! scissors beats paper'), computerScore++
              return cwr;
       } else if (playerSelection === "scissors" && computerSelection === "rock"){
              console.log('you lost! rock beats scissors'), computerScore++
              return cwr;
       } else if (playerSelection === "scissors" && computerSelection === "paper"){
              console.log('you win! scissors beats paper'), playerScore++
              return pwr;
       }
}
const winner = playRound(playerSelection, computerSelection);
console.log( "your score " + playerScore);
console.log("computer score " + computerScore);

let score = 0;
// TODO: start keeping score 
for (let score = 0; score <1111; score++){
       let playerSelection = prompt('What would you like to pick').toLowerCase();
       let computerSelection = computerPlay();
       let winner = playRound(playerSelection, computerSelection);
       console.log( "your score " + playerScore);
       console.log("computer score " + computerScore);
       if (playerScore == 5) {
              console.log("Game over. You win!");
              break;
       } else if (computerScore == 5) {
              console.log("Game over. You lose!");
              break;
       }
}

              console.log( "your score " + playerScore);
              console.log("computer score " +computerScore);
              console.log( "draw " + draws);
// TODO: play multiple rounds until one reaches score 5

// TODO: display the winner

// TODO: reset the game

