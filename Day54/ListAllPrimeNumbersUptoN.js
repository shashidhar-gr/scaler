/**
 * Program to find the primes under n using sieve of eratosthenes.
 * @param {number} n 
 * @returns array[number]
 * TC: O(N*log(log(n)))
 * SC: O(N)
 */
const sieve = function(n) {
    let res = new Array(n + 1).fill(true);
    res[0] = false, res[1] = false;
    for(let i = 2; (i * i) <= n; i++) {
        if(res[i] == true) {
            for(let j = i*i; j <= n; j = j + i) {
                res[j] = false;
            }     
        }
    }
    res = res.map((value, index, array) => [index, value]);
    res = res.filter((element, index, array) => element[1] == true);
    return res.map((element, index, array) => element[0]);
}

const n = 100;
const res = sieve(n);
console.log(res);