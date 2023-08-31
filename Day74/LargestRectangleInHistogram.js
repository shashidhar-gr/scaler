const solve = function(heights) {
    let maxHistogram = Number.NEGATIVE_INFINITY;
    let leftmins = minIndexInLeft(heights);
    leftmins = leftmins.map(val => val + 1);
    let rightmins = minIndexInRight(heights);
    rightmins = rightmins.map(val => val - 1);
    for(let i = 0; i < heights.length; i++) {
        let ans = (Math.abs(i - leftmins[i]) + Math.abs(i - rightmins[i]) + 1 ) * heights[i];
        maxHistogram = Math.max(maxHistogram, ans)
    }

    return maxHistogram;
}

const minIndexInLeft = function(A) {
    let res = [-1];
    let stack = [{index: 0, val: A[0]}];
    for(let i = 1; i < A.length; i++) {
        if(stack[stack.length - 1].val < A[i])
            res.push(stack[stack.length -1].index)
        else {
            while(stack.length && stack[stack.length - 1].val > A[i]) {
                stack.pop()
            }
            if(stack.length)
                res.push(stack[stack.length - 1].index)
            else
                res.push(-1)
        }
        stack.push({index: i, val: A[i]})
    }
    return res;
}

const minIndexInRight = function(A) {
    let res = [A.length];
    let stack = [{index: A.length - 1, val: A[A.length - 1]}];
    for(let i = A.length - 2; i >= 0; i--) {
        if(stack[stack.length - 1].val < A[i])
            res.unshift(stack[stack.length -1].index)
        else {
            while(stack.length && stack[stack.length - 1].val > A[i]) {
                stack.pop()
            }
            if(stack.length)
                res.unshift(stack[stack.length - 1].index)
            else
                res.unshift(A.length)
        }
        stack.push({index: i, val: A[i]})
    }
    return res;
}

const A = [2, 1, 3, 4, 2, 3];
const res = solve(A);
console.log(res);
//[1, 5, 8, 3, 7, 11]
//[0, 1, 2, 1, 4, 5]
//[5, 2, 2, 5, 5, 5]