// Adjacency Matrix
/*
       A | B | C
   A | 0 | 0 | 1
   B | 0 | 0 | 1
   C | 1 | 1 | 0
*/

// Adjacency List
/*
    [
        [2],  index 0 = A
        [2],  index 1 = B
        [0,1] index 2 = C aka. Hashmap
    ]
*/

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
        }
    }
    removeVertex(vertex) {
        for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
            const connectedVertex = this.adjacencyList[vertex][i];
            this.adjacencyList[connectedVertex] = this.adjacencyList[connectedVertex].filter(v => v !== vertex);
        }
        delete this.adjacencyList[vertex];
    }
    depthFirstRecursive(vertex) {
        if (!this.adjacencyList[vertex]) return undefined;
        const visitedVertexes = {};
        const result = [];
        visitedVertexes[vertex] = true;
        result.push(vertex);

        const helper = (vertex) => {
            this.adjacencyList[vertex].forEach(v => {
                if (!visitedVertexes[v]) {
                    visitedVertexes[v] = true;
                    result.push(v);
                    helper(v);
                }
            });
        };

        helper(vertex);
        return result;
    }
    depthFirstIterative(vertex) {
        let stack = [];
        const visitedVertexes = {};
        const result = [];

        stack.push(vertex);
        while (stack.length) {
            vertex = stack.pop();
            if (!visitedVertexes[vertex]) {
                visitedVertexes[vertex] = true;
                result.push(vertex);
                for (let i = this.adjacencyList[vertex].length - 1; i >= 0; i--) {
                    const element = this.adjacencyList[vertex][i];
                    stack.push(element);
                }
            }
        }
        return result;
    }
    breadthFirst(vertex) {
        const queue = [];
        const visitedVertexes = {};
        const result = [];

        queue.push(vertex);

        while (queue.length) {
            vertex = queue.shift();
            if (!visitedVertexes[vertex]) {
                visitedVertexes[vertex] = true;
                result.push(vertex);
                this.adjacencyList[vertex].forEach(v => {
                    if (!visitedVertexes[v]) queue.push(v);
                });
            }
        }

        return result;
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

// DFS Recursive:

console.log(graph.depthFirstRecursive("A"));
console.log(graph.depthFirstIterative("A"));
console.log(graph.breadthFirst("A"));

