// Write a function to Print Star Pattern in 1, 2, 3....n star rows, take n as input parameter

// Approach 1 - 2 pass solution
const printStar_A1 = (n) => {
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
    let row = "";
    // inner loop - how many columns required, j loop should run till i + 1 or j <= i
    // for (let j = 0; j <= i; j++) same as for (let j = 0; j < i + 1; j++)
    for (let j = 0; j < i + 1; j++) {
      // Append "*" in row creation
      row = row + " * ";
    }
    // print each row with columns created
    console.log(i, row);
  }
};

console.log("Approach 1 =======>");
console.log(printStar_A1(4));
console.log(printStar_A1(5));
console.log(printStar_A1(10));
console.log(printStar_A1(7));
console.log(printStar_A1(3));
console.log(printStar_A1(0));
console.log(printStar_A1(-3));
