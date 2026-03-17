// Write a function to find Second Smallest element in an Array or List

// Approach 1 - one pass solution
const findSecondSmallestElement_A1 = (arr) => {
  const ARRAY_LENGTH = arr.length;

  // Edge cases covered
  if (!Array.isArray(arr) || !ARRAY_LENGTH || ARRAY_LENGTH < 2) {
    console.error(
      "Enter valid array types, array length should contain minimum 2 elements",
    );
    throw new Error(
      "Enter valid array types, array length should contain minimum 2 elements",
    );
  }

  // define first, second largest variable, assign with -Infinity
  let first_smallest = Infinity;
  let second_smallest = Infinity;

  // use for loop & iterate each element & compare
  for (let num of arr) {
    // core, main logic
    if (num < first_smallest) {
      // before updating first_smallest, update second_smallest as first_smallest
      second_smallest = first_smallest;
      first_smallest = num;
    } else if (num < second_smallest && num !== first_smallest) {
      second_smallest = num;
    }
  }

  const result =
    second_smallest === Infinity ? "No second smallest found" : second_smallest;

  return result;
};

console.log("Approach 1 =======>");
console.log(findSecondSmallestElement_A1([50, 30, -2, -40, -1, 100]));
console.log(
  findSecondSmallestElement_A1([6, 10, 12, 20, 30, 30, 30, 0, 1, -1, 7]),
);
console.log(findSecondSmallestElement_A1([-6, -10, -12, -20, -30]));
console.log(findSecondSmallestElement_A1([-5, -3, -1, 0, 2]));
console.log(findSecondSmallestElement_A1([-2, 3, 1, 4, 1, 4, 4]));
console.log(findSecondSmallestElement_A1([1, -2, 3, -4, -2]));
console.log(findSecondSmallestElement_A1([1, 2, 1, 1, 1]));
console.log(findSecondSmallestElement_A1([]));
