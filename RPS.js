 console.log("The JS file is connected")

 function getComputerChoice (){

    let choice=Math.floor(Math.random()*3)+1
    if (choice===1){
        return console.log("rock")
    }
    
    else if (choice===2){
        return console.log("paper")
    }

    else if (choice===3){
        return console.log("scissors")
    }
 }


 getComputerChoice()