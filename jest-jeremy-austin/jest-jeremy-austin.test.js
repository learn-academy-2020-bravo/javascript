// // Describe function named needCoffee
// describe("needCoffee", () => {
// // Test returns drink coffee or keep working based on input
// test ("returns drink coffee or keep working based on input", () => {
// // Expect "drink coffee" if tired is true or "keep working" if tired is false
//     expect(needCoffee(true)).toEqual("drink coffee")
//     expect(needCoffee(false)).toEqual("keep working")
//   })
// })
//
// // Declare function named needCoffee that takes in boolean value
// const needCoffee = (boolean) => {
//   // Returns if true "drink coffee", else if "keep working", else catch All
//   if (boolean === true) return "drink coffee"
//   else if (boolean === false) return "keep working"
//   else return "You dun messed up A A ron"
// }
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed. Write the function that will make the test pass.
//
// //describe function  "zoolander"  that takes argument "string to the question "are you stressed?"
//   //Test return value strings "relax" if yes "keep going" if no
//     // Expect  input yes to relax and no keep going
//
//     describe("zoolander", () => {
//   test ("return value strings relax if yes keep going if no", () => {
//     expect(zoolander("yes")).toEqual("relax")
//     expect(zoolander("no")).toEqual("keep working")
//   })
// })


//Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'. Write the function that will make the test pass.



//Describe function "fizzBuzz" that takes a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'.

describe ("fizzBuzz", (number) => {
    test ("if a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'", () => {
      expect(fizzBuzz(number%3 == 0 && number%5 == 0)).toEqual("fizzbuzz")
      expect(fizzBuzz(number%3 == 0)).toEqual("fizz")
      expect(fizzBuzz(number%5 == 0 )).toEqual("buzz")
    })
})
