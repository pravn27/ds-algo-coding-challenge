# Requirement or Problem statement & (Thought Process) Solution Approach

## 1. Problem statement

- Write a function that returns the number of negative numbers in an array.

## 2. Understand the problem with sample inputs & outputs

### Sample - 1

- Input: [10, -3, 5, -2, -7, 6, 9]
- Output: 3

### Sample - 2

- Input: [12, -13, 0, 17]
- Output: 1

## 3. Approach & solution notes

<details>
  <summary><b>Approach</b></summary>

- Declare negCount variable to count
- Use for loop to traverse / visit each element in the Array
- Add if condition to check Negative number
  - if(number < 0) negCount++;
- return negCount after loop ends

- Make sure dry run with sample examples with notebooks

- Complexity
  - Time Complexity: O(n), where n is length of Array
  - Space Complexity: O(1)

</details>

## 4. Implementation & Refactor

- [Coding solution in JS](./index.js)

## 5. (Good to ask) Edge / Corner case covered with refactor / improvements
