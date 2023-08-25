let lastOccurance = -1;
const solve = function(A, target) {
    lastOccurance = binaryserach(A, target, 0, A.length - 1);
    return lastOccurance;
}

function binaryserach(A, target, L, R) {
    if(L > R) {
        return lastOccurance;
    }
    let mid = Math.floor((L + R) / 2)
    if(A[mid] == target) {
        lastOccurance = mid;
        return binaryserach(A, target, mid + 1, R);
    }
    if(A[mid] > target)
        return binaryserach(A, target, L, mid - 1)
    else
        return binaryserach(A, target, mid + 1, R)
}

const A = [-5, -5, -3, 0, 0, 1, 1, 5, 5, 5, 5, 8], target = -5;
const res = solve(A, target);
console.log(res);
