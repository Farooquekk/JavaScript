// IIFE --> Immediately Invoked Function Expression

// (function chai() { // named IIFE
//     console.log(`DB CONNECTED`);
// })(); // to end this end ;
// first ()1 for function definition and ()2 for execution

//chai();
// To remove the pollution of global scope we use IIFE

((name) => { // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('Farooque');

// Two 
