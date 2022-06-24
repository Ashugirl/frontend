//Date

// let date = document.getElementById("date");
// let day = new Date();
// let options = {weekday: 'short', year: 'numeric', month: 'long',  day: 'numeric'};
// let fullDate = day.toLocaleString('nl-BE', options)
// date.innerHTML = fullDate;

// let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// weekday = weekday[new Date().getDay()];
// console.log(weekday)

// let datum1 = document.getElementById("datum1")
// let datum = new Date().getDate();
// let maand = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
// maand = maand[new Date().getMonth()]
// console.log(maand)
// let jaar = new Date().getFullYear();
// console.log(jaar)
// datum1.innerHTML = weekday + " " + datum + " " + maand + " " + jaar;

// let timeMin = new Date().getMinutes
// timeMin <=30? console.log("You're late!") : console.log("You're early!")

// let timeHrs = new Date().getHours()
// let amPm = document.getElementById("amPm")
// amPm.innerHTML = timeHrs

// //console.log(timeHrs)
// //timeHrs < 12? console.log("good morning") : console.log("good afternoon")
// //timeHrs = document.getElementById("amPm")
// timeHrs < 12? amPm.innerHTML = "Good Morning" : amPm.innerHTML = "Good Afternoon"


// // if(timeHrs < 12){
// //     //timeHrs.innerHTML = "Good Morning"
// //     console.log("Good morning")
// // } else if (timeHrs >= 12 && timeHrs < 18){
// //    // timeHrs.innerHTML = "Good Afternoon"
// //     console.log("Good afternoon")
// // } else{
// //     console.log("Good evening")
// // }


//MATH OBJECTS
let result = Math.random();
result = (result *9) + 1
result = Math.round(result)
//result = Math.round(Math.random()*10)
console.log(result)

let speelgoed =["bal", "pop", "lego", "beer", "auto", "puzzel", "playstation", "monopoly", "kleuren", "kaarten"]
let kind = speelgoed[Math.round(Math.random()*9)]
console.log(kind);

//FUNCTIONS
function test1 (param1, param2, param3){
    console.log("howdy")
    return console.log(param1, param2, param3)
    console.log("goodbye")//everything after return line is ignored
}
test1("hello", 5, "John")
test1("12", 13, "floof")

const test2 = (param4, param5, param6) => {
    return console.log(param4, param5, param6)
}
test2("fluff", "snoof", "snort");

let vrienden = ["Els", "Marie", "Linda", "Karin"]
console.log(vrienden)
function addFriends(vriend){
    vrienden.push(vriend)
}
addFriends("Rachel")
addFriends("Chandler")
addFriends("Monica")
addFriends("Ross")
console.log(vrienden);

let z;
let a = 12;
let b = 21;
a = 17;
b = 23;
function gemiddelde(a, b){
    return z=(a+b)/2
}
gemiddelde(a, b)
console.log(z);

//FILTER
var studenten = [
    {
        id:1, 
        naam: "Joe",
        cursus: "Geschiedenis",
        punten: 55
    },
    {
        id:2, 
        naam: "Bill",
        cursus: "Geschiedenis",
        punten: 50
    }, 
    {
        id:3, 
        naam: "Sue",
        cursus: "Geschiedenis",
        punten: 60
    }, {
        id:4, 
        naam: "Joni",
        cursus: "Geschiedenis",
        punten: 45
    }, {
        id:5, 
        naam: "Heather",
        cursus: "Geschiedenis",
        punten: 40
    },
    {
        id:6, 
        naam: "Frank",
        cursus: "Geschiedenis",
        punten: 33
    }
]
let geslaagd = studenten.filter(diploma)
function diploma(punt){
    return punt.punten >=50;
}
console.log(geslaagd);

geslaagd.map((student)=>{
    document.querySelector("#geslaagd").innerHTML += `<tr>
    <td>${student.naam}</td>
    <td>${student.punten}</td>
    </tr>`
})

let nietGeslaagd = studenten.filter(herhaling)
function herhaling(punt){
    return punt.punten < 50;
}
console.log(nietGeslaagd);

nietGeslaagd.map((student)=>{
    document.querySelector("#nietGeslaagd").innerHTML += `<tr>
    <td>${student.naam}</td>
    <td>${student.punten}</td>
    </tr>`
})


// CLICK EVENTS
let num1 = document.getElementById("num1")
console.log(Number(num1.value))
let num2 = document.getElementById("num2")
let some;
let uitkomst = document.getElementById("uitkomst")
function bereken(){
    som = Number(num1.value) + Number(num2.value)
    uitkomst.innerHTML = "De uitkomst is " + som + "."
}


let counter = document.getElementById("counter");
let optellen = document.getElementById("optellen");
let aftrekken = document.getElementById("aftrekken");
let reset = document.getElementById("reset");
let count = 0;

optellen.addEventListener("click", function(){
    count++
   counter.innerHTML = count;
 
})
aftrekken.addEventListener("click", function(){
    count--
    counter.innerHTML = count;
})
reset.addEventListener("click", function(){
    count = 0;
    counter.innerHTML = count;
})