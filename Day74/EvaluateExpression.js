const solve = function(A) {
    let stack = [];
    for(const ele of A) {
        if(ele == "+" || ele == "-" || ele == "*" || ele == "/") {
            const op1 = stack.pop();
            const op2 = stack.pop();
            let res;
            if(ele == "+")
                res = op2 + op1;
            if(ele == "-")
                res = op2 - op1;
            if(ele == "*")
                res = op2 * op1;
            if(ele == "/")
                res = Math.floor(op2 / op1);
            stack.push(res);
        }
        else {
            stack.push(Number(ele))
        }
    }
    return stack[0];
}

const A = ["4", "13", "5", "/", "+"];
const res = solve(A);
console.log(res);