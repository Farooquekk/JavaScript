// singleton
// object.create

// object literals
const mySym = Symbol("Key1")

const jsUser = {
    "name" : "Farooque",
    age : 20,
    [mySym] : "Key_1", // [] is must other wise it will be a sting not a symbol
    location:"MPK",
    email:"Farooque@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]


}

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// jsUser.email = "FarooqueSajjad@gmail.com"
// console.log(jsUser);
// Object.freeze(jsUser)
// jsUser.email= "farooque_kk@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greeting2 = function(){
    console.log(`Hello js user ${jsUser.name}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting2);
console.log(jsUser.greeting());
console.log(jsUser.greeting2());
