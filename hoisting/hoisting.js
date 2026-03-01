console.log(a); //prints undefined
var a=10;

//Looks like this after hoisting:
// var a
// console.log(a)  | Temporal Dead Zone
// a=10

console.log(b); //ReferenceError
let b=20;

console.log(c); //ReferenceError
const c=30;