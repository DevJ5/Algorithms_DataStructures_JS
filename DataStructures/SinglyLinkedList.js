// We go from the head to the tail, according to length. Last one points to null
// Each node has a value and a pointer to the next node
// Random access is not allowed, we have to traverse from the head up to the node.
// Insertion and delete is easy, which is the big advantage linked lists have over arrays. We dont have to reindex.
// We only have to move 2 pointers.


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let node1 = new Node("Hi");
node1.next = new Node("there");

console.log(node1.val + " " + node1.next.val);

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val) {
        let node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.length--;
        newTail.next = null;

        if (length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head;
        this.head = this.head.next;
        return oldHead;
    }

    traverse() {
        let current = this.head;
        let str = [];
        while (current) {
            str.push(current.val);
            current = current.next;
        }
        console.log(str.join(" "));
    }
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("goodbye");

list.traverse()

list.pop();


