// // Use .map() or .filter() to complete the following exercises:
// //
// // Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
// var arr1 = [3, 9, 15, 4, 10]
//  // declare function that takes an array
//  const times10 = (array) => {
//    // declare local var/let that "maps" through array
//     // .map has a built in let
//   //use return and ----.map
//    return array.map(value => value * 10)
//      // takes each value and multplies by 10
//
// }
// console.log(times10(arr1));
//  // returns new array value
//

// //
// Expected output --> [30, 90, 150, 40, 100]
// //

// var arr2 = [2, 7, 3, 5, 8, 10, 13]
//
// // Declare a function that takes in an array
// const oddNums = (array) => {
//   // Use .filter to filter out values with value modulo 2 equals 0
//   // Returns a new array with only odd numbers.
//   return array.filter(value => value % 2 !== 0)
// }
//
// console.log(oddNums(arr2))

// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
//
// // Decalre function that takes in array of numebrs and letters
// const lettersOnly = (array) => {
//   // Filter out values with typeof === "number"
//   // Returns a string with only letters
//   return array.filter(value => typeof(value) === "string")
// }
//
// console.log(lettersOnly(comboArr))

var str = "javascript is awesome"

// Declare function that takes in string
const vowelsRemoved = (string) => {
  // Declare array variable that holds each vowel
  let vowels = ["a", "e", "i", "o", "u"]
  // Push string into array via declaring empty array
  let strArray = []
  // Use push method to push string into empty array
  strArray.push(string)
  // Declare local variable to split string in index 0 into individual characters
  let splitArray = strArray[0].split("")
  // Declare local array that filters through the split Array
  let vowelArray = splitArray.filter(value => {
    // Return values that have an actual index number within the vowels array, i.e. index < 0
    return vowels.indexOf(value) < 0
  })
  // Join the split array into one index, then convert array to string
  return vowelArray.join("").toString()
}

console.log(vowelsRemoved(str))
