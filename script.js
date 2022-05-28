// Array to store user input from clicking buttons
let scoresArray =[];
let userInput;
let user = 0;
let pc = 0;
let isGameOver = false;

// Creating buttons and displayin rounds

let buttons = `
    <div class="container">
        <button>rock</button>
        <button>paper</button>
        <button>scissor</button>
        
        </div>
        <p class="log"></p>

        `

// Creating Score Table
let scores = `
        <div class="scores">
            <p class="score score__user">USER : 0</p>
            <p class="score score__computer">Computer : 0</p>
            </div>

`// Creating WINNER Element
let winner = document.createElement('p');
winner.classList.add('winner');
document.body.appendChild(winner);


    document.body.insertAdjacentHTML("afterbegin", scores)
    // Insert them to body
    document.body.insertAdjacentHTML("beforeend", buttons);

    // Create random computer input
    function computerPlay() {
        const data = ["rock", "paper", "scissor"];
        let random = Math.floor(Math.random() * 3);
        return data[random];
    }

    // Selecting elements
    const para = document.querySelector('.log');
    const scoreUser = document.querySelector('.score__user')
    const scoreComputer = document.querySelector('.score__computer')
    
    
    // Selecting buttons
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', e => {
            userInput = e.target.textContent;
            computerInput = computerPlay();
            // When no one wins
            if(userInput === computerInput) para.textContent = 'Nobody WIN!'
            // When user Win!
            if(userInput === 'scissor' && computerInput === 'paper') {
                para.textContent =`User: ${userInput} - Computer: ${computerInput} User WINS!`
                user++;
                scoreUser.textContent = `USER : ${user}`
                
            }
            if(userInput === 'rock' && computerInput === 'scissor') {
                para.textContent =`User: ${userInput} - Computer: ${computerInput} User WINS!` 
                user++;
                scoreUser.textContent = `User : ${user}`
            }
            if(userInput === 'paper' && computerInput === 'rock') {
                para.textContent =`User: ${userInput} - Computer: ${computerInput} User WINS!` 
                user++;
                scoreUser.textContent = `User : ${user}`
            }
            // When computer Win!
            if(userInput === 'rock' && computerInput === 'paper') { 
                para.textContent =`User: ${userInput} - Computer: ${computerInput} Computer WINS!`
                pc++;
                scoreComputer.textContent = `Computer : ${pc}`
            }
            if(userInput === 'paper' && computerInput === 'scissor') { 
                para.textContent =`User: ${userInput} - Computer: ${computerInput} Computer WINS!`
                pc++;
                scoreComputer.textContent = `Computer : ${pc}`
            }
            if(userInput === 'scissor' && computerInput === 'rock') { 
                para.textContent =`User: ${userInput} - Computer: ${computerInput} Computer WINS!`
                pc++;
                scoreComputer.textContent = `Computer : ${pc}`
            }
            if(user + pc === 5) {
                isGameOver = true;
                if (user > pc)   {
                   winner.textContent = `USER WIN!`
                    
                }
                else  { 
                    winner.textContent = `COMPUTER WIN!`
                    
                }
                
            }

            if (isGameOver) {
                document.querySelector('.container').style.opacity = '0.2'
                document.querySelector('.container').style.display = 'none';
                winner.style.textAlign = 'center'
                winner.style.fontSize = '50px'

            }

          
            
        })
       
        
    });
   
    

    
    