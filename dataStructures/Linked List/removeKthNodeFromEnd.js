const LinkedList = require('./linkedList')


// Time O(n) | Space O(1)
const removeKthNodeFromEnd = (head, k) => {
    let dummy = new LinkedList(0);
    dummy.next = head; // rest of dummy is copy of head
    let firstPoint = dummy;
    let secondPoint = dummy;
    let counter = 0;

    // for (let i = 0; i < k + 1; i ++) {
    //     firstPoint = firstPoint.next;
    // }
    while (counter <= k) { // create gap betwen first and second point that is k nodes length.
        firstPoint = firstPoint.next;
        counter++;
    }


    while (firstPoint !== null) { // step through both pointers until firstPoint ends
        firstPoint = firstPoint.next
        secondPoint = secondPoint.next;
    }
    secondPoint.next = secondPoint.next.next; // change the next of the second to next.next
    return dummy;
}



const test = new LinkedList(5).addValues([12, 43, 20])
removeKthNodeFromEnd(test, 2); // should remove second node from the end.

// test.removeNode(12)
console.log(test.getNodesInArray()) //should remove node value 12. so 5's next value points to 43 and not 12.
