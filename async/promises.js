//creating a promise
const myPromise = new Promise((resolve,reject) => {
    let success = true;
    if(success) {
        resolve("Task completed");
    } else {
        reject("Task failed");
    }
});

//consuming a promise
myPromise.then((result) => {
            console.log(result); //success
            })
            .catch((error) => {
                console.log(error); //failure
            });

//chaining promises
fetchData().then((data) => processData(data))
            .then((processed) => saveData(processed))
            .catch((err) => console.log(err));
//Each .then() returns a new Promise

//real world eg to fetch from API
fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err)); //errors bubble down to catch

//Promise.all()
Promise.all([p1,p2,p3]).then().catch()
//Promise.allSettled()
Promise.allSettled([p1,p2]).then()
//Promise.race()
Promise.race([p1,p2]).then()
//Promise.any()
Promise.any([p1,p2]).then()