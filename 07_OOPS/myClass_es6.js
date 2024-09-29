
// after ES6

// this is syntactical sugar

// class User{

//     constructor(userName, email, password) {
//         this.userName = userName;
//         this.email = email;
//         this.password = password;
// }

//     encryptPassword() { // methods
//         return `${this.password}abc`
//     }
//     changeUserName() {
//         return`${this.userName.toUpperCase()}`
//     }

// }

// const chai = new User('chai', '@gmail.com', '123');

// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

// behined the scene

function user(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password; 
}


user.prototype.encryptPassword = function () {
    return`${this.password}abc`
}
user.prototype.changeUserName = function () {
    return`${this.userName.toUpperCase()}`
}


const user1 = new user('tea', 'f', '12');
console.log(user1.changeUserName());
console.log(user1);
