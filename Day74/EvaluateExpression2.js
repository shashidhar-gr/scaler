const solve = function(exp) {
    exp = exp.split("");
    let opr = [];
    let val = [];
    for(const c of exp) {
        if(c == '(' || c == '+' || c == '-' || c == '*' || c == '/')
            opr.push(c)
        else {
            if(c == ')') {
                const oportr = opr.pop();
                const oprandb = val.pop();
                const opranda = val.pop();
                const res = evaluate(oportr, opranda, oprandb)
                val.push(res)
                opr.pop() 
            }
            else {
                val.push(Number(c))
            }
        }
    }
    return val.pop()
}

const evaluate = function(oportr, opranda, oprandb) {
    if(oportr == '+')
        return opranda + oprandb;
    if(oportr == '-')
        return opranda - oprandb;
    if(oportr == '*')
        return opranda * oprandb;
    if(oportr == '/')
        return Math.floor(opranda / oprandb);
}

const exp = "(100*(2+12)/14)";
const res = solve(exp);
console.log(res);