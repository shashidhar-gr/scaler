const solve = function(A, B) {
    const factorialn = fact(B);
    return fastPower(A, factorialn, 1000000007);
}

//90111054, 995401375, 957541762
const fastpow = function(A, B, MOD) {
    if(B == 0)
        return 1;
    
    let res = fastpow(A, Math.floor(B / 2), MOD) % MOD;
    
    if(B % 2 == 0)
        return (res * res) % MOD;
    else
        return (((res * A) % MOD) * res) % MOD;
}

//328117556, 618601805
const fastPower = function(A, B) {
    let ans = 1, mod = 1000000007;
    while(B > 0) {
        if(B & 1)
            ans = (ans * A) % mod;
        A = ((A % mod) * (A % mod)) % mod;
        B = B >> 1;
    }

    return ans % mod;
}

const fact = function(n) {
    let i = 2, res = 1, mod = 1000000007;
    while(i <= n) {
        res = (res * i) % (mod - 1);
        i++;
    }   
    return res;
}

const A = 2, B = 27;
const res = solve(A, B);
console.log(res);