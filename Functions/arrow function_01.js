// arrow function is one of the feature of ES6 features of JS

const user = {
    userName: "farooque",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.userName}, welcome to website`);// this means current context
    console.log(this); 
    }
}

// user.welcomeMessage()
// user.userName = "saim"
// user.welcomeMessage()

//console.log(this); // in node environment this refers to {} ---> empty string

// note:- global object in browser is windows

// function chai() {
//     let userName = "Farooque"
//     console.log(this.userName); // undefined --> within the function if you call this will give you undefined
// }
// chai();

// const chai = function () {
//     let userName = "Farooque"
//     console.log(this.userName);
// }

// in ES6 feature

// const chai = () => {
//     let userName = "Farooque"
//      console.log(this.userName);
// }
// chai();


// const addTwo = (num1,num2) =>{
// return(num1+num2) // explicit return
// }
// console.log(addTwo(2, 18));

// const addTwo = (num1,num2) => num1+num2
// console.log(addTwo(2, 18));

// when you write return keyword than you need this {} otherwise not
// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3,8));// implicit return
const addTwo = (num1, num2) => ({userName:"Farooque"})
console.log(addTwo(3, 8));


const myArray = [3, 2, 4, 65, 8]
myArray.forEach(() => { })
