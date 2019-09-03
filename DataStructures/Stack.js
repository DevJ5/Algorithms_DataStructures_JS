// LIFO stack with just an array:
let stack = [];

stack.push("google.com");
stack.push("instagram.com");
stack.push("youtube.com");

stack.pop();

//
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// In a singly linked list to get constant time we need to insert at the beginning, in a doubly linked list it doesnt matter
// Here we are using a singly linked list to use with our stack
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // push method which is basically array.unshift
    push(val) {
        let newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let firstNode = this.first;
            this.first = newNode;
            newNode.next = firstNode;
        }
        return ++this.size;
    }

    // pop method which is basically array.shift
    pop() {
        if (this.size === 0) return false;

        let firstNode = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = firstNode.next;
        }
        firstNode.next = null;
        this.size--;
        return firstNode.val;
    }
}

let stack2 = new Stack();
console.log(stack2.push(101));
console.log(stack2.push(102));
console.log(stack2.pop());
console.log(stack2);
