let rock = "rock"
let paper = "paper"
let scissors = "scissors"

let cpuChoice = rock

function play(pChoice){
    console.log(pChoice)
    if(pChoice == rock){
        if(cpuChoice == rock){
            document.getElementById("status").innerText = "Tie"
            return "Tie"
        }
        else if(cpuChoice == paper){
            document.getElementById("status").innerText = "You Lose"
            return "You Lose"
        }
        else{//scissors
            document.getElementById("status").innerText = "You Win"
            return "You Win"
        }

    }
    if(pChoice == paper){
        if(cpuChoice == rock){
            document.getElementById("status").innerText = "You Win"
            return "You Win"
        }

        else if(cpuChoice == paper){
            document.getElementById("status").innerText = "Tie"
            return "Tie"
        }
        else{//scissors
            document.getElementById("status").innerText = "You Lose"
            return "You Lose"
        }

    }
    if(pChoice == scissors){
        if(cpuChoice == rock){
            document.getElementById("status").innerText = "You Lose"
            return "You Lose"
        }
        else if(cpuChoice == paper){
            document.getElementById("status").innerText = "You Win"
            return "You Win"
        }
        else{//scissors
            document.getElementById("status").innerText = "Tie"
            return "Tie"
        }
    }

}