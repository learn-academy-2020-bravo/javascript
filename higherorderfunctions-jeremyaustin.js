// Use .map() or .filter() to complete the following exercises:
//
// Write a function that takes in an array and returns a new array with all numbers multiplied by 10.
var arr1 = [3, 9, 15, 4, 10]
 // declare function that takes an array
 const times10 = (array) => {
   // declare local var/let that "maps" through array
    // .map has a built in let
  //use return and ----.map
   return array.map(value => value * 10)
     // takes each value and multplies by 10

}
console.log(times10(arr1));
 // returns new array value


//
// Expected output --> [30, 90, 150, 40, 100]
//
// Write a function that takes in an array and returns a new array with only odd numbers.
// var arr2 = [2, 7, 3, 5, 8, 10, 13]
//
// Expected output --> [7, 3, 5, 13]
//
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use typeof method
// var comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"] Expected output --> "nicework"
