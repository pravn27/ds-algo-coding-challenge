/**
 *
 * @param {pointing to last element of array} length
 * @param {Array} arr
 * @returns
 */
const sumNum_A1 = (length, arr) => {
  // base condition, if length is 0, stop the recursion call & return arr[0];
  if (length === 0) return arr[0];

  // recursive case
  return arr[length] + sumNum_A1(length - 1, arr);
};

console.log("Approach 1 =======>");
console.log(sumNum_A1(4, [2, 3, 4, 1, 0]));
console.log(sumNum_A1(3, [4, 1, 0, 20]));
console.log(sumNum_A1(5, [1, 7, 4, 1, 0, 20]));
