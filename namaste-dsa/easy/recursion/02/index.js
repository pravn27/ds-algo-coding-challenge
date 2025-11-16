const printNum_A1 = (num, start) => {
  // base condition, if n is less than 1, stop the recursion call
  if (start > num) return;

  console.log(start);
  // recursive case
  printNum_A1(num, start + 1);
};

console.log("Approach 1 =======>");
console.log(printNum_A1(5, 1));
console.log(printNum_A1(10, 1));
console.log(printNum_A1(20, 1));
