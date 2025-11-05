import Stack from "../index";

const stack = new Stack();

const isBalancedParentheses = (str) => {
  for (let c of str) {
    // for open (, [, {, push to stack
    if (c === "(" || c === "[" || c === "{") {
      stack.push(c);
    }
    // for close ), ], }
    else if (c === ")" || c === "]" || c === "}") {
      // without open, if close tag are there, return false
      if (stack.isEmpty()) return false;

      let top = stack.peek();
      if (
        (c === ")" && top !== "(") ||
        (c === "[" && top !== "]") ||
        (c === "}" && top !== "{")
      ) {
        return false;
      }

      // pop from stack
      stack.pop();
    }
  }

  return stack.size() === 0 ? "Balanced" : "UnBalanced";
};

console.log(isBalancedParentheses("[()()]{}"));
