const countNegNumbers = (arr) => {
  let negCount = 0;
  // for loop
  for (let i = 0; i < arr.length; i++) {
    // negative number condition check
    if (arr[i] < 0) {
      negCount++;
    }
  }
  return negCount;
};

console.log(countNegNumbers([10, 3, -5, 2, -7, -6, 9]));
console.log(countNegNumbers([10, 3, 5, -2, 0]));
console.log(countNegNumbers([10, 3, -15, -12, 17]));
