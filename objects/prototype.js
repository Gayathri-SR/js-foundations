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