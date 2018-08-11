// From https://medium.com/@ziyoshams/graphs-in-javascript-cc0ed170b156

class Graph {
    constructor() {
        this.AdjList = new Map();
    }

    addVertex (vertex) {
        if (!this.AdjList.has(vertex)) {
            this.AdjList.set(vertex, []);
        } else {
            throw 'Already Exists!';
        }
        return this;
    }

    addEdge (vertex, node) {
        const map = this.AdjList;
        if (map.has(vertex)) {
            if (map.has(node)) {
                let arr = map.get(vertex);
                if (!arr.includes(node)) {
                    arr.push(node);
                }
            } else {
                throw `Can't add non-existing vertex -> '${node}'`;
            }
        } else {
            throw `You should add '${vertex}' first`;
        }
        return this;
    }
    // Before we add an edge to a vertext, we must see if that vertex exists.
    // Afterwards, we make sure to see if the edge we are adding does not already exist.
    // If it passes both checks we can add the edge to a vertex.
    // Could use Set instead of array 

    // BREADTH FIRST SEARCH (BFS)

    // helper function
    createVisitedObject() {
        let arr = {};
        for (let key of this.AdjList.keys()) {
            arr[key] = false;
        }
        return arr;
    }

    // Ziyo used a helper function to make an object with all the vertices.
    //  But I think you can save a bit on space by just instatiating an object with the startNode and then adding the visited values as you move along
    breadthFirstSearch (startNode) {
        let visited = this.createVisitedObject();
        visited[startNode] = true;
        // let visited = {startNode: true};
        let queue = [startNode];

        while (queue.length) {
            let current = queue.pop();
            console.log(current);

            let edges = this.AdjList.get(current);

            for (let edge of edges) {
                if (!visited[edge]) {
                    visited[edge] = true;
                    queue.unshift(edge);
                }
            }
        }
        console.log(visited)
        return visited;
    }

    // DEPTH FIRST SEARCH (DFS)

    depthFirstSearch (startNode) {
        let visited = this.createVisitedObject();
        this.dfsHelper(startNode, visited);
    }

    dfsHelper(startNode, visited) {
        visited[startNode] = true;
        console.log(startNode);

        let edges = this.AdjList.get(startNode);

        for (let edge of edges) {
            if (!visited[edge]) {
                this.dfsHelper(edge, visited)
            }
        }
        return visited;
    }

    doesPathExist(nodeA, nodeB) {
        let path = [];
        let visited = this.createVisitedObject();
        visited[nodeA] = true;
        let queue = [nodeA];
        while (queue.length) {
            let vertex = queue.pop();
            path.push(vertex);
            let edges = this.AdjList.get(vertex);
            if (edges.includes(nodeB)) {
                console.log(path.join('->') + '->' + nodeB)
                return true;
            } else {
                for (let edge of edges) {
                    if (!visited[edge]) {
                        visited[edge] = true;
                        queue.unshift(edge);
                    }
                }
            }
        }
        return false;
    }

    // PRINTING vertices and edges
    print() {
        for (let [key, value] of this.AdjList) {
            console.log(key, value)
        }
    }
}

let g = new Graph();
let arr = ['A','B','C','D','E','F','G'];

for (let i = 0; i < arr.length; i++) {
    g.addVertex(arr[i]);
}

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// g.print();

// g.breadthFirstSearch('A')
// g.depthFirstSearch('A')
g.doesPathExist('A', 'F')