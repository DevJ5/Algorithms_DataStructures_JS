// Queue is FIFO
// In a simple array, pushing is O(1), but removing with shift means reindex the whole array, so O(N)
let queue = [];

queue.push(101);
queue.push(102);
queue.shift();

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let lastNode = this.last;
            this.last = newNode;
            lastNode.next = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (this.size === 0) return false;
        let firstNode = this.first;
        if (this.size === 1) {
            this.last = null;
        }
        this.first = firstNode.next;
        firstNode.next = null;
        this.size--;
        return firstNode;
    }
}