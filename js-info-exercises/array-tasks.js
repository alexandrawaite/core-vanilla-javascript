/* 1. Is array copied?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // ?

What is this code going to show?
*/

//The code will show:
4
// because an array is an object and thus behaves like an object. It is copied by reference, not by whole value. shoppingCart and fruits are ferences to the same array.

/* 2. Array operations

Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
*/

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[(styles.length + 1) / 2] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");

/* 3. Calling in an array context

let arr = ["a", "b"];

arr.push(function() {
alert( this );
})

arr[2](); // ?

What is the result? Why?
*/

"a","b",function () {
  alert( this );
}

// Because square bracket notation is used to called index 2. The function pushed into index 2 alerts 'this', referencing the array and outputs its 3 values.

/* 4. Sum input numbers

Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
*/

function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt("Please enter a number", 0);

    if (value === "" || value === null || !isFinite(value)) break;
     numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
}

/* 5. A maximal subarray

The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will find return that sum.
*/

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }
  return maxSum;
}
