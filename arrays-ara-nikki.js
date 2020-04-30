var groceryList = ["chips", "dip", "cookies"]
groceryList.push("soda")
// console.log(groceryList);
var groceryList2 = ["granola"]
// console.log(groceryList.concat(groceryList2));

var numbers = [2, 4, 6, 8, 10]
numbers.unshift(0)
numbers.push(12)
numbers.shift()
// console.log(numbers);
var numbers2 = numbers
console.log(numbers2);
numbers2.unshift(0);
console.log(numbers2);


var numSet = [2, 13, 6, 8, 4, 2]

console.log(numSet.indexOf(2))
console.log(numSet.lastIndexOf(2))

var chars = ["y", "a", "r", "r", "a"]

console.log(chars.join(""));

var charsReversed = chars.reverse()
console.log(charsReversed)

var newCharReversed = charsReversed.join("")
console.log(newCharReversed)

var names1 = ["nikki"]
