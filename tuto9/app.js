let box1 = document.querySelector(".mouseLeave");

function mouseEnter(){
    box1.style.width = "400px";
    box1.style.height = "400px";
    box1.style.backgroundColor = "blue";
}

function mouseLeave(){
    box1.style.width = "300px";
    box1.style.height = "300px";
    box1.style.backgroundColor = "aquamarine";
}

let box2 = document.querySelector(".mouseMove");

function mouseMove(e){
    var x = e.clientX;
    var y = e.clientY;
    box2.innerHTML= `De muis bevindt zich of x ${x} en y ${y}` 
}

let popup = document.getElementById("popup");

function mouseDown(){
    popup.style.visibility = "visible"
}
function mouseUp(){
    popup.style.visibility = "hidden";
}

let mouseClick = false;
let text = document.getElementById("popup2");

function show(){
    mouseClick = !mouseClick;
    console.log(mouseClick)
    if(mouseClick == true){
        text.style.visibility = "visible"
    }else{
        text.style.visibility ="hidden"
    }
}

//Book list
let title = document.getElementById("title");
let author = document.getElementById("author");
let blurb = document.getElementById("blurb");
let book = document.getElementById("book");
let bookEnter = document.getElementById("bookEnter");

bookEnter.addEventListener("click", function(){
   book.innerHTML += `<tr>
   <td>${title.value}</td>
   <td>${author.value}</td>
   <td>${blurb.value}</td>
   <td><i class="fa-solid fa-trash-can"></i></td>
   </tr>`
})
