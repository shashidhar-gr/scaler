const powerfunc = function(a, b) {
    if(b == 0)
        return 1;
    let res = powerfunc(a, Math.floor(b / 2));
    res = ((res % mod) * (res % mod)) % mod;
    if(b % 2 != 0)
    res = ((res % mod) * (a % mod)) % mod;
    return res;
}
var mod = 13;
const a = 11, b = 7;
const res = powerfunc(a, b);
console.log(res);