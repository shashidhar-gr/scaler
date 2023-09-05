function solve(A) {
    const res = [];
    const queue = A ? [A] : [];
    
    while(queue.length) {
        let node = queue.shift();
        
        if(node) {
            res.push(node.data)
            queue.push(node.left || null)
            queue.push(node.righ || null)
        }
        else {
            res.push(-1)
        }
    }
    return res;
}