// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
 var arr1 = [3, 9, 15, 4, 10]
//
// Expected output --> [30, 90, 150, 40, 100]

var arrayMultiplier = (array) =>  {
  return array.map(x => x * 10);
}

//console.log(arrayMultiplier(arr1));

// Write a function that takes in an array and returns a new array with only odd numbers.
 var arr2 = [2, 7, 3, 5, 8, 10, 13]
//
// Expected output --> [7, 3, 5, 13]

var onlyOdd = (array) =>  {
  return array.filter(x => x % 2 != 0)
}

//console.log(onlyOdd(arr2));

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
//   var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// //Expected output --> "nicework"

// const onlyLetters = (array) => {
//   return array.filter(value => typeof (value) === "string").join("")

// }
// console.log(onlyLetters(comboArr))


//
// STRETCH Challenges
// Create a function that takes in a string and returns a new string with all the vowels removed.
 var str = "javascript is awesome"
//
// Expected output --> "jvscrpt s wsm"

const noVowels = (string) => {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  let array = string.split("")
  return array.filter(value => vowels.indexOf(value) === -1).join("")
}

console.log(noVowels(str));

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
var arr1 = [3, 7, 10, 5, 4, 3]
var arr2 = [7, 8, 2, 1, 5, 4]

// Expected output -> [3, 7, 10, 5, 4, 8, 2, 1]
const noDuplicate = (arr1 , arr2) => {
  let arr3 = (arr1.concat(arr2))
  return arr3.filter((value, index) => arr3.indexOf(value) == index)

}
console.log(noDuplicate(arr1 , arr2))
