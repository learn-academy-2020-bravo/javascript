// Coffee Maker
// class Cofee {
//   constructor(type, cream, sugar){
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }

//   coffeeProfile(){
//     return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
//   }

//   creams(){
//     if (this.cream > 1){
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }


//   sugars(){
//     if (this.sugar > 1){
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }



// var blackCoffee = new Coffee('BLACK', 3, 3);
// console.log(blackCoffee.coffeeProfile())
// console.log(blackCoffee.creams(1))
// console.log(blackCoffee.sugars(2));

//console.log(bcoffeeMaker.coffeeProfile("cream", "sugar"))
// Write the code that makes a black coffee.
//
// Write the code that makes a coffee with 1 cream and 2 sugars.
//
// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
//
// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.
//
// Write a method for your Latte class that outputs the latte's profile.
class Latte {
  constructor(type, milk, shots){
    this.type = type.toLowerCase();
    this.milk = milk
    this.shots = shots
  }

  latteProfile(){
    return(`${this.type}: ${this.milked()}, ${this.shotsAgain()}`)
  }

  milked(){
    if (this.milk > 1){
      return `${this.milk} milks`
    } else {
      return `${this.milk} milk`
    }
  }

  shotsAgain(){
    if (this.sugar > 1){
      return `${this.shots} shots`
    } else {
      return `${this.shots} shot`
    }
  }
}

var vanillaLatee = new Latte('CHOCOLATE', 5, 3);
console.log(vanillaLatee.latteProfile())
console.log(vanillaLatee.milked(3))
console.log(vanillaLatee.shotsAgain(5))
//Coffee Maker
// class Latte {
//   constructor(type, cream, sugar){
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }

//   coffeeProfile(){
//     return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
//   }

//   creams(){
//     if (this.cream > 1){
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }


//   sugars(){
//     if (this.sugar > 1){
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }

//  var vanillaLatee = new Latte('VANILLA', 3 , 3)
//  console.log(vanillaLatee.coffeeProfile())
//  console.log(vanillaLatee.creams(3))
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
//
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
//
// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
//
// Write the code that creates three unique cylinder objects
