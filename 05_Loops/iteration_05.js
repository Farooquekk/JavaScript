// for each loop

const coding = ["js", "ruby", "java", "python", "c++"]
  
// coding.forEach(function (item) {
//     console.log(item);

// })
// for each need a call back function
// call back function don't have name

// using arrow function
// coding.forEach((item) => {
//  console.log(item);

// })

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe); // just give reference

// coding.forEach((item,index,arr) => {
    
//     console.log(item,index,arr);
// })


const myCoding = [
    {
    languageName: "javascript",
    languageFileName: "js"
    
},
{
    languageName: "Java",
    languageFileName: "java"
    
},
{
    languageName: "python",
    languageFileName: "py"
    
},
]
myCoding.forEach((item) => {
    console.log(item.languageFileName," , " , item.languageName );
})


