const solve = function(A, target) {
    let count = 0;
    let L = 0, R = A.length - 1;
    while(L < R) {
        let sum = A[L] + A[R];
        if(sum == target)
            count++;
        if(sum > target) {
            R--;
        }
        else 
            L++;
    }
    return count;
}

const A = [-3, 0, 1, 3, 6, 8, 11, 14, 18, 25], target = 17;
const res = solve(A, target);
console.log(res);