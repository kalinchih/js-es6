var cars = [
  { model: "Focus", price: "cheap" },
  {
    model: "Ferrari",
    price: "expensive"
  }
];

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
