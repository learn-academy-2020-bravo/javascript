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

var blackCoffee = new Coffee("Black Coffee", 0, 0)

// console.log(blackCoffee.coffeeProfile())

var coffee = new Coffee("Coffee", 1, 2)

// console.log(coffee.coffeeProfile())

var coffee2 = new Coffee("Coffee", 0, 2)

// console.log(coffee2.coffeeProfile())

class Latte {
  constructor(flavor, milk, shot){
    this.flavor = flavor
    this.milk = milk
    this.shot = shot
  }

  latteProfile(){
    return(`${this.flavor}, ${this.milk}, ${this.shots()}`)
  }

  shots(){
    if (this.shot > 1){
      return `${this.shot} shots`
    } else {
      return `${this.shot} shot`
    }
  }

}

var singleShot = new Latte("Single shot latte", "Regular", 1)

// console.log(singleShot.latteProfile())

var hazelnutLatte = new Latte("Double shot hazelnut latte", "almond milk", 2)

// console.log(hazelnutLatte.latteProfile())


class Cylinder {
  constructor(radius, height) {
    this.radius = radius
    this.height = height
  }
  volume() {
    return 3.14 * this.radius ** 2 * this.height
  }
}

var cylinder1 = new Cylinder(50, 100)
var cylinder2 = new Cylinder(35.32, 68.934)
var cylinder3 = new Cylinder(12.325, 90.78)

console.log(cylinder1.volume().toFixed(4))
console.log(cylinder2.volume().toFixed(4))
console.log(cylinder3.volume().toFixed(4))
