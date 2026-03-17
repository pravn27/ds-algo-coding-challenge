// Write a function to find Third Smallest element in an Array or List

// Approach 1 - one pass solution
const findThirdSmallestElement_A1 = (arr) => {
  const ARRAY_LENGTH = arr.length;

  // Edge cases covered
  if (!Array.isArray(arr) || !ARRAY_LENGTH || ARRAY_LENGTH < 3) {
    console.error(
      "Enter valid array types, array length should contain minimum 3 elements",
    );
    throw new Error(
      "Enter valid array types, array length should contain minimum 3 elements",
    );
  }

  // define first, second, third smallest variable, assign with Infinity
  let first_smallest = Infinity;
  let second_smallest = Infinity;
  let third_smallest = Infinity;

  // use for loop & iterate each element & compare
  for (let num of arr) {
    if (num < first_smallest) {
      // before updating first, update second & third smallest
      third_smallest = second_smallest;
      second_smallest = first_smallest;
      first_smallest = num;
    } else if (
      num < second_smallest &&
      // condition to checks for distinct / unique numbers
      num !== first_smallest &&
      num !== third_smallest
    ) {
      // before update second, update third smallest
      third_smallest = second_smallest;
      second_smallest = num;
    } else if (
      num < third_smallest &&
      // condition to checks for distinct / unique numbers
      num !== first_smallest &&
      num !== second_smallest
    ) {
      third_smallest = num;
    }
  }

  const result =
    third_smallest === Infinity ? "No third Smallest found" : third_smallest;

  return result;
};

console.log("Approach 1 =======>");
console.log(findThirdSmallestElement_A1([50, 30, -2, -2, -40, -1, 100]));
console.log(findThirdSmallestElement_A1([6, 10, -12, 20, 30, 30, 30]));
console.log(findThirdSmallestElement_A1([-6, -10, -12, -20, -30]));
console.log(findThirdSmallestElement_A1([-5, -3, 1, 0, 0, 2]));
console.log(findThirdSmallestElement_A1([-2, 3, 1, 4, 1, 4, 4]));
console.log(findThirdSmallestElement_A1([1, -2, 3, -4, -2]));
console.log(findThirdSmallestElement_A1([]));
