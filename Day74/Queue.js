class Queue {
    #elements;
    #head;
    #tail;
    constructor(capacity) {
        this.#elements = new Array(capacity).fill(0)
        this.#head = 0;
        this.#tail = 0;
    }

    enqueue(data) {
        if(this.isFull())
            return Error("Queue overflow.")
        this.#elements[this.#tail] = data;
        this.#tail++;
        this.#tail = this.#tail % this.#elements.length;
    }

    dequeue() {
        if(this.#head == this.#tail)
            return Error("Queue underflow")
        let data = this.#elements[this.#head];
        this.#head++;
        this.#head = this.#head % this.#elements.length;
        return data;
    }

    isFull() {
        if(this.#head == this.#tail + 1 || (this.#head == 0 && this.#tail == this.#elements.length - 1))
            return true;
        return false;
    }

    isEmpty() {
        return this.#head == this.#tail
    }

    size() {
        if(this.#head == this.#tail)
            return 0;
        return this.#tail - this.#head + 1;
    }
}

const queue = new Queue(5);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.enqueue(6))
console.log(queue.isFull())
console.log(queue.dequeue())
console.log(queue.enqueue(6))
console.log(queue.size())