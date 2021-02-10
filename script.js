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
        if(cpuChoice == rock){
            document.getElementById("cpu").innerText = "Computer chose rock"
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