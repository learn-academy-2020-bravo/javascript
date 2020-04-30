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
