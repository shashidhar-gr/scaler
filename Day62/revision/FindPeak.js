const solve = function(A) {
    let peak = -1;
    peak = binaryserach(A, peak, 0, A.length - 1);
    return peak;
}

function binaryserach(A, peak, L, R) {
    if(L == R)
        return peak;
    let mid = Math.floor((L + R) / 2);
    if(mid - 1 >= L && A[mid - 1] > A[mid]) {
        peak = A[mid];
        return binaryserach(A, peak, L, mid - 1)
    }
    else if(mid + 1 <= R && A[mid + 1] > A[mid]) {
        peak = A[mid];
        return binaryserach(A, peak, mid + 1, R)
    }
    else {
        return A[mid]
    }
}

const A = [2, 3, 4];
const res = solve(A);
console.log(res);