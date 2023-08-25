const solve = function(A) {
    return binarysearch(A, 0, A.length - 1);
}

const binarysearch = function(A, L, R) {
    if(L == R)
        return A[L];
    let mid = Math.floor((L + R) / 2)
    if(mid - 1 >= 0 && A[mid - 1] == A[mid] && ((mid - 1) % 2) == 0)
        return binarysearch(A, mid + 1, R)
    else if(mid + 1 <= A.length - 1 && A[mid] == A[mid + 1] && (mid % 2 == 0))
        return binarysearch(A, mid + 1, R)
    else if(mid - 1 >= 0 && A[mid - 1] == A[mid] && ((mid - 1) % 2) != 0)
        return binarysearch(A, L, mid - 1)
    else if(mid + 1 <= A.length - 1 && A[mid] == A[mid + 1] && (mid % 2 != 0))
        return binarysearch(A, L, mid - 1)
    else 
        return A[mid];
}

const A = [5, 5, 6, 6, 7, 8, 8];
const res = solve(A);
console.log(res);