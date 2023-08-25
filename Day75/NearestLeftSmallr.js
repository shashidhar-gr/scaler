const solve = function(A) {
    let stack = [A[0]];
    let nearestleftsmallr = [-1];

    for(let i = 1; i < A.length; i++) {
        if(stack[stack.length-1] < A[i]) {
            nearestleftsmallr.push(stack[stack.length-1])
        }
        else {
            while(stack[stack.length-1] >= A[i]) {
                stack.pop()
            }
            if(stack.length)
                nearestleftsmallr.push(stack[stack.length-1])
            else    
                nearestleftsmallr.push(-1);
        }
        stack.push(A[i])
    }

    return nearestleftsmallr;
}

const A = [4, 5, 2, 10, 3, 2];
const res = solve(A);
console.log(res)