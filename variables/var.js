var globalVar=10;

function testFunction() {
    var globalVar=20;

    if(true) {
        var globalVar=30;
        console.log("Inside block : " + globalVar);
    }

    //globalVar gets re-declared to 30 as var doesn't respect block scope
    console.log("Inside function : " + globalVar)
}

testFunction();
console.log("Global scope : " + globalVar);

// O/P : 30 30 10