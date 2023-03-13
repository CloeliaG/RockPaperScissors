const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const resultDisplay = document.getElementById("instruction");
const imageComputer = document.getElementById("computer-img");

function restartGame() {
    location.reload();
}

function computerPlays() {
    const randomChoice = Math.floor(Math.random() * 3) + 1;

    switch (randomChoice) {
        case 1:
            imageComputer.src = "assets/computer_rock.png";
            return "rock"
        case 2:
            imageComputer.src = "assets/computer_paper.png";
            return "paper"
        case 3:
            imageComputer.src = "assets/computer_scissors.png";
            return "scissors"
    }
}

function versus(playerChoice, computerChoice) {
    switch (true) {
        case (playerChoice==computerChoice):
            return "tie"
        case (playerChoice=='rock'):
                if (computerChoice == 'paper') {
                    return "lose";
                } else {
                    return "win";
                }
        case (playerChoice=='paper'):
                if (computerChoice == 'scissors') {
                    return "lose";
                } else {
                    return "win";
                }
        case (playerChoice=='scissors'):
                if (computerChoice == 'rock') {
                    return "lose";
                } else {
                    return "win";
                }
    }
}

function isGameOver() {
    let scorePlayer = Number(document.getElementById("scorePlayer").innerHTML);
    let scoreComputer = Number(document.getElementById("scoreComputer").innerHTML);

    if (scoreComputer === 3){
        imageComputer.src = "assets/computer_win.png";
        resultDisplay.style.display = "none";
        document.getElementById("icon-main").innerHTML = "<div>YOU LOST</div>"
    }
    if (scorePlayer === 3) {
        imageComputer.src = "assets/computer_lose.png";
        resultDisplay.style.display = "none";
        document.getElementById("icon-main").innerHTML = "<div>YOU WON</div>"
    }
    
}

function playRound(playerChoice) {
    let computerChoice = computerPlays();
    let result = versus(playerChoice,computerChoice);
    let scorePlayer = document.getElementById("scorePlayer");
    let scoreComputer = document.getElementById("scoreComputer");

    switch (result) {
        case "tie" :
            resultDisplay.style.color = "#3b3b3b";
            resultDisplay.innerHTML = "You tied";
            break
        case "win" :
            resultDisplay.style.color = "#2e8f00";
            resultDisplay.innerHTML = "You won !";
            scorePlayer.innerHTML = Number(scorePlayer.innerHTML) + 1;
            break
        case "lose" :
            resultDisplay.style.color = "#f00a21";
            resultDisplay.innerHTML = "You lost...";
            scoreComputer.innerHTML = Number(scoreComputer.innerHTML) + 1;
            break
    }

    isGameOver();
}

rock.addEventListener('click', playRound.bind(this,'rock'));
paper.addEventListener('click', playRound.bind(this,'paper'));
scissors.addEventListener('click', playRound.bind(this,'scissors'));