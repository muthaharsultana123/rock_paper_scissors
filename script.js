const computerdisplay = document.getElementById('computerside')
const userdisplay = document.getElementById('userside')
const resultdisplay = document.getElementById('result')
const operations = document.querySelectorAll('button')

let userchoice
let computerchoice
let result

operations.forEach(operation => operation.addEventListener('click' ,(e) => {
    userchoice = e.target.id
    userdisplay.innerHTML = userchoice
    generatecomputerchoice()
    getresult()
   
}))

function generatecomputerchoice() {
     choice = math.floor(math.random()*3) + 1
    if (choice == 1){
        computerchoice = "rock"
    }
    if (choice == 2){
        computerchoice = "paper"
    }
    if (choice == 3){
        computerchoice = 'scissors'
    }
    computerdisplay.innerHTML = computerchoice
}

function getresult() {
    if (computerchoice === userchoice) {
        result = 'its a draw!'
    }
    if (computerchoice === 'rock' && userchoice === "paper") {
        result = 'you win!'
    }
    if (computerchoice === 'rock' && userchoice === "scissors") {
        result = 'you lost!'
    }
    if (computerchoice === 'paper' && userchoice === "scissors") {
        result = 'you win!'
    }
    if (computerchoice === 'paper' && userchoice === "rock") {
        result = 'you lose!'
    }
    if (computerchoice === 'scissors' && userchoice === "rock") {
        result = 'you win!'
    }
    if (computerchoice === 'scissors' && userchoice === "paper") {
        result = 'you lose!'
    }
    resultdisplay .innerHTML = result
}


