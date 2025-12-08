const insertionSort = (arr) => {
  const ARRAY_LENGTH = arr.length;

  for (let i = 1; i < ARRAY_LENGTH; i++) {
    let curr = arr[i];
    let prev = i - 1;

    // compare prev & current element, shift prev to forward
    while (arr[prev] > curr && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    // placing correct position element
    arr[prev + 1] = curr;
  }

  // return the sorted array
  return arr;
};

console.log(insertionSort([1, 2, 10, -8, 3]));
console.log(insertionSort([20, 3, 10, 5, 3]));
console.log(insertionSort([4, 6, 7, 9, 3]));
console.log(insertionSort([1, 2, 3, 4, 5, 6, 6]));
