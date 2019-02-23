// ES5
const add = function(n1, n2) {
  return n1 + n2;
};
console.log(add(4, 8));

// ES6 - fat arrow
const add2 = (n1, n2) => {
  return n1 + n2;
};
console.log(add2(4, 8));

// ES6 - single line in arrow function; auto return.
const add3 = (n1, n2) => n1 + n2;
console.log(add3(4, 8));

// ES6 - single argument, no need ()
const double = number => number * 2;
console.log(double(5));

// ES6 - advanced
const numbers = [1, 2, 3];
const doubleNumbers1 = numbers.map(function(number) {
  return number * 2;
});
console.log(doubleNumbers1);

//
const doubleNumbers2 = numbers.map(number => number * 2);
console.log(doubleNumbers2);
