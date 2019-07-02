// Given two binary trees and imagine that when you put one of them to cover the other, 
// some nodes of the two trees are overlapped while the others are not.
// You need to merge them into a new binary tree. 
// The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. 
// Otherwise, the NOT null node will be used as the node of new tree.
// Example 1:
// Input: 
// 	Tree 1                     Tree 2                  
//           1                         2                             
//          / \                       / \                            
//         3   2                     1   3                        
//        /                           \   \                      
//       5                             4   7                  
// Output: 
// Merged tree:
// 	     3
// 	    / \
// 	   4   5
// 	  / \   \ 
// 	 5   4   7

class BST {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    insert(val) {
        const newNode = new BST(val);
        if (val < this.val) {
            if (this.left === null) {
                this.left = newNode;
            } else {
                this.left.insert(val);
            }
        } else {
            if (this.right === null) {
                this.right = newNode;
            } else {
                this.right.insert(val);
            }
        }
        return this;
    }
}

const tree1 = new BST(1).insert(3).insert(2).insert(5);
const tree2 = new BST(2).insert(1).insert(3).insert(1).insert(7);


// preOrder traversal
function mergeTrees(tree1, tree2) {
    if (!tree1) return tree2;
    if (!tree2) return tree1;
    tree1.val += tree2.val;
    tree1.left = mergeTrees(tree1.left, tree2.left);
    tree1.right = mergeTrees(tree1.right, tree2.right);
    return tree1;
}

console.log(mergeTrees(tree1, tree2)); 