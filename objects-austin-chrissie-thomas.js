let pokeOne = {
    species: "Charmandar",
    pokemon_type: "Fire"
}

let pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water"
}

//create a function that takes an object and returns description of variables
  const describePokemon = (object) => {
      return `${object.species} is a ${object.pokemon_type} pokemon `
  }
  console.log(describePokemon(pokeTwo))
  // Making variables for firstName and lastName using destructuring
  
  
//   // Printing property values
//   console.log(firstName)
//   --> "Bruce"
//   console.log(lastName)
//   --> "Wayne"
  
//   // Printing a full name
//   console.log(`${firstName} ${lastName}`)
//   --> "Bruce Wayne"