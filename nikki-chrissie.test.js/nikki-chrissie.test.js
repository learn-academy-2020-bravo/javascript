

// //create a describe that referes to the function
// describe("drinkCoffee", () => {
//      //create my test 
//      test("return drink coffee if user enters 'tired', and return not tired if user enters 'keep working", () => {
//             //create my expect to be "drink coffee" if your tired, or "keep working if your not tired"
//             expect(drinkCoffee("tired")).toEqual("drink coffee")
//             expect(drinkCoffee("not tired")).toEqual("keep working")

//     })    
// })    

// const drinkCoffee = (string) => {
//     if(string === "tired"){
//         return "drink coffee"
//     } else if (string === "not tired"){
//         return "keep working"
//     }
// }
  

//create a describe that referes to the function
describe("chill", () => {
    //create my test 
    test("return relax if user enters 'stressed', and return keep going if user enters 'not stressed'", () => {
           //create my expected outcome relax if user puts stressed and keep going if user puts not stressed
           expect(chill("stressed")).toEqual("relax")
           expect(chill("not stressed")).toEqual("keep going")

   })    
})  

const chill = (string) => {
    if(string === "stressed"){
        return "relax"
    } else if (string === "not stressed"){
        return "keep going"
    }
}