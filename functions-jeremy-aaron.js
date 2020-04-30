
// // Declare a function named marco that returns "polo"
// const marco = () => {
//   // Returns "polo"
//   return "polo"
// }



// // Decare a function named greeting taking name as arg
// const greeting = (name) => {
//   // Returns "Welcome" message
//   return `Welcome, ${name}!`
// }

//
// // Declare function taking numer as arg
// const oddOrEven = (number) => {
//   // conditional if even number
//   if (number % 2 === 0) {
//     // Returns whether number is odd or even
//     return "Even!"
//     // All else is odd
//   } else {
//     return "Odd!"
//   }
// }

// // Declare function taking number as arg
// // Returns number times three
// const triple = number => number * 3


// // Declare function that takes two numbers
// // Returns result of one number mulitiplied by the other
// const multiply = (num1, num2) => num1 * num2


//write a function called takes in two parameters
// return remainder if it equals zero

// const divisibleBy = (num1, num2) => {
//   if (num1 % num2 === 0) {
//     return `${num1} is evenly divislbe by ${num2}`
//   }
//   else {
//     return "not divisible"
//   }
// }
//
// console.log(divisibleBy(15, 2))

//create a function called assignGrade
//which takes in a score and returns a letter assignGrade
//
// const assignGrade = (score) => {
//   let grade = "";
//   if (score >= 90) {
//     return "A"
//   }
//   else if (score >=80) {
//     return  "B"
//   }
// }

// console.log(assignGrade(85));

//create a function greatNum that takes two parameters
//return the bigger num

//console.log(greatNum(10,9));

//write a function helloWord takes one argument
//create a conditional if "es" return "hola"
//returns "hello World"

// const helloWorld = (hi) => {
//   if (hi === "es") {
//     return "hola mundo"
//   }
//   else if (hi === "hi") {
//     return "hallo welt";
//   }
//   else {
//     return "hello world";
//   }
// }
//
// console.log(helloWorld('es'));
// console.log(helloWorld('hi'));
// console.log(helloWorld("sefrjbesrf"))

//write a function called pluralizer takes to argument
//takea  num and singular noun
//concat s to noun

// const pluralizer = (num, noun) => {
//   if (num === 1) {
//     return `1 ${noun}`
//   }
//   else if (noun === 'sheep') {
//     return `${num} ${noun}`
//   }
//   else if (noun === "child") {
//     noun = 'children'
//     return `${num} ${noun}`
//   }
//   else {
//     return `${num} ${noun}s`
//   }
// }
// console.log(pluralizer(10, "sheep"));
// console.log(pluralizer(20, 'child'));
// // console.log(pluralizer(5, "cat"));
// // console.log(pluralizer(1, "dog"));

// // Returns new array w/ all numbers * 3
// // Declare function that takes an array
//
// var testArr1 = [3, 9, 15, 4, 10]
//
// const triple = (arr) => {
//   let newArray = []
//   for (let i = 0; i < arr.length; i++) {
//     newArray.push(arr[i] * 3)
//   }
//   return newArray
// }
//
// console.log(triple(testArr1));

// var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
//
// // Declare function that takes in array
// const oddNums = (arr) => {
//   // Declare new array variable to hold odd numbers
//   let oddArray = []
//   // Create for loop to check value does not have remainder of 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       oddArray.push(arr[i])
//     }
//   }
//   // Returns new array w/ only odd numbers
//   return oddArray
// }
//
// console.log(oddNums(testArr2))

// Declare that takes in string
// Declare new array variabl
// Retruns new string w/ every letter capitalized

// var myMessage = "Hello There"
//
// const letterCap = (str) => {
//   return str.toUpperCase()
// }
//
// console.log(letterCap(myMessage))

// Declare function thates in array of numbers and letters
// Declare new variable with blank string
// Returns string w/ only letters

