// Literals --> using constructor
const tinderUser = new Object();
// const tinderUser_2 = {} // non singleton object
// console.log(tinderUser);
// console.log(tinderUser_2);
tinderUser.id = "123abc"
tinderUser.name = "saim"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const user = {
email : "Tom@gmial.com",
fullName : {
userFullName:{
    firstName:"Farooque",
    lastName:"Sajjad"
}
}
}
// console.log(user);
// console.log(user.fullName);
// console.log(user.fullName.userFullName);
// console.log(user.fullName.userFullName.lastName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2}
// console.log(obj3);

// const obj4 = Object.assign({},obj1,obj2); // {} --> prefer to include this and this is target and all other are source
// console.log(obj4);

// Note --> always use spread operator for combining objects
// const obj5 = {...obj1,...obj2}
// console.log(obj5);

// when values come from database --> array of objects
const user2 = [
 {id:40,name:"farooque"},
 {id:37,name:"talha"},
 {id:34,name:"parkash"},
 {id:31,name:"Rohal"}
]
//console.log(user2[3].id);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(Object.hasOwnProperty('isLoggedIn'));
// console.log(Object.hasOwnProperty("isLogged"));


// destructuring in objs

const course = {
    name:"js in urdu",
    price:999,
    courseInstructor:"Farooque Sajjad"
}
// course.courseInstructor
const{courseInstructor:instructor}=course
console.log(instructor);

// const navbar = ({company}) =>{ // react code

// }

// json

// {
//     "name":"hitesh",
//     "courseName":"js in urdu",
//     "price":"free"
// }

const arrayOfObj =  [
{},
{},
{},
{}
]
 
