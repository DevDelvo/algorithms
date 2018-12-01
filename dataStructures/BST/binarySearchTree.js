//Write a BST class. Should have a "value" property set to be an integet, as well as "left" and "right" properties,
//both of which should point to either the None(null) value or to another BST. 
// A node is said to be a BST node if and only if it satisfies the BST property:
// its value is less than or equal to the values of ever node to its right and both of its children nodes are either BST nodes themselves or None(null) values.
//Should support insertion, searching and removal of values. Removal method should only remove first instance of the target value.

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    // Average: O(log(n)) time | O(log(n)) space
    // Worst: O(n) time | O(n) space
    insert (value) {
        const newNode = new BST(value);
        if (value < this.value) {
            if (this.left === null) {
                this.left = newNode;
            } else {
                this.left.insert(value);
            }
        } else if (value > this.value) {
            if (this.right === null) {
                this.right = newNode;
            } else {
                this.right.insert(value);
            }
        }
        return this;
    }

    // Average: O(log(n)) time | O(1) space
    // Worst: O(n) time | O(1) space
    insert2(value) {
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

    // Average: O(log(n)) time | O(log(n)) space
    // Worst: O(n) time | O(n) space
    search(value) {
        if (value < this.value) {
            if (this.left === null) {
                return false;
            } else {
                return this.left.search(value);
            }
        } else if (value > this.value) {
            if (this.right === null) {
                return false;
            } else {
                return this.right.search(value);
            }
        } else {
            return true;
        }
    }

    // Average: O(log(n)) time | O(1) space
    // Worst: O(n) time | O(1) space
    search2(value) {
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

    // Average: O(log(n)) time | O(log(n)) space
    // Worst: O(n) time | O(n) space
    // First find node, then remove it
    remove(value, parent = null) {
        debugger;
        if (value < this.value) {
            if (this.left !== null) {
            this.left.remove(value, this);
            }
        } else if (value > this.value) {
            if (this.right !== null) {
                this.right.remove(value, this);
            }
        } else {
            if (this.left !== null && this.right !== null) {
                this.value = this.right.getMinValue();
                this.right.remove(this.value, this);
            } else if (parent === null) {
                if (this.left !== null) {
                    this.value = this.left.value;
                    this.right = this.left.right;
                    this.left = this.left.left;
                } else if (this.right !== null) {
                    this.value = this.right.value;
                    this.left = this.right.left;
                    this.right = this.right.right;
                } else {
                    this.value = null;
                }
            } else if (parent.left === this) {
                if (this.left !== null) {
                    parent.left = this.left;
                } else {
                    parent.left = this.right;
                }
            } else if (parent.right === this) {
                if (this.left !== null) {
                    parent.right = this.left;
                } else {
                    parent.right = this.right;
                }
            }
        }
        return this;
    }

    // Average: O(log(n)) time | O(1) space
    // Worst: O(n) time | O(1) space
    remove(value, parentNode = null) {
        let currentNode = this;
        while (currentNode !== null) {
            if (value < currentNode.value) { //if its less than
                parentNode = currentNode;
                currentNode = currentNode.left; //step down to the left of the tree because it's lower
            } else if (value > currentNode.value) { //if its greater than
                parentNode = currentNode;
                currentNode = currentNode.right; //step down to right of the tree because it's greater
            } else { //for when the value has been found
                if (currentNode.left !== null && currentNode.right !== null) { //when the left and right nodes have been set you can remove
                    currentNode.value = currentNode.right.getMinValue2(); //use helper function to get the small value of this tree
                    currentNode.right.remove(currentNode.value, currentNode); //remove that node
                } else if (parentNode === null) { //for when parentNode is null and doesn't have a value passed like when remove() is called in the previous line
                    if (currentNode.left !== null) {
                        currentNode.value = currentNode.left.value; //set value to the left
                        currentNode.right = currentNode.left.right; //set value of right equal to the right node of the left node
                        currentNode.left = currentNode.left.left; //set value of the left equal to the left node of the left node
                    } else if (currentNode.right !== null) { //same as with the left but with the right
                        currentNode.value = currentNode.right.value;
                        currentNode.left = currentNode.right.left;
                        currentNode.right = currentNode.right.right;
                    } else {
                        currentNode.value = null; //otherwise just set the value to null if the left and right nodes are null
                    }
                } else if (parentNode.left === currentNode) { //if the left parentNode is equal to the currentNode
                    parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right; //parentNode.left is set to currentNode.left if currentNode.left is null otherwise it's set to currentNode.right
                } else if (parentNode.right === currentNode) {
                    parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right;//right parent is set to the current left if the left currentNode is null otherwise it's set to the right currentNode
                }
                break;
            }
        }
        return this;
    }

    getMinValue() {
        if (this.left === null) {
            return this.value;
        } else {
            return this.left.getMinValue();
        }
    }

    getMinValue() {
        let currentNode = this;
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }
}


const testTree = new BST(10).insert(5).insert(15).insert(5).insert(3).insert(15).insert(20)

console.log(testTree.remove(12))
