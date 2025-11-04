class Stack {
  constructor() {
    // this.current = -1;
    this.values = [];
  }

  push(item) {
    this.values.push(item);
  }
  pop() {
    this.values.pop();
  }
}

const s1 = new Stack();
s1.push(10);
s1.push(20);
