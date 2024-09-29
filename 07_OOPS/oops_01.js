
// Object Literals

// propertires

const user = {
    userName: "Farooque",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        //console.log('Got user details from database');
       //console.log(`UserName : ${this.userName}`);
       //console.log(`UserName : ${userName}`); // this will give you error
       console.log(this);
    }
    
}

// console.log(user.userName);
console.log(user.getUserDetails());

console.log(this); // this will give you {}

// constructor function

// const promiseOne = new Promise();
// const date = new Date();

function User(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function () {
        console.log(`Welcome${this.userName}`);
    }

    return this;
}

const userOne = new User('Farooque', 10, true);
//console.log(userOne);
const userTwo = new User('ChaiOrCode', 11, false);
//console.log(userTwo);

console.log(userOne.constructor);
console.log(userTwo.constructor);



// new keyword
// when use new keyword an empty object is created which is called instance.
