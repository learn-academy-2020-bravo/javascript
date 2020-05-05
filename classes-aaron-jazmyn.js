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
  this.carModel = 'Lexus'
  this.oilLevel = 100
  this.tires = 0
  this.year = 0
  this.carLights = "off"
  this.carSignal = "off"
}
wheels() {
  this.tires = 4
}
carYear() {
  this.year = 1
}
lights() {
  this.carLights = "on"
}
signal(){
  this.carSignal = "on"
}
}
var genericCar= new Car
genericCar.signal()
console.log(genericCar)

class myTesla extends Car{
  constructor(){
    super()
    this.year = 2013
    this.carModel = "tesla"
    this.carLights = "off"
  }
}
var tesla = new myTesla()
tesla.signal()
console.log(tesla)

class myToyota extends Car{
  constructor(){
    super()
    this.year = 1992
    this.carModel = "Toyota Highlander"
    this.carLights = "on"
  }
}

class myVolkswagen extends Car{
  constructor(){
    super()
    this.year = 1978
    this.carModel = "Volkswagen Bug"
    this.carLights = "off"
  }
}
// var tesla = new myTesla()
// console.log(tesla)

var toyota = new myToyota()
console.log(toyota)

var volkswagen = new myVolkswagen()
console.log(volkswagen)
//console.log(gener1icCar)
//genericCar.carYear()
// genericCar.carYear()
// console.log(genericCar)


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
