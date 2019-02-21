var users = [{ name: "John", age: 22 }, { name: "Mary", age: 22 }];

var john = users.find(function(user) {
  return user.name === "John";
});

console.log(john);

var twentyTwo = users.find(function(user) {
  return user.age === 22;
});

console.log(twentyTwo);

///////////////////////

function findWhere(array, criteria) {
  const key = Object.keys(criteria)[0];
  const val = criteria[key];
  //   console.log(key);
  //   console.log(val);
  return array.find(function(o) {
    return o[key] === val;
  });
}

var ladders = [{ id: 1, height: 20 }, { id: 3, height: 25 }];

var a = findWhere(ladders, { height: 25 });
console.log(a);
