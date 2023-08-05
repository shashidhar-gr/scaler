const rearrange = function(A) {
    let n = A.length;
    for(let i = 0; i < A.length; i++) {
        A[i] = encode(A[A[i]] % n, A[i], n);
    }

    for(let i = 0; i < A.length; i++) {
        A[i] = decode(A[i], n);
    }

    return A;
}

const encode = (replaceval, actualval, n) => (replaceval * n) + actualval;
const decode = (val, n) => Math.floor(val / n); 

const A = [4, 0, 2, 1, 3];
//[4, 0, 2, 1, 3]
//[3, 4, 2, 0, 1]
const res = rearrange(A);
console.log(res);