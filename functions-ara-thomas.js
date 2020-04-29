// Write a function named marco that returns "polo".
//
const marco = () => {
  return "polo"
}
// console.log(marco())
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
//
const greeting = (name) => {
  return "Welcome, " + name +"!"
}
// console.log(greeting("Ara"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
//
const oddOrEven = (number) => {
  if (number % 2 === 0) {
    return "Even"
  }
  return "Odd"
}
//console.log(oddOrEven(0));
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
//
const triple = (number) => {
  return number * 3
}

//console.log(triple(5));
// Write a function named multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.

const multiply = (num1, num2) =>  {
  return num1 * num2;
}

//console.log(multiply(3,2));

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

const divisibility = (num1, num2) =>  {
  if (num1 % num2 == 0) {
    return `${num1} is evenly divisible by ${num2}`;
  }
  return "no"
}

//console.log(divisibility(10,5))
//console.log(divisibility(10,4))


// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

const assignGrade = (num) =>  {
  if (num >= 90)  return "A";
  else if (num >= 80) return "B";
  else if (num >= 70) return "C";
  else if (num >= 60) return "D";
  else return "F";
}

// console.log(assignGrade(89));
// console.log(assignGrade(79));
// console.log(assignGrade(65));
// console.log(assignGrade(42));

// Test your functions with multiple calls
//
// What number's bigger: Write a function named greaterNum that takes 2 arguments, both numbers and returns whichever number is the greater (higher) number

const greaterNum = (num1, num2) =>  {
  return Math.max(num1, num2);
}

// console.log(greaterNum(1,8));
// console.log(greaterNum(9,8));
// console.log(greaterNum(1,1));


// The World Translator: Write a function named helloWorld that takes 1 argument, a language code (e.g. "es", "de", "en") and returns "Hello, World" for the given language, for at least 3 languages (it should default to returning English)

const helloWorld = (string) =>  {
  if (string == "es") return "Hola mundo";
  else if (string == "de")  return "Hallo welt";
  else if (string == "fr")  return "Bonjour le monde";
  else return "Hello, World";
}

// console.log(helloWorld("es"));
// console.log(helloWorld("de"));
//
// console.log(helloWorld("fr"));
//
// console.log(helloWorld("kr"));


// The Pluralizer: Write a function named pluralizer that takes 2 arguments, a number and a singular noun and returns the number and pluralized form of the noun, if necessary
//

const pluralizer = (num, noun) => {
  if (num == 1) {
    return "1 " + noun;
  }
  if (noun == "goose") {
    return `${num} geese`
  }
  return `${num} ${noun}s`

}
//console.log(pluralizer(1, "dog"));
//console.log(pluralizer(5, "cat"));
//console.log(pluralizer(0, "bat"));
//console.log(pluralizer(2, "goose"));
// const pluralizer = (5, cat)
//
// Expected outcome --> "5 cats"
//
// const pluralizer = (1, dog)
//
// Expected outcome --> "1 dog"
//
// Bonus: Make it handle a few collective nouns like "sheep", "goose", "child", "person" and "species"


// Write a function that takes in an array and returns a new array with all numbers multiplied by 3.
 var testArr1 = [3, 9, 15, 4, 10]
//
// Expected output --> [9, 27, 45, 12, 30]

var arrayMult = (array) =>  {
  return array.map(x => x * 3);
}

//console.log(arrayMult(testArr1));

//
// Write a function that takes in an array and returns a new array with only odd numbers.
 var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
//
// Expected output --> [-7, 3, 5, 13]
var oddArray = (array) => {
  let newArray = []
  for (let i in array) {
    if (testArr2[i] % 2 == 1 || testArr2[i] % 2 == -1)  newArray.push(testArr2[i])
  }
  return newArray;
}

//console.log(oddArray(testArr2));


// Write a function that takes in a string and returns a new string with every letter capitalized. HINT: you do not need arrays or loops.
 var myMessage = "Hello There"
//
// Expected output --> "HELLO THERE"

var capitilized = (string) =>   {
  return string.toUpperCase();
}

//console.log(capitilized(myMessage));

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method
 var comboArr = [7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
//
// Expected output --> "nicework"

var letters = (string) => {
  let finalString = []
  for (let i of string) {
    if (typeof(i) == "string") finalString.push(i)
  }
  return finalString.join('');
}

//console.log(letters(comboArr));


// Create a function that returns the highest number
 var highestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]
//
// Expected output --> 67

var highestNum = (array) => {
  return Math.max(...array);
}

//console.log(highestNum(highestNumber));

// Create a function that returns the lowest number
var lowestNumber = [1, 45, 4, 2, 7, 67, -9, 0, 6]
//
// Expected output --> -9

var lowestNum = (array) => {
  return Math.min(...array);
}
// console.log(lowestNum(lowestNumber));
// Create a function that calculates the sum
var addThese1 = [1, 2, 3, 4]
// Expected output --> 10

var sum = (array) => {
  let counter = 0
  for(let i of array) {
    counter += i
  }
  return counter
}

// console.log(sum(addThese1));

// var addThese2 = []
//
// Expected output --> 0
var mean = (array) => {
  let counter = 0
  for(let i of array) {
    counter += i
  }
  return counter / array.length
}

// console.log(mean(addThese1));
// Create a function that calculates the mean value
var meanChecker = [1, 2, 3]
// console.log(mean(meanChecker));


// Create a function that finds the index of the highest number
var indexHighestNumber = [1, 4, 2]
var highestIndex = (array) => {
  var highestNum = Math.max(...array)
  return array.indexOf(highestNum)
}
console.log(highestIndex(indexHighestNumber));
//
// Expected output --> 1
//
// Create a function that takes in a string and returns only the middle value
// var testString1 = "hello" Expected output --> "l" var testString2 = "boogeyman" Expected output --> "e"
//
// STRETCH Challenges
// Palindrome: Create a function that takes in a string and determines whether the string is a palindrome (the same word forward and backwards)
// var isPalindrome1 = "racecar"
//
// Expected output --> "Yes racecar is a palindrome"
//
// var isPalindrome2 = "albatross"
//
// Expected output --> "No albatross is not a palindrome"
//
// Vowels Removed: Create a function that takes in a string and returns a new string with all the vowels removed
// var fullString1 = "javascript is awesome"
//
// Expected output --> "jvscrpt s wsm"
//
// var fullString2 = "I am a LEARN student"
//
// Expected output --> "m LRN stdnt"
//
// Merge Arrays: Create a function that takes in two arrays as arguments and returns one array with no duplicate values.
// var arr1 = [3, 7, 10, 5, 4, 3, 3]
//
// var arr2 = [7, 8, 2, 3, 1, 5, 4]
//
// Expected output --> [3, 7, 10, 5, 4, 8, 2, 1]
//
// Clean Function: Create a function that filters false, null, 0 and blank values from an array.
// var filterArrayValues = [58, " ", "abcd", true, null, false, 0]
//
// Expected output --> [58, "abcd", true]
//
// Pre-fill: Write a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// fillArray = (6, 0)
//
// expected output --> [0, 0, 0, 0, 0, 0]
//
// fillArray = (4, 11)
//
// expected output --> [11, 11, 11, 11]
//
// Create a function named addUp that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// addUp = (4)
//
// Expected output --> 10
//
// addUp = (13)
//
// Expected output --> 91
//
// addUp = (600)
//
// Expected output --> 180300
//
// EPIC Challenge
// High/Low Game
// Create an HTML page and link your JavaScript file
// More information about linking HTML to JavaScript here
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive)
// As a user, when I see if my guess is too high or too low
// As a user, if I guess the number correctly I am notified that I won
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message
