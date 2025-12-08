# Requirement or Problem statement & (Thought Process) Solution Approach

## 1. Problem statement

- Insertion Sort, sorting in ascending order
- Learn the insertion sort technique where each element is inserted at the correct position in the sorted part of the array.

## 2. Understand the problem with sample inputs & outputs

### Sample - 1

- Input: arr = [4, 5, 1, 3, 9]
- Output: [1, 3, 4, 5, 9]

### Sample - 2

- Input: arr = [10, 2, 5, 1, 3]
- Output: [1, 2, 3, 5, 10]

## 3. Approach & solution notes

<details>
  <summary><b>Approach - 1</b></summary>

- Thought Process / Approach

  - using 2 for loop
  - Outer iteration i, till n-1 times

    - on every iteration, find the minimum element & place at the right position
    - Inner iteration j, compare & find the min element
    - swap the A[i], A[min] element

  - ![alt text](./img/approach-1.1.png)
  - ![alt text](./img/approach-1.2.png)

- Make sure dry run with sample examples with notebooks

- Complexity
  - Time Complexity: O(n^2), where n is length of array
  - Space Complexity: O(1)

</details>

<details>
  <summary><b>Solution Notes</b></summary>

- ![alt text](./img/solution-1.png)
- ![alt text](./img/solution-2.png)

</details>

## 4. Implementation & Refactor

- [Coding solution in JS](./index.js)

## 5. (Good to ask) Edge / Corner case covered with refactor / improvements
