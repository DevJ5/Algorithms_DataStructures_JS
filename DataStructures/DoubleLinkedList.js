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
}

let doubly = new DoublyLinkedList();
console.log(doubly.push(13));
console.log(doubly.push(26));
console.log(doubly.get(1));
console.log(doubly.set(1, 201));