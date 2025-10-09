// Write a function to Print Right-Aligned Right-Angled Triangle of Stars, take n as input parameter

// Approach 1
const printStars_A1 = (n) => {
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
  for (let i = 0; i < n; i++) {
    let appendRow = "";

    // j inner loop to print spaces " O "
    for (let j = 0; j < n - (i + 1); j++) {
      appendRow = appendRow + " O ";
    }

    // k inner loop to print spaces " * "
    for (let k = 0; k < i + 1; k++) {
      appendRow = appendRow + " * ";
    }

    console.log(appendRow);
  }
};

console.log("Approach 1 =======>");
console.log(printStars_A1(4));
console.log(printStars_A1(5));
console.log(printStars_A1(10));
console.log(printStars_A1(7));
console.log(printStars_A1(3));
console.log(printStars_A1(0));
console.log(printStars_A1(-3));
