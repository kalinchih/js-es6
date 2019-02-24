const defaultColors = ["red", "blue", "yello"];
const userFavoriteColors = ["orange", "green"];

const allColors = ["white", ...defaultColors, ...userFavoriteColors];
console.log(allColors);
// [ 'white', 'red', 'blue', 'yello', 'orange', 'green' ]

const allColors2 = ["white", ...defaultColors, userFavoriteColors];
console.log(allColors2);
// [ 'white', 'red', 'blue', 'yello', [ 'orange', 'green' ] ]
