/**
 * Get max gcd by deleting an array element from the array.
 * @param {array} A 
 * @returns number
 * TC: O(Nlog(A[i]))
 */
const solve = function(A) {
    let pfgcd = prefixgcd(A);
    let sfxgcd = sufixgcd(A);
    let maxgcd = Math.max(pfgcd[A.length - 2], sfxgcd[1]);

    for(let i = 1; i < A.length - 1; i++) {
        let gcdofnums = gcd(pfgcd[i - 1], sfxgcd[i + 1]);
        maxgcd = Math.max(maxgcd, gcdofnums);
    }
    return maxgcd;
}

const prefixgcd = function(A) {
    let res = [A[0]];
    for(let i = 1; i < A.length; i++) {
        let gcdofnums = gcd(res[i-1], A[i]);
        res.push(gcdofnums);
    }
    return res;
}

const sufixgcd = function(A) {
    let res = new Array(A.length).fill(0);
    res[A.length-1] = A[A.length-1];
    for(let i = A.length - 2; i >= 0; i--) {
        let gcdofnums = gcd(res[i+1], A[i]);
        res[i] = gcdofnums; 
    }
    return res;
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

const A = [5, 15];
const res = solve(A);
console.log(res);
