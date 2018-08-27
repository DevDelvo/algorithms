class BinaryTree {
    constructor(value, parent = null) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = parent;
    }

    insert(values, i = 0) {
        if (i >= values.length) return;
        const queue = [this];
        while (queue.length > 0) {
            let current = queue.shift();
            if (current.left === null) {
                current.left = new BinaryTree(values[i], current);
                break;
            }
            queue.push(current.left);
            if (current.right === null) {
                current.right = new BinaryTree(values[i], current);
                break;
            }
            queue.push(current.right);
        }
        this.insert(values, i + 1);
        return this;
    }
}


// O(n) time | O(1) space
function interativeInOrderTraversal(tree, cb) {
    let prevNode = null;
    let currentNode = tree;
    while (currentNode !== null) {
        let nextNode;
        if (prevNode === null || prevNode === currentNode.parent) {
            if (currentNode.left !== null) {
                nextNode = currentNode.left;
            } else {
                cb(currentNode);
                nextNode = currentNode.right !== null ? currentNode.right : currentNode.parent;
            }
        } else if (prevNode === currentNode.left) {
            cb(currentNode);
            nextNode = currentNode.right !== null ? currentNode.right : currentNode.parent;
        } else {
            nextNode = currentNode.parent;
        }
        prevNode = currentNode;
        currentNode = nextNode;
    }
}




const test1 = new BinaryTree(1); // [1]
const test2 = new BinaryTree(1).insert([2, 3, 4]); // [4, 2, 1, 3]
const test3 = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7]); // [4, 2, 5, 1, 6, 3, 7];

let testArray = [];
function testCallback(tree) {
    if (tree === null) return;
    testArray.push(tree.value);
}
interativeInOrderTraversal(test3, testCallback)

console.log(testArray)

