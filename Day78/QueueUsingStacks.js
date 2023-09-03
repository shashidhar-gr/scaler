const stack = require('./Stack.js');
class Queue {
    #inStack;
    #outStack;
    constructor(capacity) {
        this.#inStack = new stack(capacity)
        this.#outStack = new stack(capacity)
    }
    enqueue(data) {
        if(!this.#inStack.isFull())
            this.#inStack.push(data)
        else if(!this.#outStack.isFull()) {
            while(!this.#outStack.isFull()) {
                if(!this.#inStack.isEmpty())
                    this.#outStack.push(this.#inStack.pop())
                else    
                    break;
            }
            this.#inStack.push(data)
        }
        else 
            return Error("Queue overflow")
    }
    dequeue() {
        if(!this.#outStack.isEmpty())
            return this.#outStack.pop()
        else if(this.#inStack.isEmpty())
            return Error("Queue underflow")
        else {
            while(!this.#inStack.isEmpty()) {
                this.#outStack.push(this.#inStack.pop())
            }
            return this.#outStack.pop()
        }
    }
    peek() {
        if(this.#outStack.isEmpty()) {
            while(!this.#inStack.isEmpty()) {
                this.#outStack.push(this.#inStack.pop())
            }
        }
        return this.#outStack.top()
    }
    isFull() {
        return this.#inStack.isFull() && this.#outStack.isFull()
    }
    isEmpty() {
        return this.#inStack.isEmpty() && this.#outStack.isEmpty()
    }
}
