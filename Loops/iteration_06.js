
// const coding = ["js", "ruby", "java", "python", "c++"]

// const values = coding.forEach((item) => {
//     console.log(item);
// })
// console.log(values);
// // for each loop does'nt return any value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) =>num>4
// ) // takes call back
// console.log(newNums);

// const newNums = myNums.filter((num) => {
//    return num>4
   
// }    // when using scope {} explicit return keyword must be needed
// ) // takes call back
// console.log(newNums);

// const newNums = []
// myNums.forEach((num) =>{
//     if (num > 4) {
//       newNums.push(num)
//   }
// })
// console.log(newNums);

// array of book object is needed download from Internet

const userBooks = books.filter(() => bk.genre === 'History')
console.log(userBooks);
const userBooks2 = books.filter((bk) => {
    return bk.publish>=2000&& bk.genre==="History"
})
console.log(userBooks2);
