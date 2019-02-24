// function makeHttpRequest(url, method) {
//   if (!method) {
//     method = "GET";
//   }
//   return `${method} to ${url}`;
// }

function makeHttpRequest(url, method = "GET") {
  return `${method} to ${url}`;
}

console.log(makeHttpRequest("https://www.google.com", "GET"));
// GET to https://www.google.com
console.log(makeHttpRequest("https://www.google.com"));
// GET to https://www.google.com
console.log(makeHttpRequest("https://www.google.com", "POST"));
// POST to https://www.google.com
console.log(makeHttpRequest("https://www.google.com", null));
// null to https://www.google.com
console.log(makeHttpRequest("https://www.google.com", undefined));
// GET to https://www.google.com
