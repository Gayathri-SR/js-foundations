function Car(model,year) {
    this.model=model;
    this.year=year;
}

//Add a method to the car prototype
Car.prototype.start = function() {
    console.log(`The ${this.model} is starting`);
};
//Here, start() is defined on Car.prototype - so both car1 and car2 inherit it without duplicating the method

const car1=new Car("Mustang",1964);
const car2=new Car("Corolla",1966);
car1.start();
car2.start();

//Using Object.create() for prototype inheritance
const animalPrototype = {
    eat() {
        console.log(`${this.name} is eating`);
    },
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
};

const dog=Object.create(animalPrototype);
dog.name="Rex";
dog.eat();
dog.sleep();
//Here, dog inherits eat() and sleep() from animalPrototype

//prototype with classes
class Person {
    constructor(name) {
        this.name=name;
    }

    sayHi() {
        console.log("Hi "+this.name);
    }
}
//Behind the scene : Person.prototype.sayHi

//checking prototypes
Object.getPrototypeOf(dog);
dog.__proto__;

const animal={
    eats:true
};
const dog1={};
dog1.__proto__=animal;
console.log(dog1.eats); //true

//prototype chain
const cat=Object.create(animal);
cat.meow=function() {
    console.log("Meow");
};
cat.meow(); //Meow
cat.eats; //true
//Prototype chain lookup
//cat.eats -> check cat object (no eats) -> check cat.[[Prototype]] which is animal (found eats) -> return true
cat.talks; //undefined
//When prototype doesn't exist anymore
//cat.talks -> cat.prototype -> animal.prototype -> Object.prototype -> null (result=undefined)