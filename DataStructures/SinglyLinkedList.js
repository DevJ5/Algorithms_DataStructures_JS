// We go from the head to the tail, according to length. Last one points to null
// Each node has a value and a pointer to the next node
// Random access is not allowed, we have to traverse from the head up to the node.
// Insertion and delete is easy, which is the big advantage linked lists have over arrays. We dont have to reindex.
// We only have to move 2 pointers.

// Arrays have random access, so constant time access. Singly linked lists have linear time access. Singly linked lists win
// on insertion where its constant time, whereas an array has linear time insertion.


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

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index > this.length - 1) return null;

        let current = this.head;

        for (let counter = 0; counter < index; counter++) {
            current = current.next;
        }

        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;

        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        let prevNode = this.get(index - 1);
        let temp = prevNode.next;
        let newNode = new Node(val);

        prevNode.next = newNode;
        newNode.next = temp;

        this.length++;

        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length - 1) return false;

        if (index === this.length - 1) return !!this.pop();
        if (index === 0) return !!this.shift();

        let prevNode = this.get(index - 1);
        let temp = prevNode.next.next;
        prevNode.next = temp;
        this.length--;
        return true;
    }

    reverse() {


        let counter = 0;

        let previous = this.head; // 1
        let newCurrent = previous.next; // 3
        let current;

        while (counter < this.length - 1) {
            current = newCurrent; // 6
            newCurrent = current.next; // undefined

            current.next = previous;
            previous = current; // 3

            counter++;
        }

        let oldHead = this.head;
        this.head = previous;
        this.tail = oldHead;
        this.tail.next = null;

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
list.push("index 2")
list.push("index 3")
console.log(list.set(3, "hehe index 3"));
console.log(list.get(3));
list.reverse();
list.traverse();



