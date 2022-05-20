"use strict"

let user = 0;
let pc = 0;


let  guess = function() {
    return prompt('Enter your guess here');
};


function game() {
    let array = [];
    
    
        for (let i=0; i < 5; i++) {
            let result = playRound();
            array.push(result);
            console.log(result);
            console.log(user,pc);
    }

   console.log( user > pc ?  `USER WON` : `PC WON`);
    
    
}
function computerPlay() {
    const data = ["rock", "paper", "scissor"];
    let random = Math.floor(Math.random() * 3);
    return data[random];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = guess();
    computerSelection = computerPlay();
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
