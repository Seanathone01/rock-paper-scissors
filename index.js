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

score.textContent = `${playerScore} - ${computerScore}`;

function getComputerChoice() {

    actions = {0: "rock", 1: "paper", 2: "scissors"}
    action = actions[parseInt(Math.random() * 3)]

    const image = document.createElement("img");

    console.log(action)

    switch(action) {
        case "rock":
            image.setAttribute("src", "./images/rockOne.png");
            image.setAttribute("height", "150");
            image.setAttribute('id', "computerImage");
        
            computerChoice.appendChild(image);
            break;
        case "paper":
            image.setAttribute("src", "./images/paperOne.png");
            image.setAttribute("height", "150");
            image.setAttribute('id', "computerImage");
        
            computerChoice.appendChild(image);
            break;
        case "scissors":
            image.setAttribute("src", "./images/scissorsOne.png");
            image.setAttribute("height", "150");
            image.setAttribute('id', "computerImage");
        
            computerChoice.appendChild(image);
            break;
    }

    return action
}

function playRound(playerSelection) {

    let computerSelection = getComputerChoice()

    if (playerSelection === "rock" & computerSelection === "scissors" | playerSelection === "scissors" & computerSelection === "paper" | playerSelection === "paper" & computerSelection === "rock") {
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
    document.getElementById("outcome").textContent = "";
    document.getElementById("outcome").style.color = "black";
}


rockButton.addEventListener('click', () => {
    if(!document.getElementById("playerImage")) {
        const image = document.createElement("img");
        image.setAttribute("src", "./images/rockOne.png");
        image.setAttribute("height", "150");
        image.setAttribute('id', "playerImage");
        
        playerChoice.appendChild(image);

        playRound("rock")
    } 
})

paperButton.addEventListener('click', () => {
    if(!document.getElementById("playerImage")) {
        const image = document.createElement("img");
        image.setAttribute("src", "./images/paperOne.png");
        image.setAttribute("height", "150");
        image.setAttribute('id', "playerImage");
        
        playerChoice.appendChild(image);

        playRound("paper");
    } 
})

scissorsButton.addEventListener('click', () => {
    if(!document.getElementById("playerImage")) {
        const image = document.createElement("img");
        image.setAttribute("src", "./images/scissorsOne.png");
        image.setAttribute("height", "150");
        image.setAttribute('id', "playerImage");
        
        playerChoice.appendChild(image);

        playRound("scissors")
    } 
})