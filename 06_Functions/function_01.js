
// console.log("F");
// console.log("A");
// console.log("R");
// console.log("O");
// console.log("O");
// console.log("Q");
// console.log("U");
// console.log("E");

function sayMyName(){
    console.log("F");
    console.log("A");
    console.log("R");
    console.log("O");
    console.log("O");
    console.log("Q");
    console.log("U");
    console.log("E");
}
//sayMyName // reference
// sayMyName() // execute

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2); 
// }
// addTwoNumbers(3,4);
// addTwoNumbers(3,"4");
// addTwoNumbers(3,"a");
// addTwoNumbers(3,null);
// const result = addTwoNumbers(10,20); // imp --> concept
// console.log(result);

function addTwoNumbers(number1,number2){
    let result = number1+number2;
        return result;
    //    console.log("H"); unreachable code
}
// const result = addTwoNumbers(4,3);
// console.log("Result = ",result);

// function loginUserMessage(username){
// return `${username} just logged in`;
// }
// console.log(loginUserMessage("Farooque"));

// function loginUserMessage(username = "Saim"){
//     if(username===undefined){ // or (!username)
//         console.log("Please Enter a Name");
//         return;
//     }
// return `${username} just logged in`;
// }
// console.log(loginUserMessage("Farooque"));
// console.log(loginUserMessage());
// rest operator --> ...

// function calculateCartPrice(...num1){
//     return num1;
// }
// console.log(calculateCartPrice(200,400,500));

// function calculateCartPrice2(val1,val2,...num1){
//     return num1;
// }
// console.log(calculateCartPrice2(1000,100,200,400,500));

const user = {
    userName : "farooque",
    price : 1009
}
function handleObject(anyObject){
    console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`);
}
//console.log(handleObject(user)); // while working with OBJS type safety is very important
console.log(handleObject({userName : "Saim",price : 120}));

const newArray = ["Farooque","Sajjad"];
function arrayValue(array){
    return array[1];
}
console.log(arrayValue(newArray));
console.log(arrayValue([1,2,34,,5,6]));
