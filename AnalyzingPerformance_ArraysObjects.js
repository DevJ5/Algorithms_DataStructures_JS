/*
 * Objects
 Insertion, Accessing, Updating and removing is constant time : O(1)
 Searching - meaning is a certain value inside an object - is linear time : O(n)

 NB. There is no order in an object as there is in an array.
 */

var person = { name: "Bert", age: 55 };

console.log("Keys: ", Object.keys(person)); //[ 'name', 'age' ] - O(n)

console.log("Values: ", Object.values(person)); // [ 'bert', 55 ] - O(n)

console.log("Entries: ", Object.entries(person)); // [ [ 'name', 'bert' ], [ 'age', 55 ] ] - O(n)

console.log("Has own property: ", person.hasOwnProperty('name')); // true - O(1)

/*
 * Arrays
Accessing happens by index and is constant time : O(1)
Inserting/remvoing at the end of the array by using push/pop is constant time : O(1)
Inserting/removing at the beginning of an array by using unshift/shit is linear time,
because we have to reindex everything : O(n)
Searching an unordered array is linear time : O(n)
*/

// Concat is linear time : O(n)
var num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];

var nums = num1.concat(num2, num3);

console.log("Concat: ", nums); // Resultaat: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Slice, returns a shallow copy of startindex up to endindex, is linear time : O(n)
let numbers = [5, 6, 2, 3, 4, 1];
console.log("Slice: ", numbers.slice(2));

// Splice is used for inserting and removing items from an array
// Splice is linear time : O(n), even though we might add something in the middle and its technically n / 2
let fruits = ['banana', 'apple', 'pear', 'mango'];
fruits.splice(2, 1, "kiwi");
console.log("Splice: ", fruits);

// Sort is O(n * log n)
let unsortedNumbers = [5, 6, 2, 3, 4, 1];
console.log("Sort: ", unsortedNumbers.sort((a, b) => b < a));

// Foreach, map, reduce, filter etc. are linear time : O(n)