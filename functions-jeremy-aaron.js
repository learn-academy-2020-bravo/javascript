
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
