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
        [2],  A
        [2],  B
        [0,1] C
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
}