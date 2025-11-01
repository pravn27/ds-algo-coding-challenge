// Approach 1
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement_A1 = (nums, val) => {
  /**
   * Edge case covered
   * 1. if not valid array type
   * 2. array should not be empty
   */
  if (!Array.isArray || !nums.length) {
    console.error("Enter valid array types & should not be empty");
    throw new Error("Enter valid array types & should not be empty");
  }

  const LENGTH = nums.length;
  let x = 0;
  // traverse each elements in array
  for (let i = 0; i < LENGTH; i++) {
    // shift element to left only if element not equal to val
    if (nums[i] !== val) {
      // shift element
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  console.log("In place/Existing modified array ", nums);
  return x;
};

console.log("Approach 1 =======>");
console.log(removeElement_A1([0, 1, 1, 2], 1));
console.log(removeElement_A1([0, 0, 1, 2, 3, 3, 4], 3));
console.log(removeElement_A1([0, 0, 1, 1, 2, 3], 0));
console.log(removeElement_A1([1, 1, 2, 2, 2, 4], 2));
console.log(removeElement_A1([0, 1, 1, 1, 5, 3], 1));
console.log(removeElement_A1([], 2));
console.log(removeElement_A1({}, 3));
