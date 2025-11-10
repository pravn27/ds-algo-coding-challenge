/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber_A1_BestCase = (nums) => {
  const n = nums.length;

  // get total sum count which range from 0 to n, 0+1+2+3+.....+n is (n*(n+1))/2
  const totalSum = (n * (n + 1)) / 2;

  // get partial sum in nums array
  let partialSum = 0;
  for (let i = 0; i < n; i++) {
    partialSum = partialSum + nums[i];
  }

  const missingNumber = totalSum - partialSum;
  return missingNumber;
};

console.log("Approach 1 =======>");
console.log(missingNumber_A1_BestCase([3, 0, 1]));
console.log(missingNumber_A1_BestCase([1, 0, 2, 3, 5]));
console.log(missingNumber_A1_BestCase([3, 2, 1]));
console.log(missingNumber_A1_BestCase([3, 2, 0, 1]));
