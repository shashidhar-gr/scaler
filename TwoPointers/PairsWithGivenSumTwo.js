const solve = function(A, target) {
    let L = 0, R = A.length - 1, count = 0, mod = 1000000007;
    while(L < R) {
        let sum = A[L] + A[R];
        if(sum < target) {
            L++;
        }
        else if(sum > target) {
            R--;
        }
        else {
            if(A[L] == A[R]) {
                let ans = (R - L + 1) % mod;
                //ans = (ans % mod) * ((ans - 1) % mod) % mod / 2;
                ans = Math.floor((ans * (ans - 1)) / 2);
                count = Math.floor((count % mod) + (ans % mod) % mod);
                break;
            }
            else {
                let lCount = 0, rCount = 0;
                let num = A[L];
                while(A[L] == num) {
                    lCount++;
                    L++;
                }
                num = A[R];
                while(A[R] == num) {
                    rCount++;
                    R--;
                }
                let ans = Math.floor((lCount % mod) * (rCount % mod)) % mod;
                count = Math.floor((count % mod) + (ans % mod) % mod);
            }
        }
    }

    return Math.floor(count % mod);
}

const A = [1, 2, 4, 7, 7, 9, 10, 10, 10, 13, 13, 13, 15, 18, 25], target = 20;
const res = solve(A, target);
console.log(res);