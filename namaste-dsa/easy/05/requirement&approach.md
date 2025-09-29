# Requirement or Problem statement & (Thought Process) Solution Approach

## 1. Problem statement

- Write a function to find Second Largest element in an Array or List

## 2. Features / Use cases

## 3. Understand the problem with sample inputs & outputs

### Sample - 1

- Input: [50, 30, -2, -40, -1, 100]
- Output: 50

### Sample - 2

- Input: [6, 10, 12, 20, 30, 30, 30]
- Output: 20

### Sample - 3

- Input: [-6, -10, -12, -20, -30]
- Output: -10

## 4. Approach & solution notes

<details>
  <summary><b>Approach - 1</b></summary>

- Thought Process / Approach - one pass solution

  - Similar like finding First largest elements
    - Declare & assign First largest & Second largest variable to -Infinity
  - Use for loop to iterate / traverse each array elements
    - Compare with first largest
    - Prior to first largest is Second largest
    - Update first & second largest
    - Compare with second largest & should not be equal to first largest
  - return Second largest

- Make sure dry run with sample examples with notebooks

- Complexity

  - Time Complexity: O(n)
  - Space Complexity: O(1)

</details>

<details>
  <summary><b>Solution Notes</b></summary>

- ![alt text](./img/solution.png)

</details>

## 5. Implementation & Refactor

- [Coding solution in JS](./index.js)

## 6. (Good to ask) Edge / Corner case covered with refactor / improvements

- What if, instead of array type if pass as other objects ?
  - Check whether its array or not, should return error message
- What if array is empty ?
  - Should return error message
- What if Array has less than 2 elements ?
  - Should return error message
- What if Array has negative numbers ?
- What if Array has Duplicates numbers ?
- What if Array has Infinity numbers ?
