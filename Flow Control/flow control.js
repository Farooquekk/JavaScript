
// logic flow
// 1. if statement
// if (true) { // execute
    
// }
// if (false) { // not execute
    
// }

// const isUserLoggedIn = true
// const temp = 47
// if (temp < 50) {
//     console.log("Temp is less then 50");
    
// }
// else {
//     console.log("Temp is greater then 50"); // depend on condition

// }
// console.log("Temp is greater then 50"); // 100 percent execute

// = for assignment
// == for checking

// <,>,<=,>=,!=,==,===,!==

// checking of == and ===

// if (2 === "2") {
//     console.log("Yes");
// }


///////////////////

// const score = 200
// if (score > 100) {
//     const power = "FLY"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);
// scope of var is completely global

////////////////
// const balance = 1000
// if (balance > 500) console.log("test"); // implicit scope

// if (balance > 500) console.log("test"),
//     console.log("test 2"); // unreadable code


//   nested structure
// const balance = 1000

// if (balance < 500) {
//     console.log("less than");
// } else if(balance<750){
// console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCart = true
const loggedInFromEmail = true
if (userLoggedIn && debitCart && 2==3) {
    console.log("Allow to buy courses");
}

if (loggedInFromEmail || userLoggedIn) {
    console.log("User Logged in");
}
