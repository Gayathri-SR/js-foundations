function throttle(func, limit) {
    let lastCall=0; //stores last execution time

    return function(...args) {
        const now=Date.now();
        if(now-lastCall>=limit) { //has enough time passed? yes-> run function, no-> ignore
            lastCall=now;
            func.apply(this,args);
        }
    };
}

function onScroll() {
    console.log("scroll fired");
}

const throttledScroll=throttle(onScroll,1000);
window.addEventListener("scroll",throttledScroll);
//no matter how fast you scroll, it logs once per second