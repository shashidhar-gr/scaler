const solve = function(A, B) {
    let count = 0, mod = 1000000007;
    let L = 0, R = A.length - 1;
    while(L < A.length && R >= 0) {
        let area = A[L] * A[R];
        if(area < B) {
            count = (count % mod + (R + 1) % mod) % mod;
            L++;
        }
        else
            R--;
    }
    return count % mod;
}

/* Bruteforce approach.
const solve = function(A) {
    let count = 0, mod = 1000000007;
    for(let L = 0; L < A.length; L++) {
        for(let R = 0; R < A.length; R++) {
            if((((A[L] % mod) * (A[R] % mod)) % mod) < B)
                count = (count + 1) % mod;
        }
    }

    return count % mod;
} */

const A = [1, 2, 4, 5], B = 5;
const res = solve(A, B);
console.log(res);