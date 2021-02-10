
function play(){
    if(pChoice == rock.btn){
        if(cpuChoice == rock)
            return "Tie"
        else if(cpuChoice == paper)
            return "You Lose"
        else{//scissors
            return "You Win"
        }
    }
    if(pChoice == paper.btn){
        if(cpuChoice == rock)
            return "You Win"
        else if(cpuChoice == paper)
            return "Tie"
        else{//scissors
            return "You Lose"
        }
    }
    if(pChoice == scissors.btn){
        if(cpuChoice == rock)
            return "You Lose"
        else if(cpuChoice == paper)
            return "You Win"
        else{//scissors
            return "Tie"
        }
    }

}