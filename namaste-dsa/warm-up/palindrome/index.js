// Approach 1
const isIntegerPalindrome_A1 = (n) => {
  // edge case for negative number
  if (n < 0) return false;

  const numCopy = n;
  let rev = 0;
  let rem;

  while (n > 0) {
    // get last digit by n % 10
    rem = n % 10;
    // add remainder in reversed way
    rev = rev * 10 + rem;
    // remove last digit in number
    n = Math.floor(n / 10);
  }

  // compare reversed number with actual number
  return numCopy === rev;
};

console.log("Approach 1 =======>");
console.log(isIntegerPalindrome_A1(1443441));
console.log(isIntegerPalindrome_A1(121465));
console.log(isIntegerPalindrome_A1(121));
console.log(isIntegerPalindrome_A1(-123));
console.log(isIntegerPalindrome_A1(22322));
console.log(isIntegerPalindrome_A1(-4431));
console.log(isIntegerPalindrome_A1(0));
