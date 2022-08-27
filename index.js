let playerScore = 0;
let computerScore = 0;

// Rock
const rockButton = document.querySelector(".rockButton");
const rockImage = document.getElementById("rockImage");

rockButton.addEventListener('mouseover', () => {
    rockImage.src = "./images/rockTwo.png"
})

rockButton.addEventListener('mouseout', () => {
    rockImage.src = "./images/rockOne.png"
})

// Paper
const paperButton = document.querySelector(".paperButton");
const paperImage = document.getElementById("paperImage");

paperButton.addEventListener('mouseover', () => {
    paperImage.src = "./images/paperTwo.png"
})

paperButton.addEventListener('mouseout', () => {
    paperImage.src = "./images/paperOne.png"
})

// Scissors
const scissorsButton = document.querySelector(".scissorsButton");
const scissorsImage = document.getElementById("scissorsImage");

scissorsButton.addEventListener('mouseover', () => {
    scissorsImage.src = "./images/scissorsTwo.png"
})

scissorsButton.addEventListener('mouseout', () => {
    scissorsImage.src = "./images/scissorsOne.png"
})

const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");

let score = document.getElementById("score");

let outcome = document.getElementById("outcome");

let playerChoiceName = document.getElementById("playChoiceName");

let computerChoiceName = document.getElementById("compChoiceName");

score.textContent = `${playerScore} - ${computerScore}`;

function getComputerChoice() {

    actions = {0: "Rock", 1: "Paper", 2: "Scissors"}
    action = actions[parseInt(Math.random() * 3)]

    const image = document.createElement("img");

    switch(action) {
        case "Rock":
            image.setAttribute("src", "./images/rockOne.png");
            image.setAttribute("height", "150");
            image.setAttribute('id', "computerImage");
        
            break;
        case "Paper":
            image.setAttribute("src", "./images/paperOne.png");
            image.setAttribute("height", "150");
            image.setAttribute('id', "computerImage");

            break;
        case "Scissors":
            image.setAttribute("src", "./images/scissorsOne.png");
            image.setAttribute("height", "150");
            image.setAttribute('id', "computerImage");
        
            break;
    }
    computerChoice.appendChild(image);
    computerChoiceName.textContent = action
    return action
}

function playRound(playerSelection) {

    let computerSelection = getComputerChoice()

    if (playerSelection === "Rock" & computerSelection === "Scissors" | playerSelection === "Scissors" & computerSelection === "Paper" | playerSelection === "Paper" & computerSelection === "Rock") {
        playerScore += 1;
        score.textContent = `${playerScore} - ${computerScore}`;
        outcome.textContent = "You Win!";
        outcome.style.color = "green";
        
    } else if (playerSelection === computerSelection) {
        console.log("It's a draw!")
        outcome.textContent = "It's a Draw!!";
        
    } else {
        computerScore += 1;
        score.textContent = `${playerScore} - ${computerScore}`;
        outcome.textContent = "You Lose!";
        outcome.style.color = "red";
        
    }

    if (playerScore === 1) {
        console.log("Congratualtions, You Win!")
    } else {
        console.log("You Lost!")
    }
    setTimeout(() => removeRound(), 2000)
}


function removeRound() {
    
    document.getElementById("playerImage").remove()
    document.getElementById("computerImage").remove()
    outcome.textContent = "";
    outcome.style.color = "black";
    computerChoiceName.textContent = "";
    playerChoiceName.textContent = "";
    
}


rockButton.addEventListener('click', () => {
    if(!document.getElementById("playerImage")) {
        const image = document.createElement("img");
        image.setAttribute("src", "./images/rockOne.png");
        image.setAttribute("height", "150");
        image.setAttribute('id', "playerImage");
        
        playerChoice.appendChild(image);
        playerChoiceName.textContent = "Rock"

        playRound("Rock")
    } 
})

paperButton.addEventListener('click', () => {
    if(!document.getElementById("playerImage")) {
        const image = document.createElement("img");
        image.setAttribute("src", "./images/paperOne.png");
        image.setAttribute("height", "150");
        image.setAttribute('id', "playerImage");
        
        playerChoice.appendChild(image);
        playerChoiceName.textContent = "Paper"

        playRound("Paper");
    } 
})

scissorsButton.addEventListener('click', () => {
    if(!document.getElementById("playerImage")) {
        const image = document.createElement("img");
        image.setAttribute("src", "./images/scissorsOne.png");
        image.setAttribute("height", "150");
        image.setAttribute('id', "playerImage");
        
        playerChoice.appendChild(image);
        playerChoiceName.textContent = "Scissors"

        playRound("Scissors")
    } 
})