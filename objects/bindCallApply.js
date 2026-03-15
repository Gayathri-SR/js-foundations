const person= {
    name : "Gayathri"
};
function greet(age,city) {
    console.log(this.name,age,city);
}
const age=25, city="BLR";

//call
greet.call(person,age,city);

//apply
greet.apply(person,[age,city]);

//bind
const greetPerson=greet.bind(person);
greetPerson(age,city);