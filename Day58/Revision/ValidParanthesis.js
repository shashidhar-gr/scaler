const validparanthesis = function(n) {
    let count = 0;
    let str = "";
    const validarrangements = function(str, open, close, A) {
        if(open == A && close == A) {
            console.log(str);
            count++;
            return;
        }
        if(open > A || close > A) {
            return;
        }

        if(open < A) {
            validarrangements(str + "(", open + 1, close, A);
        }
        if(close < open) {
            validarrangements(str + ")", open, close + 1, A);
        }
    }

    validarrangements(str, 0, 0, n);
    return count;
}

const n = 2;
const res = validparanthesis(n);
console.log(res);

/**
if(open == n && close == n) {
            count++;
            return;
        }
        if(open > n || close > n)
            return;
        if(open < n) {
            validarrangements(open + 1, close, n);
        }
        else if(close < open) {
            validarrangements(open, close + 1, n);
        }
 */