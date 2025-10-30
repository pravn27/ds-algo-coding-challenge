// Approach 1
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement_A1 = (nums, val) => {
  const LENGTH = nums.length;
  let x = 0;
  // traverse each elements in array
  for (let i = 0; i < LENGTH; i++) {
    // shift element to left only if element not equal to val
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  console.log("In place/Existing modified array ", nums);
  return x;
};

console.log("Approach 1 =======>");
console.log(removeDuplicates_A1([0, 1, 1, 2]));
console.log(removeDuplicates_A1([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates_A1([0, 0, 1, 1, 2, 3]));
console.log(removeDuplicates_A1([1, 1, 2, 2, 2, 4]));
console.log(removeDuplicates_A1([0, 1, 1, 1, 5, 5]));
