const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map((num) => num + 10)
// console.log(newNums);
// map automatically returns value

// channing
// const newNums = myNumbers
//     .map((num) => num * 10)
//     .map((num) => num + 1)
//     .filter((num) => num >= 40)
    
//     console.log(newNums);

//console.log(myNumbers.map((num) => num + 12));
// const arr = myNumbers.map((num) => num + 12).map((n)=> n*2).filter((m)=>m>30);
// console.log(arr);

const arr = myNumbers.map((num) => num + 1).map((num) => num - 1).
    map((num) => num + 1).filter((num) => num > 5);
    console.log(arr);

