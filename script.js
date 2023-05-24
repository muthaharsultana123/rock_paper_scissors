const computerDisplay = document.getElementById('computerside')
const userDisplay = document.getElementById('userside')
const resultDisplay = document.getElementById('result')
const operations = document.querySelectorAll('button')
const resetButton = document.getElementById('resetCount')
const count = document.getElementById('userCounts')

let userChoice
let computerChoice
let result
let userCount=0;
let computerCount=0;

resetButton.addEventListener('click', (e) =>{
    resetCount()
})

function resetCount(){
    console.log("helllo")
    userCount=0;
    computerCount=0;
}

function generatecomputerchoice() {
    choice = Math.floor(Math.random()*3) + 1
    if (choice == 1){
        computerChoice = "rock"
    }
    if (choice == 2){
        computerChoice = "paper"
    }
    if (choice == 3){
        computerChoice = 'scissors'
    }
    computerDisplay.innerHTML = computerChoice
}

function getresult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'you win!'
        userCount += 1
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'you lost!'
        computerCount +=1
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'you win!'
        userCount += 1
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'you lose!'
        computerCount +=1
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'you win!'
        userCount += 1
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'you lose!'
        computerCount +=1 
    }
    resultDisplay .innerHTML = result
}

operations.forEach(operation => operation.addEventListener('click' ,(e) => {
    userChoice = e.target.id
    userDisplay.innerHTML = userChoice
    generatecomputerchoice()
    getresult() 
    count.textContent = `${userCount} - ${computerCount}`
}))
