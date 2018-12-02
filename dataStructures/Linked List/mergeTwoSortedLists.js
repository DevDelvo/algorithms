class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    append(value) {
        let current = this;
        let newNode = new Node(value);
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
        return this;
    }
}

// O(n) time | O(1) space
const mergeSortedLists = (list1, list2) => {
    const dummyNode = new Node(0);
    let tail = dummyNode;
    while (true) {
        if (list1 === null) {
            tail.next = list2;
            break;
        }
        if (list2 === null) {
            tail.next = list1;
            break;
        }
        if (list1.value <= list2.value) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    return dummyNode.next;
}

const list1 = new Node(1).append(2).append(4);
const list2 = new Node(1).append(3).append(4);
const mergedLists = mergeSortedLists(list1, list2);
console.log(mergedLists);