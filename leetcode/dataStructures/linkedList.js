class LinkedList {
    constructor(val) {
        this.val = val;
        this.next = null;
    }

    createList(arr, pos = null) {
        const head = new LinkedList(arr[0]);
        let current = head;
        let counter = 0;
        for (let i = 1; i < arr.length; i++) {
            const node = new LinkedList(arr[i]);
            current.next = node;
            current = current.next;
        }

        let loop = head;
        
        while (counter < pos && pos) {
            loop = loop.next;
            counter++;
        }

        if (pos !== null && pos >= 0) current.next = loop;

        return head;
    }
    
    printList() {
        const list = [];
        let current = this;
        while (current) {
            list.push(current.val)
            current = current.next;
        }
        return list;
    }
}

module.exports = LinkedList;