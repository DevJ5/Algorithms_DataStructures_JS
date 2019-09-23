class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        let index = this.values.length - 1;
        let nodeValue = val;

        while (nodeValue > this.values[getParentIndex(index)]) {
            swap(index, getParentIndex(index));
            nodeValue = this.values[getParentIndex(nodeValue)];
        }
    }

    getParentIndex(index) {
        const parent = (index - 1) / 2;
        return parent;
    }

    swap(index, parentIndex) {
        let temp = this.values[index];
        this.values[index] = this.values[parentIndex];
        this.values[parentIndex] = temp;
    }
}