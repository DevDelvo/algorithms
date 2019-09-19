const LinkedList = require('./linkedList');

// Given a linked list, determine if it has a cycle in it.

// To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. 
// If pos is -1, then there is no cycle in the linked list.

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the first node.

// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// Follow up:
// Can you solve it using O(1) (i.e. constant) memory?

const hasCycle = head => {
    if (!head) return false;
    let slow = head;
    let fast = head;
    while (slow.next || fast.next) {
     
        slow = slow.next;
        fast = fast.next.next;
           if (slow === null || fast === null) {
            return false;
        }
        
        if (slow === fast) {
            return true;
        }
    }

    return false;
}

const arr1 = [3,2,0,-4], 
      arr2 = [3,2,0,-4], 
      arr3 = [1],
      arr4 = [1, 2]

const test1 = new LinkedList().createList(arr1, 1);
const test2 = new LinkedList().createList(arr2, 0);
const test3 = new LinkedList().createList(arr3, -1);
const test4 = new LinkedList().createList(arr4, -1);

console.log(hasCycle(test1)); // true;
console.log(hasCycle(test2)); // true;
console.log(hasCycle(test3)); // false;
console.log(hasCycle(test4)); // false;