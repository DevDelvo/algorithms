class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.next = null;
    }

    insert(value) {
        const node = new BST(value);
        let current = this;
        while(true) {
            if (value <= current.value) {
                if (current.left === null) {
                    current.left = node;
                    break;
                } else {
                    current = current.left;
                }
            } else if (value > current.value) {
                if (current.right === null) {
                    current.right = node;
                    break;
                } else {
                    current = current.right;
                }
            }
        }
        return this;
    }
}

const arr = [4, 3, 5, 2, 1, 6, 7];
const tree = new BST(arr[0]);
arr.forEach((num, idx) => {
    if (idx !== 0) tree.insert(num);
})

const inOrderTraversal = (root, cb) => {
    if (root !== null) {
        inOrderTraversal(root.left, cb);
        cb(root.value)
        inOrderTraversal(root.right, cb);
    }
}

const sortedArr = [];
inOrderTraversal(tree, function(val) {
    sortedArr.push(val);
});

const balanceTree = (arr) => {
    if (!arr.length) return null;
    let mid = Math.floor(arr.length / 2);
    let root = new BST(arr[mid]);
    root.left = balanceTree(arr.slice(0, mid));
    root.right = balanceTree(arr.slice(mid + 1));
    return root;
}

const balancedTree = balanceTree(sortedArr);
// console.log(balancedTree)

const connect = (root) => {
    if (root) {
        let level = [root];
        while (level.length) {
            const nextLevel = [];
            level.forEach((node, idx) => {
                if (node.left) nextLevel.push(node.left);
                if (node.right) nextLevel.push(node.right);
                node.next = level[idx + 1] || null;
            });
            level = nextLevel;
        }
    }
}

connect(balancedTree);
console.log(balancedTree.left);