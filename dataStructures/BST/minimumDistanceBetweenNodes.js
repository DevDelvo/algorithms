// Given a Binary Search Tree (BST) with the root node root, 
// return the minimum difference between the values of any two different nodes in the tree.
// Example :
// Input: root = [4,2,6,1,3,null,null]
// Output: 1
// Explanation:
// Note that root is a TreeNode object, not an array.
// The given tree [4,2,6,1,3,null,null] is represented by the following diagram:
//           4
//         /   \
//       2      6
//      / \    
//     1   3  
// while the minimum difference in this tree is 1, it occurs between node 1 and node 2,
//  also between node 3 and node 2.
// Note:
// The size of the BST will be between 2 and 100.
// The BST is always valid, each node's value is an integer, and each node's value is different.

class BST {
    constructor(val) {
        this.val = val;
        this.lef = this.right = null;
    }
    insert(val) {
        const newNode = new BST(val);
        if (val < this.val) {
            !this.left ? this.left = newNode : this.left = this.left.insert(val);
        } else {
            !this.right ? this.right = newNode : this.right = this.right.insert(val);
        }
        return this;
    }
}

const tree = new BST(4).insert(2).insert(6).insert(1).insert(3);

function minDiffInBST(tree) {
    let res = Infinity;

    function minDiffInBSTHelper(tree, low, high) {
        if (!tree) return res;
        if (low !== -Infinity) res = Math.min(res, tree.val - low);
        if (high !== Infinity) res = Math.min(res, high - tree.val);
        minDiffInBSTHelper(tree.left, low, tree.val, res);
        minDiffInBSTHelper(tree.right, tree.val, high, res);
    }
    
    minDiffInBSTHelper(tree, -Infinity, Infinity);
    return res;
}

console.log(minDiffInBST(tree));