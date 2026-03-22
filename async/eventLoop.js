//microtask starvation
function loop() {
    Promise.resolve().then(loop);
}
loop();
setTimeout(()=> console.log("timeout"),0); //may never run - microtasks keep filling themselves. Event loop never reaches macrotask queue

//async/await internals
async function test() {
    console.log("1");
    await Promise.resolve(); // pauses function -> Rest goes to microtask queue
    console.log("2"); 
}
console.log("3");
test();
console.log("4"); // 3 1 4 2