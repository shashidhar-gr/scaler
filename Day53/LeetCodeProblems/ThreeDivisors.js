/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let factors = getfactors(n);
    if(factors.size == 3)
        return true;
        
    return false;
};

const getfactors = function(n) {
    let factors = new Set();
    for(let i = 1; i * i <= n; i++) {
        if(n % i == 0) {
            if(!factors.has(i))
                factors.add(i);
            if(!factors.has(Math.floor(n / i)))
                factors.add(Math.floor(n / i));
        }
    }

    return factors;
}

const n = 4;
const res = isThree(4);
console.log(res);