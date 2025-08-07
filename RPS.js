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
        humanOutput.textContent="You chose rock"
        return  "rock" 
    }
    else if  (askUser == "paper"){
        humanOutput.textContent=" You chose paper"
        return "paper"
    }
        
    else if (askUser == "scissors"){
        humanOutput.textContent= "You chose scissors"
        return "scissors"
    }
    
    else{
       return null;
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
          humanCount.textContent=`Your score is ${humanScore}`
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
        compCount.textContent=`Computer score is ${compScore}` 

    }
     else if ( humanChoice== computerChoice) {
       humanCount.textContent="Tie, try again"
       humanCount.textContent=` Your score is ${humanScore} ` 
       compCount.textContent=`Computer score is ${compScore}` 
    }
}

const division =document.createElement("div");
division.style.backgroundColor = "pink";
document.body.appendChild(division);


const container = document.createElement("div")
container.classList.add("container")
division.appendChild(container)

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


const compCont = document.createElement("div")
compCont.style.backgroundColor ="gold"
compCont.classList.add("compCont")
division.appendChild(compCont)



const playBtn1 = document.createElement("button");
playBtn1.textContent = "Rock";
playBtn1.style.backgroundColor="red";
container.appendChild(playBtn1);
playBtn1.classList.add("button")
playBtn1.addEventListener("click", ()=> {playRound(getHumanChoice("rock"), getComputerChoice())})


const playBtn2 = document.createElement("button");
playBtn2.textContent = "Paper";
playBtn2.style.backgroundColor="blue";
container.appendChild(playBtn2);
playBtn2.classList.add("button")
playBtn2.addEventListener("click", ()=> {playRound(getHumanChoice("paper"), getComputerChoice())})

const playBtn3 = document.createElement("button");
playBtn3.textContent = "Scissors";
playBtn3.style.backgroundColor="green";
container.appendChild(playBtn3);
playBtn3.classList.add("button")
playBtn3.addEventListener("click", ()=> {playRound(getHumanChoice("scissors"), getComputerChoice())})

const computerOutput = document.createElement("div");
computerOutput.innerHTML = ""
compCont.appendChild(computerOutput)

const humanOutput = document.createElement("div");
humanOutput.innerHTML = ""
compCont.appendChild(humanOutput)

playRound(getComputerChoice);