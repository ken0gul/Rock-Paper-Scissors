"use strict"

// create user and pc variables to keep track of scores
let user = 0;
let pc = 0;

// get user input using prompt
let  guess = function() {
    let guess = prompt('Enter your guess here');
    return guess;
};


function game() {
    // declare an array variable to store each round
    let array = [];
    
        // use for loop to push each round to the array until 5 round is over
        for (let i=0; i < 5; i++) {
            let result = playRound();
            array.push(result);
    }
    // Check who wins and log it accordingly
   if(user > pc) {
       console.log("USER WON!")
   } else if( pc > user) {
       console.log("PC WON!")
   } else {
       console.log("NOBODY WINS")
   }
    
    
}

// Creata random computer input
function computerPlay() {
    const data = ["rock", "paper", "scissor"];
    let random = Math.floor(Math.random() * 3);
    return data[random];
}

function playRound(playerSelection, computerSelection) {
    // set parameters to invoked functions below to get data from them
    playerSelection = guess();
    computerSelection = computerPlay();

    // check if input is empty
    if(!playerSelection || playerSelection.trim().length === 0 ) return alert('Input is invalid');   

        
        if (playerSelection === computerSelection) {
            return `No one wins!`
        } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
            user++;
            return `You win! Rock beats Scissor!`
        } else if(playerSelection === 'paper' && computerSelection === 'rock') {
            pc++;
            return `You lose! Rock beats Paper`
        } 
        return `You win! Scissor beats Paper!`
    } 

    // invoke the game function to start the game
game();
