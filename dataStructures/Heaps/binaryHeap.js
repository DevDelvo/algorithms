// naive solution priority queue
class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
        this.next = null;
    }
}

class PriorityQueue {
    constructor() {
        this.first = null;
    }

    insert(value, priority) {
        const newNode = new Node(value, priority);
        if (!this.first || priority > this.first.priority) {
            newNode.next = this.first;
            this.first = newNode;
        } else {
            let pointer = this.first;
            while (pointer.next && priority < pointer.next.priority) {
                pointer = pointer.next;
            }
            newNode.next = pointer;
            pointer.next = newNode
        }
    }

    remove() {
        const first = this.first;
        this.first = this.first.next;
        return first;
    }
}

// Because we potentially have to visit all items in the list, inserting items is O(n) time complexity while removing is O(1). We can make our insertion O(logn) with a binary heap.

// https://gist.github.com/mperitz/b5ff6a5f47d8428e734c07fe4bc3be8b#file-level-ordered-algorithm-txt
// We start with an array with the uppermost parent node:

// [100]

// The parent node's children come next, ordered left to right:

// [100, 19, 36]

// Then the "19" node's children, again left to right:

// [100, 19, 36, 17, 3]

// As well as the "36" node's children:

// [100, 19, 36, 17, 3, 25, 1]

// See a pattern emerging?
// If a given node is located at index 'x' in the array, its left child exists at
// index = 2x, and its right child exists at index = 2x + 1.  Each node's parent exists
// at index = x / 2 (rounded down).

// So the final binary heap array looks like this:

// [100, 19, 36, 17, 3, 25, 1, 2, 7]
// 2 is at index 7, its parent is located at Math.floor(7 / 2) index 3 i.e 17

// And we can find any given child's parent/children using our algorithm.  For instance,
// the "25" node exists at index = 5, therefore its parent must exist at 5/2 rounded down
// which equals 2.  It works!

class PriorityQueueWithHeap {
    constructor() {
        this.heap = [null];
    }

    insert(value, priority) {
        const newNode = new Node(value, priority);
        this.heap.push(newNode);
        let currentNodeIdx = this.heap.length - 1;
        let currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
        while (this.heap[currentNodeIdx] && newNode.priority > this.heap[currentNodeParentIdx].priority) {
            const parent = this.heap[currentNodeParentIdx];
            this.heap[currentNodeParentIdx] = newNode;
            this.heap[currentNodeIdx] = parent;
            currentNodeIdx = currentNodeParentIdx;
            currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
        }
    }
    // O(logn) time complexity because we visit levels of the node, not each node

    remove() {
        if (this.heap.length < 3) {
            const toReturn = this.heap.pop();
            this.heap[0] = null;
            return toReturn;
        }
        const toRemove = this.heap[1];
        this.heap[1] = this.heap.pop();
        let currentIdx = 1;
        let [left, right] = [2 * currentIdx, 2 * currentIdx + 1]; //find the left and right child indices of the currentIdx
        let currentChildIdx = this.heap[right] && this.heap[right].priority >= this.heap[left] && this.heap[left].priority ? right : left; //if the right is higher in priority, set to right child, if not set to the left
        while (this.heap[currentChildIdx] && this.heap[currentIdx].priority <= this.heap[currentChildIdx.priority]) {
            let currentNode = this.heap[currentIdx];
            let currentChildNode = this.heap[currentChildIdx];
            this.heap[currentChildIdx] = currentNode;
            this.heap[currentIdx] = currentChildNode;
        }
        return toRemove;
    }
    // O2(logn)
    // if we repalce the first element in the heap with this.heap.pop(), we are replacing the element with itself if the heap is less than 3.
    // We also return null when replacing the zeron index with a new null value if the heap is empty.
}