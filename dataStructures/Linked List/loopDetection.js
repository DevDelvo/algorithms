const LinkedList = require('./linkedList');


// A linked list is said to contain a cycle if any node is visited more than once while traversing the list.

// Complete the function provided for you in your editor.
// It has one parameter: a pointer to a Node object named `head` that points to the head of a linked list.
// Your function must return a boolean denoting whether or not there is a cycle in the list.
// If there is a cycle, return true; otherwise, return false.

// Note: If the list is empty, `head` will be null.

function detectLoop (head) {
    let firstPointer = head;
    let secondPointer = head;

    while (firstPointer.next !== null || secondPointer.next !== null) {
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next.next;

        if (firstPointer === null || secondPointer === null) {
            return false;
        }

        if (firstPointer === secondPointer) {
            return true;
        }
    }
}

const test = new LinkedList(0).addValues([1,2,3,4,5,6,7,8,9]);
test.getNthNode(10).next = test.getNthNode(1);
console.log(detectLoop(test));

const test2 = new LinkedList(0).addValues([1,2,3,4,5,6,7,8,9]);
test2.getNthNode(10).next = test2.getNthNode(4); //10th node val 9 points to 4th node at value 3
console.log(detectLoop(test2));

const test3 = new LinkedList(2).addValues([2,5,7,8,45,3,12]);
console.log(detectLoop(test3));