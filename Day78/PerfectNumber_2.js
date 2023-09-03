const solve = function(A) {
    const queue = Queue();
    let counter = 0;
    queue.enqueue("1");
    queue.enqueue("2");
    
    while(counter < A) {
        let temp = queue.dequeue();
        counter++;
        if(counter == A)
            return temp + "1";
        queue.enqueue(temp + "1");
        
        temp += "2";
        counter++;

        if(counter == A)
            return temp;
        queue.enqueue(temp);
    }
}

const Queue = function() {
    this.elements = [];
    this.enqueue = function(data) {
        this.elements.push(data);
    }
    this.dequeue = function() {
        return this.elements.shift();
    }
    this.isEmpty = function() {
        return this.elements.length == 0;
    }
    this.size = function() {
        return this.elements.length;
    }
    return this;
}

const A = 1;
const res = solve(A);
console.log(res);