/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber_A1 = (nums) => {
  // create hashmap js object
  const hashMap = {};
  const LENGTH = nums.length;

  // for loop, to traverse elements of array, add hashmap object with frequency / appear counts
  for (let i = 0; i < LENGTH; i++) {
    if (!hashMap[nums[i]]) {
      hashMap[nums[i]] = 1;
    } else {
      hashMap[nums[i]]++;
    }
  }

  // for loop, to check which element appear once and return that
  for (let i = 0; i < LENGTH; i++) {
    if (hashMap[nums[i]] === 1) {
      return nums[i];
    }
  }
};

console.log("Approach 1 =======>");
console.log(singleNumber_A1([2, 2, 1, 1, 5, 4, 5]));
console.log(singleNumber_A1([1, 1, 5, 2, 5]));
console.log(singleNumber_A1([3, 1, 3, 1, 5]));
console.log(singleNumber_A1([2, 2, 5, 7, 5, 3, 7]));

/**
 * @param {number[]} nums
 * @return {number}
 */
// best case - O(n)
const singleNumber_A2 = (nums) => {
  let initXor = 0;
  const LENGTH = nums.length;

  for (let i = 0; i < LENGTH; i++) {
    initXor = initXor ^ nums[i];
  }

  return initXor;
};

console.log("Approach 2 =======>");
console.log(singleNumber_A2([2, 2, 1, 1, 5, 4, 5]));
console.log(singleNumber_A2([1, 1, 5, 2, 5]));
console.log(singleNumber_A2([3, 1, 3, 1, 5]));
console.log(singleNumber_A2([2, 2, 5, 7, 5, 3, 7]));
