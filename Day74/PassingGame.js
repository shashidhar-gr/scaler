const solve = function(A, B, C) {
    let stack = [B];
    for(const pass of C) {
        if(pass)
            stack.push(pass)
        else    
            stack.pop()
    }

    return stack[stack.length - 1];
}

const A = 10, B = 23, C = [86, 63, 60, 0, 47, 0, 99, 9, 0, 0];
const res = solve(A, B, C);
console.log(res);