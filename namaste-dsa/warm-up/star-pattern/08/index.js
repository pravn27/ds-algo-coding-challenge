// Write a function to Print Right-Angled Triangle of Alternating 1s and 0s (Global Toggle), take n as input parameter

// Approach 1
const printAlternateNum_A1 = (n) => {
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
  let toggle = "1";
  for (let i = 0; i < n; i++) {
    let appendRow = "";

    // j inner loop to hold alternate numbers 1, 0 , 1...etc
    for (let j = 0; j < i + 1; j++) {
      appendRow = appendRow + toggle;
      toggle = toggle == "1" ? "0" : "1";
    }

    console.log(appendRow);
  }
};

console.log("Approach 1 =======>");
console.log(printAlternateNum_A1(4));
console.log(printAlternateNum_A1(5));
console.log(printAlternateNum_A1(10));
console.log(printAlternateNum_A1(7));
console.log(printAlternateNum_A1(3));
console.log(printAlternateNum_A1(0));
console.log(printAlternateNum_A1(-3));
