function* numbers() {
  yield;
}
const numbersGen = numbers();
console.log(numbersGen.next());
// { value: undefined, done: false }
console.log(numbersGen.next());
// { value: undefined, done: true }

/////////////////

function* shopping() {
  const into = yield "Into store";
  const intoGreeting = yield "Welcome";
  // buy some stuff
  const outGreeting = yield "See you next time";
  return "Out of store with some stuff";
}
const shoppingGen = shopping();
console.log(shoppingGen.next());
// { value: 'Into store', done: false }
console.log(shoppingGen.next());
// { value: 'Welcome', done: false }
console.log(shoppingGen.next());
// { value: 'See you next time', done: false }
console.log(shoppingGen.next());
// { value: 'Out of store with some stuff', done: true }
