const isEligibleToVote = (age) => {
  // check if age is greater than or equal to 18
  if (age >= 18) {
    return "You are eligible to vote.";
  } else {
    return "You are not eligible to vote.";
  }
};

console.log(isEligibleToVote(20));
console.log(isEligibleToVote(15));
console.log(isEligibleToVote(10));
console.log(isEligibleToVote(25));
