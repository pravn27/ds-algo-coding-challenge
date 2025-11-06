# Requirement or Problem statement & (Thought Process) Solution Approach

## 1. Problem statement

- Move Zeros
- https://leetcode.com/problems/move-zeroes/description/
- Learn to manipulate arrays to shift zeros to the end while preserving the relative order of other elements. A must-know for array handling.
- <details>

  <summary><b>Summary / Take away from problem statement / Key Observation</b></summary>

  - Under problem

    - ![alt text](./img/understand-problem.png)

    </details>

## 2. Understand the problem with sample inputs & outputs

### Sample - 1

- Input: nums = [0,1,0,3,12]
- Output: [1,3,12,0,0]

### Sample - 2

- Input: nums = [1,0,0,4,2]
- Output: [1,4,2,0,0]

## 3. Approach & solution notes

<details>
  <summary><b>Approach - 1 Brute force</b></summary>
  
- Find all non zero elements, move / copy to new array
- fill remaining with zeros at the end of new array

</details>
<details>
  <summary><b>Approach - 2 Best case</b></summary>

- Thought Process / Approach

  - **Brute force approach**

    - ![alt text](./img/bruteforce-approach-1.1.png)

  - **Improved approach, time complexity O(n)**
    - use for loop, traverse each item in Price Array
      - if you want to sell specific day, find minValue before that by compare
      - find max profit by compare
    - return max profit

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
