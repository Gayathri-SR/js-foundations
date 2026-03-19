//encapsulation - building data+methods
function Person(name) {
    this.name=name; //data
}
Person.prototype.sayHi=function() {}; //behavior

//polymorphism - same method, different behavior
class Animal {
    speak() {
        console.log("Animal speaks");
    }
}
class Dog extends Animal {
    speak() {
        console.log("Dog barks"); //same method speak(), but different output
    }
}

//abstraction - hiding internal complexity
class Car {
    start() {
        this.#igniteEngine(); //hidden logic
    }
    #igniteEngine() {
        console.log("Engine started");
    }
}
//user doesn't need to knw internal steps