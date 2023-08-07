const solve = function(A, B) {
    A.sort((a, b) => a - b);
    let sum = Number.POSITIVE_INFINITY;
    for (let i = 0; i < A.length; i++) {
        let j = i + 1;
        let k = A.length - 1;
        let cursum = 0;
        while (j < k) {
            cursum = A[i] + A[j] + A[k];
            if(Math.abs(B - cursum) < Math.abs(B - sum)) 
                sum = cursum;
            if(cursum < B) 
                j++;
            else 
                k--;
        }
    }
    return sum;
}

const A = [-4,-8,-10,-9,-1,1,-2,0,-8,-2], B = 0;
const res = solve(A, B);
console.log(res);
