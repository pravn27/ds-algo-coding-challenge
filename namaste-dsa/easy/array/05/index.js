/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const mergeSort_A2 = (nums1, m, nums2, n) => {
  // create copy of nums1, since update directly to get final merge sort of 2 arrays
  const nums1Copy = nums1.slice(0, m);

  // create 2 pointers
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    // compare nums1Copy, nums2, handle p1 or p2 crossed the array boundary
    if ((p1 < m && nums1Copy[p1] < nums2[p2]) || p2 >= n) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  console.log("nums1 modified merged sorted array ", nums1);
};

console.log("Approach 2 =======>");
console.log(mergeSort_A2([1, 2, 3], 3, [2, 5, 6], 3));
console.log(mergeSort_A2([0, 1, 3, 4], 4, [1, 3, 6], 3));
console.log(mergeSort_A2([2, 2, 5, 10, 20], 5, [2, 5], 2));
console.log(mergeSort_A2([1, 2, 3], 3, [0, 1, 6, 10, 15], 5));

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const mergeSort_A3 = (nums1, m, nums2, n) => {
  // compare & fill in reverse order from end of array
  // create 2 pointers
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    // p2 pointer boundary cross check
    if (p2 < 0) break;

    // compare for large element & place from end of array
    if (nums1[p1] > nums2[p2] && p1 >= 0) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
  console.log("nums1 modified merged sorted array ", nums1);
};

console.log("Approach 2 =======>");
console.log(mergeSort_A3([1, 2, 3], 3, [2, 5, 6], 3));
console.log(mergeSort_A3([0, 1, 3, 4], 4, [1, 3, 6], 3));
console.log(mergeSort_A3([2, 2, 5, 10, 20], 5, [2, 5], 2));
console.log(mergeSort_A3([1, 2, 3], 3, [0, 1, 6, 10, 15], 5));
