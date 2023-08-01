const wave = function(A) {
    A = A.sort((a, b) => a < b ? -1: 1);
    let i = 1;
    while(i < A.length) {
        let temp = A[i];
        A[i] = A[i - 1];
        A[i - 1] = temp;
        i += 2; 
    }
    return A;
}

const A = [1, 2];
//[2, 1, 4, 3]
const res = wave(A);
console.log(res);