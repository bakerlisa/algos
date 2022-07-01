// Scooping in JS
var number = 10; // declared as a global scope

function calc(){
   var number = 10; // local scope, can't get it outside of the function
    return number
}

console.log(number);


// 1. Can we make everything a global var?
    // a. can't reuse the same name, local vartake up a lot less space

