// Approach 1
/**
 * @param {number[]} nums
 * @return {number} unique elements count
 */
const removeDuplicates_A1 = (nums) => {
  const LENGTH = nums.length;
  let x = 0;
  // traverse each elements in array
  for (let i = 0; i < LENGTH; i++) {
    // find unique element by comparison
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  console.log("In place/Existing modified array ", nums);
  return x + 1;
};

console.log("Approach 1 =======>");
console.log(removeDuplicates_A1([0, 1, 1, 2]));
console.log(removeDuplicates_A1([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates_A1([0, 0, 1, 1, 2, 3]));
console.log(removeDuplicates_A1([1, 1, 2, 2, 2, 4]));
console.log(removeDuplicates_A1([0, 1, 1, 1, 5, 5]));
