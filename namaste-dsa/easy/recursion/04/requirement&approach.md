# Requirement or Problem statement & (Thought Process) Solution Approach

## 1. Problem statement

- Sum of all numbers in Array, using recursion
- This video covers different approaches to compute the sum of elements in an array, from loops to recursion, enhancing your problem-solving skills.

## 2. Understand the problem with sample inputs & outputs

### Sample - 1

- Input: [3, 2, 1, 4, 5]
- Output: 15

### Sample - 2

- Input: [1, 3, 4, 5]
- Output: 13

## 3. Approach & solution notes

<details>
  <summary><b>Approach - 1</b></summary>

- Thought Process / Approach

  - using Recursion

    - what is the base condition ?
      - if length === 0, return arr[0]
    - what is the recursive case ?
      - arr[n] + sumNum(n-1), where n is (Array.length-1) which is last element index

  - ![alt text](./img/approach-1.png)

- Make sure dry run with sample examples with notebooks

- Complexity

  - Time Complexity: O(n), where n is input
  - Space Complexity: O(n), due to call stack

</details>

<details>
  <summary><b>Solution Notes</b></summary>

- ![alt text](./img/solution-1.png)

</details>

## 4. Implementation & Refactor

- [Coding solution in JS](./index.js)

## 5. (Good to ask) Edge / Corner case covered with refactor / improvements
