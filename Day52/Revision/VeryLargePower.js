const verylargepow = function(A, B)  {
    let mod = 1000000007;
    let factofn = fact(B, mod);
    let res = powerfunc(A, factofn, mod);
    return res;
}

const multiply = function(a, b, mod) {
    let res = a * b;
    if(res <= Number.MAX_SAFE_INTEGER && res >= Number.MIN_SAFE_INTEGER)
        return res % mod;
    return Number((BigInt(a) % BigInt(mod) * BigInt(b) % BigInt(mod)) % BigInt(mod));
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

const fact = function(n , m) {
    if(n == 1)
        return BigInt(1);
    return Number(BigInt(n) % BigInt(m) * BigInt(fact(n-1, m)) % BigInt(m)) % BigInt(m);
}

const A = 2, B = 2;
const res = verylargepow(A, B);
console.log(res);