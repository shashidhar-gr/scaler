let sum = 0;
const sumofdiff = function(A) {
    A = A.sort((a, b) => a < b ? -1 : 1);
    let sumOfMax = 0, sumOfMin = 0, mod = 1000000007;
    for(let i = 0; i < A.length; i++) {
        sumOfMax += ((A[i] % mod) * (Math.pow(2, i) % mod)) % mod;
        sumOfMin += ((A[i] % mod) * (Math.pow(2, (A.length - i) - 1) % mod)) % mod;
    }
    let res = ((sumOfMax % mod) - (sumOfMin % mod)) % mod;
    return res < 0 ? res + mod : res;
}
const A = [3, 5, 10];
const res = sumofdiff(A);
console.log(res);