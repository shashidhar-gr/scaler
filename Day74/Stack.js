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

    size() {
        return this.top > -1 ? this.top + 1 : 0;
    }
}

const stack = new Stack(5);
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
console.log(stack.push(60));
console.log(stack.size());
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
