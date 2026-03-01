const globalConst=10;

function constTest() {
    const globalConst=20;

    if(true) {
        //Same as let - Gets re-declared since scopes are different
        const globalConst=30;
        console.log("Inside block : " + globalConst);
    }
    console.log("Inside function : " + globalConst);
}

constTest();
console.log("Global test : " + globalConst);

// O/P: 30 20 10