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
<<<<<<< HEAD

describe("divisbleBy", () => {
  test("returns whether the first number is evenly divisble by the second", () => {
    expect(divisbleBy(10,5)).toEqual("10 is evenly divisible by 5")
    expect(divisbleBy(21,3)).toEqual("21 is evenly divisible by 3")
    expect(divisbleBy(10,4)).toEqual(undefined)
  })
})

const divisbleBy = (num1, num2) => {
  if (num1 % num2 === 0) return `${num1} is evenly divisible by ${num2}`
}

// // Describe function named fizzbuzz
// describe("fizzbuzz", () => {
//   // Test that a number a number multiple of both 3 and 5 spit out "fizzbuzz"
//   test("If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.", () => {
//     expect(fizzbuzz(15)).toEqual("fizzbuzz")
//     expect(fizzbuzz(9)).not.toEqual("fizzbuzz")
//     expect(fizzbuzz(10)).not.toEqual("fizzbuzz")
//   })
//   // Test that a number multiple of 3 spits out "fizz"
//   test ("If a number is a multiple of 3, replace it with the word 'fizz'.", () => {
//     expect(fizzbuzz(15)).not.toEqual("fizz")
//     expect(fizzbuzz(21)).toEqual("fizz")
//     expect(fizzbuzz(10)).not.toEqual("fizz")
//   })
//   // Test that a number multiple of 5 spits out "buzz"
//   test ("If a number is a multiple of five, replace it with the word 'buzz'.", () => {
//     expect(fizzbuzz(15)).not.toEqual("buzz")
//     expect(fizzbuzz(9)).not.toEqual("buzz")
//     expect(fizzbuzz(10)).toEqual("buzz")
//   })
// })

// const fizzbuzz = (num) => {
//   if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz"
//   else if (num % 3 === 0 && num % 5 === 0num % 3 === 0) return "fizz"
//   else if (num % 5 === 0) return "buzz"
//   else return "Enter a number"
// }

// describe ("inBudget", () => {
//   test ("Returns 'in budget' if number is lower than 300", () => {
//     expect(inBudget().toEqual(true)
//   }
// })
=======
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
>>>>>>> a3b8c57614bc01de6efd25d58ebc419f7380172a
