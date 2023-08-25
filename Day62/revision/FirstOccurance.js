let firstOccurance = -1;

const solve = function(A, target) {
    firstOccurance = binaryserach(A, target, 0, A.length - 1);
    return firstOccurance;
}

function binaryserach(A, target, L, R) {
    if(L > R) {
        return firstOccurance;
    }
    let mid = Math.floor((L + R) / 2)
    if(A[mid] == target) {
        firstOccurance = mid;
        return binaryserach(A, target, L, mid - 1);
    }
    if(A[mid] > target)
        return binaryserach(A, target, L, mid - 1)
    else
        return binaryserach(A, target, mid + 1, R)
}

const A = [-5, -5, -3, 0, 0, 1, 1, 5, 5, 5, 5, 8], target = 0;
const res = solve(A, target);
console.log(res);
