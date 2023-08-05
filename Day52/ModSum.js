const solve = function(A) {
    A = A.sort((a, b) => a < b ? -1 : 1);
    let max = A[A.length-1];
    let freq = new Array(max + 1).fill(0);

    for(let i = 0; i < A.length; i++) {
        freq[A[i]] += 1;
    }

    let sum = 0, MOD = 1000000007;
    for(let i = 1; i < freq.length; i++) {
        for(let j = 1; j < freq.length; j++) {
            sum += (freq[i] * freq[j]) * (i % j);
            sum = sum % MOD;
        }
    }

    return sum;
}

const A = [17, 100, 11];
const res = solve(A);
console.log(res);