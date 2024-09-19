
// let a = 10
// const b = 20
// var c = 30

// { } almost scope in every programming language

// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30    // or c = 40m
// }

// let num = 100
// function numf() {
//     console.log(num);
//     let num1 = 2
//     console.log("Inner :" + num1);

// }
// numf();


// console.log(a); // error
// console.log(b); // error
//console.log(c); // interseting --> no error
 
// Nested Function

// function one() {
//     const username = "Farooque"

//     function two() {
//         const website = "youtube"
//         console.log(username);
//     }
//     //console.log(website); will cause error
//     two();
// }
// one();

if (true) {
    const userName = "Farooque"
    if (userName === "Farooque") {
        const web = " Coursera.com"
        console.log(userName+web);
    }
   // console.log(web);
}
//console.log(userName);

// ****** Interesting Concept ********
console.log(addOne(2)); // this will not cause any error

function addOne(num) {
    return (num+1);
     
}
//addOne(5)

console.log(addOne(2));

console.log( addTwo(5));// this line will give you error b/c you are storing value in a variables

const addTwo = function (num) { // also called expressions
    return num + 2;
}
addTwo(5);



