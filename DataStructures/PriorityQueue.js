class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(node) {
        this.values.push(node);
        let indexOfNewNode = this.values.length - 1;

        let swapped = true;
        let parentIndex;

        while (swapped) {
            if (indexOfNewNode === 0) break;
            swapped = false;
            parentIndex = this.getParentIndex(indexOfNewNode);
            // Min binary heap:
            if (node.priority < this.values[parentIndex].priority) {
                this.swap(parentIndex, indexOfNewNode);
                indexOfNewNode = parentIndex;
                swapped = true;
            }
        }
    }

    dequeue() {
        let minPriorityNode = this.values[0];
        let lastNode = this.values.pop();
        if (this.values.length) {
            this.values[0] = lastNode;
            this.trickleDown();
        }

        return minPriorityNode;
    }

    getParentIndex(idx) {
        return Math.floor((idx - 1) / 2);
    }

    swap(idx1, idx2) {
        let temp = this.values[idx1];
        this.values[idx1] = this.values[idx2];
        this.values[idx2] = temp;
    }

    trickleDown() {
        let idx = 0;
        let priority = this.values[idx].priority;
        let leftChildIndex = 2 * idx + 1;
        let rightChildIndex = 2 * idx + 2;

        while (true) {
            let indexToSwap = null;

            if (leftChildIndex < this.values.length) {
                if (priority > this.values[leftChildIndex].priority) {
                    indexToSwap = leftChildIndex;
                }
            }

            if (rightChildIndex < this.values.length) {
                if (priority > this.values[rightChildIndex].priority &&
                    this.values[rightChildIndex].priority < this.values[leftChildIndex].priority) {
                    indexToSwap = rightChildIndex;
                }
            }

            if (indexToSwap === null) break;
            this.swap(idx, indexToSwap);
            idx = indexToSwap;
        }
    }
}

let pQ = new PriorityQueue();
pQ.enqueue(new Node("milk", 5));
pQ.enqueue(new Node("butter", 3));
pQ.enqueue(new Node("cheese", 2));
pQ.dequeue();
console.log(pQ.values);