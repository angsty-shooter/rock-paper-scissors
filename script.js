let rock = "rock"
let paper = "paper"
let scissors = "scissors"

let weapon = [
    rock,
    paper,
    scissors
]

let cpuChoice = "cpuChoice"

function random(){
    cpuChoice = weapon[Math.floor(Math.random()*weapon.length)]
    console.log("cpu chose " + cpuChoice)
}



function play(pChoice){
    console.log("You chose " + pChoice)
    random()
    if(pChoice == rock){
    document.getElementById("player").innerText = "You chose rock"
        if(cpuChoice == rock){
            document.getElementById("cpu").innerText = "Computer chose rock"
            document.getElementById("status").innerText = "Tie"
            return "Tie"
        }
        else if(cpuChoice == paper){
            document.getElementById("cpu").innerText = "Computer chose paper"
            document.getElementById("status").innerText = "You Lose"
            return "You Lose"
        }
        else{//scissors
            document.getElementById("cpu").innerText = "Computer chose scissors"
            document.getElementById("status").innerText = "You Win"
            return "You Win"
        }

    }
    if(pChoice == paper){
    document.getElementById("player").innerText = "You chose paper"
        if(cpuChoice == rock){
            document.getElementById("cpu").innerText = "Computer chose rock"
            document.getElementById("status").innerText = "You Win"
            return "You Win"
        }
        else if(cpuChoice == paper){
            document.getElementById("cpu").innerText = "Computer chose paper"
            document.getElementById("status").innerText = "Tie"
            return "Tie"
        }
        else{//scissors
            document.getElementById("cpu").innerText = "Computer chose scissors"
            document.getElementById("status").innerText = "You Lose"
            return "You Lose"
        }

    }
    if(pChoice == scissors){
    document.getElementById("player").innerText = "You chose Scissors"
        if(cpuChoice == rock){
            document.getElementById("cpu").innerText = "Computer chose rock"
            document.getElementById("status").innerText = "You Lose"
            return "You Lose"
        }
        else if(cpuChoice == paper){
            document.getElementById("cpu").innerText = "Computer chose paper"
            document.getElementById("status").innerText = "You Win"
            return "You Win"
        }
        else{//scissors
            document.getElementById("cpu").innerText = "Computer chose scissors"
            document.getElementById("status").innerText = "Tie"
            return "Tie"
        }
    }

}