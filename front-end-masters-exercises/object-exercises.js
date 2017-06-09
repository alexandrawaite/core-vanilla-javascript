// Create a variable, name it animal, and assign it an object literal.

var animal = {};

// With Dot Notation, add a property called username and assign it a value.
// Ensure that your username property exists in animal by inspecting it in the console.

animal.username = "Pig";
console.log(animal.username);

// With Bracket Notation, add a property called tagline and give it a value.
// Check that your property exists in the animal object by inspecting it in the console.

animal.tagline = "Come roll in my pigsty";
console.log(animal.tagline);

// Create a variable called noises and assign it an empty array []
// Add the noises array to your object.
// Inspect your handiwork!

var noises = [];
animal.noises = noises;
console.log(animal);

// Loop through the properties of your animal object.
// Count everytime it loops to keep track of the number of properties on your object.

var count = 0;
for (var key in animal) {
  count++;
}

// Write an if/else statement in your loop:
// If the key is username, console.log('Hi my name is ' + ___) fill in with object's username value.
// If the key is tagline, console.log('I like to say ' + ___) fill in with object's tagline value.

var count = 0;
for (var key in animal) {
  count++;
  if (key === "username") {
    console.log("Hi, my name is " + animal.username);
  } else if (key === "tagline") {
    console.log("I like to say " + animal.tagline);
  }
}

// What happens if you return 'Hi my name is ' + ___ instead of using console.log() inside the loop?

// If you return instead of console.log() in this case, you would receive a syntax error because JavaScript can only return inside a function.
// If the code were wrapped inside a function, the return would exit the for loop on the first iteration.

// Review

// What are the different ways you can add properties and values to objects?

// You can add properties and values to objects with dot notation and bracket notation

// Which of these methods would you use if you wanted to add a property to an object that had a weird symbol (think '&')?

// Bracket notation would be the preferred method to add a property with a weird symbol

// What about if the property is a variable, how does that change the syntax?

// If the property is a variable, you use bracket notation and simply omit quotation marks
