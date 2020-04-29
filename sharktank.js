// Write a function named marco that returns "polo".
//
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
//
// const greeting = (name) => {
//   return `Welcome ${name} here`
// }
//
// console.log(greeting("someone"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
//
// declare function named oddOrEven with 2 variables
// var oddOrEven = (numbersGoHere) => {
// var getMod = (numbersGoHere%2)
//   // first argument modulos the number by 2
//
//   if (getMod === 1){
// //if 1 retrun "odd"
//     return "odd"}
//
//   else if (getMod === 0){
// // if 0 return "even"
//     return "even"}
//
//   else {
// // else "the system is broken"
//     return "broken"}
// }
//
// console.log(oddOrEven(9));

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

//declare a variable function named trippleMe
// var trippleMe = (numbGoHere) =>{
// //declare variable numbGoHere and multiply it by 3
// var trippled = (numbGoHere*3)
// //return tripleMe is numbersGoHere times 3
//   return (trippled)
// }
// //call function trippleMe
// console.log(trippleMe(2));


// // Write a function named multiply that takes two numbers as arguments and returns the result of one of the numbers multiplied by the other.
//   // declare a constant named multiply
//   const multiplier = (num1, num2) => {
//     //  return <nums> with a number multipled by the other
//     return (num1 * num2)
//   }
//   console.log(multiplier (3, 5))
//     //  an argument of <nums>
//     // call the function

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
  //declare constant name divisableBy with num1 and num2
const divisableBy = (num1 , num2) => {
  //if the answer is greater then 0 return string num1 is not evently divisable by num 2
  if (num1 % num2 === 0){
    return `${num1} is evenly divisable by ${num2}`
  }
  // else if the answer is 0 then num 1 is evenly divisable by num 2
  else if (num1 % num2 > 0 || num1 % num2 < 0){
    return `${num1} is not evenly divisable by ${num2}`
  }
  //else return this system is broken
  else {
    return "you broke everything good job"
  }

}
//call the function
console.log(divisableBy(3,7));







// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
//
// delcare a constant named "marco"

  // Have Marco return "polo" when called

  // const marco = () => {
  //   return "Polo"
  // }
  //
  // console.log(marco())
// call Marco
