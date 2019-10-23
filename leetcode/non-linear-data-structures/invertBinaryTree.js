class BST {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val = val
    } 

    insert(val) {
        const newNode = new BST(val);

        let current = this;
        while  (true) {
            if (val < current.val) {
                if (current.left === null) {
                    current.left = newNode;
                    break;
                } else {
                    current = current.left
                }
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    break;
                } else {
                    current = current.right;
                }
            }
        }
        return this;
    }
}

const tree1 = new BST(4).insert(2).insert(7).insert(1).insert(3).insert(6).insert(9);

// O(n) time: have to visit all the nodes | O(h) space: where h is height. height could be n so it is actually O(n)
function invertBST(head) {
    if (!head) return null;

    const right = invertBST(head.right);
    const left = invertBST(head.left);
    head.left = right;
    head.right = left;
    return head;
}

console.log('recursive -> ',invertBST(tree1));

// O(n) time | O(n) space
function invertBSTIterative(head) {
    if (!head) return null;
    const queue = [head];
    while (queue.length) {
        const current = queue.pop();
        const temp = current.left;
        current.left = current.right;
        current.right = temp;
        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return head;
}

console.log('iterative -> ', invertBSTIterative(tree1));