/**
 * Stack implementation using a JavaScript Array.
 * The Array's push() and pop() methods naturally support LIFO.
 */
class Stack {
  constructor() {
    this.items = [];
  }

  // stack core operations - push(), pop()
  push(item) {
    this.items.push(item);
  }
  pop() {
    if (this.isEmpty()) {
      return "Underflow, already Stack is Empty";
    }
    return this.items.pop();
  }

  // stack utils operations
  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

const s1 = new Stack();
console.log("s1.isEmpty() ", s1.isEmpty());

s1.push(10);
s1.push(20);
s1.push(30);

console.log("s1.size() ", s1.size());
console.log("s1.peek() ", s1.peek());

console.log("s1.pop() ", s1.pop());
console.log("s1.size() ", s1.size());
console.log("s1.peek() ", s1.peek());

s1.pop(); // Removes 20
s1.pop(); // Removes 10
console.log(s1.pop()); // Output: Underflow (or similar error handling)
