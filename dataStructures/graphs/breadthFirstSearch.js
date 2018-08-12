class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    // O(V + E)  time where v is number of vertices and e is number of edges
    // O(V) depending on the number of vertices
    breadthFirstSearch(arr) {
        const queue = [this];
        while (queue.length) {
            const currentNode = queue.pop();
            arr.push(currentNode.name)
            for (const child of currentNode.children) {
                queue.push(child)
            }
        }
        return arr;
    }
}


const test = new Node("A");
test.addChild("B").addChild("C");
test.children[0].addChild("D");

test.breadthFirstSearch([]); //expects ["A", "B", "C", "D"]

console.log(test.breadthFirstSearch([]));