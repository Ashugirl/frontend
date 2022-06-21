// console.log("hello")

// //objects
// let person = {
//     name: "John",
//     age: "25",
//     city: "Antwerp"
// }

// console.log(person);
// console.log()
// console.log(`This person is named ${person.name} and lives in ${person.city}.`);
// console.log("This person is named " + person.name + " and is " + person.age + " years old.")

// //object in object
// let person2 = {
//     name: "John",
//     age: "25",
//     address: {
//         street: "Main St.", 
//         number: 123,
//         city: "Cleveland"
//     }
// }

// console.log(person2.address.street);

// //spread operator
// person2 = {...person2, email: "johnsmith@aol.com"};
// console.log(person2);

// document.querySelector("#data").innerHTML = person2.name;
// document.querySelector("#table>tbody").innerHTML = `<tr>
// <td style="padding:20px; border:2px solid black">${person2.name}</td>
// <td>${person2.age}</td>
// <td>${person2.address.city}</td>
// </tr>`

// //arrays
// let arr1 = [1,2,3,4,5];
// console.log(arr1[3]);

// let arr2 = ["Fred", "Wilma", "Barney", "Betty", "Pebbles", "Bambam"];
// console.log(arr2[3]);
// console.log(arr2.length)
// arr2[5] = "Bam Bam";
// console.log(arr2)

// //elementen toevoegen aan array
// arr2 = [...arr2, "Homer"];
// console.log(arr2);

// arr2.push("Marge");
// console.log(arr2);

//objecten in array
// let students = [
//     {name: "Ross", 
//     age: 23,
//     city: "New York"
// },
// {
//     name: "Rachel",
//     age: 22, 
//     city: "Seattle"
// },
// {
//     name: "Monica",
//     age: 22, 
//     city: "Chicago"
// }
// ]
// console.log(students);
// console.log(students[1].name);

// //for loop
// for(let i = 0; i < students.length; i++){
//     console.log(i);
//     console.log(students[i].name);
//     students[i].id = i;
//     console.log(students);

// };

let students = [
    {name: "Ross", 
    age: 23,
    email: "theRossitron@yahoo.com",
    address:{
        street: "Main St",
        number: 123,
    city: "New York"}
},
{
    name: "Rachel",
    age: 22, 
    email: "r.green@gmail.com",
    address:{
        street: "Pine Ave.",
        number: 234,
    city: "Seattle"}
},
{
    name: "Monica",
    age: 22, 
    email: "tidyGirl@hotmail.com",
    address:{
        street: "Small Rd.",
        number: 566,
    city: "Chicago"}
}
]

for(let x = 0; x < students.length; x++){
    console.log(students[x].name);
    students[x].isStudent = true;
}
console.log(students);

//map method
students.map((student) => {
    console.log(student)
    console.log(`student ${student.name} is ${student.age} years old.`);
})

// students.map((student) => {
//     document.querySelector("#table>tbody").innerHTML = `<tr>
//     <td>${student.name}</td>
//     <td>${student.age}</td>
//     <td>${student.address.city}</td>
//     </tr>`;
// })

students.map((student)=>{
    document.querySelector("#table>tbody").innerHTML += `<tr>
    <td>${student.name}</td>
    <td>${student.age}</td> 
    <td>${student.address.city}</td>
    </tr>`
})