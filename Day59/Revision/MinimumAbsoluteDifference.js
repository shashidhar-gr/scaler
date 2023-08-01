const mindiff = function(A) {
    A = A.sort((a, b) => a < b ? -1: 1);
    let min = Number.POSITIVE_INFINITY;
    for(let i = 0; i < A.length - 1; i++) {
        let diff = Math.abs(A[i] - A[i+1]);
        min = Math.min(min, diff);
    }

    return min;
}

const A = [5, 17, 100, 11];
const res = mindiff(A);
console.log(res);