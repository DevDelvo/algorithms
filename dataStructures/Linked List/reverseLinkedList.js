class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }


}

// in each pass, we point each pointer's next to the previous point
// NOTE: order of operation matters, careful to not make the next the previous BEFORE stepping to the next or else you will just step backwards!

// O(n) time | O(1) space
function reverseLinkedList(headOfLinkedList) {
    let currentNode = headOfLinkedList;
    let prevNode = null;
    let nextNode = null;

    while (currentNode) { //until we reach the end of the list
        nextNode = currentNode.next; //save a copy of the pointer to the next value before you reassign next
        
        currentNode.next = prevNode; //reverse the 'next' pointer

        // step forward in list
        prevNode = currentNode;
        currentNode = nextNode;
    }

    return prev
}