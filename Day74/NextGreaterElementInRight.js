const solve = function(A) {
    let stack = [A[A.length - 1]];
    let res = [null];
    for(let i = A.length - 2; i >= 0; i--) {
        if(stack[stack.length - 1] > A[i]) {
            res.unshift(stack[stack.length - 1])
        }
        else {
            while(stack[stack.length - 1] < A[i]) {
                stack.pop()
            }
            if(stack.length)
                res.unshift(stack[stack.length - 1])
            else    
                res.unshift(null)
        }
        stack.push(A[i])
    }

    return res;
}

const A = [1, 5, 8, 3, 7, 11];
const res = solve(A);
console.log(res);