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




let userName = document.getElementById("userName");
let nameSubmit = document.getElementById("nameSubmit"); 
let inputName = document.getElementById("inputName");
let nameForm = document.querySelector(".nameForm");
let val = false;

nameSubmit.addEventListener("click", (e)=>{
    val=!val
    if(!val){
        
nameForm.innerHTML=`<form>
<input type = "text" placeholder = "Please enter your name here" id="userName">
</form>`
nameSubmit.innerHTML = "Submit"

    } else{
       
        nameForm.innerHTML = `<h2> Welcome ${userName.value}</h2>`
        nameSubmit.innerHTML = "Reset"
        

        
        
    }
})
    
    
//     nameSubmit.innerHTML= "Reset";
//    nameSubmit.innerHTML !="Reset"? `   <form id="inputName">
//    <input id="name" type="text" placeholder="Please enter your name here" >

// </form>

// <button id="nameSubmit" type="submit">Submit</button>`: inputName.innerHTML = "Welcome " + userName.value + "!" +
// <button id="nameSubmit" type="submit">Submit</button>;
//     this.innerHTML.style.fontSize = 50;
    
//     } 

// )
// function myFunction(){
//     document.getElementById("nameSubmit").reset();
// }

// if(nameSubmit.innerHTML = "Reset"){
// console.log(nameSubmit);
//     nameSubmit.addEventListener("click", function(){
//         nameSubmit.innerHTML = "Submit";
//         nameForm.innerHTML = inputName>userName>"Please enter your name here.";

//     })
//     nameSubmit.addEventListener("click", function(){
//         inputName.innerHTML = `<input id="name" type="text" placeholder="Please enter your name here" >`
//     })

let block = document.getElementById("myDropdown");


function showBlock(){
    block.classList.toggle("show");
}


  
 