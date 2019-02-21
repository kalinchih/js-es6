var colors = ["yellow", "green", "red"];

// old
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
// es6
colors.forEach(function(color) {
  console.log(color);
});

////////////////////////////

// why es6 forEach?

// Create an array of numbers
var numbers = [1, 2, 3, 4, 5];

// hold the sum
var sum = 0;

// numbers.forEach(function adder(number) {
//   sum += number;
// });

numbers.forEach(adder);

// helper
function adder(number) {
  sum += number;
}

// function adder() {
//   sum += 1;
// }

// function adder(number) {
//   sum += "" + number;
// }

console.log(sum);

/////////////////////////////

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

var areas = [];

function addImageInAreas(image) {
  const area = image.height * image.width;
  areas.push(area);
}

images.forEach(addImageInAreas);
console.log(areas);

////

function addInAreas({ height, width }) {
  const area = height * width;
  areas.push(area);
}

images.forEach(addInAreas);
console.log(areas);

////

images.forEach(({ height, width }) => areas.push(height * width));
console.log(areas);
