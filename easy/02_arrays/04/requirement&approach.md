# Requirement or Problem statement & (Thought Process) Solution Approach

## 1. Problem statement

- Write a function to Check if an Array is Sorted (Ascending/Increasing Order) or not
- Ref link: https://takeuforward.org/data-structure/check-if-an-array-is-sorted/

## 2. Features / Use cases

## 3. Understand the problem with sample inputs & outputs

### Sample - 1

- Input: [5, 3, 2, 4, 1]
- Output: false

### Sample - 2

- Input: [6, 10, 12, 20, 30]
- Output: true

## 4. Approach

<details>
  <summary><b>Approach - 1 (Optimized)</b></summary>

- Thought Process / Approach - one pass solution

  - We will check every element with its previous element if the previous element is smaller than or equal to the current element then we will move to the next index.
  - if any element greater than next future element, return false
  - else return true after traversed all element

- Complexity
  - Time Complexity: O(n)
  - Space Complexity: O(1)

</details>

<details>
  <summary><b>Approach - 2 (Brute force)</b></summary>

- Thought Process / Approach

  - Compare each element with rest of all element
  - if any element greater than next future element, return false
  - else return true after traversed all element

- Complexity
  - Time Complexity: O(n ^ 2)
  - Space Complexity: O(1)

</details>
