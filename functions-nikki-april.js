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

 const divisibleBy = (number1, number2) => {
   if(number1 %number2 === 0){
     //returns whether the first number is evenly divisible by the second
     return `${number1} is evenly divisable bye ${number2}`
   } else{
     return `${number1} is not evenly divisable bye ${number2}`
   }
 }
  console.log(divisibleBy(3,6))

 //divisibleBy(10, 5) logs "10 is evenly divisible by 5".