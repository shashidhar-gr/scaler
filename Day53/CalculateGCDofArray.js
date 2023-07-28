/**
 * TC: O(n*log(A[i]))
 * n, because we have to calculate gcd for each n element
 * log(A[i]), because gcd of each element will take O(log(A[i]))
 * Program to calulate the gcd of all array elements.
 * @param {array} A 
 * @returns number
 */

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

let A = [6, 12, 15, 9];
const res = gcdofarray(A);
console.log(res);

