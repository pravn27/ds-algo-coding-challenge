const findLargest = (arr) => {
  let largest = -Infinity;
  // for loop
  for (let num of arr) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
};

console.log(findLargest([10, 3, -5, 2, -7, -6, 9]));
console.log(findLargest([15, 3, 5, -2, 0]));
console.log(findLargest([10, 3, -15, -12, 17]));
console.log(findLargest([1, 1, 1, 1, 1]));
