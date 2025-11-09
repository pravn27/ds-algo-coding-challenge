# Requirement or Problem statement & (Thought Process) Solution Approach

## 1. Problem statement

- Merge Sorted Array
- https://leetcode.com/problems/merge-sorted-array/description/
- This video explains the two-pointer technique to merge arrays efficiently. Essential for problems like merge sort and combining datasets.
- <details>

  <summary><b>Summary / Take away from problem statement / Key Observation</b></summary>

  - Under problem

    - ![alt text](./img/understand-problem.png)

    </details>

## 2. Understand the problem with sample inputs & outputs

### Sample - 1

- Input: nums1 = [1,2], m = 2, nums2 = [2,5,6], n = 3
- Output: [1,2,2,5,6]

### Sample - 2

- Input: nums1 = [1,2,3,4], m = 4, nums2 = [1,4,6], n = 3
- Output: [1,1,2,3,4,4,6]

## 3. Approach & solution notes

<details>
  <summary><b>Approach - 1 Brute force</b></summary>

- ![alt text](./img/approach-brute-force.png)

</details>
<details>
  <summary><b>Approach - 2</b></summary>

- Thought Process / Approach

  - **Improved approach, Time complexity O(m+n) and Space complexity O(m)**
    - create copy of nums1 array, since we update for merged sorted array
    - use 2 pointer p1, p2
      - compare for small values, fill from beginning of nums1 array
    - make sure handle array boundary case, after crossing for p1, p2

- ![alt text](./img/approach2-1.1.png)
- ![alt text](./img/approach2-1.2.png)

- Make sure dry run with sample examples with notebooks

  - ![alt text](./img/approach-2-dry-run.png)

- Complexity

  - Time Complexity: O(m+n), where m, n is length of the nums1, nums2 array
  - Space Complexity: O(m), where m is length of nums1 array, due to extra space for copied nums1 array

</details>
<details>
  <summary><b>Approach - 3 Best case</b></summary>

- Thought Process / Approach

  - **Improved approach, Time complexity O(m+n) and Space complexity O(1)**
    - compare and fill in the reverse order from end
    - use 2 pointer p1, p2
      - compare for large element, fill from end of nums1 array (m+n) length
    - make sure handle array boundary case, after crossing for p1, p2

- ![alt text](./img/approach2-1.1.png)
- ![alt text](./img/approach2-1.2.png)

- Make sure dry run with sample examples with notebooks

  - ![alt text](./img/approach-2-dry-run.png)

- Complexity

  - Time Complexity: O(m+n), where m, n is length of the nums1, nums2 array
  - Space Complexity: O(1), its will be in place nums1 array

</details>

<details>
  <summary><b>Solution Notes</b></summary>

- ![alt text](./img/solution-1.1.png)
- ![alt text](./img/solution-1.2.png)
- ![alt text](./img/solution-1.3.png)
- ![alt text](./img/solution-1.4.png)

</details>

## 4. Implementation & Refactor

- [Coding solution in JS](./index.js)

## 5. (Good to ask) Edge / Corner case covered with refactor / improvements

- What if, instead of array type if pass as other objects ?
  - Check whether its array or not, should return error message
- What if array is empty ?
  - Should return error message
