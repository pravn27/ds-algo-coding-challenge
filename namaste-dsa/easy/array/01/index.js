// Approach 1
/**
 * @param {number[]} nums
 * @return {number} unique elements count
 */
const removeDuplicates_A1 = (nums) => {
  /**
   * Edge case covered
   * 1. if not valid array type
   * 2. array should not be empty
   */
  if (!Array.isArray(nums) || !nums.length) {
    console.error("Enter valid array types & should not be empty");
    throw new Error("Enter valid array types & should not be empty");
  }

  const LENGTH = nums.length;
  // unique count index
  let uniqueCount = 0;
  // traverse each elements in array
  for (let i = 0; i < LENGTH; i++) {
    // find unique element by comparison
    if (nums[i] > nums[uniqueCount]) {
      uniqueCount = uniqueCount + 1;
      nums[uniqueCount] = nums[i];
    }
  }
  console.log("In place/Existing modified array ", nums);
  return uniqueCount + 1;
};

console.log("Approach 1 =======>");
console.log(removeDuplicates_A1([0, 1, 1, 2]));
console.log(removeDuplicates_A1([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates_A1([0, 0, 1, 1, 2, 3]));
console.log(removeDuplicates_A1([1, 1, 2, 2, 2, 4]));
console.log(removeDuplicates_A1([0, 1, 1, 1, 5, 5]));
console.log(removeDuplicates_A1([]));
console.log(removeDuplicates_A1({}));
