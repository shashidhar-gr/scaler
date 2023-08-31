const solve = function(exp) {
    let res = [];
    let optr = [];
    for(const c of exp) {
        if(c == '(' || c == ')' || c == '^' || c == '*' || c == '/' || c == '+' || c == '-') {
            if(c == ')') {
                let redundant = true;
                while(optr[optr.length - 1] != '(') {
                    const operator = optr.pop();
                    res.push(operator);
                    redundant = false;
                }
                if(redundant)
                    return 1
                optr.pop();
            }
            else {
                if(c == '(') {
                    optr.push(c)
                }
                else {
                    while(optr.length && getPriority(optr[optr.length - 1]) >= getPriority(c)) {
                        res.push(optr.pop());
                    }
                    optr.push(c)
                }
            }
        }
        else {
            res.push(c);
        }
    }
    while(optr.length)
        res.push(optr.pop())
    return 0;
}

const getPriority = function(oprnd) {
    const obj = {
        '^': 3,
        '*': 2,
        '/': 2,
        '+': 1,
        '-': 1,
        '(': 0
    }
    return obj[oprnd];
}

const exp = "(a+(a+b))";
const res = solve(exp);
console.log(res);