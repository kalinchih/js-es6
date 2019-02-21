var products = [
  { name: "banana", type: "fruit", price: 6 },
  { name: "cucumber", type: "vegetable", price: 8 },
  { name: "celery", type: "vegetable", price: 7 },
  { name: "orange", type: "fruit", price: 20 }
];

var fruits = products.filter(function(product) {
  return product.type === "fruit" && product.price < 10;
});

console.log(fruits);

///////////////////////////////////////////
function reject(array, iteratorFunction) {
  return array.filter(function(obj) {
    return !iteratorFunction(obj);
  });
}

function lessThanFifteen(number) {
  return number < 15;
}

var numbers = [10, 20, 30];
var result = reject(numbers, lessThanFifteen);
console.log(result);
