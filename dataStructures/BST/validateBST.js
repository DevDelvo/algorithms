//Write a function that returns a boolean representing whether or not the B-tree is a valid BST. 
//A node is said to be a BST node if and only if it satisfies the BST property:
//its value is strictly greater than the values of every node to its left;
//its value is leass than or equal to the values of every node to its right;
//and both of its children nodes are either BST themselves or None(null) values.

// Sample input:
//       11
//     /     \
//     6     13
//    / \    / \
//   4   6  15  22
//  /        \
//  1        16
// Sample output: True

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

//FUNCTION STARTS HERE
// O(n) time where n is number of nodes. You have to check every node | O(d) space where d is how deep the tree is.
function validateBST(tree, max = Infinity, min = -Infinity) {
    if (tree === null) return true;
    if (tree.value < min || tree.value >= max) return false;
    const leftIsValid = validateBST(tree.left, tree.value, min)
    return leftIsValid && validateBST(tree.right, max, tree.left)
}

const test = new BST(10).insert(5).insert(12).insert(3).insert(20).insert(30)
console.log(validateBST(test))