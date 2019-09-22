// Breadth first search

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

    BFS() {
        let node;
        let data = [];
        let queue = [];
        queue.push(this.root);

        while (queue.length) {
            node = queue.shift();
            data.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }

        }
        return data;
    }

    DFSPreOrder() {
        let data = [];
        let node = this.root;

        function traverse(node) {
            data.push(node.val);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(node);

        return data;
    }

    DFSPostOrder() {
        let data = [];
        let node = this.root;

        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }

            if (node.right) {
                traverse(node.right);
            }

            data.push(node.val);
        }

        traverse(node);

        return data;
    }

    DFSInOrder() {
        let data = [];
        let node = this.root;

        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }

            data.push(node.val);

            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(node);

        return data;
    }
}

let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(9);
binarySearchTree.insert(5);
binarySearchTree.insert(3);
binarySearchTree.insert(4);
binarySearchTree.insert(6);
binarySearchTree.insert(2);

console.log(binarySearchTree.DFSPreOrder());
console.log(binarySearchTree.DFSPostOrder());
console.log(binarySearchTree.DFSInOrder());

//          9
//      5       
//   3     6
// 2   4    