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
        
        while (counter < pos) {
            loop = loop.next;
            counter++;
        }
        // console.log(current)
        // console.log(loop)
        if (pos >= 0) current.next = loop;
        return head;
    }
}

module.exports = LinkedList;