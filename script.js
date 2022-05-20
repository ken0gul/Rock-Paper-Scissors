"use strict"

let user = 0;
let pc = 0;


let  guess = function() {
    let guess = prompt('Enter your guess here');
    return guess;
};


function game() {
    let array = [];
    
        for (let i=0; i < 5; i++) {
            
            let result = playRound();
            array.push(result);
            console.log(result);
            console.log(user,pc);
    }

   if(user > pc) {
       console.log("USER WON!")
   } else if( pc > user) {
       console.log("PC WON!")
   } else {
       console.log("NOBODY WINS")
   }
    
    
}
function computerPlay() {
    const data = ["rock", "paper", "scissor"];
    let random = Math.floor(Math.random() * 3);
    return data[random];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = guess();
    console.log(typeof playerSelection)
    computerSelection = computerPlay();
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
        



game();
