let playerMove = "paper";
let computerMove = "paper";

// if (playerMove === "rock" && computerMove === "paper") {  
//  console.log("Computer Wins");
// }
// if (playerMove === "rock" && computerMove === "rock") {  
//     console.log("Draw!");
//    }
// if (playerMove === "rock" && computerMove === "scissors") {  
//     console.log("Player Wins!");
//    }
// if (playerMove === "paper" && computerMove === "rock") {  
//     console.log("Player Wins");
//    }
// if (playerMove === "paper" && computerMove === "paper") {  
//     console.log("Draw!");
//    }
// if (playerMove === "paper" && computerMove === "scissors") {  
//     console.log("Computer Wins");
//    }
// if (playerMove === "scissors" && computerMove === "paper") {  
//     console.log("Player Wins");
//    }
// if (playerMove === "scissors" && computerMove === "rock") {  
//     console.log("Computer Wins");
//    }
// if (playerMove === "scissors" && computerMove === "scissors") {  
//     console.log("Draw!");
//    }

   //Task2

function getWinner(playerMove, computerMove) {
    if (playerMove === "rock" && computerMove === "paper") {  
        return -1;
       }
       if (playerMove === "rock" && computerMove === "rock") {  
        return 0;
          }
       if (playerMove === "rock" && computerMove === "scissors") {  
        return 1;
          }
       if (playerMove === "paper" && computerMove === "rock") {  
        return 1;
          }
       if (playerMove === "paper" && computerMove === "paper") {  
        return 0;
          }
       if (playerMove === "paper" && computerMove === "scissors") {  
        return -1;
          }
       if (playerMove === "scissors" && computerMove === "paper") {  
        return 1;
          }
       if (playerMove === "scissors" && computerMove === "rock") {  
        return -1;
          }
       if (playerMove === "scissors" && computerMove === "scissors") {  
        return 0;
          }
}


//Task3

playerMove = prompt("Pick an option");
let result = getWinner(playerMove, computerMove);
// function getResult(result) {
//     if (result === 1) {
//         return "Player Wins!"
//     } else if (result === -1) {
//         return "Computer Wins!"
//     } else if (result === 0) {
//         return "Draw!"
//     } else {
//         return "Please enter a valid choice:(rock, paper, scissors)!"
//     }
// }

alert(result);

//Task4

function getComputerMove() {
    let choice = Math.floor(Math.random() * 2); 
    if (choice === 0){
      return "rock";
    } else if (choice === 0){
      return "paper";
    } else {
      return = "scissors";
    }
} 
