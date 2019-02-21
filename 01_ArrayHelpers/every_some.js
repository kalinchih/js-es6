var names = ["Bill", "Joe", "Mary", "Anderson"];

var everyNameIsLong = names.every(function(name) {
  return name.length > 4;
});

console.log(everyNameIsLong);

var someNamesAreLong = names.some(function(name) {
  return name.length > 4;
});

console.log(someNamesAreLong);

// Suit for form field validations
