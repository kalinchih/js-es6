var numbers = [10, 20, 30];

var sum = numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

console.log(sum);

///////////////

var colors = [{ color: "red" }, { color: "blue" }, { color: "yellow" }];

var colors1 = colors.map(function(c) {
  return c.color;
});

console.log(colors1);

var colors2 = colors.reduce(function(colors2, c) {
  colors2.push(c.color);
  return colors2;
}, []);

console.log(colors2);

///////////////

var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

var totalDistance = trips.reduce(function(sum, trip) {
  return sum + trip.distance;
}, 0);

console.log(totalDistance);

///////////////

function balancedParens(text) {
  return !text.split("").reduce(function(previous, char) {
    if (previous < 0) {
      return previous;
    }
    if (char === "(") {
      return ++previous;
    } else if (char === ")") {
      return --previous;
    } else {
      return previous;
    }
  }, 0);
}

var isBalancedParens = balancedParens("((xx))");
console.log(isBalancedParens);
isBalancedParens = balancedParens(")xx(");
console.log(isBalancedParens);

////////////////

var desks = [
  { type: "sitting" },
  { type: "standing" },
  { type: "sitting" },
  { type: "sitting" },
  { type: "standing" }
];

var deskTypes = desks.reduce(
  function(deskType, desk) {
    if (desk.type === "sitting") {
      deskType.sitting++;
    } else if (desk.type === "standing") {
      deskType.standing++;
    }
    return deskType;
  },
  { sitting: 0, standing: 0 }
);

console.log(deskTypes);

//////////////////////

function unique(array) {
  return array.reduce(function(uniqueArray, i) {
    if (!contains(uniqueArray, i)) {
      uniqueArray.push(i);
    }
    return uniqueArray;
  }, []);
}

function contains(uniqueArray, obj) {
  return uniqueArray.find(function(o) {
    return o === obj;
  });
}

var numbers = [1, 1, 2, 3, 4, 4];
var uniqueNumbers = unique(numbers);
console.log(uniqueNumbers);
