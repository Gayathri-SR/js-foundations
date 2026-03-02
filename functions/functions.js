//function declaration
greet();
function greet() {
    console.log("Hi!");
}
greet();

//function expression
// greetExp(); - results in error
const greetExp = function() {
    console.log("Hello!");
}
greetExp();

//Arrow functions
//greetArrow(); - results in error
const greetArrow = () => console.log("Welcome!");
greetArrow();

const add = (a,b) => a+b;
console.log(add(5,3));