const solve = function(A) {
    let stack = [A[0]];
    let smallr = [-1];
    for(let i = 1; i < A.length; i++) {
        if(stack[stack.length - 1] < A[i]) {
            smallr.push(stack[stack.length - 1])
        }
        else {
            while(stack[stack.length - 1] >= A[i]) {
                stack.pop();
            }
            if(stack.length)
                smallr.push(stack[stack.length - 1])
            else
                smallr.push(-1)
        }
        stack.push(A[i])
    }
    return smallr;
}

const A = [4, 5, 2, 10, 8];
const res = solve(A);
console.log(res);