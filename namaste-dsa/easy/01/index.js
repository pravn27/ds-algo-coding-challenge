// Write a function to search element in an array and return index of that, if element is not present return -1

// Approach 1 - Brute force
const getArrayIndex_A1 = (arr, searchElement) => {
  // define array SIZE
  const SIZE = arr.length;

  // traverse / visit each element in array & compare with search element, if found return that index, else return -1
  for (let i = 0; i < SIZE; i++) {
    if (arr[i] === searchElement) {
      return i;
    }
  }
  return -1;
};

console.log("Approach 1 =======>");
console.log(getArrayIndex_A1([5, 3, 2, 4, 1], 2));
console.log(getArrayIndex_A1([6, 10, 12, 20, 30], 20));
console.log(getArrayIndex_A1([1, 3, 2, 4, 5], 100));
console.log(getArrayIndex_A1([-5, -3, -1, 0, 2], 200));
console.log(getArrayIndex_A1([-2, 3, 1, 4], 4));
console.log(getArrayIndex_A1([1, 2, 3, 4, 2], 1));
