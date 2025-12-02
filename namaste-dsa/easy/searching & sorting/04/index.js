const selectionSort = (arr) => {
  const ARRAY_LENGTH = arr.length;

  // outer iteration n-1 times, each iteration find the min element & place at right position
  for (let i = 0; i < ARRAY_LENGTH - 1; i++) {
    let min = i;
    // inner iteration to find min element
    for (let j = i + 1; j < ARRAY_LENGTH; j++) {
      // compare & finding min element
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    // swap arr[min] & arr[i] element
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  // return the sorted array
  return arr;
};

console.log(selectionSort([1, 2, 10, 8, 3]));
console.log(selectionSort([20, 3, 10, 5, 3]));
console.log(selectionSort([4, 6, 7, 9, 3]));
console.log(selectionSort([1, 2, 3, 4, 5, 6, 6]));
