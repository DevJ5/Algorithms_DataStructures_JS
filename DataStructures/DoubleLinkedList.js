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
}

let doubly = new DoublyLinkedList();
console.log(doubly.push(13));
console.log(doubly.pop());
console.log(doubly);