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

//sequential(slow)
await task1();
wait task2();
await task3();
//Parallel(fast) - use when tasks are independent
await Promise.all([task1(),task2(),task3()]);

//async function always returns a promise
async function test() {
    return 10;
}
test().then(console.log);

//mixing await+then - works, but avoid mixing styles(confusing)
await fetchData().then(res => console.log(res));

//Promise.all vs Promise.allSettled
//fails if one fails
Promise.all([p1,p2]);
//always returns results
Promise.allSettled([p1,p2]);

//race condition - returns first completed promise
Promise.race([p1,p2]);

//async IIFE
(async function() {
    const data = await fetchData();
    console.log(data);
})();