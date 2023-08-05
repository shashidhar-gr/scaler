const solve = function(A) {
    let n = 1000000;
    let primes = sieve(n);
    let primeset = new Set(primes);
    let max = -1;
    let res = [];
    for(let row = 0; row < A.length; row++) {
        for(let col = 0; col < A[0].length; col++) {
            if(row == col) {
                res.push(A[row][col]);
            }
            if(row + col == A[0].length - 1) {
                res.push(A[row][col]);
            }
        }
    }

    for(let i = 0; i < res.length; i++) {
        let val = res[i];
        if(primeset.has(val)) {
            max = Math.max(max, val);
        }
    }
    return max;
}

function sieve(n) {
    let res = new Array(n + 1).fill(true);
    res[0] = false, res[1] = false;
    for(let i = 2; i * i <= n; i++) {
        if(res[i] == true) {
            for(let j = i * i; j <= n; j = j + i) {
                res[j] = false;
            }
        }
    }
    
    res = res.map((value, index, array) => [index, value]);
    res = res.filter((element, index, array) => element[1] == true);
    res = res.map((element, index, array) => element[0]);
    return res;
}

const A = [[43, 24], 
            [33, 87]];
const res = solve(A);
console.log(res);
