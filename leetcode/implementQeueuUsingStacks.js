// Implement the following operations of a queue using stacks.

// push(x) -- Push element x to the back of queue.
// pop() -- Removes the element from in front of queue.
// peek() -- Get the front element.
// empty() -- Return whether the queue is empty.
// Example:

// MyQueue queue = new MyQueue();

// queue.push(1);
// queue.push(2);
// queue.peek();  // returns 1
// queue.pop();   // returns 1
// queue.empty(); // returns false
// Notes:

// You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
// You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).

/**
 * Initialize your data structure here.
 */
class Stack {
  constructor() {
    this.stack = [];
  }
  push(val) {
    this.stack.push(val)
  }
  pop() {
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1]
  }
  size() {
    return this.stack.length
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}



var MyQueue = function () {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
  this.front;
};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function (x) {
  if (this.stack1.isEmpty()) {
    this.front = x;
  }
  this.stack1.push(x);
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function () {
  if (this.stack2.isEmpty()) {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop())
    }
  }
  return this.stack2.pop();
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function () {
  if (!this.stack2.isEmpty()) {
    return this.stack2.peek();
  }
  return this.front;
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function () {
  return this.stack1.isEmpty() && this.stack2.isEmpty();
};

/** 
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/