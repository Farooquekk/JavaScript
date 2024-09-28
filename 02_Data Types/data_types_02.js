// how you store and retrive data from memory on that bases it is divided into 2 categories

// primitive (call by value --> copy of that, not change in original value)
// 7 types: string, number, boolean, null, undefined, symbol, bigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmial;

const id = Symbol('123')
const id1 = Symbol('123')

const bigNumber = 1234568910112n 

console.log(id);
console.log(id1);






// non primitive (call by referance)
// It includes: Array, Objects, Functions

const heros = ["Thor","Ironman","Hulk","Batman"]
let myObj = {
name : "Farooque",
age:22,
}

const myFunction = function(){

    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outSideTemp);
console.log(typeof userEmial);
console.log(typeof heros);
console.log(typeof myFunction);

// ************* Memory ************************

// Stack(Primitive), Heap (Non-Primitive)

let name = "Farooque"
