let humanScore =0
let compScore=0


 function getComputerChoice (){

    let compChoice=Math.floor(Math.random()*3)+1
    if (compChoice===1){
        console.log("Computer chose rock")
        return "rock"
    }
    
    else if (compChoice===2){
         console.log("Computer chose paper")
        return "paper"
    }

    else if (compChoice===3){
        console.log("Computer chose scissors")
        return "scissors"
    }
 }



 function getHumanChoice(){
    askUser=prompt("Rock, paper or Scissors?").trim().replace(/[A-Z]/g, '')
    if (askUser == "rock") {
        console.log("You chose rock")
        return  "rock" 
    }
    else if  (askUser == "paper"){
        console.log(" You chose paper")
        return "paper"
    }
        
    else if (askUser == "scissors"){
        console.log("You chose scissors")
        return "scissors"
    }
    
    else{
       return getHumanChoice()
        
    }
        
}

function playRound(humanChoice, computerChoice){
    if ( humanChoice == "paper" && computerChoice =="rock"){
        humanScore++
        console.log(`You Win! Your score is ${humanScore} and the computers score is ${compScore}` )
    }
    else if ( humanChoice == "rock" && computerChoice =="paper"){
        compScore++
        console.log(`You Lose! Your score is ${humanScore} and the computers score is ${compScore}` )
    }
    else if ( humanChoice == "paper" && computerChoice =="scissors"){
         compScore++
          console.log(`You Lose! Your score is ${humanScore} and the computers score is ${compScore}` )
    }
    else if ( humanChoice == "scissors" && computerChoice =="paper"){
        humanScore++
        console.log(`You win! Your score is ${humanScore} and the computers score is ${compScore}` )
    }
    else if ( humanChoice == "scissors" && computerChoice =="rock"){
        compScore++
         console.log(`You Lose! Your score is ${humanScore} and the computers score is ${compScore}` )
    }
    else if ( humanChoice== "rock" && computerChoice =="scissors"){
        humanScore++
        console.log(`You win! Your score is ${humanScore} and the computers score is ${compScore}` )

    }
     else if ( humanChoice== computerChoice) {
        console.log("Tie, try again")
        console.log(` Your score is ${humanScore} and the computers score is ${compScore}` )
    }
playRound(getComputerChoice(),getHumanChoice())
}

playRound(getComputerChoice(),getHumanChoice())
