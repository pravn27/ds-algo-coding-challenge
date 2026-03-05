const findSmallest = (arr) => {
  let smallest = Infinity;
  // for loop
  for (let num of arr) {
    if (num < smallest) {
      smallest = num;
    }
  }
  return smallest;
};

console.log(findSmallest([10, 3, -5, 2, -7, -6, 9]));
console.log(findSmallest([10, 3, 5, -2, 0]));
console.log(findSmallest([10, 3, -15, -12, 17]));
console.log(findSmallest([1, 1, 1, 1, 1]));
