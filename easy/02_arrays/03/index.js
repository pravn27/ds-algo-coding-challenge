// Write a function to find the Largest element in an Array

// Approach 1 - Brute force - Sort the array in ascending order & return last element
const findMaxElementInArray_A1 = (arr) => {
  // check init array exist condition & length of array
  if (typeof arr !== "object" || !arr.length) {
    console.log("Enter valid array input");
  } else {
    // Sort array in ascending order
    const sortedArray = arr.sort((a, b) => a - b);
    // return last element in sorted array
    return sortedArray[sortedArray.length - 1];
  }
};

console.log("Approach 1 =======>");
console.log(findMaxElementInArray_A1([10, 20, 9, 7, 30]));
console.log(findMaxElementInArray_A1([10, 20, 9]));
console.log(findMaxElementInArray_A1([10, 20, 9, -300, 200]));
console.log(findMaxElementInArray_A1("array"));
console.log(findMaxElementInArray_A1([]));

// Approach 2 - Optimized
const findMaxElementInArray_A2 = (arr) => {
  // check init array exist condition & length of array
  if (typeof arr !== "object" || !arr.length) {
    console.log("Enter valid array input");
  } else {
    // create max variable & assign to first element
    let max = arr[0];

    // loop each element from 1 index, compare > with max variable
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
};

console.log("Approach 2 =======>");
console.log(findMaxElementInArray_A2([10, 20, 9, 7, 300]));
console.log(findMaxElementInArray_A2([10, -20, 9]));
console.log(findMaxElementInArray_A2([10, 10]));
console.log(findMaxElementInArray_A2([10, 20, 900, -300, 200]));
console.log(findMaxElementInArray_A2("array"));
console.log(findMaxElementInArray_A2([]));
