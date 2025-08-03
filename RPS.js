 console.log("The JS file is connected")

 let score =0
 state =false

 function getComputerChoice (){

    let compChoice=Math.floor(Math.random()*3)+1
    if (compChoice===1){
        return console.log("rock")
    }
    
    else if (compChoice===2){
        return console.log("paper")
    }

    else if (compChoice===3){
        return console.log("scissors")
    }
 }


 getComputerChoice()

 function getHumanChoice(){
    askUser=prompt("Rock, paper or Scissors?").trim().replace(/[A-Z]/g, '')
    if (askUser == "rock") (
        console.log("You chose rock")
    )
    else if  (askUser == "paper"){
        console.log(" You chose paper")
    }
        
    else if (askUser == "scissors"){
        console.log("You chose scissors")
    }
    
    else{
        getHumanChoice()
    }
        
}
    

 getHumanChoice()