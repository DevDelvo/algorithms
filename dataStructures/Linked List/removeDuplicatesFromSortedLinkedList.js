const LinkedList = require('./linkedList');

// Given a sorted linked list, delete all duplicates such that each element appear only once.
// Example 1:
// Input: 1->1->2
// Output: 1->2
// Example 2:
// Input: 1->1->2->3->3
// Output: 1->2->3

const linkedList = new LinkedList(1).addValues([1,2]);
const linkedList2 = new LinkedList(1).addValues([1,2,3,3]);

const removeDuplicates = (head) => {
    if (!head) return head;
    let current = head;
    while (current.next) {
        if (current.value === current.next.value) {
                current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}

console.log(removeDuplicates(linkedList));
console.log(removeDuplicates(linkedList2));