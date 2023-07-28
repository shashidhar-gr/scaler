/**
 * Binary Exponentiation.
 * @param {int} a 
 * @param {int} n 
 * @returns int
 */
const powerofn = function(a, n, mod) {
    if(n == 0)
        return 1;
    if(n == 1)
        return a;
    let tmp = powerofn(a, Math.floor(n / 2), mod);
    let res = ((tmp % mod) * (tmp % mod)) % mod;
    if(n % 2 != 0)
        res = ((res % mod) * (a % mod)) % mod;
    return res;
}

const a = 2, n = 3;
const res = powerofn(a, n, 1000000007);
console.log(res);

/*
const powerofn = function(a, n) {
    let res = 0n;
    let mod = BigInt(B);
    let n = A.length;
    let cur = 1n;
    for(let i = n - 1; i >=0; i--) {
        let dig = BigInt(A[i]);
        let term = (dig * cur) % mod;
        res = (res + term) % mod;
        cur = (cur * 10n) % mod;
    }

    return Number(ans);
} */