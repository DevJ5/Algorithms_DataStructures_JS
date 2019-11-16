class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        let index = this.values.length - 1;

        let swapped = true;
        let parentIndex;

        while (swapped) {
            swapped = false;
            parentIndex = this.getParentIndex(index);
            if (val > this.values[parentIndex]) {
                this.swap(index, parentIndex);
                index = parentIndex;
                swapped = true;
            }
        }
    }

    getParentIndex(index) {
        const parent = Math.floor((index - 1) / 2);
        return parent;
    }

    swap(index1, index2) {
        let temp = this.values[index1];
        this.values[index1] = this.values[index2];
        this.values[index2] = temp;
    }

    // Removing from the end, aka extractMax:
    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.length !== 0) {
            this.values[0] = end;
            // trickle down
            this.sinkDown();
        }

        return max;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            const leftChildIndex = 2 * idx + 1;
            const rightChildIndex = 2 * idx + 2;

            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.swap(idx, swap);
            idx = swap;
        }
    }
}

const mbh = new MaxBinaryHeap();
mbh.insert(41);
mbh.insert(39);
mbh.insert(33);
mbh.insert(18);
mbh.insert(27);
mbh.insert(12);
mbh.insert(55);
mbh.insert(1);
mbh.insert(45);
mbh.insert(199);

console.log(mbh.values);