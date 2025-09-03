// Write a function to Check if an Array is Sorted (Ascending/Increasing Order) or not

// Approach 1 - Optimized
const isArraySorted_A1 = (arr) => {
  // check init array exist & length condition
  if (typeof arr !== "object" || !arr.length) {
    console.log("Invalid input");
    return false;
  }

  const size = arr.length;
  for (let i = 1; i < size; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
};

console.log("Approach 1 =======>");
console.log(isArraySorted_A1([5, 3, 2, 4, 1]));
console.log(isArraySorted_A1([6, 10, 12, 20, 30]));
console.log(isArraySorted_A1([1, 3, 2, 4, 5]));
console.log(isArraySorted_A1([-5, -3, -1, 0, 2]));
console.log(isArraySorted_A1([-2, 3, 1, 4]));
console.log(isArraySorted_A1([1, 2, 3, 4, 2]));
console.log(isArraySorted_A1([1]));
console.log(isArraySorted_A1([]));

// Approach 2 - Brute force
const isArraySorted_A2 = (arr) => {
  // check init array exist & length condition
  if (typeof arr !== "object" || !arr.length) {
    console.log("Invalid input");
    return false;
  }

  const size = arr.length;
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (arr[j] < arr[i]) {
        return false;
      }
    }
  }
  return true;
};

console.log("Approach 2 =======>");
console.log(isArraySorted_A2([5, 3, 2, 4, 1]));
console.log(isArraySorted_A2([6, 10, 12, 20, 30]));
console.log(isArraySorted_A2([1, 3, 2, 4, 5]));
console.log(isArraySorted_A2([-5, -3, -1, 0, 2]));
console.log(isArraySorted_A2([-2, 3, 1, 4]));
console.log(isArraySorted_A2([1, 2, 3, 4, 2]));
console.log(isArraySorted_A1([1]));
console.log(isArraySorted_A1([]));
