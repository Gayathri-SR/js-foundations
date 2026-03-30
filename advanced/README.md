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