//Let's say an old browser doesn't support :
Array.prototype.includes();
//You can write your own version:
if(!Array.prototype.includes) {
    Array.prototype.includes = function(value) {
        return this.indexOf(value) !== -1;
    };
}
//Now even old browsers can use :
console.log([1,2,3].includes(2)); //true

//basic working
if(!featureExists) {
    //define polyfill
}