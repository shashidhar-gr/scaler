let MOD;

function mult(a, b) {
    let val = a * b;
    if (val <= Number.MAX_SAFE_INTEGER && val >= Number.MIN_SAFE_INTEGER)
        return val % MOD;
    return Number((BigInt(a) * BigInt(b)) % BigInt(MOD));
}

function pw(a, b, m) {
    let res = 1; // Initialize result
    while (b > 0) {
        // If b is odd, multiply a with result
        if (b % 2 == 1) res = mult(res, a);
        a = mult(a, a);
        b = Math.floor(b / 2);
    }
    return res;
}

const solve = function (A, B) {
    MOD = B;
    // Modular inverse of A Modulo B = pw(A, B - 2, B)
    return pw(A, B - 2, B);
}

const res = solve(1525, 999996223);
//const res = solve(2, 2);
console.log(res);
