// Write a JS function to find Smallest / Min element number in an Array

// Approach 1 - Brute force, one pass solution
const findSmallestElement_A1 = (arr) => {
  const ARRAY_LENGTH = arr.length;

  // Edge cases covered
  if (!Array.isArray(arr) || !ARRAY_LENGTH) {
    console.error(
      "Enter valid array types, array should not be empty, minimum one element should be there"
    );
    throw new Error(
      "Enter valid array types, array should not be empty, minimum one element should be there"
    );
  }

  // define min variable, assign First element as Smallest
  let min = arr[0];

  // iterate each element & compare min condition check & update min variable
  for (let i = 1; i < ARRAY_LENGTH; i++) {
    if (arr[i] < min) {
      // update min variable
      min = arr[i];
    }
  }
  // return min variable
  return min;
};

console.log("Approach 1 =======>");
console.log(findSmallestElement_A1([5, 3, 2, 4, 1]));
console.log(findSmallestElement_A1([-6, -10, -12, -20, -3]));
console.log(findSmallestElement_A1([1, 3, 2, 4, 5]));
console.log(findSmallestElement_A1([-5, -3, -1, 0, 2]));
console.log(findSmallestElement_A1([-2, 3, 1, 4]));
console.log(findSmallestElement_A1([1, -2, 3, 4, 2]));

// Approach - 2 (Brute force with JS Infinity)
const findSmallestElement_A2 = (arr) => {
  const ARRAY_LENGTH = arr.length;

  // Edge cases covered
  if (!Array.isArray(arr) || !ARRAY_LENGTH) {
    console.error(
      "Enter valid array types, array should not be empty, minimum one element should be there"
    );
    throw new Error(
      "Enter valid array types, array should not be empty, minimum one element should be there"
    );
  }

  // define min variable, assign smallest as Infinity
  let min = Infinity;

  // iterate each element & compare min condition check & update min variable
  for (let i = 0; i < ARRAY_LENGTH; i++) {
    if (arr[i] < min) {
      // update min variable
      min = arr[i];
    }
  }
  // return min variable
  return min;
};

console.log("Approach 2 =======>");
console.log(findSmallestElement_A2([5, 3, 2, 4, 1]));
console.log(findSmallestElement_A2([-6, -10, -12, -20, -3]));
console.log(findSmallestElement_A2([1, 3, 200, 4, 5]));
console.log(findSmallestElement_A2([-5, -3, -1, 0, 2]));
console.log(findSmallestElement_A2([-2, 300, 1, 4]));
console.log(findSmallestElement_A2([1, -2, 3, 4, 2]));
