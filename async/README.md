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