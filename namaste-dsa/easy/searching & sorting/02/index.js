const binarySearch = (arr, target) => {
  const ARRAY_LENGTH = arr.length;
  let leftP = 0;
  let rightP = ARRAY_LENGTH - 1;

  // since its not sequential element traversal, using while loop
  while (leftP <= rightP) {
    const midP = Math.floor((leftP + rightP) / 2);
    // 3 possible in finding target
    if (target === arr[midP]) {
      return midP;
    } else if (target > arr[midP]) {
      leftP = midP + 1;
    } else {
      rightP = midP - 1;
    }
  }

  // if target element not found in midP, return -1
  return -1;
};

console.log("Binary Search =======>");
console.log(binarySearch([1, 2, 10, 20, 100], 20));
console.log(binarySearch([3, 10, 15, 25], 5));
console.log(binarySearch([4, 6, 7, 9, 20, 36, 67, 100], 67));
