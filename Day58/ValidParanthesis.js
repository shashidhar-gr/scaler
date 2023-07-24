const validParanthesis = function(n) {
    let list = [];
    function permutationparanthesis(str, open, close, A) {
        if (open === A && close === A) {
            list.push(str);
            return;
        }
        if (open > A || close > A) {
            return;
        }

        if (open < A) {
            permutationparanthesis(str + "(", open + 1, close, A);
        }
        if (close < open) {
            permutationparanthesis(str + ")", open, close + 1, A);
        }
    }

    permutationparanthesis("", 0, 0, n);
    return list;
}

const n =  1;
const res = validParanthesis(2 * n);
console.log(res);

/**
 * const validParanthesis = function(n) {
    const str = "";
    let count = 0, list = [];
    let permutationparanthesis = function(str, open, close) {
        if(open == n && close == n) {
            list.push(str);
            return;
        }
        if(open > n || close > n) {
            return;
        }
        if(open < n) {
            open += 1;
            str += "("
            permutationparanthesis(str, open, close);
        }
        if(close < open) {
            close += 1;
            str += ")";
            return permutationparanthesis(str, open, close);
        }
    }

    permutationparanthesis(str, 0, 0);
    return list;
}
 */


