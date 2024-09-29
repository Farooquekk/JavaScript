// array/object specific loops
// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }
    
// const greetings = "Hello World"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }


// Maps in js

const map = new Map()
map.set('pak','Pakistan')
map.set('us','USA')
map.set('fr', 'France')
map.set('us','USA')
console.log(map);
// unique values and order remains same

for (const [key,value] of map) {
    console.log(key," ",value);
    
}



const myObject = {
    game1: 'NFS',
    game2:'Spiderman'
}
for (const [key, value] of myObject) {
    console.log(key," ", value);
    
}

// for of loop is not iteratable on objs










