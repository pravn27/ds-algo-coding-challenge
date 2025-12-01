const bubbleSort = (arr) => {
  const ARRAY_LENGTH = arr.length;

  // outer iteration n-1 times
  for (let i = 0; i < ARRAY_LENGTH - 1; i++) {
    let isSwapped = false;
    // inner iteration to compare & swap element
    for (let j = 0; j < ARRAY_LENGTH - 1 - i; j++) {
      // compare current & next element to swap
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }

    // if at least one iteration has 0 times swapped, then array is sorted, break the loop & don't compare rest of the iteration
    if (!isSwapped) break;
  }

  // sorted array
  return arr;
};

console.log(bubbleSort([1, 2, 10, 8, 3]));
console.log(bubbleSort([20, 3, 10, 5, 3]));
console.log(bubbleSort([4, 6, 7, 9, 3]));
console.log(bubbleSort([1, 2, 3, 4, 5, 6, 6]));
