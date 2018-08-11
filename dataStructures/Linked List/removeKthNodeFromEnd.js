const LinkedList = require('./linkedList')


// Time O(n) | Space O(1)
const removeKthNodeFromEnd = (head, k) => {
    let firstPoint = head;
    let secondPointer = head;
    let counter = 1;
    while (counter <= k) {
        secondPointer = secondPointer.next;
        counter++;
    }
    if (secondPointer === null) { 
        head.value = head.next.value;
        head.next = head.next.next;
        return;
    }
    while (secondPointer.next !== null) {
        secondPointer.value = secondPointer.next.value;
        secondPointer.next = secondPointer.next.next;
        return;
    }
    firstPoint.next = firstPoint.next.next;
}



const test = new LinkedList(5).addValues([12,43,20])
// removeKthNodeFromEnd(test, 2);
console.log(test.getNodesInArray()) //should remove node value 12. so 5's next value points to 43 and not 12.
