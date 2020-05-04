// Coffee Maker
class Coffee {
  constructor(type, cream, sugar){
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile(){
    return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
  }

  creams(){
    if (this.cream > 1){
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars(){
    if (this.sugar > 1){
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}

// Write the code that makes a black coffee.
var blackCoffee = new Coffee ("black", 0, 0)
console.log("Type of coffee:", blackCoffee.type)
console.log(blackCoffee.coffeeProfile())

// Write the code that makes a coffee with 1 cream and 2 sugars.
var normalCoffee = new Coffee ("black with", 1, 2)
console.log(normalCoffee.coffeeProfile())


// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
var sweetCoffee = new Coffee ("black with", 0, 2)
console.log(sweetCoffee.coffeeProfile())


// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.

class Latte {
    constructor (flavor, milktype, shots){
        this.flavor = flavor.toLowerCase()
        this.milktype = milktype.toLowerCase()
        this.shots = shots //is a number
    }

    // Write a method for your Latte class that outputs the latte's profile.
    latteProfile () {
        return (`Flavor: ${this.flavor}, Milk type: ${this.milktype}, # of shots: ${this.shots}`)
    }
}

// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
var regLatte = new Latte ("none", "whole milk", 1)
console.log (regLatte.latteProfile())


// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
var fancyLatte = new Latte ("hazelnut", "almond milk", 2)
console.log(fancyLatte.latteProfile())

// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)

// Write the code that creates three unique cylinder objects