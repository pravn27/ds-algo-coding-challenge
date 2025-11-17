const findFactorial = (n) => {
  // base condition, if n is less than or equal to 1, return 1;
  if (n <= 1) return 1;

  // recursive case
  return n * findFactorial(n - 1);
};

console.log("Approach 1 =======>");
console.log(findFactorial(3));
console.log(findFactorial(5));
console.log(findFactorial(6));
