// Given a binary tree, determine if it is a valid binary search tree (BST).
// Assume a BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
 
// Example 1:

//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true
// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

class BST {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val = val;
    }

    insert(val) {
        const newNode = new BST(val);
        let current = this;
        while (true) {
            if (current.val > val) {
                if (current.left === null) {
                    current.left = newNode;
                    break;
                } else {
                    current = current.left;
                }
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    break
                } else {
                    current = current.right;
                }
            }
        }
        return this;
    }
}


// RECURSIVE
// O(n) time | O(n) space
function validateBST(head) {
    return validateBSThelper(head, null, null)
}

function validateBSThelper(head, lower, upper) {
    if (!head) return true;
    if ((lower && head.val <= lower) || (upper && head.val >= upper)) return false;
    if (!validateBSThelper(head.right, head.val, upper)) return false;
    if (!validateBSThelper(head.left, lower, head.val)) return false;
    return true;
}

let test1 = new BST(2).insert(1).insert(3);
let test2 = new BST(5).insert(1).insert(4)
.insert(3)
.insert(6);

console.log('recursive => ', validateBST(test1)); // true
// console.log(test2)
console.log('recursive => ', validateBST(test2)); // true


// ITERATIVE
// O(n) time | O(n) space since we use a stack
function validateBST2(head) {
    if (!head) return true;
    let stack = [{head, lower: -Infinity, upper: Infinity}];
    while (stack.length) {
        const { head, lower, upper } = stack.pop();
        if (!head) continue;
        const val = head.val;
        if (val <= lower || val >= upper) return false;
        stack.push({head: head.right, lower: val, upper});
        stack.push({head: head.left, lower, upper: val});
    }
    return true;
}

console.log('iterative => ', validateBST2(test1)); // true
console.log('iterative => ', validateBST2(test2)); // true

// In-order traversal
// O(n) time when the out of order element is at the farthest right | O(n) space for the stack
function validateBSTInOrder(head) {
    if(!head) return true;
    const stack = [];
    let inOrder = -Infinity;
    while (stack.length || head) {
        while (head) {
            stack.push(head);
            head = head.left;
        }
        head = stack.pop();
        if (head.val <= inOrder) return false;
        inOrder = head.val;
        head = head.right
    }
    return true;
}

console.log('in-order => ', validateBSTInOrder(test1)); // true
console.log('in-order => ', validateBSTInOrder(test2)); // true