const solve = function(A, k) {
    let res = [], queue = [], l = 0, r = 0;
    while(r < A.length) {
        //pop smaller values from queue
        while(queue.length && A[queue.slice(-1)] < A[r]) {
            queue.pop();
        }
        queue.push(r)

        // remove left val from window
        if(l > queue[0])
            queue.shift()

        // Updating result
        if(r + l >= k) {
            res.push(A[queue[0]])
            l++
        }
        r++;
    }
    return res;
}

const A = [1];
const res = solve(A, 1);
console.log(res);