const gcd = function(a, b) {
    if(a == 0)
        return b;
    if(b == 0)
        return a;
    if(a < b)
        return gcd(Math.floor(b % a), a);

    return gcd(Math.floor(a % b), b);
}

const res = gcd(22, 38);
console.log(res);