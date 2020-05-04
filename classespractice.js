class Squirrel{
    constructor(){
      this.nutCount = 0
    }
  
    storeNut(){
      this.nutCount += 1
    }
  
    eatNut(){
      this.nutCount -= 1
    }
  }
  // creating the instance of the class, saved as a variable
  // rocky now has access to the class methods
  var rocky = new Squirrel()
  
  console.log(rocky.nutCount)

  
  rocky.storeNut()
  console.log(rocky.nutCount)

  
  rocky.storeNut()
  console.log(rocky.nutCount)

  
  rocky.eatNut()
  console.log(rocky.nutCount)