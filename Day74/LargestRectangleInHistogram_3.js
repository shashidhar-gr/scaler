const solve = function(A) {
    const leftmins = getLeftMins(A);
    const rightMins = getRightMins(A);
    let ans = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < A.length; i++) {
        let area = A[i] * (rightMins[i] - leftmins[i] + 1)
        ans = Math.max(ans, area)
    }
    return ans;
}

const getLeftMins = function(A) {
    let list = [0];
    let stack = [0];
    for(let i = 1; i < A.length; i++) {
        while(stack.length && A[stack[stack.length-1]] >= A[i]) {
            stack.pop()
        }
        if(stack.length)
            list.push(stack[stack.length - 1] + 1)
        else
            list.push(0)
        stack.push(i)
    }
    return list;
}

const getRightMins = function(A) {
    let list = [A.length - 1];
    let stack = [A.length - 1];
    for(let i = A.length - 2; i >= 0; i--) {
        while(stack.length && A[stack[stack.length-1]] >= A[i]) {
            stack.pop()
        }
        if(stack.length)
            list.unshift(stack[stack.length-1] - 1)
        else
            list.unshift(A.length - 1)
        stack.push(i)
    }
    return list;
}

const A = [2];
const res = solve(A);
console.log(res);