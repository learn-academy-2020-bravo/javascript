// Use .map() or .filter() to complete the following exercises:

// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
// var arr1 = [3, 9, 15, 4, 10]

// // create a function called multiplyByTen
// const multiplyByTen = (array) => {
//     // multiply each value in the array by 10 using .map
//     // return the value
//     return array.map(value => value * 10)
// } 
// // Expected output --> [30, 90, 150, 40, 100]
// console.log(multiplyByTen(arr1))



// Write a function that takes in an array and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]

//write a functtion called onlyOdd
const onlyOdd = (array) => {
    //return the new array with only the odd numbers in it
    return array.filter (value => value % 2 !== 0)
}
// Expected output --> [7, 3, 5, 13]
console.log(onlyOdd(arr2));





// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"] Expected output --> "nicework"

// STRETCH Challenges
// Create a function that takes in a string and returns a new string with all the vowels removed.
// var str = "javascript is awesome"

// Expected output --> "jvscrpt s wsm"

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]

// var arr2 = [7, 8, 2, 1, 5, 4]

// Expected output -> [3, 7, 10, 5, 4, 8, 2, 1]