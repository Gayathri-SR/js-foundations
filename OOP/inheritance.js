const animal={
    eats: true,
    walk() {
        console.log("Animal walks");
    }
};
const dog=Object.create(animal);
dog.bark=function() {
    console.log("Dog barks");
};
dog.bark(); //own
dog.walk(); //inherited
console.log(dog.eats); //inherited

//Constructor function inheritance
//Step 1: Parent constructor
function Human(name) {
    this.name=name;
}
Human.prototype.eat = function() {
    console.log(this.name+" eats");
};
//Step 2: Child constructor
function Baby(name,gender) {
    Human.call(this,name); //inherit properties - copies property from Human to Baby
    this.gender=gender;
}
//Step 3: Link prototypes
Baby.prototype=Object.create(Human.prototype); // inherits methods - makes methods of Human accessible to Baby
//This sets up Baby.prototype -> Human.prototype
//Step 4: Fix constructor reference
Baby.prototype.constructor=Baby;
//Step 5: Add child methods
Baby.prototype.talk=function() {
    console.log("Babbling");
};
//Final usage
const b=new Baby("abc","Female");
b.eat(); //inherited
b.talk(); //own

//ES6 class inheritance
class Human1 {
    constructor(name) {
        this.name=name;
    }
    eat() {
        console.log(this.name+" eats");
    }
}
class Baby1 extends Human1 {
    constructor(name,gender) {
        super(name); //calls parent constructor
        this.gender=gender;
    }
    talk() {
        console.log("Babbling 1");
    }
}
const b1=new Baby1("def","Male");
b1.eat();
b1.talk();
//extend internally does Baby.proto -> Human.proto
// super() is equivalent to Human.call(this,name);