

var arr1 = [3, 9, 15, 4, 10]
// declare a function that takes in an array and multiplies each index by 10
const mult10 = (array) => {
    //multiplies each index by 10
    return array.map(value => value * 10)
}
// prints new array with variable multiplied by 10
console.log(mult10(arr1))

//Write a function that takes in an array and returns a new array with only odd numbers.
var arr2 = [2, 7, 3, 5, 8, 10, 13]
//declare a function
const oddNums = (array) => {
    return array.filter((value, index) => {
        return value % 2 === 1
    })
}
console.log(oddNums(arr2))

//Write a function that takes in an array of numbers and letters and returns a string with only the letters
 var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

 //Declare a function that takes an array and return an array with only the letters

 const letters = (array) => {
    
 }