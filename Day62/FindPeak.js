const findpeak = function(A) {
    return binarysearch(A, -1, 0, A.length -1);
}

const binarysearch = function(A, peak, L, R) {
    if(L > R)
        return peak;
    
    let mid = Math.floor((L + R) / 2);
    if(mid + 1 <= R && A[mid + 1] > A[mid]) {
        peak = A[mid];
        return binarysearch(A, peak, mid + 1, R);
    }
    else if(mid - 1 >= L && A[mid - 1] > A[mid]) {
        peak = A[mid];
        return binarysearch(A, peak, L, mid - 1);
    }
    else {
        return A[mid];
    }
}

const A = [1, 3, 5, 10, 15, 12, 6];
const res = findpeak(A);
console.log(res);