/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo_A1 = (n) => {
  // base case, if n is 1, return true, else if n < 1 or n is odd number return false
  if (n === 1) return true;
  else if (n < 1 || n % 2 != 0) return false;

  // recursive case
  return isPowerOfTwo_A1(n / 2);
};

console.log("Approach 1 =======>");
console.log(isPowerOfTwo_A1(16));
console.log(isPowerOfTwo_A1(6));
console.log(isPowerOfTwo_A1(8));
console.log(isPowerOfTwo_A1(1));
