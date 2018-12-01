class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        const node = new BST(value);
        let current = this;
        while (true) {
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

// O(n) space | O(n) time
const inOrderTraversal = (root, array = []) => {
    if (root !== null) {
        inOrderTraversal(root.left, array);
        array.push(root.value);
        inOrderTraversal(root.right, array);
    }
    return array;
}

// O(n) time | O(n) space
const balanceTree = (arr) => {
    if (!arr.length) return null;
    let mid = Math.floor(arr.length / 2);
    let root = new BST(arr[mid]);
    root.left = balanceTree(arr.slice(0,mid));
    root.right = balanceTree(arr.slice(mid + 1));
    return root;
}

const arr = [4, 3, 5, 2, 1, 6, 7];
const tree = new BST(arr[0]);
arr.forEach((num, idx) => {
    if (idx !== 0) tree.insert(num);
})
const orderedNodeValues = inOrderTraversal(tree);
const balancedTree = balanceTree(orderedNodeValues);
console.log(balancedTree);