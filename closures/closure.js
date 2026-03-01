function outer() {
    let count=0;

    return function inner() {
        count++;
        console.log(count);
    }
}

const counter=outer();

counter(); //prints 1
counter(); //prints 2

let test=10;
const testClosure = function() {
    test++;
    console.log(test);
}

testClosure(); //11
testClosure(); //12

function outerF() {
    let count = 0;

    return function innerF() {
        count++;
        return count;
    }
}

const c1 = outerF(); // both remember their own copy of the environment
const c2 = outerF();

console.log(c1()); //1
console.log(c1()); //2
console.log(c2()); //1