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
