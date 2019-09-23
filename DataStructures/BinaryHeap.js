class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        let nodeValue = val;

        while (nodeValue > this.values[getParentIndex(nodeValue)]) {
            swap(this.values.length - 1, getParentIndex(nodeValue));
            nodeValue = this.values[getParentIndex(nodeValue)];
        }
    }

    getParentIndex(val) {
        const lastIndex = this.values.length - 1;
        const parent = (lastIndex - 1) / 2;
        return parent;
    }

    swap(index, parentIndex) {
        let temp = this.values[index];
        this.values[index] = this.values[parentIndex];
        this.values[parentIndex] = temp;
    }
}