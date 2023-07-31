/**
 * Find modulo inverse of a number using Fermats theorem.
 * @param {number} A 
 * @param {number} B 
 * @returns number
 */
const fermats = function(A, B) {
    let res = powerfunc(A, B-2, B);
    return res;
}

const powerfunc = function(a, b, mod) {
    let res = 1;
    while(b > 0) {
        if(b % 2 != 0) 
            res = multiply(res, a, mod);
        a = multiply(a, a, mod);
        b = Math.floor(b / 2);
    }
    return res;
}

const multiply = function(a, b, mod) {
    let res = a * b;
    if(res <= Number.MAX_SAFE_INTEGER && res >= Number.MIN_SAFE_INTEGER)
        return res % mod;
    return Number((BigInt(a) % BigInt(mod) * BigInt(b) % BigInt(mod)) % BigInt(mod));
}

const A = 1525, B = 999996223;
//const A = 2, B = 5;
const res = fermats(A, B);
console.log(res);