var aVar=10;
aVar=20;

let aLet=20;
aLet=30;

//const cannot be reassigned
const aConst=30;
// aConst=40;

console.log(aVar);
console.log(aLet);
console.log(aConst);

const aConstObject = { myname : "Gayathri"};
console.log(aConstObject.myname);

//The variable declared as const cannot be reassigned - but the object can be mutated
aConstObject.myname="Gayathri SR";
console.log(aConstObject.myname);