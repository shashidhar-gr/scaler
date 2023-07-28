const largePower = function(A, B) {
    let mod = 1000000007;
    let factorial = fact(B, mod);
    return powerfunc(A, factorial, mod);
}

const powerfunc = function(a, n, mod) {
    if(n == 0)
        return 1;
    let pow = powerfunc(a, Math.floor(n / 2), mod);
    let res = ((pow % mod) * (pow % mod)) % mod;
    if(n % 2 != 0)
        res = ((res % mod) * (a % mod)) % mod;
    return res;
}

const fact = function(n, mod) {
    if(n == 1)
        return 1;
    
    return ((n % mod) * (fact(n- 1, mod) % mod)) % mod;
}

const A = 2, B = 2;
const res = largePower(A, B);
console.log(res);