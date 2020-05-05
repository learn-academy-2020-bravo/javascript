// Coffee Maker
// class Coffee {
//   constructor(type, cream, sugar){
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }
//
//   coffeeProfile(){
//     return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
//   }
//
//   creams(){
//     if (this.cream > 1){
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }
//
//   sugars(){
//     if (this.sugar > 1){
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }
//
// // Write the code that makes a black coffee.
// var blackCoffee = new Coffee ("black", 0, 0)
// console.log("Type of coffee:", blackCoffee.type)
// console.log(blackCoffee.coffeeProfile())
//
// // Write the code that makes a coffee with 1 cream and 2 sugars.
// var normalCoffee = new Coffee ("black with", 1, 2)
// console.log(normalCoffee.coffeeProfile())
//
//
// // Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.
// var sweetCoffee = new Coffee ("black with", 0, 2)
// console.log(sweetCoffee.coffeeProfile())
//
//
// // Latte Maker
// // Write a Latte class that receives a flavor, a milk type and a number of shots.
//
// class Latte {
//     constructor (flavor, milktype, shots){
//         this.flavor = flavor.toLowerCase()
//         this.milktype = milktype.toLowerCase()
//         this.shots = shots //is a number
//     }
//
//     // Write a method for your Latte class that outputs the latte's profile.
//     latteProfile () {
//         return (`Flavor: ${this.flavor}, Milk type: ${this.milktype}, # of shots: ${this.shots}`)
//     }
// }
//
// // Write the code that makes a regular, single shot latte. Then, log the latte's profile.
// var regLatte = new Latte ("none", "whole milk", 1)
// console.log (regLatte.latteProfile())
//
//
// // Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.
// var fancyLatte = new Latte ("hazelnut", "almond milk", 2)
// console.log(fancyLatte.latteProfile())
//
// // Volume of a Cylinder
// // Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr^2h (r is the radius and h is the height of the cylinder)
//
// class CylinderVolume {
//   constructor(radius, height) {
//     this.radius = radius
//     this.height = height
//   }
//
//   volume() {
//     var volumeFormula = Math.PI * (this.radius ** 2) * this.height
//     return `Volume: ${volumeFormula} cm^3`
//   }
// }
//
// var cup = new CylinderVolume (2, 4)
// var barrel = new CylinderVolume (30, 90)
// var tenniscontainer = new CylinderVolume (2, 8)
// console.log(cup.volume());
// console.log(barrel.volume());
// console.log(tenniscontainer.volume());
// Write the code that creates three unique cylinder objects

// Write a variable called myCar which is an instance of the class Car

class Car {
  constructor (model, year){
    // Story: As a programmer, I can give my car a model on initialization.
   this.model = model
   // Story: As a programmer, I can give my car a year on initialization.
   this.year = year
   this.lights = "off"
   this.speed = 0
   this. wheels = 4
   // Calling the method wheels will return 4
 }
  lightsOn() {
    this.lights = "on"

  }
  lightsOff () {
      this.lights= "off"
    }
  minSpeed() {
      if (this.speed < 0){
        return this.speed = 0
      }

 }
  carInfo() {
    return `Model: ${this.model}, Year: ${this.year}, Wheels: ${this.wheels}, Lights: ${this.lights}, Speed ${this.speed}`
  }

}


var myCar = new Car()
  // The model for the car class can be "generic car"

  // The year for the car class can be "myCar year"

  // Story: As a programmer, I can tell how many wheels myCar has.
  // --------



// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
// class TeslaCar extends Car{
//   constructor(model, year, wheels){
//     super(model, year, wheels)
//     // Story: As a programmer, I can give my Tesla a model on initialization.
//     // The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
//     this.model = model
//     // Story: As a programmer, I can give my Tesla a year on initialization.
//     // The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
//     this.year = year
//   }
// }
// // Create an object called myTesla which is a instance of class Tesla
//   var myTesla = new TeslaCar()


//   // Story: As a programmer, I can make a Toyota car.
//   // class Toyota inherits from class Car
// class Toyota extends Car{
//   // Story: As a programmer, I can give my Toyota a model on initialization.
//   // The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
//   // Story: As a programmer, I can give my Toyota a year on initialization.
//   // The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
//   constructor(model, year, ){
//     super(model, year){
//
//     }
//   }
// }
// var myToyota = new Toyota
// create an object called myToyota which is a instance of class Toyota


// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
class Volkswagen extends Car{
  constructor(model, year){
    super(model, year)
    // The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
    // this.model = "jetta"
    // Story: As a programmer, I can give my Volkswagen a year on initialization.
    // The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
    // this.year = 2002
    this.trunk = "frunk"
  }
    accelerate() {
      this.speed += 7
    }
    braking(){
      this.speed -= 5

  }
}

// create an object called myVolkswagen which is a instance of class Volkswagen
var myVolkswagen = new Volkswagen()
// Story: As a programmer, I can give my Volkswagen a model on initialization.


var vwBeetle = new Volkswagen("bug", 1975)
vwBeetle.lightsOn()
vwBeetle.accelerate()
vwBeetle.braking()
console.log(vwBeetle.carInfo());

// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.
//
// Story: As a programmer, I can turn the lights in all my cars on and off.
//
// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.
//
// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.


//
// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.
//
// Story: As a programmer, I can slow my Tesla down by 7 per braking.
//
// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.
//
// Story: As a programmer, I can slow my Toyota down by 2 per braking.
//
// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.
//
// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.
//
// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.


//
// The method can be created in the parent class and accessed by all child classes
