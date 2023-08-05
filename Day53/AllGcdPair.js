const solve = function(A) {
    A = A.sort((a, b) => a < b ? 1: -1);
    let res = [A[0]];
    let hashmap = new Map();
    
    for(let i = 1; i < A.length; i++) {
        if(!hashmap.has(A[i]) || hashmap.get(A[i]) == 0) {
            let j = 0;
            while(j < res.length) {
                let gcdofnum = gcd(res[j], A[i]);
                hashmap.set(gcdofnum, hashmap.get(gcdofnum) == undefined ? 2 : hashmap.get(gcdofnum) + 2);
                j++;
            }
            res.push(A[i]);
        }
        else {
            hashmap.set(A[i], hashmap.get(A[i]) - 1);
        }
    }

    return res;
}

const gcd = function(a, b) {
    if(!a || !b)
        return a || b;
    if(a > b)
        return gcd(a % b, b);
    return gcd(b % a, a);
}

const A = [5, 5, 5, 15];
const res = solve(A);
console.log(res);