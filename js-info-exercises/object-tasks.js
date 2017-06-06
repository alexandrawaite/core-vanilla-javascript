/* 1. Hello, object

Write the code, one line for each action:
 Create an empty object user.
 Add the property name with the value John.
 Add the property surname with the value Smith.
 Change the value of the name to Pete.
 Remove the property name from the object.
*/

 let user = {};
 user.name = "John";
 user["surname"] = "Smith";
 user.name = "Pete";
 delete user.name;

/* 2. Check for emptiness

Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
*/

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

/* 3. Constant objects?

Is it possible to change an object declared with const, how do you think?
*/
/*
It is possible to change an object declared with const because const adjusts the value of the object, it does not reassign the object with new values.
*/

/* 4. Sum object properties

We have an object storing salaries of our team:
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

Write code to add all salaries and store in the variable sum. If salaries is empty, result must be 0.
*/

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

/* 5. Multiply numeric properties by 2

Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.
*/

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] * 2;
    }
  }
}
