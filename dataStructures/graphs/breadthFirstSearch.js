class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(name);
        return this;
    }

    breadthFirstSearch(arr) {
        const queue = [this];
    }
}


const test = new Node("A");
test.addChild("B").addChild("C");
test.children[0].addChild("D");