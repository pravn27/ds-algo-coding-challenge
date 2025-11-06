// Improved Approach 1 - O(n) time complexity
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit_A1 = (pricesArr) => {
  /**
   * Edge case covered
   * 1. if not valid array type
   * 2. array should not be empty
   */
  if (!Array.isArray(pricesArr) || !pricesArr.length) {
    console.error("Enter valid array types & should not be empty");
    throw new Error("Enter valid array types & should not be empty");
  }

  const LENGTH = pricesArr.length;
  let minValue = pricesArr[0];
  let maxProfit = 0;

  // traverse each price array element
  for (let i = 1; i < LENGTH; i++) {
    // find minValue before selling day
    if (pricesArr[i] < minValue) {
      minValue = pricesArr[i];
    }
    // find maxProfit by current - minValue compare with existing maxProfit
    if (pricesArr[i] - minValue > maxProfit) {
      maxProfit = pricesArr[i] - minValue;
    }
  }

  return maxProfit;
};

console.log("Approach 1 =======>");
console.log(maxProfit_A1([2, 3, 1, 6, 9, 10]));
console.log(maxProfit_A1([1, 2, 5, 4, 3]));
console.log(maxProfit_A1([7, 1, 5, 3, 6, 4]));
console.log(maxProfit_A1([7, 6, 4, 3, 1]));
// console.log(maxProfit_A1([]));
// console.log(maxProfit_A1({}));

// Brute force Approach 2 - O(n^2) time complexity
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit_A2 = (pricesArr) => {
  /**
   * Edge case covered
   * 1. if not valid array type
   * 2. array should not be empty
   */
  if (!Array.isArray(pricesArr) || !pricesArr.length) {
    console.error("Enter valid array types & should not be empty");
    throw new Error("Enter valid array types & should not be empty");
  }

  const LENGTH = pricesArr.length;
  let maxProfit = 0;

  // traverse each price array element
  for (let i = 0; i < LENGTH; i++) {
    // keep one item, compare with rest all
    for (let j = i + 1; j < LENGTH; j++) {
      // profit = current price - prev, compare with maxProfit
      if (pricesArr[j] - pricesArr[i] > maxProfit) {
        maxProfit = pricesArr[j] - pricesArr[i];
      }
    }
  }

  return maxProfit;
};

console.log("Approach 2 =======>");
console.log(maxProfit_A2([2, 3, 1, 6, 9, 10]));
console.log(maxProfit_A2([1, 2, 5, 4, 3]));
console.log(maxProfit_A2([7, 1, 5, 3, 6, 4]));
console.log(maxProfit_A2([7, 6, 4, 3, 1]));
console.log(maxProfit_A2([]));
console.log(maxProfit_A2({}));
