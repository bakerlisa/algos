// OVERALL Scooping in JS
var number = 10; // declared as a global scope

function calc(){
   var number = 10; // local scope, can't get it outside of the function
    return number
}

console.log(number);


// 1. Can we make everything a global var?
    // a. can't reuse the same name, local vartake up a lot less space

// VAR SCOOPING
// https://www.youtube.com/watch?v=aK_nuUAdr8E&list=PL0eyrZgxdwhxNGMWROnaY35NLyEjTqcgB&index=17
// by wrapping a var or function in {} we crate a new scope : block scope
// functino scope  - only acces var we creat inside that function

// BUT if we do a block (if, loops) we can still access those var outside of that block scope -< due to hoisting

