// Approach 1
const square_A1 = (num) => {
  // square the number & return the result
  return num * num;
};

console.log(square_A1(3));
console.log(square_A1(5));
console.log(square_A1(10));
console.log(square_A1(7));
console.log(square_A1(3));
console.log(square_A1(0));
console.log(square_A1(-3));

// Approach 2, using Math.pow()
const square_A2 = (num) => {
  // square the number & return the result
  return Math.pow(num, 2);
};

console.log(square_A2(3));
console.log(square_A2(5));
console.log(square_A2(10));
console.log(square_A2(7));
console.log(square_A2(3));
console.log(square_A2(0));
console.log(square_A2(-3));
