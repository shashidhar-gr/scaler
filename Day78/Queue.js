class Queue {
    #elements;
    constructor() {
        this.#elements = [];
    }

    enqueue(data) {
        this.#elements.push(data);
    }

    dequeue() {
        return this.#elements.shift();
    }

    isEmpty() {
        return this.#elements.length == 0;
    }

    size() {
        return this.#elements.length;
    }
}

module.exports = Queue;