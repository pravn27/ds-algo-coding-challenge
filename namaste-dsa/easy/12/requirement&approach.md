# Requirement or Problem statement & (Thought Process) Solution Approach

## 1. Problem statement

- Write a function to Print Right-Angled Triangle of Alternating 1s and 0s, take n as input parameter
- Reference
  - https://pravn27.github.io/ds-algo-tech-doc/docs/ds-algo-course-tutorials/namaste-dsa/readerDoc/warm-up/star-pattern#star-pattern---7

## 2. Understand the problem with sample inputs & outputs

### Sample - 1

- Input: n = 4
- Output:

      1
      1 O
      1 0 1
      1 0 1 0

### Sample - 2

- Input: n = 3
- Output:

      1
      1 0
      1 0 1

## 3. Approach & solution notes

<details>
  <summary><b>Approach - 1</b></summary>

- Thought Process / Approach

  - Think as 2D matrix with
    - i (how many rows required)
    - j (how many columns required)
  - 2 loops required - rows as i, columns as j
  - Outer loop, row as i, to loop till n
  - define append variable to hold alternative number 1, 0 ...etc
    - appendRow = "";
  - Inner loop will take as j, will run till (i+1) times
    - check condition for even / odd number j index to appendRow
      - if even index j, append 1
        - appendRow = appendRow + " 1 ";
      - if odd index j, append 0
        - appendRow = appendRow + " O ";
  - Print appendRow

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
