class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let oldtail = this.tail;
            oldtail.next = newNode;
            newNode.prev = oldtail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;

        let oldTail = this.tail;
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null; // otherwise there is still a previous connection.
        }
        this.length--;

        return oldTail;
    }

    shift() {
        if (this.length === 0) return undefined;

        let oldHead = this.head;
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }

        this.length--;
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (this.length === 0) return undefined;
        if (index < 0 || index > this.length - 1) return undefined;
        let middle = Math.floor((this.length - 1) / 2);
        if (index > middle) {
            let counter = this.length - 1;
            let node = this.tail;
            while (counter != index) {
                node = node.prev;
                counter--;
            }
            return node;
        } else {
            let counter = 0;
            let node = this.head;
            while (counter != index) {
                node = node.next;
                counter++;
            }
            return node;
        }
    }

    set(index, val) {
        let node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length - 1) return undefined;

        if (index === 0) {
            return this.unshift(val);
        } else if (index === this.length) {
            return this.push(val);
        } else {
            let newNode = new Node(val);
            let currentNode = this.get(index);
            let previousNode = currentNode.prev;
            newNode.next = currentNode;
            currentNode.prev = newNode;
            newNode.prev = previousNode;
            previousNode.next = newNode;
            this.length++;
            return true;
        }
    }

    remove(index) {
        if (this.length < 0 || index > this.length - 1) return undefined;

        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let currentNode = this.get(index);
        let nextNode = currentNode.next;
        let previousNode = currentNode.prev;
        currentNode.next = null;
        currentNode.prev = null;
        console.log("here");
        console.log(nextNode);
        previousNode.next = nextNode;
        nextNode.prev = previousNode;
        this.length--;

        return currentNode;
    }
}

let doubly = new DoublyLinkedList();
doubly.push(13);
doubly.push(26);
doubly.insert(1, 201);
console.log(doubly.remove(1));