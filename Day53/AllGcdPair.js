const solve = function(A) {
    A = A.sort((a, b) => a < b ? -1: 1);
    let n = Math.sqrt(A.length);
    let set = new Set();
    let i = A.length - 1;
    while(set.size < n) {
        if(!set.has(A[i]))
            set.add(A[i]);
        i--;
    }
    return set;
}

const A = [2, 2, 2, 2, 8, 2, 2, 2, 10];
const res = solve(A);
console.log(res);