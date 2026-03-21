//Async basic
const data= fetchData(); //blocks everything
fetchData().then(data => { //start it now, handle result later
    console.log(data);
});

//callbacks(old way)
setTimeout(()=> {
    console.log("Done");
},1000);
//Problem : callback hell
DoA(()=> {
    DoB(()=> {
        DoC(()=> {
            //nightmare
        });
    });
});

//Promises(much better) - It's like "I promise I'll give you a result later"
const promise = fetch("https://api.com/data");
promise.then(res=> res.json())
        .then(data=> console.log(data))
            .catch(err=> console.log(err));
// States : Pending, fulfilled, rejected

//Async/Await (modern & clean)
async function getData() {
    try {
        const res=await fetch("https://api.com/data");
        const data=wait res.json();
        console.log(data);
    } catch(err) {
        console.log(err);
    }
}
//Looks synchronous, but is async underneath

//Event loop - Even 0ms timeout doesn't run immediately
console.log("A");
setTimeout(()=> {
    console.log("B");
},0);
console.log("C"); //A C B

//Microtasks vs Macrotasks
console.log("start");
setTimeout(()=> console.log("timeout"));
Promise.resolve().then(()=> console.log("promise"));
console.log("end"); //start end promise timeout
//Priority : Sync code -> Microtasks(promises) -> Macrotasks(setTimeout)