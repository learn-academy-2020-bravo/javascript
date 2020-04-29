// // Write a function named marco that returns "polo".

// // const marco = () => {
// //     return "polo"

// // }

// // console.log(marco())

// // Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// // const greeting = (name) => {
// //     return `Welcome, ${name}!`
// // }

// // console.log(greeting("Chrissie"));


// // Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// const oddOrEven = (num) => {
//     // if else statement to determine even or odd
//     if(num % 2 === 1 ) {
//         return "The number is ODD!"
//     } else if (num % 2 === 0) {
//         return "The number is EVEN!"
//     } else {
//         return "ERROR!"
//     }
// }

// console.log(oddOrEven("mayonaisse"));


// // Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// //declare function that takes a number as an argument
// const triple = (num) => {
// //return num mutliplied by 3
//     return num*3
// }
// //console logging three should return 9
// console.log(triple(3))
// //console log should return 3
// console.log(triple(1))


// Write a function named multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.

// //declare a function named multiply that takes two numbers as arguments
// const multiply = (num1, num2) => {
// //return would be the result of num1 multiplied by num2
//     return num1*num2
// }
// //console log would return 6
// console.log(multiply(3, 2))
// //console log would reutrn 120
// console.log(multiply(10,12))



// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// const divisibleBy = (num1, num2) => {
// //if and else statement to see if num 1 is evenly divisible by num2
//     if(num1 % num2 === 0){
//         return `${num1} is evenly divisible by ${num2}`
//     } else if(num1 % num2 >= 1 || num1 % num2 < 0){
//         return `${num1} is not evenly divisible by ${num2} indubitibly`
//     } else {
//         return "Uh oh error!"
//     }
    
// }
// console.log(divisibleBy(10, 2))
// console.log(divisibleBy(84, 17))
// console.log(divisibleBy("peanut butter", "jelly"))
// console.log(divisibleBy(-24, 7))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

//create a function named assignGrade that take a number score
// const assignGrade =(score) =>{
//     if(score >= 100){
//         return "Wow you smarty pants, you got an A+"
//     } else if (score > 89){
//         return "You got an A"
//     } else if (score > 79) {
//         return "You got a B. You should try harder."
//     } else if (score > 69) {
//         return "C student, huh? Welcome to the world of fast food."
//     } else if (score <= 69) {
//         return "You did so bad, we're not even giving you a letter grade."
//     } else {"Something went terribly wrong."}
// }
// console.log(assignGrade(10));

// What number's bigger: Write a function named greaterNum that takes 2 arguments, both numbers and returns whichever number is the greater (higher) number

// write a function named greaterNum that takes 2 numbers as arguments
// const greaterNum =(num1, num2) => {
//     // create a contitional where num1 > num 2
//    if (num1 === 42 || num2 === 42){
//        return "You have found the greatest number - 42. It's always 42."
//     }else if(num1 > num2){
//         return `${num1} is greater than ${num2}.`
//         // create a conditional where num 2 > num 1
//     } else if (num2 > num1){
//         return `${num2} is greater than ${num1}.`
        
//         // create a conditional where they are even/equal
//     } else if (num2 === num1){
//         return `${num1} is the SAME NUMBER as ${num2}.`
//         // create an error if something is wrong
//     } else {
//         return "Something is amiss"
//     }
    
// }
// // return whichever number is greater
// console.log(greaterNum(100, 42));


// // The World Translator: Write a function named helloWorld that takes 1 argument, a language code (e.g. "es", "de", "en") and returns "Hello, World" for the given language, for at least 3 languages (it should default to returning English)

// //create a function named helloWorld that takes a string argument for a language abbreviation
// const helloWorld = (lang) => {
//     //create conditional for if input language is "es" - Spanish
//     if(lang == "es"){
//         return "Hola, Mundo."
//         //create conditional for if input language is "fr" - French
//     } else if (lang == "fr"){
//         return "Bonjour, le monde."
//         //create conditional for if input language is "de" - German
//     } else if (lang == "de"){
//         return "Hallo Welt"
//         // default to English
//     } else { return "Hello World."
//     }
// }
// console.log(helloWorld(5));

// return as Hello World in given language



// The Pluralizer: Write a function named pluralizer that takes 2 arguments, a number and a singular noun and returns the number and pluralized form of the noun, if necessary

// create function that takes 1 number and 1 singular noun
// const pluralizer = (num, noun) => {
//     let collectiveNouns = ["sheep", "goose", "child", "person","species"]
//     let pluralCollectiveNouns = ["sheep", "geese", "children", "people", "species"]
//     for(let i=0; i<collectiveNouns.length; i++){
//         if(collectiveNouns[i] === noun){
//             return `${num} ${pluralCollectiveNouns[i]}`
//         } 
//     }
//         if (num > 1) {
//             return `${num} ${noun}s`
//         // create a conditional where if number = 1, it returns singular noun
//         } else if (num === 1){
//                 return `${num} ${noun}`
//             } else {return "error error error"
//     }
// }          
// console.log(pluralizer(5,"goose"))
// console.log(pluralizer(8, "cat"));
// console.log(pluralizer(1,"mouse"));
// console.log(pluralizer(3, "person"));
// console.log(pluralizer ("pink", "dragon"));


// DON'T FORGET TO PSEUDO CODE

// Write a function that takes in an array and returns a new array with all numbers multiplied by 3.
//  var testArr1 = [3, 9, 15, 4, 10]

 
//  // create a function that takes in an array as an argument
//  const multByThree = (array) => {
//      // define new array 
//      let newArray = []
//      // write a for loop that iterates through array
//      for(let i = 0; i < array.length; i++){
//          // multiply array by 3 and pushes the responses to the new array
//          newArray.push(array[i] * 3)

//      }
//      // return new array Expected output --> [9, 27, 45, 12, 30]
//      return newArray
//  }

//  console.log(multByThree(testArr1));
 


// Write a function that takes in an array and returns a new array with only odd numbers.
var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

// create a function that takes an array as an argument
// define a new array
// create a for loop that iterates through the array and 
// pull out the ODD numbers using a modulo to === 1
// 


// Expected output --> [-7, 3, 5, 13]

// Write a function that takes in a string and returns a new string with every letter capitalized. HINT: you do not need arrays or loops.
// var myMessage = "Hello There"

// Expected output --> "HELLO THERE"

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method
// var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]

// Expected output --> "nicework"

// Create a function that returns the highest number
// var highestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]

// Expected output --> 67

// Create a function that returns the lowest number
// var lowestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]

// Expected output --> -9

// Create a function that calculates the sum
// var addThese1 = [1, 2, 3, 4]

// Expected output --> 10

// var addThese2 = []

// Expected output --> 0

// Create a function that calculates the mean value
// var meanChecker = [1, 2, 3] Expected output --> 2

// Create a function that finds the index of the highest number
// var indexHighestNumber = [1, 4, 2]

// Expected output --> 1

// Create a function that takes in a string and returns only the middle value
// var testString1 = "hello" Expected output --> "l" var testString2 = "boogeyman" Expected output --> "e"
