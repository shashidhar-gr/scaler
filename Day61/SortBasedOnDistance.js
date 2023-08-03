const sort = function(A) {
    A = A.sort((a, b) => {
        a = distanceFromOrigin(a);
        b = distanceFromOrigin(b);
        return a < b ? -1: 1;
    }); 

    return A;
} 

const distanceFromOrigin = function(a) {
    return (a[0] * a[0]) + (a[1] * a[1]);
}

const A = [[1, 3], [2, -2]];
const res = sort(A);
console.log(res);