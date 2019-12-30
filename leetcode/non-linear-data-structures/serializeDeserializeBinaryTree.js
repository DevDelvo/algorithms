// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file 
// or memory buffer, 
// or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. 
// There is no restriction on how your serialization/deserialization algorithm should work. 
// You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Example: 

// You may serialize the following tree:

//     1
//    / \
//   2   3
//      / \
//     4   5

// as "[1,2,3,null,null,4,5]"
// Clarification: The above format is the same as how LeetCode serializes a binary tree. 
// You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

// Note: Do not use class member/global/static variables to store states. 
// Your serialize and deserialize algorithms should be stateless.

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function serialize(root) {
    if (root === null) return null;
    const res = [];
    function traverse(root) {
        let queue = [root];
        while (queue.length) {
            let next = [];
            for (const node of queue) {
                
                node !== null ? res.push(node.val) : res.push(null);
                if (node === null) {
                    next.shift();
                    continue
                };
                if (node.left) {
                    next.push(node.left);
                } else {
                    next.push(null)
                }
                if (node.right) {
                    next.push(node.right)
                } else {
                    next.push(null)
                }
            }
            console.log('next queue', next)
            queue = next;
        }
    } 
    traverse(root)
    return res;
}

function deserialize(nodes) {

}

let root = new TreeNode(1);
root.left = new TreeNode(2)
root.right = new TreeNode(3);
root.right.right = new TreeNode(5);
root.right.left = new TreeNode(4);
root.right.right.right = new TreeNode(7)

// console.log('root => ', root)
console.log('serialize => ', serialize(root)); // [1,2,3,null,null,4,5]
console.log('deserialize => ', deserialize(root));