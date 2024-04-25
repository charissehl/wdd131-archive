const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
    const name = prompt("What is your name?");
    alert(`Hello ${name}, nice to see you!`);
    headingA.textContent = `Welcome ${name}`;
};

// to declare a variable: use "let" followed by the name you want to call your variable: 
// eg 

let myName;
let myAge;

myName = "Chris";
myAge = 37;

let myDog = "Rover";



/* 

VAR : outdated. but some info on it:

For a start, if you write a multiline JavaScript program that declares and initializes a variable, you can actually declare a variable with var after you initialize it and it will still work. For example:

JS
Copy to Clipboard
myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

var myName;

Note: This won't work when typing individual lines into a JavaScript console, just when running multiple lines of JavaScript in a web document.

With var you can declare the same variable as many times as you like, but with let you can't. 

*/

let myName = "Chris";
myName = "Bob";

myName = "Bob";
myAge = 40;

//arrays
let myNameArray = ["Chris", "Bob", "Jim"];
let myNumberArray = [10, 15, 40];

myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40

//objects
let dog = { name: "Spot", breed: "Dalmatian" };
dog.name;

//dynamic typing
let myNumber = "500"; // oops, this is still a string
typeof myNumber;
myNumber = 500; // much better — now this is a number
typeof myNumber; //typeof returns the data type of the variable you type after it



//CONSTANTS

const bird = { species: "Kestrel" };
console.log(bird.species); // "Kestrel"

bird.species = "Striated Caracara";
console.log(bird.species); // "Striated Caracara"

/* 
LET vs CONST and when to use them:

Use const when you can, and use let when you have to.

*/
