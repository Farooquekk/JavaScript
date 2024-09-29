// Iterations or Loops

// 1) For
// for (let i = 0; i < 10; i++) { // ctrl+d to select same keywords
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
    
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value : ${i}`);
//     for (let j = 0; j <= 10; j++) {
//      //   console.log(`Inner loop value: ${j} and inner loop ${i}`);
//        console.log(i + "*" +j + " = " + i*j);
//     }
    
// }

// let myArray = ["flash", "batman", "padman"]
// console.log(myArray.length); // length() will cause error
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }
// there is no array index out of bound exception instead --> there is undefined


//// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) { 
//         console.log(`Detected 5`);
//         break;
//     }
//         console.log(`value of i is ${index}`);
    
// }
for (let index = 1; index <= 20; index++) {
    if (index == 5) { 
        console.log(`Detected 5`);
        continue;
    }
        console.log(`value of i is ${index}`);
    
}





