const defaultColors = ["red", "blue", "yello"];
const userFavoriteColors = ["orange", "green"];

console.log(["white"].concat(defaultColors).concat(userFavoriteColors));
const allColors = ["white", ...defaultColors, ...userFavoriteColors];
console.log(allColors);
// [ 'white', 'red', 'blue', 'yello', 'orange', 'green' ]

const allColors2 = ["white", ...defaultColors, userFavoriteColors];
console.log(allColors2);
// [ 'white', 'red', 'blue', 'yello', [ 'orange', 'green' ] ]

function unshift(array, ...numbers) {
  return [...numbers, ...array];
}

console.log(unshift([1, 2, 3], 4, 5, 6, 7));
