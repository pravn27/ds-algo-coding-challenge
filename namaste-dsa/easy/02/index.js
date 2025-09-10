// Write a JS function to count the negative numbers in an Array items, if nothing found return 0

// Approach 1 - Brute force, one pass solution
const countNegativeNumbers_A1 = (arr) => {
  // define neg count & Array length variable
  let negativeCount = 0;
  const ARRAY_LENGTH = arr.length;

  // use for loop, iterate each item & compare / negative number condition checks
  for (let i = 0; i < ARRAY_LENGTH; i++) {
    if (arr[i] < 0) {
      negativeCount++;
    }
  }

  // return neg count;
  return negativeCount;
};

console.log("Approach 1 =======>");
console.log(countNegativeNumbers_A1([5, 3, 2, 4, 1]));
console.log(countNegativeNumbers_A1([6, 10, 12, 20, 30]));
console.log(countNegativeNumbers_A1([1, 3, 2, 4, 5]));
console.log(countNegativeNumbers_A1([-5, -3, -1, 0, 2]));
console.log(countNegativeNumbers_A1([-2, 3, 1, 4]));
console.log(countNegativeNumbers_A1([1, -2, 3, 4, 2]));
