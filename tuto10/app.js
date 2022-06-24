let choice = document.getElementById("game");
let computer = document.getElementById("computerChoice");
let winner = document.getElementById("winner");

let options = ["rock", "paper", "scissors"];
let puntenU = 0;
let puntenPC = 0;

function result(){
    let pcChoice = Math.round(Math.random()*2)
    console.log(options[pcChoice])
}




console.log(choice.value);