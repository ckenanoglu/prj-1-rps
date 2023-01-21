const choices = ["rock", "paper", "scissors",];

// function getComputerChoice() {
       // return choices(Math.floor(Math.random() * choices.length));
// }
// console.log(playRound);


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


// const winner = playRound(playerSelection, computerSelection);

       
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
// console.log(computerSelection);
// // console.log(computerSelection);
// function playRound(playerSelection, computerSelection) {
//        if (yourPoints === 5 || computerPoints === 5 || tie === 5) return; //This stops the game when reaching to 5
//                if ((computerSelection === "Paper" && playerSelection === "Rock") ||
//                    (computerSelection === "Scissors" && playerSelection === "Paper") ||
//                    (computerSelection === "Rock" && playerSelection === "Scissors")) 
//                     {
//                } else if ((computerSelection === "Rock" && playerSelection === "Paper") ||
//                          (computerSelection === "Paper" && playerSelection === "Scissors") ||
//                          (computerSelection === "Scissors" && playerSelection === "Rock")) 
//                           {
//                } else if ((computerSelection === playerSelection)               ) {

//                } else {
//                    return "not valid";
//                }}