// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired. Write the function that will make the test pass.

//import { TestScheduler } from "jest"

// describe ("coffeeTime", () => {
//     test ("returns drink coffee if you are tired, and keep working if you are not tired", () => {
//         expect (coffeeTime("yes")).toEqual("drink coffee")
//         expect (coffeeTime("no")).toEqual("keep working")
//     })
// })

// const coffeeTime = (str) => {
//     if (str === "yes")  {
//         return "drink coffee"
//     } else {return "keep working"}
// }
// coffeeTime("yes")
// coffeeTime("no")

// --------------------------------------

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed. Write the function that will make the test pass.

describe ("areYouStressed", () => {
    test ("returns relax if you are stressed, and keep going if you are not stressed", () => {
        expect (areYouStressed("yes")).toEqual("relax")
        expect (areYouStressed("no")).toEqual("keep going")
    })
})

// const areYouStressed = (str) => {
//     if (str === "yes")  {
//         return "relax"
//     } else {return "keep going"}
// }
// areYouStressed("yes")
// areYouStressed("no")

// --------------------------------------

// Write the test for a function that returns "in budget" if a price is lower than $300. Write the function that will make the test pass.
// describe ("inBudget", () => {
//     test ("should return in budget if less than 300", () => {
//             expect (inBudget(50)).toEqual("you are within the budget")
//             expect (inBudget(350)).toEqual("you are above the budget")
//         })   
//     })

// const inBudget = (num) => {
//     if (num < 300) {
//         return "you are within the budget"
//     }
//     else {
//         return "you are above the budget"
//     }
// } 

// inBudget(50);
// inBudget(350);

// --------------------------------------

// Write the test for a function that takes in two arguments(numbers) and returns the smaller number. Write the function that will make the test pass.

// describe ("lessThan", () => {
//     test ("should return the smallest number of two arguments", () => {
//         expect (lessThan(4,5)).toEqual(4)
//         expect (lessThan(6,5)).toEqual(5)
//     })
// })

// const lessThan = (num1, num2) => {
//     if (num1 < num2) {
//         return num1
//     }
//     else {
//         return num2
//     }
// }

// lessThan(4,5)
// lessThan(6,5)

// --------------------------------------

// Write the test for a function that takes in one argument(number) and returns whether the number is odd. Write the function that will make the test pass.

// describe("isItOdd", () => {
//     test ("should return a odd number if the number is odd", () => {
//         expect (isItOdd(7)).toEqual("odd")
//         expect (isItOdd(2)).toEqual("not odd")
//     })
// })

// const isItOdd = (num) => {
//     if (num % 2 === 1) {
//         return "odd"
//     }
//     else {
//         return "not odd"
//     }
// }

// isItOdd(7)
// isItOdd(2)

// --------------------------------------

// Write the test for a function that takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape. Write the function that will make the test pass.

// --------------------------------------

// Write the test for a function called Rick that returns "Morty". Write the function that will make the test pass.

// --------------------------------------

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen. Write the function that will make the test pass.

// --------------------------------------

// Write the test for a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even. Write the function that will make the test pass.

// --------------------------------------

// Write the test for a function called doubler that takes an number and returns the result of the number multiplied by 2. Write the function that will make the test pass.

// --------------------------------------

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other. Write the function that will make the test pass.

// --------------------------------------

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5". Write the function that will make the test pass.

// --------------------------------------

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'. Write the function that will make the test pass.