// for(let i = 1; i <= 20; i++) {
//     console.log(i)
// }

// for(let i = 1; i <= 20; i++) {
//         console.log(i * 3)
//     }

    // for(let i = 1; i <= 20; i++) {
    //     if(i % 2 === 0){
    //         console.log(i);
    //     } else {
    //         console.log("ODD");
    //     }
    // }

    // Create a loop that will log the highest number from the array. Expected output --> 67



var nums = [3, 57, -9, 20, 67]
var sort = nums.sort((a,b) => a-b).reverse()

for (let i=0; i < nums.length; i++){
  if(nums[i] === 67){
    console.log(nums[i])
  }
}




// Create a loop that will log the lowest number from the array Expected output --> -9
//
//   var nums = [3, 57, -9, 20, 67]
//
// // Create a loop that will log the remainder of each number when divided by 2. Expected output --> 1, 1, -1, 0, 1
//
//   var nums = [3, 57, -9, 20, 67]
