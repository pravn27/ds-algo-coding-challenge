# Requirement or Problem statement & (Thought Process) Solution Approach

## 1. Problem statement

- Linear Search, search target element in an array, if found return index of that, else return -1
- Learn to traverse an array and check each element sequentially to find a match. Simple yet essential for unsorted arrays.
- Same problem solved earlier
  - https://github.com/pravn27/ds-algo-coding-challenge/blob/master/namaste-dsa/easy/01/requirement%26approach.md

## 2. Understand the problem with sample inputs & outputs

### Sample - 1

- Input: arr = [2, 3, 5, 0, 1], target = 3
- Output: 1

### Sample - 2

- Input: arr = [1, 2, 10, 8, 3], target = 4
- Output: -1

## 3. Approach & solution notes

<details>
  <summary><b>Approach - 1</b></summary>

- Thought Process / Approach

  - use for loop
  - traverse each element in array & compare with target, if found return index of that
    - if (arr[i] == target) return i
  - if target element not found, return -1

- Make sure dry run with sample examples with notebooks

- Complexity

  - Time Complexity: O(n), where n is length of array
  - Space Complexity: O(1)

</details>

<details>
  <summary><b>Solution Notes</b></summary>

- ![alt text](./img/solution-1.png)

</details>

## 4. Implementation & Refactor

- [Coding solution in JS](./index.js)

## 5. (Good to ask) Edge / Corner case covered with refactor / improvements
