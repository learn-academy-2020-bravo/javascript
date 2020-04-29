// Write a function named marco that returns "polo".

// const marco = () => {
//     return "polo"

// }

// console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// const greeting = (name) => {
//     return `Welcome, ${name}!`
// }

// console.log(greeting("Chrissie"));


// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

const oddOrEven = (num) => {
    // if else statement to determine even or odd
    if(num % 2 === 1 ) {
        return "The number is ODD!"
    } else if (num % 2 === 0) {
        return "The number is EVEN!"
    } else {
        return "ERROR!"
    }
}

console.log(oddOrEven("mayonaisse"));


// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// Write a function named multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.