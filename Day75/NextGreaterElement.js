const solve = function(A) {
    let stack = [A[A.length - 1]];
    let greatr = [-1];
    for(let i = A.length - 2; i >= 0; i--) {
        if(stack[stack.length - 1] > A[i]) {
            greatr.unshift(stack[stack.length - 1])
            stack.push(A[i])
        }
        else {
            while(stack[stack.length - 1] <= A[i]) {
                stack.pop();
            }
            if(stack.length)
                greatr.unshift(stack[stack.length - 1])
            else
                greatr.unshift(-1)
            stack.push(A[i])
        }
    }
    return greatr;
}

const A = [4, 5, 2, 10];
const res = solve(A);
console.log(res);