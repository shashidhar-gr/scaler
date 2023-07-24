const validParanthesis = function(n) {
    const str = "";
    let list = [];
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
            str += "(";
            permutationparanthesis(str, open, close);
        }
        if(close < open) {
            close += 1;
            str += ")";
            permutationparanthesis(str, open, close);
        }
    }

    permutationparanthesis(str, 0, 0);
    return list;
}

const n =  1;
const res = validParanthesis(2 * n);
console.log(res);