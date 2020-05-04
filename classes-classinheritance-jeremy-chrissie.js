// class Coffee {
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

// var blackCoffee = new Coffee("Black Coffee", 0, 0)

// // console.log(blackCoffee.coffeeProfile())

// var coffee = new Coffee("Coffee", 1, 2)

// // console.log(coffee.coffeeProfile())

// var coffee2 = new Coffee("Coffee", 0, 2)

// // console.log(coffee2.coffeeProfile())

// class Latte {
//   constructor(flavor, milk, shot){
//     this.flavor = flavor
//     this.milk = milk
//     this.shot = shot
//   }

//   latteProfile(){
//     return(`${this.flavor}, ${this.milk}, ${this.shots()}`)
//   }

//   shots(){
//     if (this.shot > 1){
//       return `${this.shot} shots`
//     } else {
//       return `${this.shot} shot`
//     }
//   }

// }

// var singleShot = new Latte("Single shot latte", "Regular", 1)

// // console.log(singleShot.latteProfile())

// var hazelnutLatte = new Latte("Double shot hazelnut latte", "almond milk", 2)

// // console.log(hazelnutLatte.latteProfile())


// class Cylinder {
//   constructor(radius, height) {
//     this.radius = radius
//     this.height = height
//   }
//   volume() {
//     return 3.14 * this.radius ** 2 * this.height
//   }
// }

// var cylinder1 = new Cylinder(50, 100)
// var cylinder2 = new Cylinder(35.32, 68.934)
// var cylinder3 = new Cylinder(12.325, 90.78)

// console.log(cylinder1.volume().toFixed(4))
// console.log(cylinder2.volume().toFixed(4))
// console.log(cylinder3.volume().toFixed(4))

class Car {
    constructor(model, year) {
        this.model = "generic car"
        this.year = year
    }
    wheels (){
        this.wheels = 4
    }
}
// Challenges
// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car
// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"
// Story: As a programmer, I can give my car a year on initialization.
let myCar = new Car ("generic car", 1999)
// The year for the car class can be "myCar year"
// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4

// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
class Tesla extends Car{
    constructor(){
        super()
    }
}
// Create an object called myTesla which is a instance of class Tesla
// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota
// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen
// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class
// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class
// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.

// Story: As a programmer, I can turn the lights in all my cars on and off.

// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.

// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.

// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.

// Story: As a programmer, I can slow my Tesla down by 7 per braking.

// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.

// Story: As a programmer, I can slow my Toyota down by 2 per braking.

// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.

// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.

// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.

// The method can be created in the parent class and accessed by all child classes