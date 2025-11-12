# Requirement or Problem statement & (Thought Process) Solution Approach

## 1. Problem statement

- Missing Number
- https://leetcode.com/problems/missing-number/description/
- This episode covers mathematical and XOR-based approaches to finding the missing element from an array, a common interview question.

## 2. Understand the problem with sample inputs & outputs

### Sample - 1

- Input: nums = [3,0,1]
- Output: 2

### Sample - 2

- Input: nums = [1,0,2,3,5]
- Output: 4

## 3. Approach & solution notes

<details>
  <summary><b>Approach - 1 Best case</b></summary>

- Thought Process / Approach

  - get totalSum from range 0 to n
  - find the partial sum in nums array
  - missingNum = totalSum - partialSum

  - ![alt text](./img/approach-1.1.png)

- Make sure dry run with sample examples with notebooks

- Complexity

  - Time Complexity: O(n), where n is length of the array
  - Space Complexity: O(1)

</details>

<details>
  <summary><b>Approach - 2 Brute force</b></summary>

- Thought Process / Approach

  - ![alt text](./img/approach-brute-force.png)

- Make sure dry run with sample examples with notebooks

- Complexity

  - Time Complexity: O(n log n), where n is length of the array
  - Space Complexity: O(1)

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
