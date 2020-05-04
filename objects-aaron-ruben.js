//Consider this variable:
var person = {
  firstName: "Arthur",
  lastName: "Dent",
  homePlanet: "Earth"
}

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person)

// Write the code that accesses the first name of the person object.
// Write the code that accesses the last name of the person object.
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// Update the person object with a method that logs "Arthur Dent is from planet Earth".

//----------------------------------------------------------------------------------------------------------------------------
//Consider this variable:
var product = {
  name: "chair", price: 14.99
}

const describeProduct = (obj) => {
    return `The product is a ${product.name}. It costs ${product.price}`
}

// console.log(describeProduct(product))

//Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".


//Consider this variable:
var lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}

// console.log(lunch.ingredients[2])

//create a function called returnLunch
//that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
const returnLunch = (obj) => {
    return `The ingredients for a PB and Banana sandwich are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, and ${lunch.ingredients[2]}.`
}
// console.log(returnLunch(lunch))

// Write the code that accesses the ingredients property.
// Write the code that access the 3rd ingredient of the lunch object.

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

//----------------------------------------------------------------------------------------------------------------------------
// Consider this variable:

var animals = [
  { name: "Waffles", type: "dog", age: 12 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 },
]
// Create a function that takes in any array of objects and returns a new array with only those of type cat.

const catsOnly = (array) => {
  // use filter to filter out the non cat objects
  return array.filter(value => value.type === "cat")
}
// console.log(catsOnly(animals));

// Using the same array of objects above. Create a function that returns a new array with only the names of the animals.

const namesOnly = (array) => {
  
  let names = array.map(value => value.name)
  // const namesfilter = 
  return names
}
// console.log(namesOnly(animals));

//----------------------------------------------------------------------------------------------------------------------------
// Consider this variable:

let author = {
    name: "H. G. Wells",
    genre: "science fiction"
}
// Write the code that destructures the author object and makes the following work:
// console.log(`${name} is a ${genre} author`)
// --> "H. G. Wells is a science fiction author"

let {name, genre} = author

// console.log(`${name} is a ${genre} author`);

//----------------------------------------------------------------------------------------------------------------------------
// Consider this variable:

let pokeOne = {
    species: "Charmandar",
    pokemon_type: "Fire",
    describePokemon:function () {
      let {species, pokemon_type} = obj
      
      return `${species} is a ${pokemon_type} type`
      }
}

let pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water"
}

//Write a function called describePokemon() that take an object like the ones above and uses destructuring to return a description of the Pokemon such that:
//console.log(describePokemon(pokeOne)) //"Charmandar is a Fire pokemon"
//console.log(describePokemon(pokeTwo)) //"Magikarp is a Water pokemon"

const describePokemon = (obj) => {
let {species, pokemon_type} = obj

return `${species} is a ${pokemon_type} type`
}

console.log(pokeOne.describePokemon(pokeTwo));
