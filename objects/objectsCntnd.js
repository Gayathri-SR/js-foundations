const person={
    name : "Gayathri",
    age : 24,
    city : "Bangalore"
};

for(const key in person) {
    if(Object.hasOwn(person,key)) { //checks if the property belongs to the object itself
        console.log(`${key} : ${person[key]}`);
    }
}

const obj={a:1,b:2,c:3};
Object.keys(obj).forEach(key => {
    console.log(`${key} : ${obj[key]}`)
});

for(const value of Object.values(obj)) {
    console.log(value);
}

for(const [key,value] of Object.entries(obj)) {
    console.log(`${key} : ${value}`);
}

//destructuring
const {name,age} =person;
console.log(name);
console.log(age);

const {name: fullName, age: years}=person;
console.log(fullName);
console.log(years);

//nested destructuring
const user = {
    profile: {
        details: {email : "gayathri@gmail.com"}
    }
}
const {profile: { details : {email}}} = user;
console.log(email);

//default values
const {newName, hobby="reading"} = {name : "Bob"};
console.log(hobby);

//object freezing
Object.freeze(user);