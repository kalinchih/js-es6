var cars = [
  { model: "Focus", price: "cheap" },
  {
    model: "Ferrari",
    price: "expensive"
  }
];

// create another array which is mapped from cars.price
var prices = cars.map(function(car) {
  return car.price;
});

console.log(prices);

//////////////////////

function pluck(array, property) {
  return array.map(function(o) {
    return o[property];
  });
}

console.log(pluck(cars, "model"));
