class Stack {
    constructor(capacity) {
        this.elements = new Array(capacity).fill(0);
        this.top = -1;
    }

    push(data) {
        if(this.top + 1 >= this.elements.length)
            return Error("Stack Owerflow.")
        this.top++;
        this.elements[this.top] = data;
    }

    pop() {
        if(this.top == -1)
            return Error("Stack Underflow.")
        let data = this.elements[this.top];
        this.top--;
        return data;
    }

    top() {
        return this.elements[this.top];
    }

    size() {
        return this.top > -1 ? this.top + 1 : 0;
    }

    isFull() {
        return this.top == this.elements.length - 1;
    }

    isEmpty() {
        return this.top == -1;
    }
}
module.exports = Stack;
