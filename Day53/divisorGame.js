const solve = function(A, B, C) {
    let lcm = Math.floor((B * C) / gcd(B, C));
    return Math.floor(A / lcm);
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

const A = 100, B = 2, C = 4;
const res = solve(A, B, C);
console.log(res);