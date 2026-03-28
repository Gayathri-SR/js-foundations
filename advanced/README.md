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