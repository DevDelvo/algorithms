// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

    add(val) {
        let newNode = new ListNode(val);
        let current = this;
        while (current) {
            if (current.next === null) {
                current.next = newNode;
                return this;
            } else {
                current = current.next
            }
        }
    }

    list() {
        let current = this;
        while (current) {
            console.log(current.val)
            current = current.next;
        }
        return this;
    }
}

function isPalindrome(head) {
    if (!head) return head;
    let fast = head;
    let slow = head;

    while (fast.next !== null && fast.next.next !== null) { // because the fast pointer moves twice as fast as the slow, we will only get half of the list on slow.
        slow = slow.next;
        fast = fast.next.next;
    }

    let rev = reverse(slow); //take this half of the list and reverse it.

    while (head && rev) { // iterate through both to see if they match
        if (head.val !== rev.val) {
            return false;
        }
        head = head.next;
        rev = rev.next;
    }

    return true;
}

const reverse = (head) => {
    let current = head;
    let prev, next;
    while (current) {
        next = current.next; // save the next value as next
        current.next = prev; // set the next to prev. when it initializes, the next is null.
        prev = current; // set prev to current
        current = next; // set current to next
    }
    head = prev;
    return head;
}

const test1 = new ListNode(1).add(2);
const test2 = new ListNode(1).add(2).add(2).add(1);

console.log(isPalindrome(test1)); // false
console.log(isPalindrome(test2)); // true