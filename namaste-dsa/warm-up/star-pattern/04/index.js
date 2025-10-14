// Write a function to (Right-Angled Triangle of Repeated Numbers) Print Number Pattern in 1 - 1 times 2 - 2 times, 3 - 3 times....n rows, take n as input parameter

// Approach 1 - 2 pass solution
const printNum_A1 = (n) => {
  // Edge case covered, if n <= 0
  if (n <= 0) {
    console.error(
      "Should enter valid n input as positive number greater than 0"
    );
    throw new Error(
      "Should enter valid n input as positive number greater than 0"
    );
  }

  // outer loop - how many rows required
  for (let i = 1; i <= n; i++) {
    let appendNum = "";
    // inner loop - how many columns required, j loop should run till i times
    for (let j = 1; j <= i; j++) {
      appendNum = appendNum + " " + i;
    }
    // print each row with columns created
    console.log(appendNum);
  }
};

console.log("Approach 1 =======>");
console.log(printNum_A1(4));
console.log(printNum_A1(5));
console.log(printNum_A1(10));
console.log(printNum_A1(7));
console.log(printNum_A1(3));
console.log(printNum_A1(0));
console.log(printNum_A1(-3));
