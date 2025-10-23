// Approach 1
const reverseInteger_A1 = (n) => {
  const numCopy = n;
  let rev = 0;
  let lastDigit;

  // convert number to positive number
  n = Math.abs(n);

  while (n > 0) {
    // get last digit by n % 10
    lastDigit = n % 10;
    // add remainder in reversed way
    rev = rev * 10 + lastDigit;
    // remove last digit in number
    n = Math.floor(n / 10);
  }

  // check edge case for reversed number, should fall b/w -2**31 and 2**31-1
  const REV_LIMIT = Math.pow(2, 31);
  if (rev < -REV_LIMIT || rev > REV_LIMIT - 1) return 0;

  return numCopy < 0 ? -rev : rev;
};

console.log("Approach 1 =======>");
console.log(reverseInteger_A1(1443));
console.log(reverseInteger_A1(1230));
console.log(reverseInteger_A1(121));
console.log(reverseInteger_A1(-120));
console.log(reverseInteger_A1(223));
console.log(reverseInteger_A1(-4431));
console.log(reverseInteger_A1(0));
