class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    addValues(values) {
        let current = this;
        while (current.next !== null) {
            current = current.next;
        }
        for (const value of values) {
            current.next = new LinkedList(value);
            current = current.next;
        }
        return this;
    }

    insertNode (where, value) {
        let whereToInsert = this.findValue(where);
        let newNode = new LinkedList(value);
        newNode.next = whereToInsert.next;
        whereToInsert.next = newNode
    }

    findValue (value) {
        let current = this;
        while (current.value !== value && current.next !== null) {
            current = current.next;
        }
        return current.value === value ? current : 'Value not found';
    }

    findPreviousValue (value) {
        let current = this;
        while (current.next.value !== value && current.next !== null) {
            current = current.next;
        }
        console.log(current)
        return current;
    }

    getNthNode(n) {
        let counter = 1;
        let current = this;
        while (counter < n) {
            current = current.next;
            counter++;
        }
        return current;
    }

    includesValue(n) {
        let current = this;
        while (current.next !== null) {
            if (current.value === n) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    getNodesInArray() {
        const nodes = [];
        let current = this;
        while (current !== null) {
            nodes.push(current.value);
            current = current.next;
        }
        return nodes;
    }
}

module.exports = LinkedList;
