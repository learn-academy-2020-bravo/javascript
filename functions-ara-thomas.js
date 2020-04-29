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
// const pluralizer = (5, cat)
//
// Expected outcome --> "5 cats"
//
// const pluralizer = (1, dog)
//
// Expected outcome --> "1 dog"
//
// Bonus: Make it handle a few collective nouns like "sheep", "goose", "child", "person" and "species"
