const gcd = require("./gcd");

let maxGcd = function(A) {
    let prefixgcd = [A[0]];
    for(let i = 1; i < A.length; i++) {
        prefixgcd.push(gcd(prefixgcd[i - 1], A[i]));
    }

    let suffixgcd = new Array(A.length).fill(0);
    suffixgcd[suffixgcd.length - 1] = A[A.length -1];
    for(let i = A.length - 2; i >= 0; i--) {
        suffixgcd[i] = gcd(A[i], suffixgcd[i + 1]);
    }

    let  maxGcd = 0;

    for(let i = 0; i < A.length; i++) {
        let thisgcd = gcd(prefixgcd[i - 1], suffixgcd[i + 1]);
        if( thisgcd > maxGcd)
            maxGcd = thisgcd;
    }   

    return maxGcd;
}

const A = [12, 15, 24, 18, 30];
const res = maxGcd(A);
console.log(res)