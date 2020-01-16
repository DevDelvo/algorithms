const LinkedList = require("./linkedList");
// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

const list1 = new LinkedList(2).addValues([4,3]);
const list2 = new LinkedList(5).addValues([6,4]);

const list3 = new LinkedList(5);
const list4 = new LinkedList(5);

const list5 = new LinkedList(1).addValues([8])
const list6 = new LinkedList(0);

const addTwoNumbers = (l1, l2) => {
    if (!l1 && !l2) return null;
    if (!l1 && l2) return l2;
    if (l1 && !l2) return l1;

    let finalSum = new LinkedList(l1.value + l2.value);
    let current = finalSum;
    let carry;
    if (finalSum >= 10) {
        carry = sum === 10 ? 1 : Math.floor(sum/10);
    } else {
        carry = 0;
    }

    let current1 = l1.next;
    let current2 = l2.next;

    while (current1 || current2) {
        if (current1 && current2) {
            let sum = current1.value + current2.value + carry;
        if (sum >= 10) {
            carry = sum === 10 ? 1 : Math.floor(sum / 10);
            sum = sum % 10;
        } else {
            carry = 0;
        }
        current.next = new LinkedList(sum);
        current = current.next;
        current1 = current1.next;
        current2 = current2.next;
        } else if (current1 && !current2) {

        } else if (!current1 && current2) {
            
        }
    }
    return finalSum;
}

let sum1 = addTwoNumbers(list1, list2)
let sum1 = addTwoNumbers(list3, list4)
let sum1 = addTwoNumbers(list5, list6)
console.log(sum1.getNodesInArray()); // [7,0,8]
console.log(sum2.getNodesInArray()); // [0, 1]
console.log(sum3.getNodesInArray()); // [1, 8]