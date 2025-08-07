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



 function getHumanChoice(askUser){
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
        humanCount.textContent=`Your score is ${humanScore} `
        compCount.textContent=`Computer score is ${compScore}` 
    }
    else if ( humanChoice == "rock" && computerChoice =="paper"){
        compScore++
        humanCount.textContent =`Your score is ${humanScore}` 
        compCount.textContent=`Computer score is ${compScore}` 
    }
    else if ( humanChoice == "paper" && computerChoice =="scissors"){
         compScore++
          humanCount.textContent=`Your score is ${humanScore}}`
           compCount.textContent=`Computer score is ${compScore}` 
    }
    else if ( humanChoice == "scissors" && computerChoice =="paper"){
        humanScore++
        humanCount.textContent =` Your score is ${humanScore}`
         compCount.textContent=`Computer score is ${compScore}`  
    }
    else if ( humanChoice == "scissors" && computerChoice =="rock"){
        compScore++
         humanCount.textContent=`Your score is ${humanScore} `
         compCount.textContent=`Computer score is ${compScore}` 
         
    }
    else if ( humanChoice== "rock" && computerChoice =="scissors"){
        humanScore++
        humanCount.textContent =`Your score is ${humanScore} ` 
         ompCount.textContent=`Computer score is ${compScore}` 

    }
     else if ( humanChoice== computerChoice) {
       humanCount.textContent="Tie, try again"
       humanCount.textContent=` Your score is ${humanScore} ` 
       compCount.textContent=`Computer score is ${compScore}` 
    }
playRound(getComputerChoice(),getHumanChoice())
}

const division =document.createElement("div");
division.style.backgroundColor = "pink";
document.body.appendChild(division);


const humanCount = document.createElement("div")
humanCount.innerHTML = ""
humanCount.style.color="green"
humanCount.classList.add("humanCount")
division.appendChild(humanCount)

const compCount= document.createElement("div")
compCount.innerHTML=""
compCount.style.color="red"
compCount.classList.add("compCount")
division.appendChild(compCount)

const container = document.createElement("div")
container.classList.add("container")
division.appendChild(container)


const compCont = document.createElement("div")
compCont.style.backgroundColor ="gold"
compCont.classList.add("compCont")
division.appendChild(compCont)

const playBtn1 = document.createElement("button");
playBtn1.textContent = "Rock";
playBtn1.style.backgroundColor="red";
container.appendChild(playBtn1);
playBtn1.addEventListener("click", ()=> getComputerChoice("rock"))

const playBtn2 = document.createElement("button");
playBtn2.textContent = "Paper";
playBtn2.style.backgroundColor="blue";
container.appendChild(playBtn2);
playBtn2.addEventListener("click", ()=> getComputerChoice("paper"))

const playBtn3 = document.createElement("button");
playBtn3.textContent = "Scissors";
playBtn3.style.backgroundColor="green";
container.appendChild(playBtn3);
playBtn3.addEventListener("click", ()=> getComputerChoice("scissors"))

const computerOutput = document.createElement("div");
computerOutput.innerHTML = ""
compCont.appendChild(computerOutput)

playRound(getComputerChoice);