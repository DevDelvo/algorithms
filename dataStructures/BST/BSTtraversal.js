//Traverse tree in 
//In-order
//Pre-order
//post-order

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


// SOLUTIO
// O(n) time | O(n) space for all three

function inOrder(tree, array) {
    if (tree !== null) {
        inOrder(tree.left, array);
        array.push(tree.value);
        inOrder(tree.right, array)
    }
    console.log(array)
    return array;
}

function postOrder(tree, array) {
    if (tree !== null) {
        postOrder(tree.left, array);
        postOrder(tree.right, array);
        array.push(tree.value);
    }
    console.log(array)
    return array;
}

function preOrder(tree, array) {
    if (tree !== null) {
        array.push(tree.value);
        preOrder(tree.left, array);
        preOrder(tree.right, array);
    }
    console.log(array)
    return array;
}




const test = new BST(10).insert(5).insert(12).insert(3).insert(20).insert(30)

// inOrder(test, [])
postOrder(test, [])
preOrder(test, [])