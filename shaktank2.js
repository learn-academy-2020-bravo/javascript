// Write a function that takes in an array and returns a new array with all numbers multiplied by 3.
var testArr1 = [3, 9, 15, 4, 10]
  // constant named multiply3 which takes the array as an argument and passses it into the function
  const multiply3 = (array) => {
    // local variable "let" named newArray generates a new array using []
  let newArray = []
  // loop and multpily array index values by 3 and insert into new array by using "push"
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]*3)
  }
  // return newArray value
  return newArray
}
// call function
console.log(multiply3(testArr1));



}







// Expected output --> [9, 27, 45, 12, 30]
//





// Write a function that takes in an array and returns a new array with only odd numbers.
// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
//
// Expected output --> [-7, 3, 5, 13]
//
// Write a function that takes in a string and returns a new string with every letter capitalized. HINT: you do not need arrays or loops.
// var myMessage = "Hello There"
//
// Expected output --> "HELLO THERE"
//
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method
// var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
//
// Expected output --> "nicework"
//
// Create a function that returns the highest number
// var highestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]
//
// Expected output --> 67
//
// Create a function that returns the lowest number
// var lowestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]
//
// Expected output --> -9
//
// Create a function that calculates the sum
// var addThese1 = [1, 2, 3, 4]
//
// Expected output --> 10
//
// var addThese2 = []
//
// Expected output --> 0
//
// Create a function that calculates the mean value
// var meanChecker = [1, 2, 3] Expected output --> 2
//
// Create a function that finds the index of the highest number
// var indexHighestNumber = [1, 4, 2]
//
// Expected output --> 1
//
// Create a function that takes in a string and returns only the middle value
// var testString1 = "hello" Expected output --> "l" var testString2 = "boogeyman" Expected output --> "e"
