/*
var groceryList = ["chips", "dip", "cookies"]
groceryList.push("soda")
console.log(groceryList);

var newItem = ["granola"]
var newGroceryList = groceryList.concat(newItem)
console.log(newGroceryList);
console.log(groceryList);
*/
//var numbers = [2, 4, 6, 8, 10]
//numbers.unshift(0)
//console.log(numbers)
//numbers.push(12)
//console.log(numbers);


//numbers.shift()
//console.log(numbers);

//var newNumber = [0]
//var newList = newNumber.concat(numbers)
//console.log(newList);
//console.log(numbers);


// Consider this variable:
   var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.

console.log(numSet.indexOf(2));

// Write the code that finds the index of the last appearance of the number 2.

console.log(numSet.lastIndexOf(2))

// Consider this variable:
  var chars = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the chars array together into a string.

console.log(chars.join(''));

// Write the code that reverses the order of the letters in the chars array and saves it into a variable called charsReversed.

var charsReversed =  chars.reverse();
console.log(charsReversed);

// Write the code that brings all the letters in the charsReversed array together into a string with a hyphen between each letter.

console.log(charsReversed.join('-'));

// Write the code that brings all the letters in the charsReversed Array together into a string without separators.

console.log(charsReversed.join(''));

// Create two arrays consisting of three first names of your cohort members in each.

var array1 = ["thomas", "chantelle", "jeremy"];
var array2 = ["ruben", "april", "nikki"];

// Sort the names in alphabetical order.

console.log(array1.sort());
console.log(array2.sort());


// Sort the names in reverse alphabetical order.

console.log(array1.sort().reverse());
console.log(array2.sort().reverse());


// Sort all the names in alphabetical order. Hint: Combine the arrays into a single array.

var array3 = array1.concat(array2).sort();
console.log(array3);
