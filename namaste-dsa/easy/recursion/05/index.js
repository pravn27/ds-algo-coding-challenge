/**
 *
 * @param {pointing to last element of array} length
 * @param {Array} arr
 * @returns
 */
const sumOddNum_A1 = (length, arr) => {
  // Odd number check
  const IS_NUM_ODD = arr[length] % 2 != 0;

  // base condition, if length is 0, stop the recursion call;
  if (length === 0) return IS_NUM_ODD ? arr[length] : 0;

  // recursive case, if odd add that number, else skip it & move to next recursive call
  return IS_NUM_ODD
    ? arr[length] + sumOddNum_A1(length - 1, arr)
    : sumOddNum_A1(length - 1, arr);
};

console.log("Approach 1 =======>");
console.log(sumOddNum_A1(4, [2, 3, 4, 1, 0]));
console.log(sumOddNum_A1(3, [4, 1, 0, 20]));
console.log(sumOddNum_A1(5, [1, 7, 4, 1, 0, 20]));
