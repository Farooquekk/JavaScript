
const myObject = {
    js:"javascript",
    cpp:"C++",
    rb: "ruby",
    swift:"swift by apple"
}
// for in loop
for (const key in myObject) {
    
    console.log(`${ key } shortcut for ${myObject[key]}`);
}
   
// array
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key ,',' ,programming[key]);
}

// const map = new Map()
// map.set('pak','Pakistan')
// map.set('us','USA')
// map.set('fr', 'France')
// map.set('us','USA') //  map is not iteratable
// console.log(map);

// for (const key in map) {
    
//     console.log(key);    
    
// }
