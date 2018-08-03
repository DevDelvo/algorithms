// Write function that takes binary tree and inverts it
// It should swap every left node in the tree for its corresponding (mirrored) right node.

// Sample input:
//           1
//         /    \
//         2     3
//         /\   /  \
//        4  5  6   7 
//        /   \ 
//       8     9

// Sample output: 
//         1
//       /   \
//      3     2
//     /\    /  \
//    7  6   5   4
//             /  \ 
//             9  8

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    // Average: O(log(n)) time | O(1) space
    // Worst: O(n) time | O(1) space
    insert(value) {
        let currentNode = this;
        while (true) {
            if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = new BST(value);
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (currentNode.right === null) {
                    currentNode.right = new BST(value);
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
        return this;
    }


    // Average: O(log(n)) time | O(1) space
    // Worst: O(n) time | O(1) space
    search(value) {
        let currentNode = this;
        while (currentNode !== null) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                return true;
            }
        }
        return false;
    }

    // Average: O(log(n)) time | O(1) space
    // Worst: O(n) time | O(1) space
    remove(value, parentNode = null) {
        let currentNode = this;
        while (currentNode !== null) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else {
                if (currentNode.left !== null && currentNode.right !== null) {
                    currentNode.value = currentNode.right.getMinValue();
                    currentNode.right.remove(currentNode.value, currentNode);
                } else if (parentNode === null) {
                    if (currentNode.left !== null) {
                        currentNode.value = currentNode.left.value;
                        currentNode.right = currentNode.left.right;
                        currentNode.left = currentNode.left.left;
                    } else if (currentNode.right !== null) {
                        currentNode.value = currentNode.right.value;
                        currentNode.left = currentNode.right.left;
                        currentNode.right = currentNode.right.right;
                    } else {
                        currentNode.value = null;
                    }
                } else if (parentNode.left === currentNode) {
                    parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right;
                } else if (parentNode.right === currentNode) {
                    parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right;
                }
                break;
            }
        }
        return this;
    }

    getMinValue() {
        let currentNode = this;
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }
}


//SOLUTION
//With a queue O(n) time | O(n) space
function invertBinaryTree(tree) {
    const queue = [tree];
    while (queue.length) {
        const current = queue.shift();
        if (current === null) continue;
        swapNodes(current);
        queue.push(current.left)
        queue.push(current.right);
    }
}

// o(n) time | O(d) space
function invertBinaryTree2(tree) {
    if (tree === null) return;
    swapNodes(tree);
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
}

function swapNodes(tree) {
    const left = tree.left;
    tree.left = tree.right;
    tree.right = left;
}


let test = new BST(10).insert(5).insert(12).insert(3).insert(20).insert(30)
console.log(test)
invertBinaryTree(test)
console.log(test)


