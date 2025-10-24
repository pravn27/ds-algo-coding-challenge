# Requirement or Problem statement & (Thought Process) Solution Approach

## 1. Problem statement

- Write a function to check Number / Integer is Palindrome or not
- https://leetcode.com/problems/palindrome-number/description/
- Reference
  - https://pravn27.github.io/ds-algo-tech-doc/docs/ds-algo-course-tutorials/namaste-dsa/readerDoc/warm-up/palindrome

## 2. Understand the problem with sample inputs & outputs

### Sample - 1

- Input: n = 121
- Output: true

### Sample - 2

- Input: n = 1443441
- Output: true

### Sample - 3

- Input: n = 124
- Output: false

### Sample - 4

- Input: n = -124
- Output: false

## 3. Approach & solution notes

<details>
  <summary><b>Approach - 1</b></summary>

- Thought Process / Approach

  - run While until n < 0
    - get last digit of num, by % operator as n % 10
    - create reverse num
      - rev = (rev \* 10) + rem;
    - remove last digit of num
      - Math.floor(n/10)
  - compare original num with reversed num, based on that return true / false
  - why Divide, Remainder number by 10
    - Why 10 ? All possible digits 0, 1, ..... 9 will occur, means 0 to 9 will get total count as 10

- ![alt text](./img/approach1.1.png)
- ![alt text](./img/approach1.2.png)
- ![alt text](./img/solution.png)

- Make sure dry run with sample examples with notebooks

- Complexity

  - Time Complexity: O(d), where d is number of digits
  - Space Complexity: O(1)

</details>

<details>
  <summary><b>Solution Notes</b></summary>

- ![alt text](./img/solution1.1.png)
- ![alt text](./img/solution1.2.png)

</details>

## 4. Implementation & Refactor

- [Coding solution in JS](./index.js)

## 5. (Good to ask) Edge / Corner case covered with refactor / improvements

- What if, number is negative number ?
  - should return false
