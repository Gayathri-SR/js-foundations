//All examples for brwser
// In global context
console.log(this); //window in browser & {} in node

console.log("**Global context over**");

//Inside regular function
function show() {
    console.log(this);
}
show(); //window
console.log("**show over**");

"use strict"
function showTest() {
    console.log(this);
}
showTest(); //undefined
console.log("**showTest over**");

//Inside object method
const user = {
    name : "Gayathri",
    greet() {
        console.log(this.name); // Gayathri
    }
};
user.greet();
setTimeout(user.greet,1000); //undefined as function is detached from object
setTimeout(user.greet.bind(user),1000); // Gayathri

//Method extraction
const fn=user.greet;
fn(); //undefined

//Inside arrow functions
const obj = {
    name : "Gayathri",
    greet : () => {
        console.log(this.name);
    }
};
obj.greet(); //undefined
//Arrow functions capture 'this' from where they're created, not where they're called
// They do not have their own 'this'. They inherit it from their surrounding scope
const obj1= {
    name : "Gayathri",
    greet() {
        const inner = () => {
            console.log(this.name);
        };
        inner();
    }
};
obj1.greet(); // Gayathri
// Arrow function inherited 'this' from greet()

//this with call()
function greetNew(city) {
    console.log(this.name+" "+city);
}
const userNew = {name:"gayathri"};
greetNew.call(userNew,"Bangalore"); //call() lets us manually set 'this'

//this with apply()
greetNew.apply(userNew,["Bangalore"]); //same as call() but arguments are passed as an array

//this with bind()
const fnNew = greetNew.bind(userNew); //bind() creates a new function with fixed 'this'
fnNew(); // bind does'nt execute immediately

//this in constructor functions
function PersonCons(name) {
    this.name=name;
}
const pCons=new PersonCons("G3"); //With 'new', this=newly created object
console.log(pCons.name);

//this in classes
class PersonClass {
    constructor(name) {
        this.name=name;
    }
    greet() {
        console.log(this.name); //this=instance
    }
}
const pClass=new PersonClass("G3");
pClass.greet();

//IN BROWSERS

//this in event handlers
button.addEventListener("click", function() { //this refers to the element that triggered the event
    console.log(this); //button
});
//with arrow function
button.addEventListener("click",()=> {
    console.log(this); //outer scope-not button
});