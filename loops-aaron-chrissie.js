// for(let i=0; i<=20; i++){
//   if(i%2===0){
//     console.log(i)
//   }  else if(i%2===1) {
//     console.log("odd")
//   }
//   }

var nums = [3, 57, 9, 20, -67, 79, 20];
var lowestVal = nums[0];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] >= lowestVal) {
  lowestVal = nums[i];
    //console.log(nums[i])
  }
  //console.log(lowestVal)
  }
  console.log(lowestVal)

// var nums = [3, 57, -9, 20, 67];
// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i] % 2)
// }

// var myString = "learn students";
// let newString = myString.split("");
// let count = 0;
// //console.log(newString)
// for (i = 0; i < newString.length; i++) {
// if (newString[i] === 'e') {
//   count++
// }
// //console.log(count)
// }
// console.log(count)
