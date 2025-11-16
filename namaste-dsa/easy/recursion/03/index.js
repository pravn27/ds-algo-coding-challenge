const sum_A1 = (n) => {
  // base condition, if n is less than 1, stop the recursion call & return 0;
  if (n < 1) return 0;

  // recursive case
  return n + sum_A1(n - 1);
};

console.log("Approach 1 =======>");
console.log(sum_A1(5));
console.log(sum_A1(6));
console.log(sum_A1(10));
