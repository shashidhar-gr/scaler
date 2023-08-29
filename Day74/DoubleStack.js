class DoubleEndedStack {
    #elements;
    #left;
    #right;
    #size;
    constructor(size) {
        this.#elements = new Array(size);
        this.#left = -1;
        this.#right = size;
        this.#size = size;
    }

    pushToLeft(data) {
        if(this.#left + 1 == this.#right)
            return Error("Stack Overflow")
        this.#left++;
        this.#elements[this.#left] = data;
    }

    pushToRight(data) {
        if(this.#right - 1 == this.#left)
            return Error("Stack Overflow")
        this.#right--;
        this.#elements[this.#right] = data;
    }

    popFromRight() {
        if(this.#right == this.size)
            return Error("Stack Underflow")
        let data = this.#elements[this.#right];
        this.#right++;
        return data;
    }

    popFromLeft() {
        if(this.#left == -1)
            return Error("Stack Underflow")
        let data = this.#elements[this.#left];
        this.#left--;
        return data;
    }

    leftSize() {
        this.#left == -1 ? 0: this.#left + 1;
    }

    rightSize() {
        this.#right == this.#size ? 0 : this.#size - this.#right;
    }
}

const ds = new DoubleEndedStack(10);
ds.pushToLeft(1);
ds.pushToLeft(2);
ds.pushToLeft(3);
ds.pushToLeft(4);
ds.pushToLeft(5);

ds.pushToRight(10);
ds.pushToRight(9);
ds.pushToRight(8);
ds.pushToRight(7);
ds.pushToRight(6);

console.log(ds.popFromLeft())
console.log(ds.pushToRight(10))