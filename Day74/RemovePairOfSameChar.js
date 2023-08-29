const solve = function(A) {
    let stack = [];
    for (const char of A) {
        if(stack[stack.length - 1] != char)
            stack.push(char)
        else
            stack.pop()
    }
    return stack.join("")
}

const A = "dabbac";
const res = solve(A);
console.log(res);