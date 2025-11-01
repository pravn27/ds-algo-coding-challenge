# Requirement or Problem statement & (Thought Process) Solution Approach

## 1. Problem statement

- Reverse String
- https://leetcode.com/problems/reverse-string/description/
- Learn how to reverse a string using simple iteration and swapping methods. An essential skill for manipulating text data.
- <details>

  <summary><b>Summary / Take away from problem statement / Key Observation</b></summary>

  - **in-place**, means should modify the existing data structure like Array, should not use extra memory space

    </details>

## 2. Understand the problem with sample inputs & outputs

### Sample - 1

- Input: s = ["h","e","l","l","o"]
- Output: s = ["o","l","l","e","h"]
- In place / Modified existing array of characters s

### Sample - 2

- Input: s = ["p","r","a","v","n"]
- Output: s = ["n","v","a","r","p"]
- In place / Modified existing array of characters s

## 3. Approach & solution notes

<details>
  <summary><b>Approach - 1</b></summary>

- Thought Process / Approach

  - use 2 pointer approach x, i
    - x pointer to count array elements which not equals to val and keep index of shifting element to left
    - i pointer to traverse / visit each elements in the array
  - use for loop to traverse each element, use i pointer
    - inside for loop, condition compare to element not equal to val
      - update / shift element to x pointer index
      - update x pointer, increment counting by 1
  - outside of loop, return x

- ![alt text](./img/approach-1.1.png)
- ![alt text](./img/approach-1.2.png)

- Make sure dry run with sample examples with notebooks

- Complexity

  - Time Complexity: O(n), where n is length of the array
  - Space Complexity: O(1)

</details>

<details>
  <summary><b>Solution Notes</b></summary>

- ![alt text](./img/solution-1.1.png)
- ![alt text](./img/solution-1.2.png)

</details>

## 4. Implementation & Refactor

- [Coding solution in JS](./index.js)

## 5. (Good to ask) Edge / Corner case covered with refactor / improvements

- What if, instead of array type if pass as other objects ?
  - Check whether its array or not, should return error message
- What if array is empty ?
  - Should return error message
