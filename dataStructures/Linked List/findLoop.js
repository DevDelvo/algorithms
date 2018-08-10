const LinkedList = require("./linkedList");


// O(n) time | O(1) space
const findLoop = (head) => {
    let firstPointer = head.next;
    let secondPointer = head.next.next;
    while (firstPointer !== secondPointer) {
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next.next;
    }
    firstPointer = head;
    while (firstPointer !== secondPointer) {
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next;
    }
    return firstPointer;
}

const test = new LinkedList(0).addValues([1,2,3,4,5,6,7,8,9]);
test.getNthNode(10).next = test.getNthNode(1);
console.log(findLoop(test) === test.getNthNode(1));

const test2 = new LinkedList(0).addValues([1,2,3,4,5,6,7,8,9]);
test2.getNthNode(10).next = test2.getNthNode(4); //10th node val 9 points to 4th node at value 3
console.log(findLoop(test2) === test2.getNthNode(4))