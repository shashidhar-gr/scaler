const rearrange = function(A) {
    let i = 0, val = -1;
    while(i < A.length) {
        val = A[i];
        A[i] = A[A[i]];
        i++;
    }
    return A;
}

const A = [0, 2, 1, 3];
const res = rearrange(A);
console.log(res);