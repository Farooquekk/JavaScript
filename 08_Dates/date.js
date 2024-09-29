// Dates
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString ());
// console.log(myDate.toLocaleTimeString ());
// console.log(myDate.toUTCString ());
// console.log(typeof(myDate));
 let myDateNew = new Date(2023, 1, 21,10,10)
// console.log(myDateNew.toDateString()); // in js month start from 0
// let mydate2 = new Date("2024-01-31")
// console.log(mydate2.toLocaleString());

//let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myDateNew.getTime());

//console.log(Math.floor(Date.now()/1000));
let myTimeStamp = new Date();
console.log(myTimeStamp.getDay());
console.log(myTimeStamp.getDay()+1);
console.log(myTimeStamp.getMonth());

myTimeStamp.toLocaleString('default',{weekday:"long",

})
