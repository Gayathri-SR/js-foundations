**Async intro**
-> JS is single-threaded : it does one thing at a time
-> But real apps need to :
    => Fetch data(APIs)
    => Wait for user actions
    => Read files
   Async js lets us start a task amd continue other work without blocking

**Real use cases of async js**
-> API calls(fetch,axios)
-> Form submissions
-> Loading dashboards
-> Debouncing search
-> Authentication flows

**Event loop**
-> JS is: single-threaded, but non-blocking (due to event loop)
-> One call stack, but still handles async tasks smoothly
**Basic model**
Call stack -> Where code runs
Web APIs(browser) -> handles async stuff (fetch,timers)
Callback/Task queue -> stores completed async callbacks
Event loop -> the boss that moves things to stack
**Simple working**
-> If call stack is empty, take task from queue and push to stack
**Browser vs Node.js**
-> Browser - Web APIs handle async
-> Node.js - slightly different ordering rules
    => timers
    => I/O callbacks
    => idle/prepare
    => poll
    => check(setImmediate)
    => close callbacks
**Common mistakes**
-> Thinking setTimeout(fn,0) runs instantly
-> Ignoring microtask priority
-> Not understanding await=promise under the hood
-> Writing blocks loops - freezes UI
**Refer mental model**

**Promises**
-> Promise is an object that represents : "A value that will be available in the future"
-> It has 3 states : 
    => Pending
    => Fulfilled(Resolved)
    => Rejected
**Why they exist**
-> Before promises, JS used callbacks which led to callback hell in few scenarios
-> Promises fix this by making async code chainable and readable
**Promise methods**
-> Promise.all() : Fails if any promise fails
-> Promise.allSettled() : Never fails, gives all results
-> Promise.race() : First one to finish wins
-> Promise.any() : First success wins(ignores failures)
**Note**
-> Modern way of using promises : async/await (syntactic sugar)
-> .then() runs in microtask queue
-> Few methods on promises similar to .then() : .resolve(), .reject(), .finally()
-> Use return() for calling functions inside promises
**Promise chaining**
-> Allows us to execute multiple asynchronous operations in sequence, where each operation starts only after the previous one completes successfully
-> Each .then() returns a new Promise, enabling the chain to continue
-> If a .then() handler returns a value, the next .then() receives that value
-> If it returns a Promise, the chain waits for that Promise to settle before passing it's result to the next handler
-> This pattern avoids callback hell and enables clean, readable, sequential asynchronous code
**API handling** 
-> It refers to making HTTP requests to a server to fetch or send data, commonly using the fetch() API, Axios, or other libraries
**Fetch API**
-> The modern, built-in fetch() method is promise-based and widely used for API calls
-> It returns a Promise that resolves to a Response object
**Axios**
-> A popular, promise-based HTTP client for JS that simplifies making asynchronous HTTP requests from both the browser and Node.js environments
**React Query/TanStack Query**
-> For managing API state in React applications
**Note**
-> Use fetch() for most cases; consider Axios or libraries like React Query for complex apps

**async/await**
-> Even though JS is single-threaded, instead of blocking execution, JS uses Promises for certain tasks
-> But promises can get messy with .then() chains
-> That's where async/await comes in - it makes async code look synchronous
**Top level await**
-> Works only with
    => ES modules (type="module")
    => modern environments
**Common interview traps**
-> await works only inside async
-> async doesn't make code synchronous
-> forgetting try/catch
-> using forEach with await
-> unnecessary awaits(performance hit)