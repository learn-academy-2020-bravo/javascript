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

//declare a function that takes an array
// const onlyLetters = (array) => {
//   //filter through the array to return only strings
//   return array.filter(value => typeof value === "string").join("")
// }
// //call the function
// console.log(onlyLetters(comboArr));

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
var str2 = "fuck no it isn't"

//declare a function that takes in a string
const noVowels = (string) => {
  //makes string into array
  let strArr = str.split("")
  //filter -> picks out only the consnant
  //join back to the string
  return strArr.filter(value => value != "a" && value != "e" && value != "i" && value != "o" && value != "u").join("")
}
//call the function
console.log(noVowels(str));




// Expected output --> "jvscrpt s wsm"

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3]
//
<<<<<<< HEAD
// concat two arrays
// save the concat in a new variable
var arr3 = arr1.concat(arr2)
// declare a function that takes in two arrays
const noDuplicate = (arr1, arr2) => {
  // filter out the same value
  return arr3.filter(x => arr1[x] !== arr2[x])

}
=======
// var arr2 = [7, 8, 2, 1, 5, 4]
// //
// // concat two arrays
// // save the concat in a new variable
// var arr3 = arr1.concat(arr2)
// // declare a function that takes in two arrays
// const noDuplicate = (arr1, arr2) => {
//   return arr3.filter(value => arr1[value] != arr2[value])

// }
// console.log(noDuplicate(arr1, arr2));
// filter out  the same value
>>>>>>> f666677b1d3461d04c5333286728c853d4945c9c
// call the function
console.log(noDuplicate(arr1, arr2));
