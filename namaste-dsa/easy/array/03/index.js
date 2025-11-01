// Approach 1
/**
 * @param {character[]} charArr
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString_A1 = (charArr) => {
  /**
   * Edge case covered
   * 1. if not valid array type
   * 2. array should not be empty
   */
  if (!Array.isArray(charArr) || !charArr.length) {
    console.error("Enter valid array types & should not be empty");
    throw new Error("Enter valid array types & should not be empty");
  }

  const LENGTH = charArr.length;
  const HALF_LENGTH = LENGTH / 2;

  // loop till n/2 times, first half of the array
  for (let i = 0; i < HALF_LENGTH; i++) {
    // swap(i, n-1-i)
    let temp = charArr[i];
    charArr[i] = charArr[LENGTH - 1 - i];
    charArr[LENGTH - 1 - i] = temp;
  }
  console.log("In place/Existing modified array ", charArr);
};

console.log("Approach 1 =======>");
console.log(reverseString_A1(["h", "e", "l", "l", "o"]));
console.log(reverseString_A1(["p", "r", "a", "v", "n"]));
console.log(reverseString_A1(["a", "r", "u", "n"]));
console.log(reverseString_A1([]));
console.log(reverseString_A1({}));
