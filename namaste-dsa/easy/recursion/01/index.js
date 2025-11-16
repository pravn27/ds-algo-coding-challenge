const printNum_A1 = (num) => {
  // base condition, if n is less than 1, stop the recursion call
  if (num < 1) return;

  console.log(num);
  // recursive case
  printNum_A1(num - 1);
};

console.log("Approach 1 =======>");
console.log(printNum_A1(5));
console.log(printNum_A1(10));
console.log(printNum_A1(20));
