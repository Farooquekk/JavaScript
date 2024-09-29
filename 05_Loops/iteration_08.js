
// reduce method

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc : ${acc} and currVal : ${currVal}`);
//     return acc + currVal;
// }, 0) // 0 is the value of acc


// const myTotal = myNums.reduce((acc, currVal) => acc + currVal, 0) // intial value of acc
// console.log(myTotal);

const shoppingCart =[
{
    itemName: "js course",
    price:"2999"
},
{
    itemName: "python",
    price:"3999"
},
{
    itemName: "mobile dev course",
    price:"5999"
},
{
    itemName: "data science course",
    price:"12999"
}
]

const priceToPay = shoppingCart.reduce((acc, item) => acc+item.price, 0)
console.log(priceToPay);

console.log(shoppingCart);





//console.log(myTotal);
