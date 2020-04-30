// Describe function named needCoffee
describe("needCoffee", () => {
// Test returns drink coffee or keep working based on input
test ("returns drink coffee or keep working based on input", () => {
// Expect "drink coffee" if tired is true or "keep working" if tired is false
    expect(needCoffee(true)).toEqual("drink coffee")
    expect(needCoffee(false)).toEqual("keep working")
  })
})

// Declare function named needCoffee that takes in boolean value
const needCoffee = (boolean) => {
  // Returns if true "drink coffee", else if "keep working", else catch All
  if (boolean === true) return "drink coffee"
  else if (boolean === false) return "keep working"
  else return "You dun messed up A A ron"
}
