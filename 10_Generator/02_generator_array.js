function* colors() {
  yield "red";
  yield "blue";
  yield "yellow";
}

const colorsGen = colors();
for (let color of colorsGen) {
  console.log(color);
}

// colorsGen.forEach(function(color) {
//   console.log(color);
// });
// TypeError: colorsGen.forEach is not a function
