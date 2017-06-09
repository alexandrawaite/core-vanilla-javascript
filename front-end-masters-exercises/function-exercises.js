// Animal User

// Write a function, AnimalTestUser, that has one string parameter, username. It returns an object with a username property.

function AnimalTestUser(username) {
  return {
    username: username
  }
}

// In your AnimalTestUser function, create a check that sees how many arguments are passed.
// If there is more than one argument, create a property, otherArgs that is an array of the remaining arguments.
// Note: the arguments keyword is not a true array. Remember, it is an array-like object.

function AnimalTestUser(username) {
  var argLength = arguments.length;
  var otherArgs = [];
  if (argLength > 1) {
    for (var i = 1; i < argLength; i++) {
      otherArgs.push(arguments[i])
    }
  }
  return {
    username: username,
    otherArgs: otherArgs
  }
}

// Write a constructor function, AnimalCreator that returns a single animal object.
// The constructor function has 4 parameters: username, species, tagline, and noises.
// The animal object should have at least 5 properties: username, species, noises, tagline, and friends.
// The values should all be strings except noises and friends, which are arrays.

function AnimalCreator(username, species, tagline, noises) {
  var animal = {
    "username": username,
    "species": species,
    "tagline": tagline,
    "noises": noises,
    "friends": []
  }
  return animal;
}

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahh', 'arrgg', 'chewchew']);

var cow = AnimalCreator('Moo', 'cow', 'got milk?', ['moo', 'mooooo']);

var llama = AnimalCreator('Zeny', 'llama', 'Cool beans', ['llama noises', 'munchmunch']);

// Write a function, addFriend that takes an animal object (like the one returned from the AnimalCreator function) and adds another animal object as a friend.

function addFriend(animal, friend) {
  animals.friends.push(friend);
}

// Change your addFriend function to only add the username of the friend, not the whole object.

function addFriend(animal, friend) {
  animals.friends.push(friend.username);
}

// Create a myFarm collection of at least 3 animal objects. Give them some friends using addFriend, too!

var myFarm = [sheep, cow, llama];
addFriend(cow, sheep);
addFriend(llama, cow);

// Create a function, addMatchesArray, that takes a farm (array of animal objects) and adds a new property to each animal object called matches that is an empty array. Hint: you will need a loop.

function addMatchesArray(farm) {
  for (var i = 0; i < farm.length; i++) {
    farm[animal].matches = [];
  }
}

// Create a function, giveMatches, that takes a farm collection (aka an array of animal objects) that already has a matches property.
// It selects a name from the friends array and adds it to the matches array. You can choose how the selection is made (random, the first element, etc). Make sure all your animal objects have friends.

function giveMatches(farm) {
  for (var i = 0; i < farm.length; i++) {
    farm[animal].matches.push(farm[animal].friends[0]);
  }
}
