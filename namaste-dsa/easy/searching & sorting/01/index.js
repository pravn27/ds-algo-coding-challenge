const linearSearch = (arr, target) => {
  const ARRAY_LENGTH = arr.length;

  // use for loop, traverse array element & compare with target
  for (let i = 0; i < ARRAY_LENGTH; i++) {
    if (arr[i] === target) return i;
  }

  // if target element not found, return -1
  return -1;
};

console.log("Linear Search =======>");
console.log(linearSearch([1, 2, 10, 8, 3], 5));
console.log(linearSearch([20, 3, 10, 5, 3], 5));
console.log(linearSearch([4, 6, 7, 9, 3], 7));
