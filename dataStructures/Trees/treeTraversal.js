function node(value) {
    return {
        value, 
        children: []
    }
}

var a = node('a');
var b = node('b');
var c = node('c');
var d = node('d');
var e = node('e');
var f = node('f');
var g = node('g');
var h = node('h');
var i = node('i');
var j = node('j');
var k = node('k');
var l = node('l');
var m = node('m');

a.children.push(b,c,d);
b.children.push(e);
e.children.push(k,l);
c.children.push(f,g,h);
h.children.push(m);
d.children.push(i,j);

// Breadth First 
const breadthFirst = (startNode, cb) => {
    //use a queue to iterate over tree!
    // add the children as you go
    // start with first node
    const queue = [startNode];
    // you may want to consider handing edge cases
    // such as not receiving a properly formatted node
    // or make a proper Node constructor/prototype
    while (queue.length) {
        // shift off the array instead of iterating with a counter
        // as we are treating it as a queue (FIFO)
        const node = queue.shift();
        cb(node.value);
        queue.push(...node.children);
        // queue = queue.concat(node.children) or 
        // queue.push.apply(queue, node.children)
    }
}

// Depth First
    // Pre Order
    // O(n) time | O(n) space
const depthFirstPreOrder = (startNode, cb) => {
    cb(startNode.value);
    startNode.children.forEach(child => {
        depthFirstPreOrder(child, cb);
    });
}

    // Post Order
    // O(n) time | O(n) space
const depthFirstPostOrder = (startNode, cb) => {
    startNode.children.forEach(child => {
        depthFirstPostOrder(child, cb);
    });
    cb(startNode.value)
}

// console.log('breadthFirst', breadthFirst(a, function(a) {
//     console.log(a)
// }))
// console.log('depth First preOrder', depthFirstPreOrder(a, function(a) {
//     console.log(a)
// }))
// console.log('depth First postOrder', depthFirstPostOrder(a, function(a) {
//     console.log(a)
// }))