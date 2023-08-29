const solve = function(A) {
    let stack = [];
    for(const char of A) {
        if(char == '(' || char == '{' || char == '[')
            stack.push(char)
        else    
            if(stack.length) {
                if(char == ')' && stack[stack.length - 1] == '(')
                    stack.pop()
                else if(char == '}' && stack[stack.length - 1] == '{')
                    stack.pop()
                else if(char == ']' && stack[stack.length - 1] == '[')
                    stack.pop()
                else
                    return 0;
            }
            else
                return 0;
    }

    return stack.length ? 0: 1;
}

const A = "()[]";
const res = solve(A);
console.log(res);