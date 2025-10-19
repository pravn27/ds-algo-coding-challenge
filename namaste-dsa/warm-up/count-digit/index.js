// Approach 1
const countDigits_A1 = (n) => {
  // Edge case covered, if n = 0, for negative numbers
  if (n == 0) return 1;
  // convert to absolute positive number
  n = Math.abs(n);

  let count = 0;
  while (n > 0) {
    // make it n as integer floor, not a decimal
    n = Math.floor(n / 10);
    count++;
  }
  return count;
};

console.log("Approach 1 =======>");
console.log(countDigits_A1(400));
console.log(countDigits_A1(121465));
console.log(countDigits_A1(-232));
console.log(countDigits_A1(0));
console.log(countDigits_A1(12));
console.log(countDigits_A1(-4431));
console.log(countDigits_A1(-3));
