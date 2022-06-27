let choice = document.getElementById("game");
let computer = document.getElementById("computerChoice");
let winner = document.getElementById("winner");

let options = ["rock", "paper", "scissors"];
let winPossibilities = ["Tie", "Computer wins!", "Player wins!"]
let puntenU = 0;
let puntenPC = 0;




function result(){   
    let compChoice = Math.round(Math.random()*2)
  //console.log(options[compChoice])
computer.innerHTML = "The computer chose: " + (options[compChoice]) + "."

 if (choice.value == options[compChoice]){
//     winner.innerHTML = "The winner is: it's a tie"
winner.innerHTML = ` <li> It's a tie </li>`
} else if(choice.value =="rock"){ 
       if(options[compChoice] == "paper"){
        winner.innerHTML = ` <li> Computer wins </li>`

//         winner.innerHTML = "The winner is: the computer"
    }else if(options[compChoice] == "scissors"){
        winner.innerHTML = ` <li> Player wins! </li>`

//         winner.innerHTML = "The winner is: the player"
    }

}else if(choice.value == "paper"){
    if(options[compChoice] == "scissors"){
        winner.innerHTML = ` <li> Computer wins! </li>`

     //   winner.innerHTML = "The winner is: the computer"
    }else if(options[compChoice] == "rock"){
        winner.innerHTML = ` <li> Player wins! </li>`

      //  winner.innerHTML = "The winner is: the player"
    }
}else if(choice.value == "scissors"){
    if(options[compChoice] == "rock"){
        winner.innerHTML = ` <li> Computer wins! </li>`

       // winner.innerHTML = "The winner is: the computer"
    }else if(options[compChoice] == "paper"){
        winner.innerHTML = ` <li> Player wins! </li>`

       // winner.innerHTML = "The winner is: the player"
    }
}


}