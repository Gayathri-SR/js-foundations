//'this' depends on how the function is called
const user={
    name: "Gayathri",
    greet: function() {
        console.log(this.name);
    }
};
user.greet(); //Gayathri

//Do not have their own 'this' - inherited from surrounding scope
const user1={
    name: "Gayathri",
    greet:()=> {
        console.log(this.name);
    }
};
user1.greet(); //undefined

//has an arguments object
function test() {
    console.log(arguments);
}
test(1,2,3);

//no arguments
const test1=()=> {
    console.log(arguments); //error in browser, arguments of wrapper function in node
};
//test1(1,2,3);
//Instead use rest parameters
const test2=(...args)=> {
    console.log(args);
};
test2(1,2,3);

//can use with new
function Person(name) {
    this.name=name;
}
const p1=new Person("Gayathri"); //no error

//cannot be used with new
const Person1=(name)=> {this.name=name;};
//new Person1("Gayathri"); //TypeError