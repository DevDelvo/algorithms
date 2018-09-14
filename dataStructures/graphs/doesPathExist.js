// Write a function that determines if a path exists between two vertices of a directed graph.

// The graph will be represented as an object, each of whose keys represents a vertex of the graph and whose value represents all vertices that can be reached from the aforementioned key.

// In the example below, there is a connection from vertex a to vertex b and a connection from vertex b to vertices c and d but not a connection from vertex b to vertex a.

// {
//   a: ['b'],
//   b: ['c', 'd'],
//   c: ['d']
// }
// ???

// Any presenter notes can go after the three question marks

// TIME = O(V + E) where V = number of vertices/nodes and E = number of edges.
// You have to visit every vertex which will take us through many edges
    // For acyclic graphs, we might visit every node and hit the leaves
    // For cyclic graphs, the cycle might not occur until a 'leaf'
    // For dense graphs, edges will dominate
    // For sparse graphs, vertices will dominate

// SPACE = O(v) where v is every place visited.

// DFS approach
const doesPathExist = (graph, start, target, visited = {}) => {
    if (!graph[start]) return false; //base case. if there is no vertext, return false;
    visited[start] = true;

    return graph[start].some((vertex) => {
        if (vertex === target) return true;
        if (!visited[vertex]) {
            return doesPathExist(graph, vertex, target, visited);
        } else {
            return false;
        }
    });
};

const graph = {
    a: ['a', 'c'],
    c: ['r', 's'],
    r: ['a'],
    s: []
  }

const test1 = doesPathExist(graph, 'a', 'a') // true
const test2 = doesPathExist(graph, 'c', 'c') // true
const test3 = doesPathExist(graph, 'r', 's') // true
const test4 = doesPathExist(graph, 's', 'a') // false

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);