let globalLet=10;

function letTest() {
    let globalLet=20;

    if(true) {
        //Gets re-declared as scopes are different
        let globalLet=30;
        console.log("Inside block : " + globalLet);
    }
    console.log("Inside function : " + globalLet);
}

letTest();
console.log("Global test : " + globalLet);

// O/P : 30 20 10