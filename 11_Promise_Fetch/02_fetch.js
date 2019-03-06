// 200
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response)
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(data => console.log("data:", data))
  .catch(error => console.log("error:", error));
// ReferenceError: fetch is not defined
// Run this code in Chrome developer console

// 404
fetch("https://jsonplaceholder.typicode.com/posts22222")
  .then(response => response)
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(data => console.log("data:", data))
  .catch(error => console.log("error:", error));

// bad domain
fetch("https://jsonplaceholder.typicode8888888.com/posts")
  .then(response => response)
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(data => console.log("data:", data))
  .catch(error => console.log("error:", error));
// error: TypeError: Failed to fetch
