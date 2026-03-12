**Mental model one**
JS is single threaded
---------------------
-> JS runs one task at a time in a single thread
-> So the engine uses a system with 
    => Call stack
    => Web/Node APIs
    => Task Queue (Macrotask queue)
    => Microtask queue
    => Event loop
-> These pieces work together to make async code possible
1. Call stack
-> Behaves like a stack of plates
-> Example:
function one() {
    two();
}
function two() {
    console.log();
}
one();
-> Call stack:
one();
two();
console.log();
-> unwinds as:
console.log();
two();
one();
2. Web/Node APIs
-> Things like setTimeout, fetch, DOM events, SetInterval do not run in the JS engine. They run in the web/node APIs
-> When finished, callback goes to the task queue
3. Task/Macrotask queue
-> Callbacks from setTimeout, setInterval, DOM events go into the task queue
-> But these cannot run immediately. They wait until call stack is empty
4. Microtask queue
-> Microtasks include - Promise.then, Promise.catch, queueMicrotask, MutationObserver
-> They run before the task queue
5. Event loop
-> The event loop constantly checks:
    "Is the call stack empty?"
    If yes,
    => Run all microtasks first
    => Run one macrotask
    => Repeat