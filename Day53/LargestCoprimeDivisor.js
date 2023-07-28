const solve = function(A, B) {
    if(gcd(A, B) == 1)
        return A;

    let ans = 1;
    let factors = [];

    for(let i = 1; (i * i) <= A; i++) {
        if(Math.floor(A % i) == 0)
        factors.push(i, Math.floor(A / i));
    }

    factors.sort((a, b) => a < b ? -1: 1);

    for(let i = factors.length - 1; i >= 0; i--) {
        if(A % factors[i] == 0 && gcd(factors[i], B) == 1)
            return factors[i];
    }

    return ans;
}

const gcd = function(a, b) {
    if(a == 0)
        return b;
    if(b == 0)
        return a;
    if(a < b)
        return gcd(Math.floor(b % a), a);

    return gcd(Math.floor(a % b), b);
}

const A = 22, B = 38;
const res = solve(A, B);
console.log(res);