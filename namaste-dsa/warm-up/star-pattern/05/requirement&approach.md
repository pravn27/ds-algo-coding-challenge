# Requirement or Problem statement & (Thought Process) Solution Approach

## 1. Problem statement

- Write a function to (Reverse Right-Angled Triangle of Increasing Numbers) Print Number Pattern in reverse way, take n as input parameter
- Reference
  - https://pravn27.github.io/ds-algo-tech-doc/docs/ds-algo-course-tutorials/namaste-dsa/readerDoc/warm-up/star-pattern#star-pattern---5

## 2. Understand the problem with sample inputs & outputs

### Sample - 1

- Input: n = 4
- Output:

      1 2 3 4
      1 2 3
      1 2
      1

### Sample - 2

- Input: n = 3
- Output:

      1 2 3
      1 2
      1

## 3. Approach & solution notes

<details>
  <summary><b>Approach - 1</b></summary>

- Thought Process / Approach - two pass / loops (i, j) solution

  - Think as 2D matrix with
    - i (how many rows required)
    - j (how many columns required)
  - 2 loops required - rows as i, columns as j
  - Outer loop, row as i, you can loop from 4, 3, 2, 1 if n = 4
  - define append variable to hold number like 1 2 ...etc
    - appendNum = "";
  - Inner loop, column as j, will run 4, 3, 2, 1 times if n = 4
    - appendNum = appendNum + j;
  - Print appendNum

- Make sure dry run with sample examples with notebooks

- Complexity

  - Time Complexity: O(n<sup>2</sup>), since its nested loops with 2 loops i, j
  - Space Complexity: O(1)

</details>

<details>
  <summary><b>Solution Notes</b></summary>

- ![alt text](./img/solution.png)

</details>

## 4. Implementation & Refactor

- [Coding solution in JS](./index.js)

## 5. (Good to ask) Edge / Corner case covered with refactor / improvements

- What if, n is <= 0
  - Should throw error, with proper message
