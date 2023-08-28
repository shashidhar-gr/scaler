const solve = function(A, target) {
    let count = 0, mod = 1000000007;
    A = A.sort((a,  b) => a - b);
    let L = 0, R = 1;
    while(R < A.length) {
        let diff = Math.abs(A[R] - A[L]);
        if(diff < target)
            R++;
        else if(diff > target)
            L++;
        else {
            count += 1;
            count = (count % mod);
            L++;
            R++;
        }
        if(L == R)
            R++;
    }
    return count;
}

const A = [8,5,1,10,5,9,9,3,5,6,6,2,8,2,2,6,3,8,7,2,5,3,4,3,3,2,7,9,6,8,7,2,9,10,3,8,10,6,5,4,2,3], target = 5;
const res = solve(A, target);
console.log(res);