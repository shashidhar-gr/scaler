const solve = function(A){
    let minIndex = -1, min = Number.POSITIVE_INFINITY;
    for(let i = 0; i < A.length; i++) {
        if(A[i] < min) {
            min = A[i];
            minIndex = i;
        }
    }
    
    let B = A.concat(A);
    let end = minIndex + A.length - 1;
    for(let i = minIndex; i < end; i++) {
        if(B[i] > B[i+1])
            return 0
    }
    
    return 1;
}

const A = [7, 10];
const res = solve(A);
console.log(res);