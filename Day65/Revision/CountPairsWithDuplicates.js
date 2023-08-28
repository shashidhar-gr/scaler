const solve = function(A, target) {
    let count = 0, mod = 1000000007;
    let L = 0, R = A.length - 1;
    while(L < R) {
        let sum = A[L] + A[R];
        if(sum == target && A[L] != A[R]) {
            let lCount = 0, rCount = 0, lTemp = A[L], rTemp = A[R];
            while(A[L] == lTemp) {
                lCount++;
                L++;
            }
            while(A[R] == rTemp) {
                rCount++;
                R--;
            }
            count = (count % mod) + ((lCount % mod) * (rCount % mod));
        }
        else if(sum == target && A[L] == A[R]) {
            let ans = (R - L + 1) % mod;
            ans = Math.floor((ans * (ans - 1)) / 2)
            count = Math.floor((count % mod) + (ans % mod) % mod)
            break;
        }
        else if(sum > target) {
            R--;
        }
        else 
            L++;
    }
    return count;
}

const A = [1, 2, 4, 7, 7, 9, 10, 10, 10, 13, 13, 13, 15, 18, 25], target = 20;
const res = solve(A, target);
console.log(res);