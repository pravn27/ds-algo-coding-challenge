// Write a function to find Second Largest element in an Array or List

// Approach 1 - one pass solution
const findSecondLargestElement_A1 = (arr) => {
  const ARRAY_LENGTH = arr.length;

  // Edge cases covered
  if (!Array.isArray(arr) || !ARRAY_LENGTH || ARRAY_LENGTH < 2) {
    console.error(
      "Enter valid array types, array length should contain minimum 2 elements"
    );
    throw new Error(
      "Enter valid array types, array length should contain minimum 2 elements"
    );
  }

  // define first, second largest variable, assign with -Infinity
  let first_largest = -Infinity;
  let second_largest = -Infinity;

  // use for loop & iterate each element & compare
  for (let i = 0; i < ARRAY_LENGTH; i++) {
    // core, main logic
    if (arr[i] > first_largest) {
      second_largest = first_largest;
      first_largest = arr[i];
    } else if (arr[i] > second_largest && arr[i] !== first_largest) {
      second_largest = arr[i];
    }
  }

  const result =
    second_largest === -Infinity ? "No second largest found" : second_largest;

  return result;
};

console.log("Approach 1 =======>");
console.log(findSecondLargestElement_A1([50, 30, -2, -40, -1, 100]));
console.log(findSecondLargestElement_A1([6, 10, 12, 20, 30, 30, 30]));
console.log(findSecondLargestElement_A1([-6, -10, -12, -20, -30]));
console.log(findSecondLargestElement_A1([-5, -3, -1, 0, 2]));
console.log(findSecondLargestElement_A1([-2, 3, 1, 4, 1, 4, 4]));
console.log(findSecondLargestElement_A1([1, -2, 3, -4, -2]));
console.log(findSecondLargestElement_A1([]));
