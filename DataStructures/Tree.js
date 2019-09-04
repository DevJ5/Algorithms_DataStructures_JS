// Lists are lineair, you can only take 1 path, forwards or backwards
// Trees are non-lineair, you cant take more paths
// Binary search trees (BST) have 0,1 or 2 children at most.
// BST have sorted data 
// Every node to the left of the parent is smaller than the parent
// Every node to the right of the parent is greater than the parent

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.numberOfNodes = 0;
    }

    insert(val) {
        let newNode = new Node(val);
        if (this.numberOfNodes === 0) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            let inserted = false;

            while (!inserted) {
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
        }
    }
}

let BinarySearchTree = new BinarySearchTree();

