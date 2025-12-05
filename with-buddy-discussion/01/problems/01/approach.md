# (Thought Process) Solution Approach

## Problem: Check for Balanced Parentheses

Given a string containing brackets `()`, `[]`, and `{}`, determine if the brackets are balanced.

### What does "Balanced" mean?

1. Every opening bracket has a corresponding closing bracket
2. Brackets are closed in the correct order
3. Each closing bracket matches the most recent opening bracket

### Examples:

- ✅ **Balanced**: `[()()]{}`, `()()`, `{[()]}`, `()`
- ❌ **Unbalanced**: `[(){}`, `[]{`, `[(])`, `)(`

---

## 🤔 Thought Process

### 1. Understanding the Pattern

- When we see an opening bracket: `(`, `[`, `{` → We need to remember it for later matching
- When we see a closing bracket: `)`, `]`, `}` → We need to match it with the most recent opening bracket
- **Key Insight**: "Most recent" suggests **LIFO (Last In First Out)** → **Stack!**

### 2. Why Stack?

- Stack follows LIFO principle - perfect for matching pairs
- When we encounter a closing bracket, we need to check if it matches the **last opened** bracket
- Example walkthrough: `[()()]`
  ```
  [ → Push to stack: [
  ( → Push to stack: [(
  ) → Pop ( and match ✓
  ( → Push to stack: [(
  ) → Pop ( and match ✓
  ] → Pop [ and match ✓
  Stack is empty → Balanced!
  ```

### 3. Edge Cases to Consider

- **Empty stack with closing bracket**: `)()` → Unbalanced (nothing to match)
- **Mismatched brackets**: `[(])` → Opening `(` but closing `]`
- **Leftover opening brackets**: `[(){` → Not all brackets closed
- **Empty string**: `""` → Balanced (no brackets)

---

## 💡 Solution Approach

### Algorithm Steps:

1. **Initialize**: Create an empty stack
2. **Iterate** through each character in the string:

   **If Opening Bracket** `(`, `[`, `{`:

   - Push it onto the stack

   **If Closing Bracket** `)`, `]`, `}`:

   - Check if stack is empty → Return `false` (no matching opening bracket)
   - Peek at the top of stack
   - Check if the top matches the closing bracket:
     - `)` should match `(`
     - `]` should match `[`
     - `}` should match `{`
   - If **NOT matched** → Return `false`
   - If **matched** → Pop from stack (remove the matched opening bracket)

3. **Final Check**:
   - If stack is **empty** → All brackets matched → Return `"Balanced"`
   - If stack is **NOT empty** → Some opening brackets not closed → Return `"UnBalanced"`

---

## 📊 Complexity Analysis

### Time Complexity: **O(n)**

- We iterate through the string once
- Each push, pop, peek operation on stack is O(1)
- Total: O(n) where n = length of string

### Space Complexity: **O(n)**

- In worst case, all characters are opening brackets
- Stack will store all n characters
- Example: `(((((`

---

## 🔍 Visual Example: `[()()]`

```
Step | Character | Action           | Stack State
-----|-----------|------------------|-------------
  1  |    [      | Push             | [
  2  |    (      | Push             | [ (
  3  |    )      | Match & Pop      | [
  4  |    (      | Push             | [ (
  5  |    )      | Match & Pop      | [
  6  |    ]      | Match & Pop      | (empty)

Result: Stack is empty → "Balanced"
```

### Example: `[(])` (Unbalanced)

```
Step | Character | Action           | Stack State
-----|-----------|------------------|-------------
  1  |    [      | Push             | [
  2  |    (      | Push             | [ (
  3  |    ]      | Check top        | [ (
     |           | Top is '(' ≠ '[' |
     |           | MISMATCH!        | Return false

Result: "UnBalanced"
```

---

## 🎯 Key Takeaways

1. **Stack is ideal for matching problems** (brackets, tags, etc.)
2. **LIFO property** helps match most recent opening with current closing
3. **Three validation points**:
   - Empty stack check (closing without opening)
   - Bracket type matching check
   - Final stack empty check (unclosed brackets)
4. This pattern extends to: HTML tag validation, expression evaluation, etc.
