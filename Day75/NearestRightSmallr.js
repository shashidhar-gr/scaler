const solve = function(A) {
    let stack = [A[A.length-1]];
    let nearestrightsmallr = [-1];

    for(let i = A.length-2; i >= 0; i--) {
        if(stack[stack.length-1] < A[i]) {
            nearestrightsmallr.unshift(stack[stack.length-1])
        }
        else {
            while(stack[stack.length-1] >= A[i]) {
                stack.pop()
            }
            if(stack.length)
                nearestrightsmallr.unshift(stack[stack.length-1])
            else    
                nearestrightsmallr.unshift(-1)
        }
        stack.push(A[i])
    }

    return nearestrightsmallr;
}

const A = [4, 5, 2, 10, 3, 2];
const res = solve(A);
console.log(res)