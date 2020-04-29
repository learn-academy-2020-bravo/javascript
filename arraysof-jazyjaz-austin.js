// // // lets make some arrays
// // //Consider this variable:
// // //Write the code that will add "soda" to the end of the original array.
// // //Write the code that will add "granola" to the end of array without altering the original array.
// // // var groceryList = ["chips", "dip", "cookies"]
// // // var groceryAdd = groceryList.push("soda")
// // // console.log(groceryList);
// //
// // // Write the code that will add the number 0 to the beginning of the array.
// // //
// // // Write the code that will add the number 12 to the end of the array.
// // //
// // // Write the code that will remove the first number from the array.
// // //
// // // Write the code that will add the number 0 to the beginning of the array without altering the original array.
// // //
// // var numbers = [2, 4, 6, 8, 10]
// // var numberAdd = numbers.unshift("0")
// // var numberEnd = numbers.push("12")
// // var numberShift = numbers.shift()
// // console.log(numbers);


// Logging values with for loops
// Write a for loop that logs each number from 1 - 20.
// Write a for loop that logs the result of each number from 1 - 20 tripled.
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD" Expected output --> ODD, 2, ODD, 4, ODD, 6 ...etc
// Looping over an array. Consider this variable:
// var nums = [3, 57, -9, 20, 67]
// Create a loop that will log the highest number from the array. Expected output --> 67
// Create a loop that will log the lowest number from the array Expected output --> -9
// Create a loop that will log the remainder of each number when divided by 2. Expected output --> 1, 1, -1, 0, 1
// Looping over a string. Consider this variable:
// var myString = "learn student"
// Write the code that will log the number of times the letter "e" occurs in the string. Expected output --> 2
for (let i= 1; i<21; i++){
  if(i%2===1){
    console.log("ODD")
  }
  else {
    console.log(i);
  }
}

// for(let i=0; i<arr.length; i++){
//   if(arr[i] !==5){
//     console.log(arr[i])
//   }
// }
