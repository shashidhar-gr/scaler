function solve() {
    this.stack = [];
    this.minStack = [];
    return this;
};
solve.prototype.push = function (e) {
    this.stack.push(e);
    let min = Math.min(e, this.minStack[this.minStack.length - 1]);
    this.minStack.push(min);
};
solve.prototype.pop = function () {
    this.myStack.pop();
    return this.stack.pop();
};
solve.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};
solve.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1];
};

const stack = solve();
//stack.push(10);
console.log(stack)