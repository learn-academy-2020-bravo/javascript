//1.
// for(let i = 1; i < 21; i++){
//   console.log(i)
// }

// for(let i = 1; i < 21; i++){
//   console.log(i * 3)
// }


// for(let i = 1; i < 21; i++){
//   if(i %2 === 1){
//     console.log("ODD")
//   } else{
//     console.log(i)
//   }
// }

// 2.
// var nums = [3, 57, -9, 20, 67]
// var highest = 0
//
// for(let i=0; i < nums.length; i++) {
//   if(nums[i] > highest) {
//       highest = nums[i]
//   }
// }
// // console.log(highest)
//
// var nums = [3, 57, -9, 20, 67]
// var lowest = 0
//
// for(let i=0; i < nums.length; i++) {
//   if(nums[i] < lowest) {
//       lowest = nums[i]
//   }
// }
// // console.log(lowest)
// // var remainder = nums[i] % 2
// for(let i=0; i < nums.length; i++) {
//   console.log(nums[i]%2);
// }

//3.
// var myString = "learn student"
// var count = 0
// for(let i=0; i < myString.length; i++){
//   if( myString[i] === "e"){
//     count++
//   }
// }console.log(count)

// STRETCH Challenges
// 1.
// for(i=0; i <= 15; i++){
//   if(i %2 === 0){
//     console.log(i + " is Even!")
//   }else{
//     console.log(i + " is ODD")
//   }
// }

2.

for(i = 0; i <= 100; i++){
  if(i %3 === 0){
    console.log("fizz")
  }else if(i %5 === 0){
  console.log("buzz")
}else (i %3 === 0 && i %5 === 0){
  console.log("fizzBUZZZ")
  }
}


for(i = 1; i < 101; i++) {
  if (i % 15 === 0) {
    console.log("fizzBUZZ")
  }
  else if (i % 3 === 0) {
    console.log("fizz")
  }
  else if (i % 5 === 0) {
    console.log("BUZZ")
  }
  else {
    console.log(i);
  }
}
