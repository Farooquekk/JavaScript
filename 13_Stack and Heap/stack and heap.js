// Stack and Heap memory
// In Stack a copy of the variables will be given to you --> (primitive)
// In Heap reference of the original variables will be given to you --> (non-primitive)


let name = "Farooque"
let name2 = name
console.log(name); 
console.log(name2);
name2="Farooque Sajjad" 
console.log(name); 
console.log(name2);

let obj = {
    emial : "Farooque@gmail.com"
}
let obj2=obj
console.log(obj);
console.log(obj2);

obj2.emial="Farooquekk92@gmial.com"
console.log(obj);
console.log(obj2);
