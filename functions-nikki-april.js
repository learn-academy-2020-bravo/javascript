//declare a function called marco it does not require an argument
// const marco = () => {
//return the value polo
//   return "polo"
// }
// console.log(marco())

//declare a function named greeting and it takes an argument name
//var name = "NIKKI"
// const greeting = (name) => {
//
//   //returns "Welcome, <person's name here>!"
//   return `Welcome, ${name}!`
// }
// console.log(greeting("nikki"))


// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

//declare a function named oddOrEven that takes an number as an argument
// const oddOrEven = (number) => {
// //check to see if the number is even by using % -- modulo if (12 % 2 === 0)
//   if (number % 2 === 0){
//     //if the number is even it should return as "The number is even"
//     return "The number is even"
//   } else {
//   //if the number is not even then return "The number is odd"
//     return "The number is odd"
//   }
// }
// console.log(oddOrEven(24))
// console.log(oddOrEven(23))
// console.log(oddOrEven(224))
// console.log(oddOrEven(254))
// console.log(oddOrEven(54))
// console.log(oddOrEven(664))




//declare a function names triple that takes a number as an arguement
// const triple = (number) => {
//   //returns the result of the number multiplied by 3
//   return (number * 3)
// }
// console.log (triple(3))

//declare a function called multiply that takes two numbers as arguments
 // const multiply =(number1,number2) => {
 //   //returns the result of one of the numbers mutiplied by the other
 //   return (number1 * number2)
 //  }
 //  console.log(multiply(3 , 2))

 //Write a function named divisibleBy that takes two numbers as arguments

 // const divisibleBy = (number1, number2) => {
 //   if(number1 %number2 === 0){
 //     //returns whether the first number is evenly divisible by the second
 //     return `${number1} is evenly divisable bye ${number2}`
 //   } else{
 //     return `${number1} is not evenly divisable bye ${number2}`
 //   }
 // }
 //  console.log(divisibleBy(3,6))
  //divisibleBy(10, 5) logs "10 is evenly divisible by 5".


//Write a function named assignGrade that takes a number score as an argument
//create variables to define range of number per assigned grade letter
//returns the letter grade for the score


// const assignGrade = (numberScore) => {
//   if (numberScore <= 100 && numberScore >= 90){
//     return "You got an A, Congratulations!"
//   } else if (numberScore <= 89 && numberScore >= 80){
//     return "You got an B, Great job!"
//   } else if (numberScore <= 79 && numberScore >= 70){
//     return "You got a C, time to study more!"
//   } else {
//     return "You have failed this class"}
// }
// console.log(assignGrade(0))


var testArr1 = [3, 9, 15, 4, 10]
//Write a function that takes in an array
const mult3 = (array) => {
  //define the new array as an array
  let newArr = []
  //tell the loop to stop after the legth of the array
  for(let i=0; i<array.length; i++){
  //push the test array through one increments at a time and multiply by 3
    newArr.push(array[i] * 3)
  }
  // and returns a new array with all numbers multiplied by 3.
  return newArr
}
//console log it to check it its working
console.log(mult3(testArr1))



// Expected output --> [9, 27, 45, 12, 30]
