const LinkedList = require('./linkedList');

// Given a linked list, remove the n-th node from the end of list and return its head.
// Example:
// Given linked list: 1->2->3->4->5, and n = 2.
// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:
// Given n will always be valid.
// Follow up:
// Could you do this in one pass?

function removeNthNode(head, n) {
    const dummy = new LinkedList(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;
    let counter = 0;
    while (counter <= n) {
        first = first.next;
        counter++;
    }

    while (first) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy;
}

const test1 = [1, 2, 3, 4, 5];
const list1 = new LinkedList().createList(test1);
removeNthNode(list1, 2)
console.log(list1.printList())