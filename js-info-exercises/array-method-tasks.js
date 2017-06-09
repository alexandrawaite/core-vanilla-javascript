/* 1. Map to names

You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
*/

let john = { name: "John", age: 25};
let pete = { name: "Pete", age: 30};
let mary = { name: "Mary", age: 28};

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

/* 2. Map to objects

You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
*/

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
  fullName: user.name + ' ' + user.surname,
  id: user.id
}));


/* 3. Sort objects

Write the function sortByName(users) that gets an array of objects with property name and sorts it.
*/
function sortByName(arr) {
  arr.sort((a, b) => a.name > b.name);
}

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 28 }

let arr = [ john, pete, mary ];

sortByName(arr);

/* 4. Get average age

Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

The formula for the average is (age1 + age2 + ... + ageN) / N.
*/

function getAverageAge(users) {
  return arr.reduce((prev, user) => prev + user.age, 0) / arr.length;
}

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 29 }

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) );

/* 5. Filter unique array members

Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.
*/

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}
