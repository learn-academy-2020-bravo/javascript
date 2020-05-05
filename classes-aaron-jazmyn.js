// Write the code that makes a black coffee.
// Write the code that makes a coffee with 1 cream and 2 sugars.
// Write the code that makes a coffee with 2 sugars. Then write the code that outputs the coffee's profile.

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


var blackCoffee = new Coffee('BLACK', 3, 3);
console.log(blackCoffee.coffeeProfile())
console.log(blackCoffee.creams(1))
console.log(blackCoffee.sugars(2));
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Latte Maker
// Write a Latte class that receives a flavor, a milk type and a number of shots.
// Write a method for your Latte class that outputs the latte's profile.
// Write the code that makes a regular, single shot latte. Then, log the latte's profile.
// Write the code that makes a double shot hazelnut latte with almond milk. Then, log the latte's profile.

class Latte {
  constructor(type, milk, shots){
    this.type = type.toLowerCase();
    this.milk = milk
    this.shots = shots
  }

  latteProfile(){
    return(`${this.type}: ${this.milk}, ${this.shotsAgain()}`)
  }

  shotsAgain(){
    if (this.sugar > 1){
      return `${this.shots} shots`
    } else {
      return `you requested a single shot`
    }
  }
}

var vanillaLatee = new Latte('Regular', 'almond', 3);
console.log(vanillaLatee.latteProfile())
console.log(vanillaLatee.shotsAgain(1))
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Volume of a Cylinder
// Write a class that calculates the volume of a Cylinder to four decimal places. Volume of a cylinder : V = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that creates three unique cylinder objects

//********PSEUDO CODE************
//create a function called volume that takes in radius and height
//uses Math.PI
//Numbers.toFixed(num) - formats any num for "num" of trailing decimals.. so Numbers.toFixed(3) would have three decimal places

class Volume {
  constructor(radius, height) {
    this.radius = radius
    this.height = height
    this.unique = []
  }

  calculateVolume() {
    let cylinder = Math.PI * this.radius**2 * this.height;
    return cylinder.toFixed(3)
  }
}

var findVolume = new Volume(10, 20);
var findVolume1 = new Volume(20, 120);
var findVolume2 = new Volume(5, 60);
console.log(findVolume.calculateVolume())
console.log(findVolume1.calculateVolume())
console.log(findVolume2.calculateVolume())


//----------------INHERITANCE-------------------------
// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car
class Car{
constructor() {
  this.carModel = 'tesla' 
  this.oilLevel = 100
  this.tires = 0
}
wheels() {
  this.tires = 4
}

}

let genericCar = new Car()
//console.log(genericCar)
//genericCar.wheels()
//console.log(genericCar)
//console.log(genericCar.wheels())
// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car"

// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year"

// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4'

// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car
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