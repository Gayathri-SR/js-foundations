**Debouncing**
-> A technique to control how often a function runs
-> Instead of running a function every single time an event fires, you wait for a pause, then run it once
**Real-life example**
-> In a search bar, user types:
    h -> API call x
    he -> API call x
    hel -> API call x
    hello -> API call
    This is wasteful
-> With debouncing,
    User types continuously - no call
    User stops typing for 500ms - one API call
**Usage**
-> Search inputs
-> Window resize events
-> Scroll events
-> Button spam prevention

**Throttling**
-> Ensures a function runs at a fixed interval, no matter how many times the event fires
(You can call me many times, but I'll only respond every x milliseconds)
**Real-life example**
-> Think of scrolling:
    user scrolls -> event fires 100+ times/second
    You only want to update UI every 200ms
-> Throttling = controlled, steady execution
**Usage**
-> Scroll events
-> Resize events
-> Mouse movements
-> Rate-limited APIs

**Note**
-> Throttle=I'll keep responding, but at a controlled pace
-> Debounce=I'll wait until you're completely done
-> Why not just debounce everything?
    -> Debounce misses intermediate states
    -> Throttle captures ongoing behavior

**Polyfills**
-> Code that adds modern functionality to older browsers that doesn't support it (like a fallback implementation)
**Need**
-> JS keeps evolving (ES6, ES7 etc,.) but:
    => Older browsers (or environments) don't support new features
    => You still want your app to work everywhere
-> So you "fill in the gaps" - poly+fill=polyfill
**Real-life example**
-> Older browsers didn't support 'Promise'
-> So libraries like core-js, es6-promise provide polyfills so this works everywhere:
    new Promise((resolve,reject) => {
        resolve("Done);
    });
**Working**
-> Check if feature exists
-> If not, define it manually

**Polyfill vs Transpiler**
-> Polyfill - adds missing functionality at runtime
-> Transpiler - Converts modern JS to older JS (like Babel)
**Eg**
-> ?. (Optional chaining) - handled by Babel
-> Promise - needs polyfill
**When to use**
-> Supporting older browsers (like IE/old Android WebView)
-> Working on production apps with wide audience
(Usually not written manually anymore)
-> Tools like Babel + core-js handle it automatically
**think of polyfills like**
-> Installing missing apps on an old phone so it can run modern features

**Fetch API**
-> A modern, promise-based JS interface for making HTTP requests to fetch resources, instead of XMLHttpRequest
-> It is built into modern browsers
-> Allows developers to perform network requests using standard methods like GET, POST, PUT and DELETE without needing external libraries
-> Always succeeds and never returns an error (status code for success and failure)