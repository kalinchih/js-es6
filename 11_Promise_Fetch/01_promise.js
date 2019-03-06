let promise1 = new Promise(function(resolve, reject) {});
console.log(promise1);
// Promise { <pending> }

/**************** */

let promise2 = new Promise(function(resolve, reject) {
  resolve();
});
console.log(promise2);
// Promise { undefined }

/**************** */

let promise3 = new Promise((resolve, reject) => {
  reject();
});
console.log(promise3);
// Promise { <rejected> undefined }

/**************** */

let promise4 = new Promise((resolve, reject) => {
  resolve();
});
promise4
  .then(() => {
    console.log("Finally completed");
  })
  .then(() => {
    console.log("I'm still running");
  });
//   Finally completed
//   I'm still running

/**************** */
let promise5 = new Promise((resolve, reject) => {
  reject();
});
promise5
  .then(() => {
    console.log("Finally completed");
  })
  .then(() => {
    console.log("I'm still running");
  })
  .catch(() => {
    console.log("something wrong");
  });
//   something wrong

/**************** */
let promise6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});
promise6
  .then(() => {
    console.log("Finally completed");
  })
  .then(() => {
    console.log("I'm still running");
  })
  .catch(() => {
    console.log("something wrong");
  });
// wait 3 seconds
//   Finally completed
//   I'm still running

/**************** */
let promise7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});
promise7
  .then(() => {
    console.log("Finally completed");
  })
  .then(() => {
    console.log("I'm still running");
  })
  .catch(() => {
    console.log("something wrong");
  });
// wait 3 seconds (almost same time to display with promise6)
//   something wrong
