const sort = function(A, k) {
    A = A.sort((a, b) => {
        a = getKelement(a, k);
        b = getKelement(b, k);
        return a < b ? -1: 1;
    });
    return A;
}

const getKelement = function(a, k) {
    if(k == 0) {
        return a % 10;
    }
    a = Math.floor(a / Math.pow(10, k));
    a = a % 10;
    return a;
} 

const A = [362, 399, 118, 153], k = 2;
const res = sort(A, k);
console.log(res);