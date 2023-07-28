const gcdofarray = function(A) {
    let ans = A[0];
    for(let i = 1; i < A.length; i++) {
        ans = gcd(ans, A[i]);
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

let A = [6, 10, 15];
A.sort((a, b) => a < b ? -1: 1);
const res = gcdofarray(A);
console.log(res);