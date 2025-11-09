/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes_A1 = function (nums) {
  /**
   * Edge case covered
   * 1. if not valid array type
   * 2. array should not be empty
   */
  if (!Array.isArray(nums) || !nums.length) {
    console.error("Enter valid array types & should not be empty");
    throw new Error("Enter valid array types & should not be empty");
  }

  let consOnesCount = 0;
  let maxCount = 0;

  const LENGTH = nums.length;

  for (let i = 0; i < LENGTH; i++) {
    // if each consecutive one visit / traverse, increment consOnesCount by 1
    if (nums[i] === 1) {
      consOnesCount++;
    }
    // else if encounter/visit zero, update maxCount compare with consOnesCount and reset consOnesCount to 0
    else {
      maxCount = Math.max(maxCount, consOnesCount);
      consOnesCount = 0;
    }
  }
  // return max of maxCount or consOnesCount
  return Math.max(maxCount, consOnesCount);
};

console.log("Approach 1 =======>");
console.log(findMaxConsecutiveOnes_A1([0, 1, 1, 0, 1, 1, 1, 1]));
console.log(findMaxConsecutiveOnes_A1([1, 1, 1, 0, 0, 1, 0, 1]));
console.log(findMaxConsecutiveOnes_A1([1, 1, 0, 0, 0, 1, 1]));
console.log(findMaxConsecutiveOnes_A1([0, 0, 1]));
console.log(findMaxConsecutiveOnes_A1([0, 0, 0]));
console.log(findMaxConsecutiveOnes_A1([1, 1, 1]));
console.log(findMaxConsecutiveOnes_A1([]));
console.log(findMaxConsecutiveOnes_A1({}));
