const square = function(s) {
  return s*s;
};

// const squareArrow = (x) => {
//   return x * x;
// }

const squareArrow = (x) => x * x;

console.log(square(8));
console.log(squareArrow(9));

const getFirstName = (name) => name.split(" ")[0];

console.log(getFirstName('mike jones'));