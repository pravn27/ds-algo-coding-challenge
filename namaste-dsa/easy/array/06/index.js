/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes_A1 = function (nums) {
  /**
   * Edge case covered
   * 1. if not valid array type
   * 2. array should not be empty
   */
  if (!Array.isArray(nums) || !nums.length) {
    console.error("Enter valid array types & should not be empty");
    throw new Error("Enter valid array types & should not be empty");
  }

  // two pointer approach i, x
  // i pointer to traverse elements of nums array
  // x pointer to place / shift non zero elements
  let x = 0;
  const LENGTH = nums.length;

  for (let i = 0; i < LENGTH; i++) {
    // find non zero elements & move/shift to x index position
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }

  // fill all remaining elements with 0, from x to n
  for (let i = x; i < LENGTH; i++) {
    nums[i] = 0;
  }

  console.log("final inplace / update array ", nums);
};

console.log("Approach 1 =======>");
console.log(moveZeroes_A1([2, 0, 1, 0, 9, 10]));
console.log(moveZeroes_A1([1, 0, 5, 4, 0]));
console.log(moveZeroes_A1([0, 1, 0, 6, 4]));
console.log(moveZeroes_A1([7, 6, 1]));
console.log(moveZeroes_A1([]));
console.log(moveZeroes_A1({}));
