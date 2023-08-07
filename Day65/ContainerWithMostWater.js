
const maxwatercontainer = function(A) {
    let max = 0, L = 0, R = A.length - 1;
    while(L < R) {
        let totalwater = Math.min(A[L], A[R]) * (R - L);
        max = Math.max(max, totalwater);
        if(A[L] < A[R])
            L++;
        else if(A[R] < A[L])
            R--;
        else {
            L++;
            R--;
        }
    }
    return max;
}

/**
 * Bruteforce approach.
 */
/*const maxwatercontainer = function(A) {
    let max = 0;
    for(let i = 0; i < A.length - 1; i++) {
        for(let j = i + 1; j < A.length; j++) {
            let totalwater = Math.min(A[i], A[j]) * (j - i);
            max = Math.max(max, totalwater);
        }
    }

    return max;
} */

const A = [3, 5, 4, 7, 3, 6, 5, 4, 1, 2];
const res = maxwatercontainer(A);
console.log(res);