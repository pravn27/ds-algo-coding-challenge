That's a great topic for a Senior Frontend interview\! Implementing a **Stack** in JavaScript demonstrates an understanding of **fundamental data structures** and **Object-Oriented Programming (OOP)** concepts.

Here is a step-by-step guide on how to implement a Stack using an **ES6 class** in JavaScript, a common and preferred method in modern interviews.

---

## 🏗️ Step 1: Understand the Stack Concept

Before coding, ensure you can articulate the key characteristics:

- **LIFO (Last-In, First-Out):** The last element added to the stack is the first one to be removed. Think of a stack of plates—you always remove the top one.
- **Core Operations:**
  - **`push`**: Adds an element to the top (end) of the stack.
  - **`pop`**: Removes and returns the element at the top (end) of the stack.
  - **`peek`**: Returns the top element without removing it.
  - **`isEmpty`**: Checks if the stack has any elements.
  - **`size`**: Returns the number of elements in the stack.

---

## 💻 Step 2: Choose the Underlying Data Structure

In JavaScript, the simplest and most efficient way to implement a Stack is by using a native **Array** because its built-in methods mirror the stack operations perfectly:

- `push()` $\rightarrow$ Stack `push()`
- `pop()` $\rightarrow$ Stack `pop()`

Using an array ensures **$O(1)$** (constant time) complexity for both `push` and `pop` operations, which is the performance standard for a Stack.

---

## 🛠️ Step 3: Implement the Stack Class

We'll use an ES6 `class` to encapsulate the Stack logic and its data (the array).

### 1\. Initialize the Class and Internal Storage

```javascript
class Stack {
  constructor() {
    // The internal array to hold the stack elements
    this.items = [];
  }

  // ... (Methods will go here)
}
```

- **Interview Tip:** Using the `#items` private field (e.g., `#items = []`) is a more modern, secure approach to truly **hide** the internal array, but for a standard interview implementation, `this.items` is often sufficient.

### 2\. Implement Core Operations

| Method              | Description                               | Code                        |
| :------------------ | :---------------------------------------- | :-------------------------- |
| **`push(element)`** | Adds the element to the top of the stack. | `this.items.push(element);` |
| **`pop()`**         | Removes and returns the top element.      | `return this.items.pop();`  |

### 3\. Implement Utility Operations

| Method          | Description                                               | Code                                        |
| :-------------- | :-------------------------------------------------------- | :------------------------------------------ |
| **`peek()`**    | Returns the top element _without_ removing it.            | `return this.items[this.items.length - 1];` |
| **`isEmpty()`** | Checks if the stack is empty (returns `true` or `false`). | `return this.items.length === 0;`           |
| **`size()`**    | Returns the number of elements.                           | `return this.items.length;`                 |
| **`clear()`**   | Removes all elements from the stack.                      | `this.items = [];`                          |

---

## ✅ Step 4: The Complete JavaScript Implementation

Putting it all together in one clean class structure:

```javascript
/**
 * Stack implementation using a JavaScript Array.
 * The Array's push() and pop() methods naturally support LIFO.
 */
class Stack {
  constructor() {
    // The internal array to store the elements
    this.items = [];
  }

  // O(1) complexity: Adds an element to the top of the stack.
  push(element) {
    this.items.push(element);
  }

  // O(1) complexity: Removes and returns the top element.
  pop() {
    // Check for an empty stack before popping
    if (this.isEmpty()) {
      return "Underflow"; // Or throw an error
    }
    return this.items.pop();
  }

  // O(1) complexity: Returns the top element without removing it.
  peek() {
    return this.items[this.items.length - 1];
  }

  // O(1) complexity: Returns true if the stack is empty.
  isEmpty() {
    return this.items.length === 0;
  }

  // O(1) complexity: Returns the number of elements in the stack.
  size() {
    return this.items.length;
  }
}
```

---

## 🧠 Step 5: Testing and Usage

You must demonstrate how to use your implemented data structure.

```javascript
const stack = new Stack();

console.log(stack.isEmpty()); // Output: true

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.size()); // Output: 3
console.log(stack.peek()); // Output: 30

stack.pop(); // Removes 30
console.log(stack.peek()); // Output: 20

stack.pop(); // Removes 20
stack.pop(); // Removes 10
console.log(stack.pop()); // Output: Underflow (or similar error handling)
```

---

## 🌟 Senior-Level Interview Topics (Bonus)

For a Senior Frontend role, be ready to discuss these points:

1.  **Complexity Analysis:** State clearly that `push`, `pop`, `peek`, `isEmpty`, and `size` are all **$O(1)$** (constant time) operations when using an array's end-methods.
2.  **Use Cases:** Be able to list where Stacks are used in Frontend engineering:
    - **Browser History:** Navigating "Back" and "Forward".
    - **Function Call Stack (The most important):** How JavaScript (and any language) manages function calls and execution context.
    - **Undo/Redo Functionality:** Storing commands for reversal.
    - **Algorithm Implementations:** Depth-First Search (DFS), expression parsing (e.g., matching parentheses).
3.  **Alternative Implementation (Linked List):** Acknowledge that a Stack can also be implemented using a **Singly Linked List**. Explain that while it also offers **$O(1)$** complexity, the array is generally preferred in JS for simplicity and better performance due to memory locality (unless frequent memory re-allocation becomes an issue with very large, dynamic stacks).

Would you like to explore a common interview question that requires using a Stack, such as **checking for balanced parentheses**?
