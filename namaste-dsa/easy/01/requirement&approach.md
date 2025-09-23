# Requirement or Problem statement & (Thought Process) Solution Approach

## 1. Problem statement

- Write a function to search element in an array and return index of that, if element is not present return -1

## 2. Features / Use cases

## 3. Understand the problem with sample inputs & outputs

### Sample - 1

- Input: [5, 3, 2, 4, 1], 2
- Output: 2

### Sample - 2

- Input: [6, 10, 12, 20, 30], 100
- Output: -1

## 4. Approach

<details>
  <summary><b>Approach - 1 (Brute force)</b></summary>

- Thought Process / Approach - one pass solution

  - Use for loop to traverse the array
  - Loop each element (traverse / visit each element) & compare with search element
  - if found return that index, or else return -1

    ![alt text](./img/logic-1.png)

- Complexity
  - Time Complexity: O(n)
  - Space Complexity: O(1)

</details>

## 5. Implementation & Refactor

- [Coding solution in JS](./index.js)

## 6. (Good to ask) Edge / Corner case covered with refactor / improvements

- What if, instead of array type if pass as other objects ?
  - Check whether its array or not, should return error message
- What if array is empty ?
  - Should return error message
