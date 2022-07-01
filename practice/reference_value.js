let a = 10
let b = "Hi"
var c = [1,2]
var d = [1,2]
// d.push(3)
// d = [3,4,5]


console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(c === d)
console.log(c == d)
// arrays, objects and stored with a memeory location 
// c only changes if we change whats at the memory location

// 1. Odd comparsion one
// var c = [1,2]
// var d = c
// console.log(c === d)
// console.log(c == d)
// 
// True
// True
// Because its comparing memory locations

// 2. Odd comparsion two
// var c = [1,2]
// var d = [1,2]
// console.log(c === d)
// console.log(c == d)
// 
// False
// False
// Because its comparing memory locations