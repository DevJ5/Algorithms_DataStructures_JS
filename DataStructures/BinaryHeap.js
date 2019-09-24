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

    swap(index, parentIndex) {
        let temp = this.values[index];
        this.values[index] = this.values[parentIndex];
        this.values[parentIndex] = temp;
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