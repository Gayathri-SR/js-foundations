//basic syntax
//async function - always returns a promise
async function greet() {
    return "Hello";
}
//Equivalent to
function greet() {
    return Promise.resolve("Hello");
}

//await keyword - pauses execution until promise resolves
async function example() {
    let result = await Promise.resolve("Hi");
    console.log(result);
}