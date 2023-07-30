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
    return res;
}

const solve = function(n) {
    const primes = sieve(n);
    let i = 2;
    while(i < primes.length) {
        let firstnum = primes[i];
        let secondnum = primes[n - i];
        if(firstnum && secondnum)
            return [i, n-i];
        else
            i++;
    }
}

const n = 212;
const res = solve(n);
console.log(res);