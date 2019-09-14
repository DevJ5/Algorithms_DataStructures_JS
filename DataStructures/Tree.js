// Lists are lineair, you can only take 1 path, forwards or backwards
// Trees are non-lineair, you cant take more paths
// Binary search trees (BST) have 0,1 or 2 children at most.
// BST have sorted data 
// Every node to the left of the parent is smaller than the parent
// Every node to the right of the parent is greater than the parent

class Node {
    constructor(val) {
        this.val = val;
        this.count = 1;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let currentNode = this.root;
            let inserted = false;

            while (!inserted) {
                if (newNode.val === currentNode.val) {
                    currentNode.count++;
                    inserted = true;
                }
                if (newNode.val < currentNode.val) {
                    if (currentNode.left === null) {
                        currentNode.left = newNode;
                        inserted = true;
                    }
                    else currentNode = currentNode.left;
                }
                if (newNode.val > currentNode.val) {
                    if (currentNode.right === null) {
                        currentNode.right = newNode;
                        inserted = true;
                    }
                    else currentNode = currentNode.right;
                }
            }

            return this;
        }
    }

    search(val) {
        if (this.root === null) return false;
        let currentNode = this.root;
        while (true) {
            if (val === currentNode.val) return true;
            if (val < currentNode.val) {
                if (currentNode.left === null) return false;
                else currentNode = currentNode.left;
            }
            if (val > currentNode.val) {
                if (currentNode.right === null) return false;
                else currentNode = currentNode.right;
            }
        }
    }
}

let BinarySearchTree = new BinarySearchTree();

//        10
//    5       13
//  3   6   11   15

