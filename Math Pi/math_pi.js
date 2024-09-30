
// const desp = Object.getOwnPropertyDescriptor(Math,"PI");

// console.log(desp);
// console.log(Math.PI);

// Math.PI = 5;
// console.log(Math.PI);

const obj = Object.create(null);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable : true,

    //  orderChai = function () {
    //     console.log();
    // }
}

// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai,'name'));
// console.log(Object.getOwnPropertyDescriptor(chai));





Object.defineProperty(chai, 'name', {
  //  writable: false,
    enumerable :true
});
// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai,'name'));
// console.log(Object.getOwnPropertyDescriptor(chai));
for (value[key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
 
 
        console.log(`${key}:${value}`);
    }
}
