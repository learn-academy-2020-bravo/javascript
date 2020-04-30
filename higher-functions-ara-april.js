// // Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
// var arr1 = [3, 9, 15, 4, 10]
//
// const multiplyByTen =(array) => {
//   return array.map(value => value * 10)
// }
// // console.log(multiplyByTen(arr1));
//
// // Expected output --> [30, 90, 150, 40, 100]
// //
// // Write a function that takes in an array and returns a new array with only odd numbers.
// var arr2 = [2, 7, 3, 5, 8, 10, 13]
// const onlyOdd = (array) => {
//   return array.filter(value => value % 2 !== 0)
// }
// // console.log(onlyOdd(arr2));
// //
// // Expected output --> [7, 3, 5, 13]
// //
// // Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
//
// const onlyLetters = (string) => {
//   let newString = []
//
//
//     if(typeof(i) == "string")
//       newString.push(i)
//
//   }
//   return newString.join("")
// }
// // console.log(onlyLetters(comboArr));


// STRETCH Challenges
// Create a function that takes in a string and returns a new string with all the vowels removed.
var str = "javascript is awesome"
//make our string into an array
var strArr = str.split("")
// create an array defining the vowels
var vowels = ["a", "e", "i", "o" ,"u"]
// Create a function that takes in a string
var newStr = ""

const noVowels = (string) => {
  //create and if/else statement to define what a vowel is
  if (string !== vowels) {
    newStr.push()
console.log(strArr)
  //returns a new string with no vowels

// call the function


// Expected output --> "jvscrpt s wsm"

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
//
// var arr2 = [7, 8, 2, 1, 5, 4]
//
// Expected output -> [3, 7, 10, 5, 4, 8, 2, 1]
