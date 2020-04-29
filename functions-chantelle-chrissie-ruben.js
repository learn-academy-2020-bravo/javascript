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
const pluralizer = (num, noun) => {
    let collectiveNouns = ["sheep", "goose", "child", "person","species"]
    let pluralCollectiveNouns = ["sheep", "geese", "children", "people", "species"]
    for(let i=0; i<collectiveNouns.length; i++){
        if(collectiveNouns[i] === noun){
            return `${num} ${pluralCollectiveNouns[i]}`
        } 
    }
        if (num > 1) {
            return `${num} ${noun}s`
        // create a conditional where if number = 1, it returns singular noun
        } else if (num === 1){
                return `${num} ${noun}`
            } else {return "error error error"
    }
}          
console.log(pluralizer(5,"goose"))
console.log(pluralizer(8, "cat"));
console.log(pluralizer(1,"mouse"));
console.log(pluralizer(3, "person"));
console.log(pluralizer ("pink", "dragon"));



