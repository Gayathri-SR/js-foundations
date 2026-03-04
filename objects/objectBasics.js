//simple example
const person = {
    name: "Gayathri",
    age: 25,
    isEngineer: true
};

//Accessing properties
//Dot notation
console.log(person.name);
//Bracket notation
console.log(person["name"]);

//Adding and modifying properties
person.city= "Bangalore";
person.age= 24;

//Deleting properties
delete person.city;

//Methods(functions inside objects)
const user = {
    name : "Gayathri",
    greet() {
        return `Hello ${this.name}`;
    }
};
console.log(user.greet());
const greetFn=user.greet();
console.log(greetFn()); //TypeError

//Object creation
//object literal
const obj={};
//constructor function
function Person(name) {
    this.name=name;
}
const p=new Person("Gayathri");
//Class syntax
class Person {
    constructor(name) {
        this.name=name;
    }
}
const p1=new Person("Gayathri");

//Passing objects
const a={x:1};
const b=a;
b.x=10;
console.log(a.x); //10 - both a and b point to the same memory location

//Shallow copy
const original = {
    name: "abc",
    details : {
        age : 25
    }
};
const shallowCopy={...original};
shallowCopy.details.age=30;
shallowCopy.name="name changed!";
console.log(original.details.age); //30
console.log(original.name); //abc
console.log(shallowCopy.name); //name changed!

//Deep copy
const originalNext = {
    name: "abc",
    details : {
        age : 25
    }
};
const deepCopy = JSON.parse(JSON.stringify(originalNext));
deepCopy.details.age=30;
console.log(originalNext.details.age); //25