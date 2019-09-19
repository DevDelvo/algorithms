const LinkedList = require('./linkedList');

// Reverse a singly linked list.
// Example:
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// Follow up:
// A linked list can be reversed either iteratively or recursively. Could you implement both?

// iterative
function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current) {
        let nextTemp = current.next; // store the next node as a temp value of nextTemp
        current.next = prev; // set the next to the previous
        prev = current; // set previous to the current node
        current = nextTemp; // set the current node to the saved next node stored as nextTemp
    }
    return prev;
}

const test1 = new LinkedList().createList([1,2,3,4,5]);
console.log('iterative => ', reverseLinkedList(test1).printList()); // [5, 4, 3, 2, 1]


// recursive
function reverseLinkedListRecursive(head) {
    if (!head || !head.next) return head; // base case
    let prev = reverseLinkedListRecursive(head.next); // set previous to next node and call it recursively;
    head.next.next = head; // set the next next to the current head.
    head.next = null; // set the next of the current to null
    return prev; // return the node set in reverseLinkedListRecursive() to go to the next node
}


const test1Recursive = new LinkedList().createList([1,2,3,4,5]);
console.log('recursive => ', reverseLinkedListRecursive(test1Recursive).printList()); // [5, 4, 3, 2, 1]