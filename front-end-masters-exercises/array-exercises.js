//Create a variable called noiseArray and assign it to an array literal. Place at least one element in the array.

var noiseArray = ["woof"];

/*Using a native array method…

Add a noise to the beginning of the noiseArray.
Add another noise to the end of the noiseArray.
*/

noiseArray.unshift("squeee");
noiseArray.push("mooo");

/*Using Bracket Notation…

add another noise to the end.
*/

noiseArray[3] = "splat";

//Inspect the noiseArray

//What is the length?

noiseArray.length; // outputs 4

//What is the last index? How is it different than the length?

noiseArray.length - 1; // The last index is 3 because the index begins at 0.

//Inspect your handiwork! What does it look like?

[ 'woof' ]
[ 'squeee', 'woof' ]
[ 'squeee', 'woof', 'mooo' ]
[ 'squeee', 'woof', 'mooo', 'splat' ]
4 // noiseArray.length
3 // last index of noiseArray

// Nest the Array in the Object

// Put the noiseArray inside the animal object on the noises property.

animal.noises = noiseArray;

// Review: What are the different ways you can add properties and values to arrays?

// You can add properties and values to arrays by using dot notation or bracket notation.

// Come up with two ways you can add an element to the end of an array, without knowing the exact length of the array.

// You can add an element to the end of an array by using array.push(value) or array[array.length] = value

// Animal Collection

// A collection is an array of objects.

// Create a variable called animals and set it equal to an empty array

var animals = [];

// Using any method you prefer, add your animal from the Object Exercises to the animals array.

animals.push(animal);

// Create a variable called quackers and assign it to this example object:
// { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] }

var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] };

// Add quackers to the animals array using a different method than before.

animals[animals.length] = quackers;

// Inspect your animals array to ensure you have two objects inside.

console.log(animals);

// Create two more animal objects and add them to your animals array. They should have these properties and your choice of values:
// username (with a string value)
// tagline (with a string value)
// noises (with an array of values)

var horse = { username: 'BoJack', tagline: 'I enjoy horsin\' around', noises: ['brrr', 'yip'] };
var squid = { username: 'tentacles', tagline: 'Blub blub', noises: ['gush', 'splash'] };

animals.push(horse, squid);
// Check the length property of your array. It should give you 4.

animals.length; // returns 4
