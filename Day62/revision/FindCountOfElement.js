let firstOccurance = -1, lastOccurance = -1;
const solve = function(A, target) {
    firstOccurance = findFirstOccurance(A, target, 0, A.length-1);
    lastOccurance = findLastOccurance(A, target, 0, A.length-1);
    if(firstOccurance == -1 && lastOccurance == -1)
        return -1;
    return lastOccurance - firstOccurance + 1;
}

function findFirstOccurance(A, target, L, R) {
    if(L > R) {
        return firstOccurance;
    }
    let mid = Math.floor((L + R) / 2)
    if(A[mid] == target) {
        firstOccurance = mid;
        return findFirstOccurance(A, target, L, mid - 1);
    }
    if(A[mid] > target)
        return findFirstOccurance(A, target, L, mid - 1)
    else
        return findFirstOccurance(A, target, mid + 1, R)
}

function findLastOccurance(A, target, L, R) {
    if(L > R) {
        return lastOccurance;
    }
    let mid = Math.floor((L + R) / 2)
    if(A[mid] == target) {
        lastOccurance = mid;
        return findLastOccurance(A, target, mid + 1, R);
    }
    if(A[mid] > target)
        return findLastOccurance(A, target, L, mid - 1)
    else
        return findLastOccurance(A, target, mid + 1, R)
}

const A = [-5, -5, -3, 0, 0, 1, 1, 5, 5, 5, 5, 8], target = 9;
const res = solve(A, target);
console.log(res);