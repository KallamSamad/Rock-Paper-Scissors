let humanScore =0
let compScore=0


 function getComputerChoice (){

    let compChoice=Math.floor(Math.random()*3)+1
    if (compChoice===1){
        computerOutput.textContent="Computer chose rock"
        return "rock"
    }
    
    else if (compChoice===2){
        computerOutput.textContent="Computer chose paper"
        return "paper"
    }

    else if (compChoice===3){
         computerOutput.textContent="Computer chose scissors"
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

const division =document.createElement("div");
division.style.backgroundColor = "pink";
document.body.appendChild(division);

 

const container = document.createElement("div")
container.classList.add("container")
division.appendChild(container)

const compCont = document.createElement("div")
compCont.style.backgroundColor ="gold"
division.appendChild(compCont)

const playBtn1 = document.createElement("button");
playBtn1.textContent = "Rock";
playBtn1.style.backgroundColor="red";
container.appendChild(playBtn1);

const playBtn2 = document.createElement("button");
playBtn2.textContent = "Paper";
playBtn2.style.backgroundColor="blue";
container.appendChild(playBtn2);

const playBtn3 = document.createElement("button");
playBtn3.textContent = "Scissors";
playBtn3.style.backgroundColor="green";
container.appendChild(playBtn3);

const computerOutput = document.createElement("div");
computerOutput.innerHTML = ""
compCont.appendChild(computerOutput)

playRound(getComputerChoice);