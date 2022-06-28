//TODO: figure out font size welcome message.

let collapsible = document.getElementsByClassName("collapsible");
let entry = document.getElementsByClassName("entry");

for(var i = 0; i< collapsible.length; i++){
    collapsible[i].addEventListener("click", function(){
        entry = this.nextElementSibling;
        if(entry.style.display === "block"){
            entry.style.display = "none";
        } else{
            entry.style.display = "block";
        }
    } )
}




let userName = document.getElementById("name");
let nameSubmit = document.getElementById("nameSubmit");
let inputName = document.getElementById("inputName")

nameSubmit.addEventListener("click", function(){
    
    inputName.innerHTML = "Welcome " + userName.value + "!";
    this.innerHTML.style.fontSize = 50;
    

})
