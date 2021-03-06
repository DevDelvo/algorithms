// class: center middle
// Priority Queue
// Definitions

// A queue is a data structure that stores pieces of data and returns them in the same order in which they were inserted. One way of implementing them is as a linked list.

// A priority queue is a data structure that takes a priority value with each piece of data and returns the data in order of priority.
// Interviewer Prompt

// Implement a priority queue with the following 3 methods:

// insert(data, priority) // inserts data into the priority queue with the given priority

// peek() // returns the value of the item with the highest priority without removing it from the priority queue

// popMax() // returns the value of the item with the highest priority and also removes it from the priority queue

// For the purposes of our implementation, "higher priority" corresponds to a higher integer value. Note, however, that this could be implemented either way.
// Example Output

// A hospital emergency room could use a priority queue to determine the order in which their doctors see patients. The priority queue would work the following way:

// LINKED LIST
// This should be O(1) time complexity for peek and popMax, but O(n) time complexity for insert (where n is the number of nodes in the priority queue).

// Space complexity is O(n), where n is the number of items in the queue.
function Node(data, priority) {
  this.data = data;
  this.priority = priority;
  this.next = null;
}

function PriorityQueue() {
  this.first = null;
}
//O(n)
PriorityQueue.prototype.insert = function (data, priority) {
  const newItem = new Node(data, priority);
  if (!this.first || this.first.priority < priority) { // First case: Check if the PQ is empty, or newItem's priority > this.first's
    newItem.next = this.first;
    this.first = newItem // New Node (newItem) becomes new first
  } else { // Second case: Find where to insert newItem
    let currentNode = this.first;
    while (currentNode.next && currentNode.next.priority >= priority) {
      // Traverse queue until it finds a node with priority < search priority
      currentNode = currentNode.next;
    }
    // Here, currentNode is right before where you want to insert newItem. Point
    // newItem.next to currentNode.next, then point currentNode's next to newItem.
    newItem.next = currentNode.next;
    currentNode.next = newItem;
  }
}
//O(1)
PriorityQueue.prototype.peek = function () {
  return this.first.data;
}
//O(1)
PriorityQueue.prototype.popMax = function () {
  const maxVal = this.first;
  this.first = this.first.next;
  return maxVal.data;
}





// Optimization - BINARY HEAP
// MAX HEAP
// A more optimal solution could involve a heap, in particular a binary max heap. This could give us O(log n) insertion time, with the not-so-bad down-side of changing popMax time to O(log n). Space complexity remains the same at O(n) since we still store a node for each item in the queue, just in a tree (heap) arrangement.
// Binary Heaps

// A binary heap has 2 properties:

//     Uses a complete binary tree, which means that every level of the tree is full except the bottom level, which is filled from left to right
//     Insertions satisfy the heap-order-property, which says that no child's value is greater than its parent's value (in a max heap)

// Data storage

// Because binary heaps are complete binary trees, they're often stored as arrays in an order that follows a level ordered traversal starting at the root. We could use a pointer-and-node-based (linked) data structure for the heap implementation, but the array runs faster because we don't have to set and reset references from one node to another.

// Math!
// By mapping objects to indices in this way, we can easily get an object's parent or children based on its index.

// If i is the index of an object in the array (starting at 0) we can use the following formulas:

//     parent is (i-1)/2 rounded down
//     left child is 2i+1
//     right child is 2i+2

// Max Heap vs. Min Heap
// Note that this is a max heap, in which the maximum-priority element ends up at the root of the heap. This is in contrast with a min heap, in which the minimum-priority element ends up at the root of the heap. Consider the tradeoffs in either variety for popMax() and popMin().

// class: center middle
// Heap Approach
// Inserting an item
// Because we're working with a complete binary tree we insert at the bottom level at the first free spot from the left - push it into our array. In the case that a new insertion violates the heap-order-property we need to re-heapify. This is done by comparing the insertion's priority with its parent's priority and swapping the objects if the insertion's priority is greater - repeat this process until the insertion's priority is not greater than its parent's.

// Viewing the highest-priority item
// Returning the maximum-priority value is easy since the heap-order-property guarantees that the maximum priority will always be at the root of the tree.

// Dequeue
// popMax is done by removing the root object and replacing it with the last entry in the tree. This almost always ends up violating the heap-order-property so we need to re-heapify. This is done by comparing the root/parent's priority with its children's priorities. A swap should happen if the parent's priority is less than one or both of its children's priorities and should be done with the child holding the greater priority. Repeat this process until the parent's priority is not less than either of its children's priorities.

// class: center middle
// Code
// Utility methods
class HeapPQ {
  constructor() {
    this.items = [];
  }

  swap(childIdx, parentIdx) {
    [this.items[childIdx], this.items[parentIdx]] = [this.items[parentIdx], this.items[childIdx]];
  }

  //     parent is (i-1)/2 rounded down
  //     left child is 2i+1
  //     right child is 2i+2
  parentIdx(childIdx) {
    return Math.floor((childIdx - 1) / 2);
  }

  childrenIndices(parentIdx) {
    return [parentIdx * 2 + 1, parentIdx * 2 + 2];
  }

  priority(i) {
    return this.items[i].priority;
  }

  insert(data, priority) {
    this.items.push({ data, priority });
    this.heapifyUp();
  }

  heapifyUp() {
    let currentIdx = this.items.length - 1;
    while (currentIdx > 0 &&
      this.items[currentIdx].priority >
      this.items[this.parentIdx(currentIdx)].priority) {
      this.swap(currentIdx, this.parentIdx(currentIdx));
      currentIdx = this.parentIdx(currentIdx);
    }
  }

  peek() {
    return this.items[0].data;
  }

  popMax() {
    const max = this.items[0];
    //replace root with last item in collection
    this.items[0] = this.items.pop();
    this.heapifyDown();
    return max.data;
  }

  heapifyDown() {
    let currentIdx = 0;
    let [left, right] = this.childrenIndices(currentIdx);
    let idxLarger;
    const length = this.items.length;
    while (left < length) {
      if (right < length) {
        idxLarger = this.priority(left) >= this.priority(right) ? left : right;
      } else {
        idxLarger = left;
      }

      if (this.priority(currentIdx) < this.priority(idxLarger)) {
        this.swap(idxLarger, currentIdx);
        currentIdx = idxLarger;
        [left, right] = this.childrenIndices(currentIdx);
      } else return;
    }
  }
}

const pq = new PriorityQueue();
pq.insert('Jill, concussion', 7);
pq.insert('John, stomach pain', 5);
pq.peek() // ==> 'Jill, concussion'
pq.peek() // ==> 'Jill, concussion'  // Jill is still in the PQ
pq.insert('Dave, sprained ankle', 1);
pq.insert('Bob, breathing problems', 8)
pq.peek() // ==> 'Bob, breathing problems'
pq.popMax() // ==> 'Bob, breathing problems'
pq.peek() // ==> 'Jill, concussion' // Bob has been removed from the PQ