// var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
//
// const onlyLetters = (arr) => {
//   let letterArray = []
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof(arr[i]) === "string") {
//       letterArray.push(arr[i])
//     }
//   }
//   return letterArray.join("")
// }
//
// console.log(onlyLetters(comboArr))

//create function that returns highest

// var highestNum = [1, 45, 4, 2, 7, 67, -9, 0, 6];
//
// const biggestNumber = (num) => {
// let bigNum = num[0];
// for (let i = 0; i < num.length; i++) {
//   if (num[i] > bigNum) {
//     bigNum = num[i]
//   }
//   //return bigNum;
//   }
//   return bigNum;
// }
//
// console.log(biggestNumber(highestNum));

//create a function that adds all nums of an newArray
// var addThese1 = [1, 2, 3, 4];
//
// const addNum = (num) => {
//   let total = 0;
//   for (let i = 0; i < num.length; i++) {
//     total += num[i];
//   }
//   return total;
// }
//
// console.log(addNum(addThese1));

//create a function that takes in a numbers
//add total numbers and divide by arrays length
//return the value

// var meanChecker = [1, 2, 3];
// const median = (num) => {
//   let total = 0;
//   for (let i = 0; i < num.length; i++) {
//     total += num[i]
//   }
//   return total/ num.length;
// }
//
// console.log(median(meanChecker));

var indexHighestNumber = [1, 4, 2];
// let bigNum = num[0];
// for (let i = 0; i < num.length; i++) {
//   if (num[i] > bigNum) {
//     bigNum = num[i]
//   }
//   //return bigNum;
//   }
//   return bigNum;
// }
//
// const index = (num) => {
//   let bigNum = num[0];
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] > bigNum) {
//       bigNum = num[i];
//     }
//   }
//   return num.indexOf(bigNum);
// }
//
// console.log(index(indexHighestNumber));

//create a function that takes in a string
//convert the string into an array
//iterate through the array
//count the length

// var testString1 = "hello";
// var testString2 = "boogeyman"
//
// const middleValue = (str) => {
//   let array = str.split("");
//   //console.log(array)
//   let length = array.length / 2
//   let midIndex = Math.floor(length)
//   return array[midIndex]
// }
//
// console.log(middleValue(testString2));

// var isPalindrome1 = "racecar"
// var isPalindrome2 = "albatross"
//
// const palindrome = (str) => {
//   let reverse = str.split("").reverse().join("")
//   if (str === reverse) {
//     return "Yes"
//   } else {
//     return "No"
//   }
// }
//
// console.log(palindrome(isPalindrome1))
// console.log(palindrome(isPalindrome2))


// // Declare function takes in string
// // Declare new string variable
// // Return string w/ all vowels removed

var fullString1 = "javascript is awesome"
var fullString2 = "I am a LEARN student"

const noVowels = (str) => {
  let strArray = str.split("")
  for (let i=0; i < strArray.length; i++) {
    if (strArray[i].toUpperCase() === "A") {
      strArray.splice(i, 1)
    } else if (strArray[i].toUpperCase() === "E") {
      strArray.splice(i, 1)
    } else if (strArray[i].toUpperCase() === "I") {
      strArray.splice(i, 1)
    } else if (strArray[i].toUpperCase() === "O") {
      strArray.splice(i, 1)
    } else if (strArray[i].toUpperCase() === "U") {
      strArray.splice(i, 1)
    }
  }
  return strArray.join("")
}

console.log(noVowels(fullString1))
console.log(noVowels(fullString2))


// var arr1 = [3, 7, 10, 5, 4, 3, 3]
// var arr2 = [7, 8, 2, 3, 1, 5, 4]
//
// // Declare function that takes in two arrays as arguments
// const noDuplicates = (arr1, arr2) => {
//   // Declare new array that concats two arrays
//   let combined = arr1.concat(arr2)
//   // Declare new array that holds new array w/ no duplicates
//   let newArray = []
//   // Iterate through indexes of new array
//   for (let i=0; i < combined.length; i++) {
//     // Check if current index number equals the .indexOf of same value
//     if (i === combined.indexOf(combined[i])) {
//       // Use .push to add value to end of new array
//       newArray.push(combined[i])
//     }
//   }
//   // Return new array
//   return newArray
// }
//
// console.log(noDuplicates(arr1, arr2))

// var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
//
// // Declare function that filters false, null, 0 and blank values from an array
// const filtersOut = (arr) => {
//   // Declare locally new array as variable
//   let filteredArray = []
//   // Iterate through indexes of original array
//   for (let i = 0; i < arr.length; i++) {
//     // Check if value doesn't include false, null, 0 or blank
//     if (arr[i] !== false && arr[i] !== null && arr[i] !== 0 && arr[i] !== "" && arr[i] !== " ") {
//       // Push that value to end of new array
//       filteredArray.push(arr[i])
//     }
//   }
//   return filteredArray
// }
//
// console.log(filtersOut(filterArrayValues))

// // Declare function that takes two numbers as args
// const preFill = (num1, num2) => {
//   // Declare new empty array as a variable
//   let newArray = []
//   // Create For loop that will iterate up until the index number that is 1 less than num1
//   for (let i=0; i < num1; i++) {
//     // Use push to add num2 as new item to end of new array
//     newArray.push(num2)
//   }
//   return newArray
// }
//
// console.log(preFill(6,0))
// console.log(preFill(4,11))

// // Declare function named addUp that takes number as arg
// const addUp = (num) => {
//   // Declare new variable equal to zero
//   let total = 0
//   // Create for loop that iterates from 1 up to the number chosen
//   for (let i=1; i <= num; i++) {
//     // Add each index number to the zero variable
//     total += i
//   }
//   return total
// }
//
// console.log(addUp(4))
// console.log(addUp(13))
// console.log(addUp(600))
