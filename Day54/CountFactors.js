/**
 * Get the count and list of facotrs if given number.
 * TC: O(Sqrt(N))
 * SC: O(1) 
 * @param {number} n 
 * @returns object
 */
const factorsofn = function(n) {
    let count = 0, factors = [];
    for(let i = 1; (i * i) <= n; i++) {
        if(n % i == 0) {
            if(i * i == n) {
                count += 1;
                factors.push(i);
            }
            else {
                count += 2;
                factors.push(i, Math.floor(n/i));
            }
        }
    }
    return {count, factors};
}

const n = 10000;
const res = factorsofn(n);
console.log(res.count);
console.log(res.factors.sort((a, b) => a < b ? -1: 1));