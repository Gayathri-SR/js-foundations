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