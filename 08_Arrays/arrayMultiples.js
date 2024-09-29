

let array = new Array(4); // Creates an empty array with 4 elements
for (let i = 1; i <= array.length; i++) {
    array[i - 1] = i * 2; // Populating the array with multiples of 2
}
console.log(array); 
