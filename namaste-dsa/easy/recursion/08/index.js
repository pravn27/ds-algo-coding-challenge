/**
 * @param {number} n
 * @return {number}
 */
const fib_Recursion_A1 = function (n) {
  // base case, if n is less than 2 which is 0,1 return n
  if (n <= 1) return n;
  // recursive case, add preceding prev 2 fib number
  return fib_Recursion_A1(n - 1) + fib_Recursion_A1(n - 2);
};

console.log("Approach 1 =======>");
console.log(fib_Recursion_A1(4));
console.log(fib_Recursion_A1(5));
console.log(fib_Recursion_A1(3));
console.log(fib_Recursion_A1(2));
console.log(fib_Recursion_A1(10));
