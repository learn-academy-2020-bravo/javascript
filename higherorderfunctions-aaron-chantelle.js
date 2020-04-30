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
 var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"] //
 //Expected output --> "nicework"

//create a function that filters out the array
//use the typeof operator to retrieve "string"
//return arrays

const combineString = (array) => {
  //let stringOnly = "";
  return array.filter(value => typeof value === "string").join("")

}

console.log(combineString(comboArr));



// STRETCH Challenges
// Create a function that takes in a string and returns a new string with all the vowels removed.

// var str = "jAvAscript is aWesome I dont like vowels haahah"

// const noVowel = (str) => {
//   var splitString = str.split("");
//   var array = [];
//   //var newArray = ['a', 'e', 'i', 'o', 'u']
//
//   for (let i = 0; i < str.length; i++) {
//     if (splitString[i] !== "a" && splitString[i] !== "e")  {
//       array.push(splitString[i])
//     }
//   }
//   return array.join("")
// }

// var str = "jAvAscript is aWesome I dont like vowels haahah"
//
// const disemvowel = (str) => {
//   var newArray = ['a', 'e', 'i', 'o', 'u'];
//
//   return str
//   .split("") //creates an array
//   .filter(char => !newArray.includes(char.toLowerCase())) //filtering out letters that are in newArray that are also in str
//
//   .join("")
// }
//
// console.log(disemvowel(str))
//

//console.log(noVowel(str))

//create a function that takes a string
//

// Expected output --> "jvscrpt s wsm"

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]

// var arr2 = [7, 8, 2, 1, 5, 4]

// Expected output -> [3, 7, 10, 5, 4, 8, 2, 1]
