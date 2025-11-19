# Requirement or Problem statement & (Thought Process) Solution Approach

## 1. Problem statement

- Fibonacci number, using recursion
- https://leetcode.com/problems/fibonacci-number/description/
- This video takes your recursion knowledge to the next level by covering advanced use cases, problem-solving patterns, and optimizations. A must-watch to truly master recursion.

## 2. Understand the problem with sample inputs & outputs

### Sample - 1

- Input: n = 8
- Output: 21

### Sample - 2

- Input: n = 5
- Output: 5

### Sample - 3

- Input: n = 6
- Output: 8

## 3. Approach & solution notes

<details>
  <summary><b>Approach - 1</b></summary>

- Thought Process / Approach

  - using Iterative approach

    - using for loop, works in forward thinking
    - Time & Space Complexity: O(n)
    - ![alt text](./img/iterative-approach.png)

  - using Recursion approach, works in backward thinking

    - what is the base condition ?
      - if n <= 1 return n
    - Recursive case, every time when calling recursive case, making 2 branch
      - return fib(n-1) + fib(n-2)

  - ![alt text](./img/fib-basics.png)
  - ![alt text](./img/recursive-appraoch.png)
  - ![alt text](./img/recursion-tree.png)
  - ![alt text](./img/recursion-tree-1.png)

- Make sure dry run with sample examples with notebooks

- Complexity in recursion approach

  - Time Complexity: O(2^n), since tree structure grows in exponentially where n is input, can be improved using Dynamic Programming
  - Space Complexity: O(n), due to call stack
  - ![alt text](./img/time-complexity.png)

</details>

<details>
  <summary><b>Solution Notes</b></summary>
  
- ![alt text](./img/solution-1.png)
- ![alt text](./img/solution-1.1.png)

</details>

## 4. Implementation & Refactor

- [Coding solution in JS](./index.js)

## 5. (Good to ask) Edge / Corner case covered with refactor / improvements
