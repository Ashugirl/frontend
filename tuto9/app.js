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
        //text.style.display="block"
        text.style.visibility = "visible"
    }else{
        //text.style.display="none"
        text.style.visibility ="hidden"
    }
}

//Book list
let title = document.getElementById("title");
let author = document.getElementById("author");
let blurb = document.getElementById("blurb");
let book = document.getElementById("book");
let bookEnter = document.getElementById("bookEnter");

let bookList = []

bookEnter.addEventListener("click", function(){

    let obj = {
        title: title.value, 
        author: author.value, 
        blurb: blurb.value
    }
    bookList.push(obj)
    console.log(bookList)

    localStorage.setItem("book", JSON.stringify(bookList))
   book.innerHTML += `<tr>
   <td>${title.value}</td>
   <td>${author.value}</td>
   <td>${blurb.value}</td>
   <td><i class="fa-solid fa-trash-can" onclick="removeRow(this)"></i></td>
   </tr>`
    title.value = "";
    author.value="";
    blurb.value="";
    
})

function removeRow(e){
    for(let x = 0; x< bookList.length; x++){
        if(bookList[x].title == e.parentElement.parentElement.firstChild.nextElementSibling.innerText)
        bookList.splice(x,1)
    }
    e.parentElement.parentElement.remove()
    console.log(e.parentElement.parentElement)
    localStorage.setItem("book", JSON.stringify(bookList))

}

window.addEventListener("DOMContentLoaded", function(){
    let storageBook = JSON.parse(localStorage.getItem("book"))
    console.log(storageBook)
    storageBook.map((boekje)=>{
    book.innerHTML += `<tr>
   <td>${boekje.title}</td>
   <td>${boekje.author}</td>
   <td>${boekje.blurb}</td>
   <td><i class="fa-solid fa-trash-can" onclick="removeRow(this)"></i></td>
   </tr>`
    })

})
