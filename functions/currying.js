//basic currying
function add(a,b) {
    return a+b;
}
const addCurried = a => b => a+b;
addCurried(2)(3); //6

//Scenario 1: Locking in configuraion
// India tax= 18%, UK tax=20%, US tax=7%
function calculateTax(rate,amount) {
    return amount*rate;
}
calculateTax(0.18,1000);
calculateTax(0.18,2000);
//With currying
const calculateTaxCurried = rate => amount => rate*amount;
const indiaTax=calculateTaxCurried(0.18);
const usTax=calculateTaxCurried(0.07);
indiaTax(1000);
indiaTax(2000);

//Scenario 2: Reusable comparision function
[5,12,20].filter(num => num>5);
[5,12,20].filter(num => num>10);
//with currying
const greaterThan = x => y => y>x;
const greaterThanTen=greaterThan(10);
[5,12,10].filter(greaterThanTen);

//Scenario 3: Clean functional composition
const addNums = x => y => x+y;
const multiply = x => y => x*y;
const add5= addNums(5);
const double=multiply(2);
double(addNums(10)); //30