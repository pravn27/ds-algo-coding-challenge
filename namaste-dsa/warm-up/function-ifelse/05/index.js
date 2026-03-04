// print all even numbers from array
const printEvenNumber = (arr) => {
  // for loop
  for (let i = 0; i < arr.length; i++) {
    // even number condition check
    if (arr[i] % 2 === 0) {
      console.log("Even number", arr[i]);
    }
  }
  console.log("End of loop");
};

console.log(printEvenNumber([10, 3, 5, 2, 7, 6, 9]));
console.log(printEvenNumber([10, 3, 5, 2]));
console.log(printEvenNumber([10, 3, 15, 12, 17]));
