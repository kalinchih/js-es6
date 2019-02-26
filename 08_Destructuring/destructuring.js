// var
const expense = {
  type: "Business",
  amount: "$45 USD"
};

const { amount } = expense;
console.log(amount);

/// arguments
function getFileSummary({ name, extension, size }) {
  return `The file ${name}.${extension} is of size ${size}kb`;
}

const savedFile = {
  name: "hello",
  extension: "jpg",
  size: 125
};
console.log(getFileSummary(savedFile));

/// array
const companies = ["Google", "Facebook", "Amazon"];
const [firstCompany, ...rest] = companies;
const { length } = companies;
console.log(firstCompany);
console.log(rest);
console.log(length);

/// array & object

const companies2 = [
  { name: "Google", location: "address 1" },
  { name: "Facebook", location: "address 2" },
  { name: "Amazon", location: "address 3" }
];

const [firstCompany2, ...rest2] = companies2;
console.log(firstCompany2);
console.log(rest2);
