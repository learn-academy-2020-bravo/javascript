 var item = 110
if (item <= 100) {
  console.log("In budget")
} else {
  console.log("Can't buy!")
}

var hungry = false
if (hungry === true) {
  console.log("Eat food!")
} else {
  console.log("keep coding!")
}

var trafficLight = "trash"
if (trafficLight === "green") {
  console.log("Go")
} else if (trafficLight === "yellow") {
  console.log("Slow Down")
} else {
  console.log("Stop")
}

var numOne = 6
var numTwo = 1
if (numOne < numTwo) {
  console.log(numTwo)
} else if (numTwo < numOne) {
  console.log(numOne)
} else {
  console.log("They are equal")
}

var oneNum = 8
if (oneNum === 0) {
  console.log("It is a zero")
} else if (oneNum % 2 !== 0) {
  console.log("It is odd")
} else {
  console.log("It is even")
}

var gradePercentage = 100
if (90 <= gradePercentage && gradePercentage < 100) {
  console.log("A")
} else if (80 <= gradePercentage && gradePercentage < 90) {
  console.log("B")
} else if (70 <= gradePercentage && gradePercentage < 80) {
  console.log("C")
} else if (60 <= gradePercentage && gradePercentage < 70) {
  console.log("D")
} else if (gradePercentage == 100){
  console.log("Perfect Score!")
} else if (gradePercentage < 60) {
  console.log("F")
} else if (gradePercentage === 0) {
  console.log("No grade is available")
} else {
  console.log(null)
}
var whatType = "score"
if (typeof whatType === "boolean") {
  console.log("Boolean")
} else if (typeof whatType === "number") {
  console.log("Number")
} else if (typeof whatType === "string") {
  console.log("String")
} else {
  console.log("Something else")
}

var password = "122334334345657!!!"
if (password.length >= 12 && password.includes("!")) {
  console.log("That is a mighty strong password.")
} else if(password.length >= 8 || password.includes("!")) {
  console.log("that is strong")
} else {
  console.log("Not strong enough")
}
