const empNo = 123;
let name = "Ken";
let title = "Software Engineer";

// TypeError: Assignment to constant variable.
empNo = 456;
console.log(empNo);

title = "Senior Software Engineer";
console.log(title);
