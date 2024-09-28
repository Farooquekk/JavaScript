// const userEmail = "farooque@.ai"
// const userEmail2 = []

// if (userEmail) {
//     console.log("Got UserEmial");
// } else {
//     console.log("Don't have user email");
// }

// falsy values
// false, 0 ,-0, BigInt--> 0n, "",null, undefined, NaN

// Except these all values are truthy values
// Truthy Values --> "0", 'false' or "false", " ", [], {}, function(){}

// function(){} --> empty function

// if (userEmail2.length==0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length == 0) {
//     console.log("Object is Empty");
// }

// IMP Note
// flase == 0 --> true
// false == "" --> true
// 0=='' --> true

////////////////////////
// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 // related to database
// val1 = undefined ?? 15
 val1 = null ?? 10 ?? 20 // by default 1 value assign

console.log(val1);
// NCP and terniary operator are 2 differnt things

// condition?true:false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"):console.log("more than 80");
