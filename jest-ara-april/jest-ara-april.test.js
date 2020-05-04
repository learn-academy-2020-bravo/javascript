describe("areYouTired", () => {
  test("will return the statement drink coffee if you are tired and keep working if you are not tires",() => {
    expect(areYouTired("yes")).toEqual("drink coffee")
    expect(areYouTired("no")).toEqual("keep working")
  })
})

const areYouTired = (string) => {
  if(string === "yes"){
    return "drink coffee"
  } else {
    return "keep working"
  }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed. Write the function that will make the test pass.

//describe a function that takes an argument
describe("areYouStressed", () => {
  test("will return relax if you are stressed or keep going if you are not stressed", () => {
    expect(areYouStressed("yes")).toEqual("relax")
    expect(areYouStressed("no")).toEqual("keep going")
  })
})

const areYouStressed = (string) => {
  if(string === "yes") {
    return "relax"
  } else {
    return "keep going"
  }
}
// Write the test for a function that takes in two arguments(numbers) and returns the smaller number. Write the function that will make the test pass.


//test what we expect be return
//expect the outcome
