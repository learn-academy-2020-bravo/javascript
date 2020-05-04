// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired. Write the function that will make the test pass.
describe("drinkCoffee", () => {
    test("returns a string that says drink coffee ", () => {
      expect(drinkCoffee("tired")).toEqual("drink coffee")
      expect(drinkCoffee("not tired")).toEqual("keep working")
    })
  })

  const drinkCoffee = (string) => {
      if(string === "tired") {
          return "drink coffee"
      } else if(string === "not tired") {
          return "keep working"
      }
  }


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed. Write the function that will make the test pass.

describe("stressed", () => {
    test("returns a string that says relax", () => {
      expect(stressed("stressed")).toEqual("relax")
      expect(stressed("not stressed")).toEqual("keep going")
    })
  })

    const stressed = (string) => {
        if(string === "stressed") {
            return "relax"
        } else if(string === "not stressed") {
            return "keep going"
        }
    }

// Write the test for a function that returns "in budget" if a price is lower than $300. Write the function that will make the test pass.

describe("inBudget", () => {
    test("return in budget if input is lower than 300.", () => {
      expect(inBudget(200)).toEqual("in budget")
      expect(inBudget(300)).toEqual("out of budget")
      expect(inBudget(400)).toEqual("out of budget")
    })
  })

  var inBudget = (num) => {
    if (num < 300)  return ("in budget");
    return "out of budget";
  }

// Write the test for a function that takes in two arguments(numbers) and returns the smaller number. Write the function that will make the test pass.

describe("smallerNum", () => {
    test("returns smallest number.", () => {
      expect(smallerNum(2,10)).toEqual(2)
      expect(smallerNum(18,90)).toEqual(18)
      expect(smallerNum(50,50)).toEqual(50)
    })
  })

  const smallerNum = (num1, num2) =>  {
    return Math.min(num1,num2);
  }

// Write the test for a function that takes in one argument(number) and returns whether the number is odd. Write the function that will make the test pass.
describe("oddNum", () => {
    test("number is odd", () => {
      expect(oddNum(2)).toEqual("not odd")
      expect(oddNum(11)).toEqual("odd")
    })
  })

  const oddNum = (num) => {
    if(num%2 !== 0) {
      return "odd"
    }
    else {
      return "not odd"
    }
  }

// Write the test for a function that takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape. Write the function that will make the test pass.
describe("fruitColor", () => {
    test("checking colors of fruits", () => {
      expect(fruitColor("banana")).toEqual("yellow")
      expect(fruitColor("apple")).toEqual("red")
      expect(fruitColor("grape")).toEqual("purple")
    })
  })

const fruitColor = (string) => {
  if (string == "banana"){
    return "yellow"
  }
  else if ( string == "apple"){
    return "red"
  }
  else if ( string == "grape"){
    return "purple"
  }
}
// Write the test for a function called Rick that returns "Morty". Write the function that will make the test pass.

describe("Rick", () => {
    test("return morty", () => {
      expect(Rick()).toEqual("Morty")
    })
  })

  const Rick = () =>  {
    return "Morty";
  }

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen. Write the function that will make the test pass.

describe("greeter", () => {
    test("returns a greeting", () => {
      expect(greeter("Thomas")).toEqual("Hello, Thomas.")
      expect(greeter("Ruben")).toEqual("Hello, Ruben.")
      expect(greeter("Jazmyn")).toEqual("Hello, Jazmyn.")
    })
  })

  const greeter = (name) => {
    return `Hello, ${name}.`;
  }

// Write the test for a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even. Write the function that will make the test pass.

describe("oddOrEven", () => {
    test("returns if number is odd or even", () => {
      expect(oddOrEven(22)).toEqual("even")
      expect(oddOrEven(99)).toEqual("odd")
      expect(oddOrEven(12)).toEqual("even")
    })
  })

  const oddOrEven = (num) =>  {
    if (num % 2 == 0) return "even"
    return "odd"
  }

// Write the test for a function called doubler that takes an number and returns the result of the number multiplied by 2. Write the function that will make the test pass.

describe("doubler", () => {
    test("returns number multiplied by 2", () => {
      expect(doubler(22)).toEqual(44)
      expect(doubler(99)).toEqual(198)
      expect(doubler(12)).toEqual(24)
    })
  })

  const doubler = (num) =>  {
    return num * 2;
  }

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other. Write the function that will make the test pass.

describe("multiply", () => {
    test("returns number multiplied by 2", () => {
      expect(multiply(22, 3)).toEqual(66)
      expect(multiply(99, 1)).toEqual(99)
      expect(multiply(12, 1)).toEqual(12)
    })
  })

  const multiply = (num1, num2) => {
      return num1 * num2
  }

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5". Write the function that will make the test pass.

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'. Write the function that will make the test pass.
