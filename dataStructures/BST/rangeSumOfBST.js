const BST = require('./binarySearchTree')
// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
// The binary search tree is guaranteed to have unique values.

// Example 1:
// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32

// Example 2:
// Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
// Output: 23
 
// Note:
// The number of nodes in the tree is at most 10000.
// The final answer is guaranteed to be less than 2^31.


const test1 = [10,5,15,3,7,null,18];
const test2 = [10,5,15,3,7,13,18,1,null,6];

const createTree = (arr) => {
    let tree = new BST(arr[0]);
    let idx = 1;
    while (idx < arr.length) {
        tree.insert(arr[idx]);
        idx++;
    }
    return tree
}
const printNodesInOrder = (head, cb = (el) => console.log(el)) => {
    if (head.left) {
        printNodesInOrder(head.left, cb);
    }
    cb(head.value);
    if (head.right) {
        printNodesInOrder(head.right, cb);
    }
}

const nonRecursivePrintNodesInOrder = (root) => {
    if (root === null) return;
    const stack = [];
    let current = root;

    while (current || stack.length) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        console.log("val: ", current.value);
        current = current.right;
        
    }


}

const rangeSumOfBST =(root, l, r) => {
    if (root === null) return;
    const stack = [];
    let sum = 0;
    let current = root;
    while (stack.length || current) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
            current = stack.pop();
            console.log("val is ", current.value)
            if (current.value >= l && current.value <= r) sum+= current.value;
            current = current.right;
    }
    return sum;
}

const rangeSumOfBSTRecursive = (root, l, r) => {
    function rangeSumOfBSTRecursiveHelper(root, l, r) {
        if (root) {
            if (root.value >= l && root.value <= r) {
                sum += root.value;
            }
            if (root.value > l) {
                rangeSumOfBSTRecursiveHelper(root.left, l, r);
            }
            if (root.value < r) {
                rangeSumOfBSTRecursiveHelper(root.right, l, r);
            }
        }
    }
    let sum = 0;
    rangeSumOfBSTRecursiveHelper(root, l, r);
    return sum;
}


const tree1 = createTree(test1);
const tree2 = createTree(test2);
// console.log(printNodesInOrder(tree1));
// console.log(nonRecursivePrintNodesInOrder(tree1));
// console.log(rangeSumOfBST(tree1, 7, 15)); // 32
// console.log(rangeSumOfBST(tree2, 6, 10)); // 23

console.log(rangeSumOfBSTRecursive(tree1, 7, 15)); // 32