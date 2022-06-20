console.log("hello")
console.log("alle ok?")

document.write("<h2>Hoe gaat het met jou?</h2>")

document.getElementById("title").innerHTML="hello friend"
document.querySelector("#text").innerHTML="What a lot of text"

var x = 5
x=12

let y = 5;
let a = 12
a = 15

const b = 5;
const c = 10;

//numbers
let d = 6.3;
let result = d + c;

let text = "this is a string"
let lijst = [{name: "Aviva", city:"Dendermonde"}, {name: "Aviva", city:"Dendermonde"}];
let arr=[1,2,3,4,5,];
let g;
g = "5";

result = d*c;
result = c/d;
result = c-d;
result = g+c;
result= c+g;
result = text + " " + c;
result = 1 == 1;
result = 1 == 2;
result = 1 == "1";
result = 1 ==="1";
result = 3 < 2;
result = 10 < "b";
result = 1 != 2;
result = 1 !== "1";
result = 7

if(result <= 10){
console.log("This is the result:", result);
}
else if(10 < result <20 ){
    console.log("result is almost 20");
}
//ternary operator (if result < 5 = true then first choice, else second choice)
result < 5 ? console.log("wo0t"): console.log("boop!")

result = 12;
result = result > 5 ? result > 10? "result is greater than 10" : "result is smaller than 10" : "result is smaller than 5"
console.log(result)