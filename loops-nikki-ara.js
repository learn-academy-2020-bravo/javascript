//1.
// for(let i = 1; i < 21; i++){
//   console.log(i)
// }

// 2.
// for(let i = 1; i < 21; i++){
//   console.log(i * 3)
// }

// 3.
// for(let i = 1; i < 21; i++){
//   if(i %2 === 1){
//     console.log("ODD")
//   } else{
//     console.log(i)
//   }
// }
var nums = [3, 57, -9, 20, 67]
var highest = 0

for(let i=0; i < nums.length; i++) {
  if(nums[i] > highest) {
      highest = nums[i]
  }
}
// console.log(highest)

var nums = [3, 57, -9, 20, 67]
var lowest = 0

for(let i=0; i < nums.length; i++) {
  if(nums[i] < lowest) {
      lowest = nums[i]
  }
}
// console.log(lowest)
// var remainder = nums[i] % 2
for(let i=0; i < nums.length; i++) {
  console.log(nums[i]%2);
}
