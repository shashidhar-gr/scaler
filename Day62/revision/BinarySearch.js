const solve = function(A, target) {
    const res = binaryserach(A, target, 0, A.length-1);
    return res;
}

function binaryserach(A, target, L, R) {
    if(L > R)
        return -1;
    let mid = Math.floor((L + R) / 2)
    if(A[mid] == target)
        return mid;
    if(A[mid] > target)
        return binaryserach(A, target, L, mid - 1)
    else
        return binaryserach(A, target, mid + 1, R)
}

const A = [2, 4, 6, 8, 10, 13, 15], k = 2;
const res = solve(A, k);
console.log(res);