// var person = {
//   firstName: "Arthur",
//   lastName: "Dent"
// }
// console.log(person.firstName)
// console.log(person.lastName)
// person.homePlanet="earth"
// console.log(person)

// var product = {
//   name: "chair", price: 14.99
// }
//
// // declare function named describeProduct that returns the the products value
// const describe = (string) => {
//   return ` the product is a ${product.name} it cost $${product.price}`
// }
// console.log(describe(product))

// var lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"]
// }
//
// var ingredients = (string) => {
//   return `The ingredients for a ${lunch.name} are ${lunch.ingredients}`
// }
// console.log(ingredients(lunch))

// var animals = [
//   { name: "Waffles", type: "dog", age: 12 },
//   { name: "Fluffy", type: "cat", age: 14 },
//   { name: "Spelunky", type: "dog", age: 4 },
//   { name: "Hank", type: "cat", age: 11 },
// ]
//
// const onlyCats = (array) =>{
//   return array.filter( value => value.type === "cat")
//
// }
// console.log(onlyCats(animals))

// let author = {
//     name: "H. G. Wells",
//     genre: "science fiction"
// }
//
// let { name, genre } = author
//
// console.log(`${name} is a ${genre} author`)

let pokeOne = {
    species: "Charmandar",
    pokemon_type: "Fire"
}

let pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water"
}

// Declare function that takes an object
const describePokemon = (object) => {
  let { species, pokemon_type } = object
  // Use destructured variable to return string
  return `${species} is a ${pokemon_type} pokemon`
}

console.log(describePokemon(pokeOne))
console.log(describePokemon(pokeTwo))
